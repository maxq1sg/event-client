import { GetServerSideProps } from "next";
import SearchContainer from "../../components/SearchContainer/SearchContainer";

const SearchPage = () => {
  return (
    <div>
      <SearchContainer />
    </div>
  );
};

// export const getServerSideProps:GetServerSideProps=()=>{
//     return {

//     }
// }

export default SearchPage;
