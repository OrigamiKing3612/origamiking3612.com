
export interface Project {
    name: string;
    link: string;
    description: string;
    images: {
        light: ImageMetadata;
        dark: ImageMetadata;
    };
    hide_border?: boolean;
}

