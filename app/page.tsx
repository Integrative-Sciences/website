"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Topics from "@/components/Topics";
import About from "@/components/About";
import Editors from "@/components/Editors";
import Footer from "@/components/Footer";
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
