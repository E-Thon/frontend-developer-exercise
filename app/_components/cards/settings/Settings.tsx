"use client"

import Image from "next/image";
import Button from "../../buttons/Button";
import Switch from "../../switch/Switch";
import "./_Settings.scss";
import { SettingProps } from "@/app/types/settings";

export default function SettingsCard({ h3, temp, text }: SettingProps) {
    return (
        <div className="settings">
            <h3>{h3}</h3>
            <Switch
                label="Lys"
                initialState={false}
                onChange={() => {}}
            />
            <div className="temperature">
            <Image
                src="/assets/icons/icon_temp.png"
                alt="heat settings icon for the footer"
                width={50}
                height={50}
            />
            <div>
                <p className="temperature__temp">{temp}{"\u00B0"}C</p>
                <p className="temperature__text">{text}</p>
            </div>
        </div>

            <Button
                image={{
                    src: "/assets/icons/icon_temp-setting.png",
                    alt: "settings icon",
                    imageClassName: "settings__btn",
                    width: 100,
                    height: 100,
                }}
                text="Instillinger"
                href="/varme"
                className="blue"
            />
        </div>
    )
}