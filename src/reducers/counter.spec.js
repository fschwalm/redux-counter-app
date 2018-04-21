import deepFreeze from "deep-freeze";
import counterReducer from "./counter";

describe("Counter reducer", () => {
  it("should return the default state", () => {
    expect(counterReducer(undefined, {})).toEqual({
      counter: 0,
    });
  });

  it("should handle INCREMENT", () => {
    expect(counterReducer(undefined, { type: "INCREMENT" })).toEqual({
      counter: 1,
    });
  });

  it("should handle DECREMENT", () => {
    expect(counterReducer(undefined, { type: "DECREMENT" })).toEqual({
      counter: -1,
    });
  });

  it("should handle ADD", () => {
    expect(counterReducer(undefined, { type: "ADD", value: 5 })).toEqual({
      counter: 5,
    });
  });

  it("should handle SUBTRACT", () => {
    const stateBefore = { counter: 10, storedResults: [] };
    const stateAfter = { counter: 5, storedResults: [] };

    deepFreeze(stateBefore);

    expect(counterReducer(stateBefore, { type: "SUBTRACT", value: 5 })).toEqual(
      stateAfter
    );
  });

  it("should return the current state when action is unknown", () => {
    expect(counterReducer(0, { type: "SOME_UNKNOWN_ACTION" })).toEqual(0);
  });
});
