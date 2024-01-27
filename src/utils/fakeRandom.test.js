import { generateRandomWithMax, removeElementAtIndex, getIndexByElement } from './fakeRandom';

test('fakeRandom', () => {
    for(let i = 0; i < 100; i++) {
        const randomNumber = generateRandomWithMax(10);
        expect(randomNumber <= 10).toBe(true);
        expect(randomNumber >= 0).toBe(true);
    }
});

test('removeElementAtIndex', () => {
    expect(removeElementAtIndex([1,2,3], 0)).toEqual([2,3]);
    expect(removeElementAtIndex([1,2,3], 1)).toEqual([1,3]);
    expect(removeElementAtIndex([1,2,3], 3)).toEqual([1,2,3]);
    expect(removeElementAtIndex([], 1)).toEqual([]);
});

test('getIndexByElement', () => {
    expect(getIndexByElement(['a', 'b', 'c'], 'a')).toBe(0);
    expect(getIndexByElement(['a', 'b', 'c'], 'b')).toBe(1);
    expect(getIndexByElement(['a', 'b', 'c'], 'd')).toBe(-1);
    expect(getIndexByElement([], 'a')).toBe(-1);
});