import Image from "next/image";
import { images } from "../utils/images";

export function Hero() {
  return (
    <div className="md:grid md:grid-cols-2 mt-12">
      <Image
        src={images.hero1}
        width={561}
        height={561}
        layout="responsive"
        alt=""
        className="rounded-2xl mr-4"
      />
      <div className="hidden md:grid grid-cols-2 gap-4 ml-4">
        <Image
          src={images.hero2}
          width={272}
          height={272}
          layout="responsive"
          alt=""
          className="rounded-2xl"
        />
        <Image
          src={images.hero3}
          width={272}
          height={272}
          layout="responsive"
          alt=""
          className="rounded-2xl"
        />
        <Image
          src={images.hero4}
          width={272}
          height={272}
          layout="responsive"
          alt=""
          className="rounded-2xl"
        />
        <Image
          src={images.hero5}
          width={272}
          height={272}
          layout="responsive"
          alt=""
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}