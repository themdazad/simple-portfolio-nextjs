export const Nav=()=>{
	return (
    <nav className="bg-neutral-200 rounded-full max-w-min m-auto sticky top-6 ">
      <ul className="flex gap-6 px-6 py-4 text-lg font-semibold text-nowrap">
        {["Skils", "Projects", "Contact me"].map((item) => {
          return (
            <li key={item} className="gap-6">
              {item}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}