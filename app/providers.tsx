"use client";

import React from 'react';
import { WipProvider } from "../src/components/ui/WipContext";
import WipModal from "../src/components/ui/WipModal";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WipProvider>
      {children}
      <WipModal />
    </WipProvider>
  );
}
