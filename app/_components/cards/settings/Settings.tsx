import Button from "../../buttons/Button";
import "./_Settings.scss";
import { SettingProps } from "@/app/types/settings";

export default function SettingsCard({ h3, className, temp, text, image}: SettingProps) {
    return (
        <>
            <h3>{h3}</h3>

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
        </>
    )
}