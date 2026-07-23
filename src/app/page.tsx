import { HeroSection } from "@/components/HeroSection";
import { WeeklyFlavors } from "@/components/WeeklyFlavors";
import { ClassicFlavors } from "@/components/ClassicFlavors";
import { AppDownloadCTA } from "@/components/AppDownloadCTA";
import { JsonLd } from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/jsonld";

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <HeroSection />
      <WeeklyFlavors />
      <ClassicFlavors />
      <AppDownloadCTA />
    </>
  );
}
