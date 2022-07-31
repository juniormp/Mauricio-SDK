import {ILordRings} from "../infrastructure/external-data/ILordRings";
import {LordRingsAdapter} from "../infrastructure/external-data/LordRingsAdapter";
import {QueryHelper} from "../infrastructure/external-data/helpers/QueryHelper";

export class Book {

    private lordRingsAdapter: ILordRings;

    constructor(
        lordRingsAdapter?: ILordRings
    ) {
        this.lordRingsAdapter = lordRingsAdapter ? lordRingsAdapter : new LordRingsAdapter();
    }

    async getBooks(query?: QueryHelper): Promise<{}> {
        return await this.lordRingsAdapter.getBooks(query);
    }

    async getBook(id: string): Promise<{}> {
        return await this.lordRingsAdapter.getBook(id);
    }

    async getBookChapter(bookId: string): Promise<{}> {
        return await this.lordRingsAdapter.getBookChapter(bookId);
    }
}

