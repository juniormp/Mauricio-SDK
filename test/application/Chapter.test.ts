import {LordRingsAdapter} from "../../src/infrastructure/external-data/LordRingsAdapter";
import {instance, mock, when} from "ts-mockito";
import {Book} from "../../src/application/Book";
const { expect } = require('chai');

describe('retrieve books', () => {
    it('should return a list of books', async () => {
        const lordRingsAdapter: LordRingsAdapter = mock(LordRingsAdapter);
        const book = new Book(instance(lordRingsAdapter))
        const books = [{id: '123abc', name: 'book'}, {id: '123abc', name:'book2'}];

        when(lordRingsAdapter.getBooks(undefined)).thenResolve(books);

        const result = await book.getBooks();

        expect(result).to.equal(books);
    });

    it('should return one book', async () => {
        const lordRingsAdapter: LordRingsAdapter = mock(LordRingsAdapter);
        const book = new Book(instance(lordRingsAdapter))
        const books = {id: '123abc', name: 'book'};

        when(lordRingsAdapter.getBook('123abc')).thenResolve(books);

        const result = await book.getBook('123abc');

        expect(result).to.equal(books);
    });
});

describe('retrieve book chapters', () => {
    it('should return a list of book chapters', async () => {
        const lordRingsAdapter: LordRingsAdapter = mock(LordRingsAdapter);
        const book = new Book(instance(lordRingsAdapter))
        const books = {id: '123abc', chapter: 'chapter'};

        when(lordRingsAdapter.getBookChapter('123abc')).thenResolve(books);

        const result = await book.getBookChapter('123abc');

        expect(result).to.equal(books);
    });
});
