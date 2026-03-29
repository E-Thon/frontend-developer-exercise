import type { Metadata } from "next";
import Footer from "../_components/footer/Footer";

export const metadata: Metadata = {
  title: "Varme",
};

export default function Varme() {
  return (
    <div className="varme">
      <Footer />
    </div>
  );
}

