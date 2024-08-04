import Image from "next/image";
import styles from "./page.module.css";
import PostList from "@/components/PostList";

export default function Home() {
  return (
    <main className={styles.main}>
      <PostList />
    </main>
  );
}
