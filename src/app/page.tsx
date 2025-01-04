"use client";
// import components
import { Navbar } from "@/components/public/navbar/Navbar";
import { Footer } from "@/components/public/footer/Footer";
import { MusicPlayer } from "@/components/public/player/MusicPlayer";
import { DropdownSetting } from "@/components/public/dropdown/DropdownSetting";
import { HeroSection } from "@/components/public/homepage/HeroSection";
import { TrendingSong } from "@/components/public/homepage/TrendingSong";
import { FamousArtists } from "@/components/public/homepage/FamousArtists";
import { TopAlbums } from "@/components/public/homepage/TopAlbums";
import { PlaylistCollapse } from "@/components/public/collapse/PlaylistCollapse";
import { WhyChooseUs } from "@/components/public/homepage/WhyChooseUs";
import { Testimonial } from "@/components/public/homepage/Testimonial";
import { VideoSection } from "@/components/public/homepage/VideoSection";
export default function Home() {
  return (
    <div className="font-jost w-screen overflow-hidden relative">
      <MusicPlayer />
      <DropdownSetting />
      <PlaylistCollapse />
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <VideoSection />
      <Testimonial />
      {/* Famous Artists */}
      {/* <FamousArtists /> */}
      {/* Trending Now */}
      {/* <TrendingSong /> */}
      {/* TopAlbums */}
      {/* <TopAlbums /> */}
      {/* Category */}
      <Footer />
    </div>
  );
}
