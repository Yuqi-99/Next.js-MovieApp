import { createStyles } from "@mantine/core";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const useStyles = createStyles((theme) => ({
  footer: {
    alignItems: "center",
    marginTop: "8%",
    display: "flex",
    // flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    height: "auto",
    // backgroundColor: "#000000",
    // backgroundColor: "#FF5959",
    // width: "100%",
  },
  footerA: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    color: "#FFFFFF",
    marginBottom:10
  },
}));

const Footer = () => {
  const { classes, cx } = useStyles();
  return (
    <>
      <footer className={classes.footer}>
        <a
          className={classes.footerA}
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{" "}
          <div className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </div>
        </a>
      </footer>
    </>
  );
};

export default Footer;
