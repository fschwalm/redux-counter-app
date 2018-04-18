import { increment, decrement, add, subtract } from '.';

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

});