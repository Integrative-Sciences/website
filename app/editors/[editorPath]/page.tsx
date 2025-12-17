"use client";

import Header from "../../../src/components/Header";
import Footer from "../../../src/components/Footer";
import Editors from "../../../src/components/Editors";
import { useRouter, useParams } from 'next/navigation';

export default function EditorModalPage() {
  const router = useRouter();
  const params = useParams<{ editorPath: string }>();
  const editorPath = params?.editorPath;

  return (
    <div className="App">
      <Header />
      <Editors
        editorPath={editorPath}
        navigate={(path: string, opts?: { replace?: boolean }) => {
          if (opts?.replace) router.replace(path);
          else router.push(path);
        }}
      />
      <Footer />
    </div>
  );
}
