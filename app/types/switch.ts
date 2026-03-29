export interface SwitchProps {
    label: string;
    initialState?: boolean;
    onChange?: (isChecked: boolean) => void;
}