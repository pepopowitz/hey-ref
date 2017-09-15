import * as clockMath from './clock-math';

describe('clock-math', () => {
    describe('secondsFromNow', () => {
        it('should add seconds', () => {
            const now = Date.now();

            const result = clockMath.secondsFromNow(60);

            expect(result).toBeGreaterThan(now);
        });
    });

    describe('secondsLeft', () => {
        it('should give 0 when equal', () => {
            const now = Date.now();
            const final = now;

            const result = clockMath.secondsLeft(now, final);

            expect(result).toEqual(0);
        });

        it('should give 20 when 20 seconds remaining', () => {
            const now = 1505447307242;
            const final = 1505447327242;

            const result = clockMath.secondsLeft(now, final);

            expect(result).toEqual(20);
        });
    });
});
