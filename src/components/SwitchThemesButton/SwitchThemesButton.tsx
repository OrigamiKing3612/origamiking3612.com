import { MoonIcon, SunIcon } from "lucide-solid";
import { createSignal, onMount } from "solid-js";
import "./SwitchThemesButton.css";

export function SwitchThemesButton() {
    const [colorMode, setColorMode] = createSignal<"light" | "dark" | "system">("light");

    onMount(() => {
        const saved = localStorage.getItem("color-mode");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (saved === "dark" || (!saved && prefersDark)) {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
            setColorMode("dark");
        } else {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
            setColorMode("light");
        }
    });

    const switchThemes = () => {
        document.documentElement.classList.toggle("dark");
        document.documentElement.classList.toggle("light");

        const newMode = document.documentElement.classList.contains("dark") ? "dark" : "light";
        setColorMode(newMode);
        localStorage.setItem("color-mode", newMode);
    };

    return (
        <button onClick={switchThemes} class="theme-switch-button">
            {colorMode() === "dark" ? <SunIcon size={30} /> : <MoonIcon size={30} />}
        </button>
    );
}
