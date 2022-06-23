import ModeToggle from "./ModeToggle";

export default function Navigation() {
  return (
    <section className="bg-[#2b3945] h-11 px-4 lg:px-20 py-4 flex justify-between items-center border-b-2 border-b-slate-500 text-white font-medium">
      <p>Where in the world?</p>
      <div className="flex items-center space-x-1">
        <ModeToggle />
        <p>Dark Mode</p>
      </div>
    </section>
  );
}
