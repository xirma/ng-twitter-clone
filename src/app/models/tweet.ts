export class Tweet {

    id: number;
    content: string;
    date: Date;
    dateToShow: string;
    seconds: number;

    constructor(text: string, date: Date, id?: number) {
        this.content = text;
        this.date = date;
        this.id = id || Math.round(Math.random() * 100000000);
    }
}
