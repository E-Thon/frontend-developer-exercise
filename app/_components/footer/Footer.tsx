"use client"

import Link from "next/link";
import "./_Footer.scss";
import Image from "next/image";
import { usePathname } from "next/navigation";

const FOOTER_LINKS = [
    { href: "/", icon: "dashboad", alt: "home icon for the footer" },
    { href: "/statistik", icon: "statistics", alt: "statistics icon for the footer" },
    // { href: "/varme", icon: "heating", alt: "heat settings icon for the footer" },
    // { href: "/lys", icon: "light", alt: "light icon for the footer" },
];

export default function Footer() {
    const pathname = usePathname()

    const getActiveState = (href: string): string => {
        return pathname === href ? "active" : "inactive"
    }

    return (
        <footer className="footer">
            {FOOTER_LINKS.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className="footer__icon">
                    <Image
                        src={`/assets/icons/icon_menu_${link.icon}_${getActiveState(link.href)}.png`}
                        alt={link.alt}
                        width={50}
                        height={50}
                    />

                </Link>
            ))}
            <Link href="/varme" className="footer__icon">
                <Image
                    src="/assets/icons/icon_menu_heating.png"
                    alt="heat settings icon for the footer"
                    width={50}
                    height={50}
                />
            </Link>
            <Link href="/lys" className="footer__icon">
                <Image
                    src="/assets/icons/icon_menu_light.png"
                    alt="light icon for the footer"
                    width={50}
                    height={50}
                />
            </Link>
        </footer>
    );
}