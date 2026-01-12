export interface Project {
    name: string,
    link: string,
    description: string,
    images: {
        light: string,
        dark?: string,
    },
    hide_border?: boolean,
}
