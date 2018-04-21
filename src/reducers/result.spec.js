import deepFreeze from "deep-freeze";
import resultReducer from "./result";
import { storeResult, deleteResultById } from "../actions";

jest.mock("uuid/v4", () => jest.fn(() => 2));

describe("Result reducer", () => {
  it("should return the default state", () => {
    expect(resultReducer(undefined, {})).toEqual({
      storedResults: []
    });
  });

  it("should return the current state when action is unknown", () => {
    expect(resultReducer(0, { type: "SOME_UNKNOWN_ACTION" })).toEqual(0);
  });

  it("should handle STORE_RESULT", () => {
    const stateBefore = { storedResults: [] };
    const stateAfter = { storedResults: [{ id: 2, value: 10 }] };

    deepFreeze(stateBefore);

    expect(resultReducer(stateBefore, storeResult(10))).toEqual(stateAfter);
  });

  it("should handle DELETE_RESULT_BY_ID", () => {
    const stateBefore = {
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

    expect(resultReducer(stateBefore, deleteResultById("123-123"))).toEqual(stateAfter);
  });
});
