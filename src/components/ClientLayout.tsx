'use client';

import { useState } from "react";
import { BookDemoDialog } from "./BookDemoDialog";
import { Header } from "./Header";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isDemoDialogOpen, setIsDemoDialogOpen] = useState(false);

  return (
    <>
      <Header />
      <main className="overflow-hidden">{children}</main>
      <BookDemoDialog 
        isOpen={isDemoDialogOpen} 
        onClose={() => setIsDemoDialogOpen(false)} 
      />
    </>
  );
}