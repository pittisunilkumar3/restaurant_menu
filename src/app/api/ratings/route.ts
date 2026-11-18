import { randomUUID } from "node:crypto";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";

type StoredRating = {
  id: string;
  rating: number;
  createdAt: string;
};

type RatingSummary = {
  average: number;
  count: number;
};

const dataDirectory = path.join(process.cwd(), "data");
const ratingsFile = path.join(dataDirectory, "ratings.json");
let writeQueue: Promise<void> = Promise.resolve();

function summarize(ratings: StoredRating[]): RatingSummary {
  if (ratings.length === 0) return { average: 0, count: 0 };

  const total = ratings.reduce((sum, entry) => sum + entry.rating, 0);
  return {
    average: Math.round((total / ratings.length) * 10) / 10,
    count: ratings.length,
  };
}

async function readRatings(): Promise<StoredRating[]> {
  try {
    const contents = await readFile(ratingsFile, "utf8");
    return JSON.parse(contents) as StoredRating[];
  } catch (error) {
    if (
      error instanceof Error &&
      "code" in error &&
      error.code === "ENOENT"
    ) {
      return [];
    }
    throw error;
  }
}

async function saveRating(rating: number): Promise<RatingSummary> {
  const save = async () => {
    const ratings = await readRatings();
    ratings.push({
      id: randomUUID(),
      rating,
      createdAt: new Date().toISOString(),
    });

    await mkdir(dataDirectory, { recursive: true });
    const temporaryFile = path.join(
      dataDirectory,
      `.ratings-${randomUUID()}.tmp`,
    );
    await writeFile(temporaryFile, `${JSON.stringify(ratings, null, 2)}\n`, "utf8");
    await rename(temporaryFile, ratingsFile);
    return summarize(ratings);
  };

  const result = writeQueue.then(save);
  writeQueue = result.then(
    () => undefined,
    () => undefined,
  );
  return result;
}

export async function GET() {
  try {
    const ratings = await readRatings();
    return Response.json(summarize(ratings), {
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return Response.json(
      { message: "Ratings are unavailable right now." },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { message: "Send a valid JSON rating." },
      { status: 400 },
    );
  }

  const rating =
    typeof body === "object" && body !== null && "rating" in body
      ? body.rating
      : null;

  if (
    typeof rating !== "number" ||
    !Number.isInteger(rating) ||
    rating < 1 ||
    rating > 5
  ) {
    return Response.json(
      { message: "Choose a whole number rating from 1 to 5." },
      { status: 400 },
    );
  }

  try {
    const summary = await saveRating(rating);
    return Response.json(summary, { status: 201 });
  } catch {
    return Response.json(
      { message: "Your rating could not be saved. Please try again." },
      { status: 500 },
    );
  }
}
