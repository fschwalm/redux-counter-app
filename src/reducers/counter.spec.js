import deepFreeze from "deep-freeze";
import reducer from "./counter";
import { storeResult, deleteResultById } from "../actions";

jest.mock("uuid/v4", () => jest.fn(() => 2));

describe("Counter reducer", () => {
  it("should return the default state", () => {
    expect(reducer(undefined, {})).toEqual({
      counter: 0,
      storedResults: []
    });
  });

  it("should handle INCREMENT", () => {
    expect(reducer(undefined, { type: "INCREMENT" })).toEqual({
      counter: 1,
      storedResults: []
    });
  });

  it("should handle DECREMENT", () => {
    expect(reducer(undefined, { type: "DECREMENT" })).toEqual({
      counter: -1,
      storedResults: []
    });
  });

  it("should handle ADD", () => {
    expect(reducer(undefined, { type: "ADD", value: 5 })).toEqual({
      counter: 5,
      storedResults: []
    });
  });

  it("should handle SUBTRACT", () => {
    const stateBefore = { counter: 10, storedResults: [] };
    const stateAfter = { counter: 5, storedResults: [] };

    deepFreeze(stateBefore);

    expect(reducer(stateBefore, { type: "SUBTRACT", value: 5 })).toEqual(
      stateAfter
    );
  });

  it("should handle STORE_RESULT", () => {
    const stateBefore = { counter: 10, storedResults: [] };
    const stateAfter = { counter: 10, storedResults: [{ id: 2, value: 10 }] };

    deepFreeze(stateBefore);

    expect(reducer(stateBefore, storeResult())).toEqual(stateAfter);
  });

  it("should handle DELETE_RESULT_BY_ID", () => {
    const stateBefore = {
      counter: 10,
      storedResults: [
        {
          id: "123-123",
          value: 2
        },
        {
          id: "333-222",
          value: 14
        },
        {
          id: "999-999",
          value: 17
        }
      ]
    };
    const stateAfter = {
      counter: 10,
      storedResults: [
        {
          id: "333-222",
          value: 14
        },
        {
          id: "999-999",
          value: 17
        }
      ]
    };

    deepFreeze(stateBefore);

    expect(reducer(stateBefore, deleteResultById("123-123"))).toEqual(stateAfter);
  });

  it("should return the current state when action is unknown", () => {
    expect(reducer(0, { type: "SOME_UNKNOWN_ACTION" })).toEqual(0);
  });
});
