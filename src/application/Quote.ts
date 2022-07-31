import {ILordRings} from "../infrastructure/external-data/ILordRings";
import {LordRingsAdapter} from "../infrastructure/external-data/LordRingsAdapter";
import {QueryHelper} from "../infrastructure/external-data/helpers/QueryHelper";

export class Quote {

    private lordRingsAdapter: ILordRings;

    constructor(
        lordRingsAdapter?: ILordRings
    ) {
        this.lordRingsAdapter = lordRingsAdapter ? lordRingsAdapter : new LordRingsAdapter();
    }

    async getQuotes(query?: QueryHelper): Promise<{}> {
        return await this.lordRingsAdapter.getQuotes(query);
    }

    async getQuote(id: string, query?: QueryHelper): Promise<{}> {
        return await this.lordRingsAdapter.getQuote(id, query);
    }
}

