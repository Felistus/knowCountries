import LeftArrowIcon from "../components/icons/LeftArrowIcon";
import Navigation from "../components/Navigation";

export default function CountryDetails() {
  return (
    <div className="bg-[#202c37] h-screen overflow-y-auto text-slate-300">
      <main className="h-screen">
        <Navigation />

        <section className="lg:px-20 px-4 my-10">
          <button className="flex items-center space-x-2 hover:shadow-md bg-[#2b3945] h-10 px-3 font-medium capitalize rounded-lg">
            <LeftArrowIcon />
            back
          </button>
        </section>

        <section className="lg:px-20 px-4 pb-4 md:pb-0 ">
          <div className="md:flex justify-between md:h-[300px] space-y-4 md:space-y-0 ">
            <div className="md:w-[400px] md:h-full h-[300px] bg-green-900">
              <img
                src="/vercel.svg"
                alt="country-flag"
                className="w-full h-full"
              />
            </div>
            <div className=" flex flex-col justify-center ">
              <div className="font-bold capitalize text-2xl flex flex-col ">
                <p>belgium</p>
              </div>
              <div className="flex my-8 space-x-4 text-base ">
                <div>
                  <span className="flex space-x-2">
                    <p className="font-semibold">Native Name: </p>
                    <p>Belgie</p>
                  </span>
                  <span className="flex space-x-2">
                    <p className="font-semibold">Population: </p>
                    <p>11, 391.59</p>
                  </span>
                  <span className="flex space-x-2">
                    <p className="font-semibold">Region: </p>
                    <p>Europe</p>
                  </span>
                  <span className="flex space-x-2">
                    <p className="font-semibold">Sub Region: </p>
                    <p>Western Europe</p>
                  </span>
                  <span className="flex space-x-2">
                    <p className="font-semibold">Capital: </p>
                    <p>Brussels</p>
                  </span>
                </div>
                <div>
                  <span className="flex space-x-2">
                    <p className="font-semibold">Top Level Domain: </p>
                    <p>be</p>
                  </span>
                  <span className="flex space-x-2">
                    <p className="font-semibold">Currencies: </p>
                    <p>Euro</p>
                  </span>
                  <span className="flex space-x-2">
                    <p className="font-semibold">Language: </p>
                    <p>Dutch, French, German</p>
                  </span>
                </div>
              </div>

              <span className="flex space-x-2">
                <p className="font-semibold">Border Countries: </p>
                <p className="bg-[#2b3945] font-medium px-2 rounded-lg ">
                  France
                </p>
                <p className="bg-[#2b3945] font-medium px-2 rounded-lg ">
                  Germany
                </p>
                <p className="bg-[#2b3945] font-medium px-2 rounded-lg ">
                  Netherland
                </p>
              </span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
