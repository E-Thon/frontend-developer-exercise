"use client"

import SwitchComponent from "../switches/SwitchComponent";
import "./_Switchcard.scss";
import { SwitchcardProps } from "@/app/types/switch";

export default function SwitchCard({ sections }: SwitchcardProps) {
    return (
        <div className="switchcard">
            {sections.map((section) => (
                <SwitchComponent
                    key={section.h3}
                    h3={section.h3}
                    switches={section.switches}
                />
            ))}
        </div>
    )
}