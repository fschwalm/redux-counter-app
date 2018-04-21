import { increment, decrement, add, subtract, storeResult, deleteResultById } from '.';

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

    it('shoud create an action to delete a store result by id', () => {
        const id = 5;
        const expectedAction = {
            type: 'DELETE_RESULT_BY_ID',
            id
        };
        expect(deleteResultById(id)).toEqual(expectedAction);
    });

    describe('action creator', () => {
        it('should create an action to store Result', () => {
            const value = 5;
            const expectedAction = {
                type: 'STORE_RESULT',
                id: 1,
                value
            }
            expect(storeResult(value)).toEqual(expectedAction);
        });
    });
});