import { increment, decrement, add, subtract, storeResult } from '.';

jest.mock('uuid/v4', () => jest.fn(() => 1))

describe('Action', () => {
    it('should create an action to increment', () => {
        expect(increment()).toEqual({
            type: "INCREMENT"
        });
    });

    it('should create an action to decrement', () => {
        expect(decrement()).toEqual({
            type: "DECREMENT"
        });
    });

    it('should create an action to add', () => {
        const value = 5;
        const expectedAction = {
            type: 'ADD',
            value
        }
        expect(add(5)).toEqual(expectedAction);
    });

    it('should create an action to subtract', () => {
        const value = 5;
        const expectedAction = {
            type: 'SUBTRACT',
            value
        }
        expect(subtract(5)).toEqual(expectedAction);
    });

    describe('action creator', () => {
        beforeEach(() => {
        });

        it('should create an action to store Result', () => {
            const value = 5;
            const expectedAction = {
                type: 'STORE_RESULT',
                id: 1,
                value
            }
            expect(storeResult(5)).toEqual(expectedAction);
        });
    });
});