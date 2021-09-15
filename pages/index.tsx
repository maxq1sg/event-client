import type { NextPage } from "next";

import { useEffect } from "react";
import SearchContainer from "../components/SearchContainer/SearchContainer";
import styles from "../styles/Home.module.css";
import $api from "../utils/api";

const Home: NextPage = (props) => {
  return <SearchContainer/>
};
// export async function getServerSideProps() {
//   const { data } = await $api.get("/api/events");

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       data,
//     },
//   };
// }
export default Home;
