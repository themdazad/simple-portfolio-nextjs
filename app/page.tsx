"use client";

import {Hero, Skills, Projects, HireMe} from "@/components/home/home"

export default function Home() {
  return (
    <main className="landing-page-container">
      <Hero />
      <Projects />
      <Skills />
      <HireMe/>
    </main>
  );
}
