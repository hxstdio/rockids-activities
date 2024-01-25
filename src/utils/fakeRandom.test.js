import { generateRandomWithMax } from './fakeRandom';

test('fakeRandom', () => {
    for(let i = 0; i < 100; i++) {
        const randomNumber = generateRandomWithMax(10);
        expect(randomNumber <= 10).toBe(true);
        expect(randomNumber >= 0).toBe(true);
    }
  });