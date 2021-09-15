import Image from "next/image";
import iconsArray from "./iconsArray";

const EventInfoSectiob = () => {
  return (
    <div>
      {iconsArray.map((url, index) => {
        return (
          <Image
            alt="url"
            key={index}
            src={`/svgs/${url}`}
            width="30"
            height="30"
          />
        );
      })}
    </div>
  );
};

export default EventInfoSectiob;
