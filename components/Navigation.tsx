import ModeToggle, { Type } from "./ModeToggle";

export default function Navigation({ checkedTheme, setCheckedTheme }: Type) {
  return (
    <section
      className={
        `${
          checkedTheme
            ? " dark:bg-[#2b3945] border-b-slate-500  "
            : " bg-[#fafafa] border-b-[[#858585]"
        } ` +
        "h-11 px-4 lg:px-20 py-4 flex justify-between items-center border-b-[1px] font-medium dark"
      }
    >
      <p className={`${checkedTheme ? " text-white" : "text-[#111517]"}`}>
        Where in the world?
      </p>
      <div className="flex items-center space-x-1">
        <ModeToggle
          checkedTheme={checkedTheme}
          setCheckedTheme={setCheckedTheme}
        />
        <p className={`${checkedTheme ? " text-white" : "text-[#111517]"}`}>
          {checkedTheme ? "Dark Mode" : "Light Mode"}
        </p>
      </div>
    </section>
  );
}
