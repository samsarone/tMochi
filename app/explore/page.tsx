import type { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
  title: "Explore — TmochiExplore",
  description: "Explore interactive educational stories and choose your own path through every lesson.",
};

export default function ExplorePage() {
  return <Home catalogMode="explore" />;
}
