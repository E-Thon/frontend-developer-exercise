import Link from "next/link";
import "./_Button.scss";

interface ButtonProps {
    text: string
    className: string
    href: string
}

export default function Button({ text, className, href }: ButtonProps) {
    return (
        <Link href={href} className={`${className} button`}>
            {text}
        </Link>
    )
}