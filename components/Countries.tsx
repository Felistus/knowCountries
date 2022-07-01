import Image from "next/image";
import { useRouter } from "next/router";

export const imageLoader = ({ src, width, quality }: any) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default function Countries(props: any) {
  const router = useRouter();
  return (
    <>
      {props.countries &&
        props.countries.map((item: any, index: number) => (
          <div
            onClick={() => router.push(`/${item.name.common}`)}
            key={index}
            className="w-[200px] h-56 flex flex-col custom-md:justify-self-center rounded-xl cursor-pointer  "
          >
            <div className="w-full h-[100px] mb-0   ">
              <Image
                loader={imageLoader}
                src={item.flags.svg}
                alt="Country flag"
                width={225}
                height={120}
                objectFit="cover"
              />
            </div>
            <div
              className={
                `${props.checkedTheme ? " bg-[#2b3945] " : " bg-[#fafafa] "}` +
                "w-full flex-1 shadow-lg pl-4 py-3 pr-2 mt-0"
              }
            >
              <p
                className={
                  `${
                    props.checkedTheme ? " text-white " : " text-[#111517] "
                  }` + "font-bold capitalize text-sm pb-2"
                }
              >
                {item.name.common}
              </p>
              <div
                className={
                  `${
                    props.checkedTheme ? " text-white " : " text-[#111517] "
                  }` + "text-xs space-y-1"
                }
              >
                <p className="font-medium">Population: {item.population}</p>
                <p className="font-medium">Region: {item.region}</p>
                <p className="font-medium">Capital: {item.capital}</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
