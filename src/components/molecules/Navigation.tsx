import { NavButton } from "@/components/atoms/NavButton";

import GymIcon from "public/navIcons/gym.svg";
import ProfileIcon from "public/navIcons/profile.svg";
import ToDoIcon from "public/navIcons/todo.svg";

import styles from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={styles.wrapper}>
      <NavButton icon={<ToDoIcon />} href="/gym" />
      <NavButton icon={<GymIcon />} href="/gym-list" />
      <NavButton icon={<ProfileIcon />} href="/profile" />
    </nav>
  );
};
