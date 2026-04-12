import { HeroSection } from "@/components/HeroSection";
import { WeeklyFlavors } from "@/components/WeeklyFlavors";
import { ClassicFlavors } from "@/components/ClassicFlavors";
import { AppDownloadCTA } from "@/components/AppDownloadCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WeeklyFlavors />
      <ClassicFlavors />
      <AppDownloadCTA />
    </>
  );
}
