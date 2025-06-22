"use client";

import dynamic from "next/dynamic";

// Load App.tsx client-side only
const App = dynamic(() => import("../components/App"), { ssr: false });

export default function AppPage() {
  return <App />;
}