export default class {
    title: string;
    description: string;
    date: Date;
    tags: string[];

    constructor(title: string, description: string, date: Date, tags: string[]) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.tags = tags;
    }
}
