import React from "react";
import styles from "../../styles/Clock.module.css";
import {useTheme} from "@/utils";

interface ThemeSwitchProps {
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ( ) => {
    const [theme, setTheme] = useTheme();

    const switchTheme = (e) => {
        const value = e.currentTarget.textContent.toLowerCase();
        setTheme(value);
    };

    return (
        <div className={styles.switchCont}>
            <button className={styles.switchBtn} onClick={switchTheme}>
                {theme === "dark" ? "light" : "dark"}
            </button>
        </div>
    );
};

export default ThemeSwitch;
