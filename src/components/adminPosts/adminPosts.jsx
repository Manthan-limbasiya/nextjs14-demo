import { getPosts } from "@/lib/data";
import styles from "./adminPosts.module.css";
import Image from "next/image";
import { deletePost } from "@/lib/action";

const AdminPosts = async () => {
  const posts = await getPosts();
  const isValidUrl = (url) => {
    return url.startsWith("http://") || url.startsWith("https://");
  };

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.detail}>
            {isValidUrl(post.img) ? (
              <Image
                src={post.img || "/noavatar.png"}
                alt=""
                width={50}
                height={50}
              />
            ) : (
              <Image src="/noavatar.png" alt="" width={50} height={50} />
            )}

            <span className={styles.postTitle}>{post.title}</span>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className={styles.postButton}>Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
