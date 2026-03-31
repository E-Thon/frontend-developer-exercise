import type { Metadata } from "next";
import Footer from "./_components/footer/Footer";
import SettingsCard from "./_components/cards/settings/Settings";
import SwitchCard from "./_components/switch/switch-card/Switchcard";

export const metadata: Metadata = {
  title: "Smart Home",
};

export default function Home() {
  return (
    <div className="app">
      <div className="my-8">
        <h2>Smart indstillinger</h2>
        <section className="smart-settings flex gap-3 h-full">
          <article className="switch-area">
            <SwitchCard
              sections={[
                {
                  h3: "Lys i Stuen",
                  switches: [
                    { id: "1", label: "Alt lys", initialState: true },
                    { id: "2", label: "Loftlampe", initialState: true },
                    { id: "3", label: "Bordlampe 1", initialState: true },
                    { id: "4", label: "Bordlampe 2", initialState: true },
                  ]
                }
              ]}
            />
            <SwitchCard
              sections={[
                {
                  h3: "Lys i Køkken",
                  switches: [
                    { id: "5", label: "Køkkenbord", initialState: true },
                    { id: "6", label: "Loftlampe", initialState: true },
                  ]
                },
                {
                  h3: "Varme i Køkken",
                  switches: [
                    { id: "7", label: "Fan Coil", initialState: true },
                  ]
                }
              ]}
            />
            <SwitchCard
              sections={[
                {
                  h3: "Lys i Indkørsel",
                  switches: [
                    { id: "8", label: "Væglamper", initialState: true },
                    { id: "9", label: "Bedlamper", initialState: true },
                  ]
                },
                {
                  h3: "Lys i Garage",
                  switches: [
                    { id: "10", label: "Alt lys", initialState: true },
                  ]
                }
              ]}
            />

          </article>
          <article className="settings-area">
            <SettingsCard
              h3="Varme i Stuen"
              switchLabel="Fan Coil"
              temp="22 "
              text="Manuel - mode"
            />
            <SettingsCard
              h3="Varme i Soveværelse"
              switchLabel="Radiator"
              temp="17 "
              text="Tidsplan - mode"
            />
            <SettingsCard
              h3="Varme i Badeværelse"
              switchLabel="Gulvvarme"
              temp="21 "
              text="Tidsplan - mode"
            />
          </article>
        </section>
      </div>
      <Footer />
    </div>
  );
}

