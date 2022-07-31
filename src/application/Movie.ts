import {ILordRings} from "../infrastructure/external-data/ILordRings";
import {LordRingsAdapter} from "../infrastructure/external-data/LordRingsAdapter";
import {QueryHelper} from "../infrastructure/external-data/helpers/QueryHelper";

export class Movie {

    private lordRingsAdapter: ILordRings;

    constructor(
        lordRingsAdapter?: ILordRings
    ) {
        this.lordRingsAdapter = lordRingsAdapter ? lordRingsAdapter : new LordRingsAdapter();
    }

    async getMovies(query?: QueryHelper): Promise<{}> {
        return await this.lordRingsAdapter.getMovies(query);
    }

    async getMovie(id: string, query?: QueryHelper): Promise<{}> {
        return await this.lordRingsAdapter.getMovie(id, query);
    }

    async getMovieQuote(movieId: string, query?: QueryHelper): Promise<{}> {
        return await this.lordRingsAdapter.getMovieQuote(movieId, query);
    }
}

