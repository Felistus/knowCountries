import ModeToggle, { Type } from "./ModeToggle";

export default function Navigation({ checkedTheme, setCheckedTheme }: Type) {
  return (
    <section
      className={
        `${
          checkedTheme
            ? " dark:bg-[#2b3945] border-b-slate-500  "
            : " bg-[#fafafa] border-b-[[#858585]"
        } ` + "h-11 px-4 py-4  border-b-[1px] font-medium dark"
      }
    >
      <div className="lg:w-[1000px] flex justify-between h-full items-center mx-auto ">
        <p className={`${checkedTheme ? " text-white" : "text-[#111517]"}`}>
          Where in the world?
        </p>
        <div className="flex items-center space-x-1">
          <ModeToggle
            checkedTheme={checkedTheme}
            setCheckedTheme={setCheckedTheme}
          />
        </div>
      </div>
    </section>
  );
}
