export class PagedList<T> {

    constructor(){
        this.results = [];
        this.totalItems = 0;
    }

    public results: T[];
    totalItems: number;
}