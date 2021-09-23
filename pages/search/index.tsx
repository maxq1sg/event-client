import { GetServerSideProps, NextPage } from "next";
import { createContext } from "react";
import SearchContainer from "../../components/SearchContainer/SearchContainer";
import { ISearchPageContext } from "../../types/contextes";
import $api from "../../utils/api";

export const SearchPageContext = createContext<Partial<ISearchPageContext>>({});

const SearchPage: NextPage<ISearchPageContext> = ({ categoryList }) => {
  return (
    <>
      <SearchPageContext.Provider value={{ categoryList }}>
        <SearchContainer />
      </SearchPageContext.Provider>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data: categoryList } = await $api.get("/api/category");
  return {
    props: {
      categoryList,
    },
  };
};

export default SearchPage;
