import {LordRingsAdapter} from "../../src/infrastructure/external-data/LordRingsAdapter";
import {instance, mock, when} from "ts-mockito";
import {Chapter} from "../../src/application/Chapter";
const { expect } = require('chai');

describe('retrieve chapters', () => {
    it('should return a list of chapters', async () => {
        const lordRingsAdapter: LordRingsAdapter = mock(LordRingsAdapter);
        const chapter = new Chapter(instance(lordRingsAdapter))
        const chapters = [{id: '123abc', chapter: 'chapter'}, {id: '123abc', name:'chapter2'}];

        when(lordRingsAdapter.getChapters(undefined)).thenResolve(chapters);

        const result = await chapter.getChapters();

        expect(result).to.equal(chapters);
    });

    it('should return one chapters', async () => {
        const lordRingsAdapter: LordRingsAdapter = mock(LordRingsAdapter);
        const chapter = new Chapter(instance(lordRingsAdapter))
        const chapters = {id: '123abc', chapter: 'chapter'};

        when(lordRingsAdapter.getChapter('123abc')).thenResolve(chapters);

        const result = await chapter.getChapter('123abc');

        expect(result).to.equal(chapters);
    });
});
