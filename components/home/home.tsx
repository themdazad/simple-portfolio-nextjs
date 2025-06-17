"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Dot, Eye, Github, GithubIcon, Mail, PhoneIcon } from "lucide-react";
import { ProjectsData } from "@/assets/data/projects-data";
import Link from "next/link";
import { Navbar } from "../navigation";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // register plugin once

export const Hero = () => {
  const scope = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax for image
      gsap.to(".hero-avatar", {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-avatar",
          start: "top bottom", // when top of avatar hits bottom of viewport
          scrub: true, // makes it smooth and continuous
        },
      });

      // Fade + slide in text
      gsap.from(".hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero-text",
          start: "top 80%",
        },
      });

      // Fade in button
      gsap.from(".hero-btn", {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".hero-btn",
          start: "top 90%",
        },
      });
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={scope} className="bg-white w-full">
      <Navbar />

      <section className="max-w-screen-2xl m-auto px-4 flex flex-col justify-center gap-12 items-center py-12 md:py-32">
        {/* Avatar */}
        <div className="relative grid justify-center hero-avatar">
          <Image
            className="rounded-full hover:shadow-xl transition-all duration-300"
            src="/images/azad.jpg"
            alt="azad-ghibli-art-image"
            width={200}
            height={400}
          />
          <Link href="https://githhub.com/themdazad" target="_blank">
          <span className="absolute left-[45%] top-[80%] -rotate-12 bg-stone-800/20 hover:bg-stone-800/40 border-1 border-stone-800 backdrop-blur-md hover:shadow-2xl cursor-github inline-flex gap-2 text-sm text-stone-100 tracking-wider p-2 px-3 pr-6 rounded-full text-nowrap transition-all duration-300">
            <Github /> @themdazad
          </span>
          </Link>

        </div>

        {/* Heading & text */}
        <div className="space-y-10 text-center hero-text">
          <h1 className="text-5xl md:text-7xl font-extrabold">
            Hi,
            <br /> I&apos;m designer &amp; developer
          </h1>
          <p>
            I have 2+ years of experience in UI designing and frontend
            development working on useful and mindful products together with
            startups and remote clients.
          </p>
        </div>

        {/* Button */}
        <Link href="https://linkedin.com/in/themdazad" target="_blank">
          <Button
            className="hero-btn cursor-pointer p-6 hover:shadow-xl bg-neutral-800 text-white rounded-3xl transition-all duration-300"
            variant="outline"
          >
            LinkedIn
          </Button>
        </Link>
      </section>
    </div>
  );
};

export const Projects = () => {
  return (
    <section className=" mx-[5%] bg-neutral-300 rounded-4xl md:rounded-[4rem] gap-6 items-center py-12 ">
      <div className="max-w-screen-2xl m-auto px-4 space-y-10 w-full">
        {/* 1.Page title  */}
        <span className=" bg-stone-800 backdrop-blur-md inline-flex text-stone-100 p-2 px-3 pr-6 rounded-full text-nowrap">
          <Dot />
          WORKS/PROJECTS
        </span>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10 w-full">
          {/* 2.Project card  */}
          {ProjectsData.map((item) => {
            return (
              <div
                key={item._id}
                className="group aspect-video bg-white relative overflow-hidden rounded-3xl shadow-xl transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={"azad-project-thumbnail"}
                  width={500}
                  height={100}
                  className="absolute w-full h-full z-8 object-contain"
                />
                {/* hoverd: details card  */}
                <div className="absolute bg-blue-100 dark:bg-stone-800 grid place-content-center z-9 backdrop-blur-xl backdrop-saturate-0 p-6 space-y-4 h-full w-full -top-full group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="space-y-2 text-center">
                    <h1 className="text-xl font-bold">{item.title}</h1>
                    <div className="inline-flex gap-2">
                      {item.skills.map((data) => {
                        return <p key={data}>{data}</p>;
                      })}
                    </div>
                  </div>

                  <div className="space-x-2 flex justify-center">
                    {!!item?.view && (
                      <Link href={item.view} target="_blank">
                        <Button
                          className="hover:shadow-xl bg-white cursor-pointer rounded-3xl"
                          variant="outline"
                        >
                          <Eye />
                          Live
                        </Button>
                      </Link>
                    )}

                    {!!item?.github && (
                      <Link href={item.github} target="_blank">
                        <Button
                          className="hover:shadow-xl cursor-pointer rounded-3xl"
                          variant="outline"
                        ><Github/></Button>
                      </Link>
                    )}
                  </div>
                </div>
                <div className="absolute z-10 px-3 py-1 flex dark:bg-stone-800 text-white bg-neutral-600 rounded-tr-3xl opacity-100 group-hover:opacity-0 min-w-max -bottom-0 group-hover:-bottom-full transition-all duration-500 ">
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
              icons: [
                "/icons/javascript.svg",
                "/icons/react.svg",
                "/icons/nextjs.svg",
                "/icons/tailwind.svg",
              ],
            },
            {
              _id: 3,
              title: "Backend Development",
              icons: [
                "/icons/nodejs.svg",
                "/icons/mongodb.svg",
                "/icons/mysql.svg",
              ],
            },
            {
              _id: 4,
              title: "Tools",
              icons: [
                "/icons/github.svg",
                "/icons/git.svg",
                "/icons/vercel.svg",
              ],
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
                <div className="flex gap-6">
                  {value.icons.map((icon) => {
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
export const Educations = () => {
  return (
    <section className=" mx-[5%] bg-neutral-300 rounded-4xl md:rounded-[4rem] gap-6 items-center py-12 ">
      <div className="max-w-screen-2xl m-auto px-4 space-y-10 w-full">
        {/* 1.Page title  */}
        <span className="sticky top-6 bg-stone-800 backdrop-blur-md inline-flex text-stone-100 p-2 px-3 pr-6 rounded-full text-nowrap">
          <Dot /> EDUCATIONS
        </span>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-6 w-full">
          {/* 2.Education details  */}
          {[
            {
              college: "Government Engineering College, Siwan ",
              duration: "2022-26",
              degree: "Btech",
              branch: "Electrical Engineering",
              board: "BEU Patna",
              marks: "CGPA 7.22/10",
            },
            {
              college: "Government Polytechnic College, Chhapra ",
              duration: "2019-22",
              degree: "Diploma",
              branch: "Computer Science and Engineering",
              board: "SBTE Bihar",
              marks: "CGPA 8.48/10",
            },
            {
              college: "Bihar School Examination Board, Patna ",
              duration: "2017-19",
              degree: "Intermediate",
              branch: "Science (PCM)",
              board: "",
              marks: "Marks 76.4%",
            },
          ].map((value, i) => {
            return (
              <div key={i} className="btech max-sm:text-center">
                <b>
                  {value.college}- ({value.duration})
                </b>
                <br />
                <i>
                  {value.degree} in {value.branch} - {value.board}
                </i>{" "}
                <br />
                <strong>{value.marks}</strong>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const HireMe = () => {
  return (
    <section className="grid justify-center text-center font-extrabold space-y-12 py-32">
      <h1 className="text-5xl md:text-7xl ">
        Hire me <br /> for you next <br /> projects
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
};
