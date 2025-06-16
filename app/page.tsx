"use client";

import {Hero, Skills, Projects} from "@/components/home/home"

export default function Home() {
  return (
    <main className="landing-page-container">
      <Hero />
      <Skills />
      <Projects />
    </main>
  );
}
