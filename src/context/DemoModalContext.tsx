"use client";
import React, { createContext, useContext, useState } from "react";
import BookDemoModal from "@/components/BookDemoModal";

interface DemoModalContextType {
  openDemo: () => void;
  closeDemo: () => void;
  isOpen: boolean;
}

const DemoModalContext = createContext<DemoModalContextType>({
  openDemo: () => {},
  closeDemo: () => {},
  isOpen: false,
});

export function DemoModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DemoModalContext.Provider
      value={{
        openDemo: () => setIsOpen(true),
        closeDemo: () => setIsOpen(false),
        isOpen,
      }}
    >
      {children}
      <BookDemoModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  return useContext(DemoModalContext);
}
