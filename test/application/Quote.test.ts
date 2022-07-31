import {LordRingsAdapter} from "../../src/infrastructure/external-data/LordRingsAdapter";
import {instance, mock, when} from "ts-mockito";
import {Quote} from "../../src/application/Quote";
const { expect } = require('chai');

describe('retrieve quotes', () => {
    it('should return a list of quotes', async () => {
        const lordRingsAdapter: LordRingsAdapter = mock(LordRingsAdapter);
        const quote = new Quote(instance(lordRingsAdapter))
        const quotes = [{id: '123abc', name: 'quote'}, {id: '123abc', name:'quote2'}];

        when(lordRingsAdapter.getQuotes(undefined)).thenResolve(quotes);

        const result = await quote.getQuotes();

        expect(result).to.equal(quotes);
    });

    it('should return a quote', async () => {
        const lordRingsAdapter: LordRingsAdapter = mock(LordRingsAdapter);
        const quote = new Quote(instance(lordRingsAdapter))
        const quotes = {id: '123abc', name: 'quote'};

        when(lordRingsAdapter.getQuote('123abc', undefined)).thenResolve(quotes);

        const result = await quote.getQuote('123abc', undefined);

        expect(result).to.equal(quotes);
    });
});
