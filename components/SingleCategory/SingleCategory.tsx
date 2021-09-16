import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import { FC, MouseEvent } from "react";
import { ICategory } from "../../types/category";

interface ISingleCategory {
  category: ICategory;
}

const SingleCategory: FC<ISingleCategory> = ({ category }) => {
  const router = useRouter();
  
  const redirectHandler = () => {
    router.push({
      pathname: `/events/${category.name.toLowerCase()}`,
      query: { id: category.id },
    });
  };
  return (
    <>
      <div className="single-cat-container" onClick={redirectHandler}>
        <div className="image-cont">
          <Image
            alt="cat"
            src="/svgs/music-note.svg"
            width={250}
            height={250}
          />
        </div>
        <div className="category-name">{category.name}</div>
      </div>
      <style jsx>{`
        .single-cat-container {
          cursor: pointer;
          width: 250px;
          height: 250px;
          border: 3px solid black;
          border-radius: 50%;
          position: relative;
        }
        .image-cont {
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .category-name {
          font-weight: bold;
          font-size: 1.2rem;
          position: absolute;
          top: 75%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}</style>
    </>
  );
};

export default SingleCategory;
