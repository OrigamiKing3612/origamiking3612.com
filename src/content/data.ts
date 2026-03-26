import type { Project } from "./types";
import theHouseAppLight from "../assets/images/the-house-app/light.png";
import theHouseAppDark from "../assets/images/the-house-app/dark.png";
import terminalKingdom from "../assets/images/terminal-kingdom.png";

export const gravatarUrl = `https://www.gravatar.com/avatar/fcea678228cec5ddcfe7deb46411693d?s=160&d=identicon`;

export const projects: Project[] = [
    // {
    //     name: "Origami Systems",
    //     link: "https://origamisystems.org",
    //     description: "",
    //     images: {
    //         light: "https://origamisystems.org/icons/light/workmark.png",
    //         dark: "https://origamisystems.org/icons/dark/wordmark.png",
    //     },
    //     hide_border: true,
    // },
    {
        name: "The House App",
        link: "https://the-house-app.com",
        description:
            "The House App is a cutting-edge tool designed to enrich the educational journey for students and teachers alike. It offers insights to track house-related activities and achievements, fostering engagement within the school community.",
        images: {
            light: theHouseAppLight,
            dark: theHouseAppDark,
        },
    },
    {
        name: "Terminal Kingdom",
        link: "https://github.com/OrigamiKing3612/Terminal-Kingdom",
        description:
            "A Kingdom at Your Command (line)! Your goal is to create a new village from the ground up and keep it running. You will have to make choices that will affect your village. You will be able to create many villages and keep your kingdom running smoothly!",
        images: {
            light: terminalKingdom,
            dark: terminalKingdom,
        },
    },
    // {
    //     name: "Terminal Kingdom 2.0",
    //     link: "https://github.com/OrigamiKing3612/Terminal-Kingdom-2.0",
    //     description: "A 2D top-down version of Terminal Kingdom",
    //     image: "https://the-house-app.com/apple-touch-icon.png",
    // },
    // {
    //     name: "Dotfiles",
    //     link: "https://github/OrigamiKing3612/dotfiles",
    //     description: "My personal development setup",
    //     image: "https://the-house-app.com/apple-touch-icon.png",
    // },
];
