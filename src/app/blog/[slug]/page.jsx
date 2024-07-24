import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/blog/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export async function generateMetadata({ params }) {
  // read route params
  const id = params.slug;

  // fetch data
  const post = await getData(id);

  return {
    title: post.title,
    description: post.desc,
  };
}

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  // FETCH DATA WITH AN API
  const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
  //   const post = await getPost(slug);

  const isValidUrl = (url) => {
    return url.startsWith("http://") || url.startsWith("https://");
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {isValidUrl(post.img) ? (
          <Image src={post.img} alt="Image" fill className={styles.img} />
        ) : (
          <p>No image available</p>
        )}
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(0, 10)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
