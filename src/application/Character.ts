import {ILordRings} from "../infrastructure/external-data/ILordRings";
import {LordRingsAdapter} from "../infrastructure/external-data/LordRingsAdapter";
import {QueryHelper} from "../infrastructure/external-data/helpers/QueryHelper";

export class Character {

    private lordRingsAdapter: ILordRings;

    constructor(
        lordRingsAdapter?: ILordRings
    ) {
        this.lordRingsAdapter = lordRingsAdapter ? lordRingsAdapter : new LordRingsAdapter();
    }

    async getCharacters(query?: QueryHelper): Promise<{}> {
        return await this.lordRingsAdapter.getCharacters(query);
    }

    async getCharacter(id: string, query?: QueryHelper): Promise<{}> {
        return await this.lordRingsAdapter.getCharacter(id, query);
    }

    async getCharacterQuote(characterId: string, query?: QueryHelper): Promise<{}> {
        return await this.lordRingsAdapter.getCharacterQuote(characterId, query);
    }
}

