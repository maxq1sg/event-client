import { useContext } from "react";
import { HomeContext } from "../../pages";
import GridContainer from "../GridContainer/GridContainer";
import SingleCategory from "../SingleCategory/SingleCategory";

const CategoryGrid = () => {
  const { categoryList } = useContext(HomeContext);

  return (
    <>
      <GridContainer>
        {categoryList?.map((category) => (
          <SingleCategory key={category.id} category={category} />
        ))}
      </GridContainer>
     
    </>
  );
};

export default CategoryGrid;
