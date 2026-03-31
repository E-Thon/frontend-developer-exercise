export interface SwitchProps {
    label: string;
    initialState?: boolean;
    onChange?: (isChecked: boolean) => void;
}

export interface SwitchcomponentProps {
    h3: string;
    switches: SwitchItem[];
}

export interface SwitchItem {
    id: string;
    label: string;
    initialState: boolean;
    onChange?: (isChecked: boolean) => void;
}

export interface SwitchcardProps {
    sections: SwitchcomponentProps[];
}