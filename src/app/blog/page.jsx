import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// export const revalidate = 10; // Revalidate every 10 seconds
// // FETCH DATA WITH AN API
// const getData = async () => {
//   const res = await fetch(`${process.env.NEXTAUTH_URL}/api/blog`, {
//     cache: "no-store",
//     next: { revalidate: 10 },
//   });

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

//   return res.json();
// };

const BlogPage = async () => {
  // FETCH DATA WITH AN API
  // const posts = await getData();

  // FETCH DATA WITHOUT AN API
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
