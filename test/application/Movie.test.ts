import {LordRingsAdapter} from "../../src/infrastructure/external-data/LordRingsAdapter";
import {instance, mock, when} from "ts-mockito";
import {Movie} from "../../src/application/Movie";
const { expect } = require('chai');

describe('retrieve movies', () => {
    it('should return a list of movie', async () => {
        const lordRingsAdapter: LordRingsAdapter = mock(LordRingsAdapter);
        const movie = new Movie(instance(lordRingsAdapter))
        const movies = [{id: '123abc', name: 'movie'}, {id: '123abc', name:'movie2'}];

        when(lordRingsAdapter.getMovies(undefined)).thenResolve(movies);

        const result = await movie.getMovies();

        expect(result).to.equal(movies);
    });

    it('should return one movie', async () => {
        const lordRingsAdapter: LordRingsAdapter = mock(LordRingsAdapter);
        const movie = new Movie(instance(lordRingsAdapter))
        const movies = {id: '123abc', name: 'movie'};

        when(lordRingsAdapter.getMovie('123abc', undefined)).thenResolve(movies);

        const result = await movie.getMovie('123abc');

        expect(result).to.equal(movies);
    });
});

describe('retrieve movie quote', () => {
    it('should return a list of movie quote', async () => {
        const lordRingsAdapter: LordRingsAdapter = mock(LordRingsAdapter);
        const movie = new Movie(instance(lordRingsAdapter))
        const quote = {id: '123abc', name: 'quote'};

        when(lordRingsAdapter.getMovieQuote('123abc', undefined)).thenResolve(quote);

        const result = await movie.getMovieQuote('123abc');

        expect(result).to.equal(quote);
    });
});
