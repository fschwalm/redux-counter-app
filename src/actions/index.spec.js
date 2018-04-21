import { increment, decrement, add, subtract, storeResult, deleteResultById } from '.';
import * as actionTypes from './types';

jest.mock('uuid/v4', () => jest.fn(() => 1))

describe('Action', () => {
    it('should create an action to increment', () => {
        expect(increment()).toEqual({
            type: actionTypes.INCREMENT
        });
    });

    it('should create an action to decrement', () => {
        expect(decrement()).toEqual({
            type: actionTypes.DECREMENT
        });
    });

    it('should create an action to add', () => {
        const value = 5;
        const expectedAction = {
            type: actionTypes.ADD,
            value
        }
        expect(add(5)).toEqual(expectedAction);
    });

    it('should create an action to subtract', () => {
        const value = 5;
        const expectedAction = {
            type: actionTypes.SUBTRACT,
            value
        }
        expect(subtract(5)).toEqual(expectedAction);
    });

    it('shoud create an action to delete a store result by id', () => {
        const id = 5;
        const expectedAction = {
            type: actionTypes.DELETE_RESULT_BY_ID,
            id
        };
        expect(deleteResultById(id)).toEqual(expectedAction);
    });

    describe('action creator', () => {
        it('should create an action to store Result', () => {
            const value = 5;
            const expectedAction = {
                type: actionTypes.STORE_RESULT,
                id: 1,
                value
            }
            expect(storeResult(value)).toEqual(expectedAction);
        });
    });
});