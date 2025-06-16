import {Github, Linkedin} from "lucide-react"
export const Navbar=()=>{
	return (
    <nav className="flex justify-end z-12 ">
      <ul className="flex max-w-min rounded-full p-10 gap-6">
        <Linkedin />
        <Github />
      </ul>
    </nav>
  );
}