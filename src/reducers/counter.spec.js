import deepFreeze from "deep-freeze";
import reducer from "./counter";

describe("Counter reducer", () => {
  it("should return the default state", () => {
    expect(reducer(undefined, {})).toEqual({
      counter: 0
    });
  });

  it("should handle INCREMENT", () => {
    expect(reducer(undefined, { type: "INCREMENT" })).toEqual({
      counter: 1
    });
  });

  it("should handle DECREMENT", () => {
    expect(reducer(undefined, { type: "DECREMENT" })).toEqual({
      counter: -1
    });
  });

  it("should handle ADD", () => {
    expect(reducer(undefined, { type: "ADD", value: 5 })).toEqual({
      counter: 5
    });
  });

  it("should handle SUBTRACT", () => {
    const stateBefore = { counter: 10 };
    const stateAfter = { counter: 5 };

    deepFreeze(stateBefore);

    expect(reducer(stateBefore, { type: "SUBTRACT", value: 5 })).toEqual(stateAfter);
  });

  it("should return the current state when action is unknown", () => {
    expect(reducer(0, { type: "SOME_UNKNOWN_ACTION" })).toEqual(0);
  });
});
