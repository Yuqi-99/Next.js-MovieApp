import { FC } from "react";
import Footer from "./Footer";
import NavigationBar from "./navigationBar";
import styles from "../styles/Home.module.css";
import Header from "./Header";
import { createStyles, Flex } from "@mantine/core";

interface Props {
  children: any;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className={styles.container}>
        <Flex>
          <NavigationBar />
          <Header />
        </Flex>

        {children}
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
