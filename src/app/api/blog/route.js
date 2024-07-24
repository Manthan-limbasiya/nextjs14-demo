import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectToDb();

    const posts = await Post.find();
    const response = NextResponse.json(posts);
    response.headers.set(
      "Cache-Control",
      "s-maxage=10, stale-while-revalidate=59"
    );

    return response;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};
