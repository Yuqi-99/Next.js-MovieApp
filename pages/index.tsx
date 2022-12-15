import Head from "next/head";
import Image from "next/image";
import Navigationbar from "../components/NavigationBar";
import PopularMovie from "../components/PopularMovie";
import TrendingMovie from "../components/TrendingMovie";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <TrendingMovie />
      <PopularMovie />
    </div>
    // <div className={styles.container}>
    //   <Navigationbar/>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <div className={styles.logo}>
    //         <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    //       </div>
    //     </a>
    //   </footer>
    // </div>
  );
}
