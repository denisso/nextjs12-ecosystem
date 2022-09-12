import type { NextPage } from "next";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <div>
                <Link href="/post/1">Post 1</Link>
            </div>
            <div>
                <Link href="/post/2">Post 2</Link>
            </div>
            <div>
                <Link href="/post/3">Post 3 (404)</Link>
            </div>
        </div>
    );
};

export default Home;
