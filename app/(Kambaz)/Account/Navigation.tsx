"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useSelector} from "react-redux";
import {RootState} from "../store";

export default function AccountNavigation() {
    const pathname = usePathname();

    const {currentUser} = useSelector((state: RootState) => state.accountReducer);

    const links = currentUser
        ? [{label: "Profile", href: "/Account/Profile"}]
        : [
            {label: "Signin", href: "/Account/Signin"},
            {label: "Signup", href: "/Account/Signup"}
        ];

    return (
        <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) => (
                <Link
                    key={link.label}
                    href={link.href}
                    className={`list-group-item text-center border-0 ${
                        pathname.includes(link.label)
                            ? "active"
                            : "text-danger"
                    }`}>
                    {link.label}
                </Link>
            ))}
        </div>
    );
}