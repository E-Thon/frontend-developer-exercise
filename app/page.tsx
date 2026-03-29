import type { Metadata } from "next";
import Footer from "./_components/footer/Footer";
import SettingsCard from "./_components/cards/settings/Settings";

export const metadata: Metadata = {
  title: "Smart Home",
};

export default function Home() {
  return (
    <div className="app">
      <SettingsCard />
      <Footer />
    </div>
  );
}

