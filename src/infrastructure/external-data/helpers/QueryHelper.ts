export class QueryHelper {
    readonly limit: number;
    readonly page: number;
    readonly offset: number

    constructor(limit?: number, page?: number, offset?: number) {
        this.limit = limit
        this.page = page
        this.offset = offset
    }

    build() {
        let query = '';

        if(this.limit) {
            query = query + `?limit=${this.limit}`
        }

        if(this.page) {
            query = query + `?page=${this.page}`
        }

        if(this.offset) {
            query = query + `?page=${this.offset}`
        }

        return query;
    }
}
