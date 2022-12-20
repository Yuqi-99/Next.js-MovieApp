import { FC } from "react";
import Footer from "./Footer";
import NavigationBar from "./NavigationBar";
import styles from "../styles/Home.module.css";
import Header from "./Header";
import { createStyles, Flex } from "@mantine/core";

interface Props {
  children: any;
}

const useStyles = createStyles((theme) => ({
  flex: {
    width: "100%",
    height: "100%",
  },

  div: {
    // position: "fixed",
  },
}));

const Layout: FC<Props> = ({ children }) => {
  const { classes, cx } = useStyles();

  return (
    <>
      <div className={styles.container}>
        <Flex direction='row'>
          <div className={styles.div}>
            <NavigationBar />
          </div>
          <Flex direction='column' className={classes.flex}>
            <Header />
            {children}
          </Flex>
        </Flex>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
