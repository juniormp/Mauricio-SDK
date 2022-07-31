import {QueryHelper} from "./helpers/QueryHelper";

export interface ILordRings {
    getBooks(query?: QueryHelper): Promise<{}>
    getBook(id: string, query?: QueryHelper): Promise<{}>
    getBookChapter(bookId: string, query?: QueryHelper): Promise<{}>
    getMovies(query?: QueryHelper): Promise<{}>
    getMovie(id: string, query?: QueryHelper): Promise<{}>
    getMovieQuote(movieId: string, query?: QueryHelper): Promise<{}>
    getCharacters(query?: QueryHelper): Promise<{}>
    getCharacter(id: string, query?: QueryHelper): Promise<{}>
    getCharacterQuote(characterId: string, query?: QueryHelper): Promise<{}>
    getQuotes(query?: QueryHelper): Promise<{}>
    getQuote(id: string, query?: QueryHelper): Promise<{}>
    getChapters(query?: QueryHelper): Promise<{}>
    getChapter(id: string, query?: QueryHelper): Promise<{}>
}