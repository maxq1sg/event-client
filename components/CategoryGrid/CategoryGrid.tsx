import Image from "next/image";
import { useContext } from "react";
import { HomeContext } from "../../pages";
import GridContainer from "../GridContainer/GridContainer";

const CategoryGrid = () => {
  const { categoryList } = useContext(HomeContext);

  return (
      <>
    <GridContainer>
      {categoryList?.map((category) => (
        <div key={category.id}>
          <Image
            alt="cat"
            src="/svgs/music-note.svg"
            width={300}
            height={300}
          />
        </div>
      ))}
    </GridContainer>
    <style jsx>{`
    
    `}</style>
    </>
  );
};

export default CategoryGrid;
