import Button from "./_components/buttons/Button";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <div className="app">
      <Button
        image={{
          src: "/assets/icons/icon_temp-setting.png",
          alt: "settings icon",
          imageClassName: "settings",
          width: 100,
          height: 100,
        }}
        text="Instillinger"
        href="/varme"
        className="blue"
      />
    </div>
  );
}

