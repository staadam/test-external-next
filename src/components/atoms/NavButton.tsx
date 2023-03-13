"use client";

import { ReactElement } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./NavButton.module.scss";

type NavButtonProps = {
  icon: ReactElement<any, any>;
  href: string;
};

export const NavButton = ({ icon, href }: NavButtonProps) => {
  const pathName = usePathname();
  const isActivePath = href === pathName;

  return (
    <Link
      href={href}
      className={`${styles.wrapper} ${isActivePath ? styles.active : ""}`}
    >
      {icon}
    </Link>
  );
};
