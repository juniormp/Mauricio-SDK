import {ILordRings} from "../infrastructure/external-data/ILordRings";
import {LordRingsAdapter} from "../infrastructure/external-data/LordRingsAdapter";
import {QueryHelper} from "../infrastructure/external-data/helpers/QueryHelper";

export class Chapter {

    private lordRingsAdapter: ILordRings;

    constructor(
        lordRingsAdapter?: ILordRings
    ) {
        this.lordRingsAdapter = lordRingsAdapter ? lordRingsAdapter : new LordRingsAdapter();
    }

    async getChapters(query?: QueryHelper): Promise<{}> {
        return await this.lordRingsAdapter.getChapters(query);
    }

    async getChapter(id: string): Promise<{}> {
        return await this.lordRingsAdapter.getChapter(id);
    }
}

