import Head from "next/head";
import { FC } from "react";
import Navbar from "../components/Navbar/Navbar";

interface MainLayoutProps {
  title: string;
}

const MainLayout: FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Event platform"}</title>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default MainLayout;
