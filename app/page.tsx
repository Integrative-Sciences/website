"use client";

import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import Topics from "../src/components/Topics";
import About from "../src/components/About";
import Editors from "../src/components/Editors";
import Footer from "../src/components/Footer";
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="App">
      <Header />
      <Hero />
      <Topics />
      <About />
      <EditorsNavigateWrapper />
      <Footer />
    </div>
  );
}

function EditorsNavigateWrapper() {
  const router = useRouter();
  return (
    <Editors
      navigate={(path: string, opts?: { replace?: boolean }) => {
        if (opts?.replace) router.replace(path);
        else router.push(path);
      }}
    />
  );
}
