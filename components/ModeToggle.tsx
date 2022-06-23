import { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";

export interface Type {
  checkedTheme: boolean;
  setCheckedTheme: (value: any) => void;
}
export default function ModeToggle({ checkedTheme, setCheckedTheme }: Type) {
  const [pageTheme, setPageTheme] = useState("dark");
  function setTheme() {
    if (pageTheme === "dark") {
      setPageTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setPageTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setCheckedTheme(true);
      localStorage.setItem("theme", "dark");
    } else {
      setCheckedTheme(false);
      setPageTheme("light");
      localStorage.setItem("theme", "light");
    }
  }, [pageTheme]);

  return (
    <div className="h-11 flex items-center ">
      <Switch
        checked={checkedTheme}
        onChange={setTheme}
        className={`${checkedTheme ? "bg-teal-900" : "bg-teal-700"}
          relative inline-flex h-6 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${checkedTheme ? "translate-x-4" : "translate-x-0"}
            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
