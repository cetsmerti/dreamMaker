import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode, } from 'react'



export interface ButtomProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    size: 'sort' | 'medium' | 'dell'
    children: ReactNode
}
export type ButtomColor = string | CSSModuleClasses