import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Type } from "./ModeToggle";

const regions = [
  { name: "Filter by Region", default: true },
  { name: "Africa" },
  { name: "America" },
  { name: "Asia" },
  { name: "Europe" },
  { name: "Oceania" },
];

export default function SelectBox({ checkedTheme }: Type) {
  const [selected, setSelected] = useState(regions[0]);

  return (
    <div className="w-72 h-10 text-slate-300">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative h-10 ">
          <Listbox.Button
            className={
              `${
                checkedTheme ? " bg-[#2b3945] " : " bg-white text-[#111517] "
              }` +
              "relative w-full cursor-default rounded-lg h-10 pl-3 pr-10 text-left shadow-md focus:outline-none "
            }
          >
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className={
                `${
                  checkedTheme ? " bg-[#2b3945] " : " bg-white text-[#111517] "
                }` +
                "absolute mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              }
            >
              {regions.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : ""
                    }`
                  }
                  value={person}
                  disabled={person.default}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
