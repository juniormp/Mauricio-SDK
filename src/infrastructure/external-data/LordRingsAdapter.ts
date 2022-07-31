import {ILordRings} from "./ILordRings";
import {LordRingsHttpClient} from "./LordRingsHttpClient";
import {QueryHelper} from "./helpers/QueryHelper";
require('dotenv').config();

export class LordRingsAdapter implements ILordRings{

    private httpClient: LordRingsHttpClient;

    constructor(
        httpClient?: LordRingsHttpClient
    ) {
        this.httpClient = httpClient ? httpClient : new LordRingsHttpClient();
    }

    async getBooks(query?: QueryHelper): Promise<{}>  {
        return await this.httpClient.get('book', {query: query})
    }

    async getBook(id: string, query?: QueryHelper): Promise<{}>  {
        return await this.httpClient.get('book', {query: query})
    }

    async getBookChapter(bookId: string, query?: QueryHelper): Promise<{}>  {
        return await this.httpClient.get(`/book/${bookId}/chapter`, {query: query})
    }

    async getMovies(query?: QueryHelper): Promise<{}>  {
        return await this.httpClient.get('/movie', {authorization: process.env.ACCESS_TOKEN, query: query})
    }

    async getMovie(id: string, query?: QueryHelper): Promise<{}>  {
        return await this.httpClient.get(`/movie/${id}`, {authorization: process.env.ACCESS_TOKEN, query: query})
    }

    async getMovieQuote(movieId: string, query?: QueryHelper): Promise<{}>  {
        return await this.httpClient.get(`/movie/${movieId}/quote`, {authorization: process.env.ACCESS_TOKEN, query: query})
    }

    async getCharacters(query?: QueryHelper): Promise<{}>  {
        return await this.httpClient.get('/character', {authorization: process.env.ACCESS_TOKEN, query: query})
    }

    async getCharacter(id: string, query?: QueryHelper): Promise<{}>  {
        return await this.httpClient.get(`/character/${id}`, {authorization: process.env.ACCESS_TOKEN, query: query})
    }

    async getCharacterQuote(characterId: string, query?: QueryHelper): Promise<{}>  {
        return await this.httpClient.get(`/character/${characterId}/quote`, {authorization: process.env.ACCESS_TOKEN, query: query})
    }

    async getQuotes(query?: QueryHelper): Promise<{}>  {
        return await this.httpClient.get(`/quote`, {authorization: process.env.ACCESS_TOKEN, query: query})
    }

    async getQuote(id: string, query?: QueryHelper): Promise<{}>  {
        return await this.httpClient.get(`/quote/${id}`, {authorization: process.env.ACCESS_TOKEN, query: query})
    }

    async getChapters(query?: QueryHelper): Promise<{}>  {
        return await this.httpClient.get('/chapter', {authorization: process.env.ACCESS_TOKEN, query: query})
    }

    async getChapter(id: string, query?: QueryHelper): Promise<{}>  {
        return await this.httpClient.get(`/chapter/${id}`, {authorization: process.env.ACCESS_TOKEN, query: query})
    }
}

