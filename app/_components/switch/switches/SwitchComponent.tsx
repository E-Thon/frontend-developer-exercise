"use client"

import Switch from "../Switch";
import "./_SwitchComponent.scss";
import { SwitchcomponentProps } from "@/app/types/switch";


export default function SwitchComponent({ h3, switches }: SwitchcomponentProps) {
    return (
        <div className="switchcomponent">
            <h3>{h3}</h3>
            <div className="switchcomponent__switches">
                {switches.map((switchItem) => (
                    <Switch
                        key={switchItem.id}
                        label={switchItem.label}
                        initialState={switchItem.initialState}
                        onChange={switchItem.onChange}
                    />
                ))}
            </div>
        </div>
    )
}