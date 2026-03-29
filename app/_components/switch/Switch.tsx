"use client";

import { useState } from "react";
import "./_Switch.scss";
import { SwitchProps } from "@/app/types/switch";

export default function Switch({ label, initialState = false, onChange }: SwitchProps) {
    const [isChecked, setIsChecked] = useState(initialState);

    const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
        onChange?.(e.target.checked);
    };

    return (
        <div className="switch">
            <label htmlFor="toggle" className="switch__label">
                {label}
            </label>
            <input
                id="toggle"
                type="checkbox"
                className="switch__input"
                checked={isChecked}
                onChange={handleToggle}
            />
            <span className="switch__slider"></span>

        </div>
    )
}
