import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

const postDirectory = path.join(process.cwd(), "posts/");

export async function GET(req: NextRequest) {
  try {
    const params = req.nextUrl.searchParams;
    const postId = params.get("post");
    const imageId = params.get("img");
    if (typeof postId !== "string" || typeof imageId !== "string") {
      throw new Error("Image not found");
    }
    const imagePath = path.join(postDirectory, postId, "/", imageId);
    if (!fs.existsSync(imagePath)) {
      throw new Error("Image not found");
    }
    const image = fs.readFileSync(imagePath);
    return new NextResponse(image, {
      status: 200,
      statusText: "ok",
      headers: { "content-type": "image/*" },
    });
  } catch (error) {
    return new NextResponse(null, {
      status: 500,
      statusText: "File not found",
    });
  }
}
