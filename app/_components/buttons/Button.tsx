import Link from "next/link";
import "./_Button.scss";
import Image from "next/image";
import { ButtonProps } from "@/app/types/buttons";

export default function Button({ text, className, href, image }: ButtonProps) {
    return (
        <Link href={href} className={`${className} button`}>
            <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className={image.imageClassName}
            />
            {text}
        </Link>
    )
}