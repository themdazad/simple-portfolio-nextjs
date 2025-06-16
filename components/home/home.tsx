import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChartArea, Dot, Eye, Github, GithubIcon, Mail, PhoneIcon } from "lucide-react";
import { ProjectsData } from "@/assets/data/projects-data";
import Link from "next/link";
import "./home-style.css"


export const Hero = () => {
  return (
    <div className="bg-white w-full min-h-[100dvh]">
      <section className="max-w-screen-2xl m-auto px-4 grid justify-center gap-12 items-center py-32">
        <div className="relative grid justify-center ">
          <Image
            className=" rounded-full hover:shadow-xl transition-all duration-300"
            src="/images/azad.jpg"
            alt={"azad-ghibli-art-image"}
            width={200}
            height={400}
          />
          <span className="absolute left-[45%] top-[80%] -rotate-12 bg-stone-800/20 hover:bg-stone-800/40 border-1 border-stone-800 backdrop-blur-md hover:shadow-2xl cursor-github inline-flex gap-2 text-sm text-stone-100 tracking-wider p-2 px-3 pr-6 rounded-full text-nowrap transition-all duration-300">
            <Github />
            @themdazad
          </span>
        </div>
        <div className=" space-y-10 text-center">
          {/* CTA  */}
          <h1 className="text-6xl font-extrabold">
            Hi,
            <br /> I&apos;m designer & developer
          </h1>
          {/* Description   */}
          <p>
            I have 3+ years of experience in ui designing and frontend
            development working on useful and mindful product together with
            college and remote clients.
          </p>
          {/* CTA Button  */}
          <Button
            className="cursor-pointer p-6 hover:shadow-xl bg-neutral-800 text-white rounded-3xl transition-all duration-300"
            variant="outline"
          >
            Contact me
          </Button>
        </div>
      </section>
    </div>
  );
};

export const Skills = () => {
  return (
    <section className="py-10 lg:py-32">
      <div className="max-w-screen-2xl m-auto px-4 flex flex-col gap-6 justify-center items-center space-y-6">
        {/* page title  */}
        <span className=" bg-stone-800 backdrop-blur-md inline-flex text-stone-100 p-2 px-3 pr-6 rounded-full text-nowrap">
          <Dot />
          SKILLS
        </span>
        <div className="grid lg:grid-cols-4 gap-6">
          {[            
            {
              _id: 1,
              title: "UI/UX Designing",
              icons: ["/icons/figma.svg"],
            },
            {
              _id: 2,
              title: "Frontend Development",
              icons: ["/icons/javascript.svg","/icons/react.svg","/icons/nextjs.svg","/icons/tailwind.svg"],
            },
            {
              _id: 3,
              title: "Backend Development",
              icons: ["/icons/nodejs.svg","/icons/mongodb.svg","/icons/mysql.svg",],
            },
            {
              _id: 4,
              title: "Tools",
              icons: ["/icons/github.svg","/icons/git.svg","/icons/vercel.svg",],
            },
          ].map((value) => {
            return (
              <div
                key={value._id}
                className="grid place-content-center z-9 p-6 space-y-6 h-full w-full transition-all duration-300"
              >
                <div className="space-y-4 text-center ">
                  <h1 className="text-xl font-extrabold">{value.title}</h1>
                </div>
                <div className="flex gap-6">{value.icons.map((icon) => {
                  return (
                    <Image
                      className="object-contain bg-white h-16 w-16"
                      key={icon}
                      src={icon}
                      height={80}
                      width={80}
                      alt="icon"
                    />
                  );
                })}
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const Projects = () => {
  return (
    <section className=" mx-2 bg-neutral-300 rounded-[4rem] gap-6 items-center py-10 ">
      <div className="max-w-screen-2xl m-auto px-4 space-y-10 w-full">
        {/* 1.Page title  */}
        <span className="sticky top-6 bg-stone-800 backdrop-blur-md inline-flex text-stone-100 p-2 px-3 pr-6 rounded-full text-nowrap">
          <Dot />
          WORKS/PROJECTS
        </span>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 w-full">
          {/* 2.Project card  */}
          {ProjectsData.map((item) => {
            return (
              <div
                key={item._id}
                className="group bg-white border-1 border-stone-300 relative overflow-hidden rounded-3xl hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={"azad-projects"}
                  width={600}
                  height={400}
                  className="aspect-video object-contain bg-center "
                />
                {/* 2.1 SHOW on hover*/}
                <div className="absolute bg-stone-200/40 grid place-content-center z-9 backdrop-blur-xl backdrop-saturate-0 p-6 space-y-2 h-full w-full -top-full group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="space-y-1 text-center">
                    <h1 className="text-xl font-extrabold">{item.title}</h1>
                    <p className="">{item.description}</p>
                    <div className="inline-flex gap-2">
                      {item.skills.map((data, ls) => {
                        return <p key={ls}>{data}</p>;
                      })}
                    </div>
                  </div>
                  <div className="space-x-2 flex justify-center">
                    <Link href={item.view} target="_blank">
                      <Button
                        className="hover:shadow-xl cursor-pointer rounded-3xl"
                        variant="outline"
                      >
                        <Eye />
                        View
                      </Button>
                    </Link>
                    {!!item?.github && (
                      <Link href={item.github} target="_blank">
                        <Button
                          className="hover:shadow-xl cursor-pointer rounded-3xl"
                          variant="outline"
                        >
                          <GithubIcon />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
                 {/* 2.2 HIDE on hover*/}
                <div className="absolute z-10 px-3 py-1 flex bg-stone-800 text-white text-[12px] rounded-tr-3xl opacity-100 group-hover:opacity-0 min-w-max -bottom-0 group-hover:-bottom-full transition-all duration-500 ">
                  <p className=" px-2">{item.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const HireMe=()=>{
  return (
    <section className="grid justify-center text-center font-extrabold space-y-12 py-32">
      <h1 className="text-6xl leading-16">
        Hire me for you next <br /> projects
      </h1>
      <div className="buttons  space-x-4">
        <a href="mailto:collezian@gmail.com" target="_blank">
          <Button
            className="cursor-pointer p-6 hover:shadow-xl bg-neutral-800 text-white rounded-3xl transition-all duration-300"
            variant="outline"
          >
            <Mail />
            collezian@gmail.com
          </Button>
        </a>
        <a href="phone:+91-9110172886" target="_blank">
          <Button
            className="cursor-pointer p-6 hover:shadow-xl rounded-3xl transition-all duration-300"
            variant="outline"
          >
            <PhoneIcon />
            Whatsapp
          </Button>
        </a>
      </div>
    </section>
  );
}