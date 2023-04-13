import { useEffect, useState } from "react";
import { LocalStorage } from "./localStorage";

type Theme = "light" | "dark" | undefined

export const useTheme = (): [Theme, (theme: Theme) => void] => {
    const [theme, setTheme] = useState<Theme>();

    useEffect(() => {
        const defaultTheme = getSystemTheme();
        setTheme(defaultTheme);
        document.documentElement.setAttribute("data-theme", defaultTheme);
        return LocalStorage.subscribe("theme", (value) => {
            if (value === "dark") setTheme("dark");
            else if (value === "light") setTheme("light");
            else setTheme(defaultTheme);
        });
    }, []);

    const onChange = (theme:Theme) => {
        if (theme === "light" || theme === "dark") {
            setTheme(theme);
            document.documentElement.setAttribute("data-theme", theme);
            LocalStorage.setItem("theme", theme);
        } else {
            LocalStorage.removeItem("theme");
            setTheme(undefined);
        }
    };
    return [theme, onChange];
};

export const getSystemTheme = () => {
    const mediaQuery = "(prefers-color-scheme: dark)";
    const match = window.matchMedia(mediaQuery);
    return match.media !== mediaQuery || match.matches ? "dark" : "light";
};

