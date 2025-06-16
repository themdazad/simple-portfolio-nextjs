"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Dot, Eye, GithubIcon } from "lucide-react";

import { ProjectsData } from "@/assets/data/projects-data.ts";
import Link from "next/link";

export default function Home() {
  return (
    <main className="landing-page-container">
      <Hero />
      <Skills />
      <Projects />
    </main>
  );
}

const Hero = () => {
  return (
      <div className="bg-stone-200 w-full rounded-b-[4rem]">
        <section className="max-w-screen-2xl m-auto px-4 grid lg:grid-cols-12 gap-6 items-center py-32">
          <div className="col-span-5 space-y-10 text-right">
            {/* Availablity status  */}
            <span className="sticky top-6 bg-stone-800  backdrop-blur-md inline-flex text-stone-100 p-2 px-3 pr-6 rounded-full text-nowrap">
              <Dot /> AVAILABLE FOR WORK
            </span>
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
              className="hover:shadow-xl rounded-3xl transition-all duration-300"
              variant="outline"
            >
              Contact me
            </Button>
          </div>
          <div className="max-md:hidden col-span-7 grid justify-center ">
            <Image
              className="rounded-full hover:shadow-xl transition-all duration-300"
              src="/images/ghibli.png"
              alt={"azad-ghibli-art-image"}
              width={400}
              height={600}
            />
          </div>
        </section>
      </div>
  );
};

const Skills = () => {
  return (
    <section className="bg-white rounded-b-[4rem] py-10">
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
              title: "Graphic Designing",
              list: ["Color Theory", "Visuals", "Digital Post", "Print Design"],
            },
            {
              _id: 2,
              title: "UI Designing",
              list: ["Figma", "Wireframe", "Prototype", "Layout"],
            },
            {
              _id: 3,
              title: "Frontend Development",
              list: [
                "JavaScript",
                "React.js",
                "Next.js",
                "Tailwind CSS",
                "Framer Motion",
                "GSAP",
              ],
            },
            {
              _id: 4,
              title: "Backend Development",
              list: ["Node.js", "Express.js", "MongoDB", "PHP", "mySQL"],
            },
          ].map((value) => {
            return (
              <div
                key={value._id}
                className="grid place-content-center z-9 bg-white p-6 space-y-6 rounded-3xl h-full w-full transition-all duration-300"
              >
                <div className="space-y-4 text-center ">
                  <h1 className="text-2xl font-extrabold">{value.title}</h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section className="w-full bg-stone-200 rounded-t-[4rem] gap-6 items-center py-10 ">
      <div className="max-w-screen-2xl m-auto px-4 space-y-10 w-full">
        {/* page title  */}
        <span className="sticky top-6 bg-stone-800 backdrop-blur-md inline-flex text-stone-100 p-2 px-3 pr-6 rounded-full text-nowrap">
          <Dot />
          WORKS/PROJECTS
        </span>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {ProjectsData.map((item) => {
            return (
              <div
                key={item._id}
                className="group bg-white relative overflow-hidden rounded-3xl hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={"azad-projects"}
                  width={600}
                  height={400}
                  className="aspect-[5/4] object-contain bg-center "
                />

                <div className="absolute grid place-content-center z-9 backdrop-blur-xl backdrop-saturate-0 p-6 space-y-6 h-full w-full -top-full group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="space-y-4 text-center">
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
                        className="hover:shadow-xl  cursor-pointer rounded-3xl"
                        variant="outline"
                      >
                        <Eye />
                        View
                      </Button>
                    </Link>
                    {!!item?.github && (
                      <Link href={item.github} target="_blank">
                        <Button
                          className="hover:shadow-xl  cursor-pointer rounded-3xl"
                          variant="outline"
                        >
                          <GithubIcon />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
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


