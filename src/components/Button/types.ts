export interface iButton{
    title: string;
    variant?: string;
    onClick?: () => void;
    type?: string;
}

export interface iButtonStyled{
    variant: string;
}