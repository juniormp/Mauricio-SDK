import {LordRingsAdapter} from "../../src/infrastructure/external-data/LordRingsAdapter";
import {instance, mock, when} from "ts-mockito";
import {Character} from "../../src/application/Character";
const { expect } = require('chai');

describe('retrieve characters', () => {
    it('should return a list of characters', async () => {
        const lordRingsAdapter: LordRingsAdapter = mock(LordRingsAdapter);
        const character = new Character(instance(lordRingsAdapter))
        const characters = [{id: '123abc', character: 'character'}, {id: '123abc', character:'character1'}];

        when(lordRingsAdapter.getCharacters(undefined)).thenResolve(characters);

        const result = await character.getCharacters();

        expect(result).to.equal(characters);
    });

    it('should return one character', async () => {
        const lordRingsAdapter: LordRingsAdapter = mock(LordRingsAdapter);
        const character = new Character(instance(lordRingsAdapter))
        const characters = {id: '123abc', character: 'character'};

        when(lordRingsAdapter.getCharacter( '123abc',undefined)).thenResolve(characters);

        const result = await character.getCharacter('123abc');

        expect(result).to.equal(characters);
    });
});

describe('retrieve character quote', () => {
    it('should return list of character quote', async () => {
        const lordRingsAdapter: LordRingsAdapter = mock(LordRingsAdapter);
        const character = new Character(instance(lordRingsAdapter))
        const characters = [{id: '123abc', quote: 'quote'}];

        when(lordRingsAdapter.getCharacterQuote( '123abc',undefined)).thenResolve(characters);

        const result = await character.getCharacterQuote('123abc');

        expect(result).to.equal(characters);
    });
});

