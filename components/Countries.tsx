export default function Countries(props: any) {
  return (
    <>
      {props.countries &&
        props.countries.map((item: any, index: number) => (
          <div
            key={index}
            className="w-[200px] h-56 flex flex-col custom-md:justify-self-center rounded-xl "
          >
            <div className="w-full h-[110px]   ">
              <img
                src={item.flag}
                alt="country flag"
                className="w-full h-full"
              />
            </div>
            <div
              className={
                `${props.checkedTheme ? " bg-[#2b3945] " : " bg-[#fafafa] "}` +
                "w-full flex-1 shadow-lg pl-4 py-3 pr-2"
              }
            >
              <p
                className={
                  `${
                    props.checkedTheme ? " text-white " : " text-[#111517] "
                  }` + "font-bold capitalize text-sm pb-2"
                }
              >
                {item.name}
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
