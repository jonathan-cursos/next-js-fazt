import Head from "next/head";
import Navigations from "./navigations";

const Container = (props) => {
  return (
    <>
      <Head>
        <title>Next.js proyect</title>
      </Head>
      <Navigations />
      <div>{props.children}</div>
    </>
  );
};

export default Container;
