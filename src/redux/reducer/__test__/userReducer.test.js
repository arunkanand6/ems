import userReducer from "../userReducer";
import * as actions from "../../action/actions";

describe("User Reducer", () => {
  it("should add user data", () => {
    const initialState = {
      user: {
        username: "",
      },
    };
    const user = { username: "admin" };
    const newState = userReducer(initialState, actions._userLogin(user));
    expect(newState.user).toEqual(user);
  });
  it("should reset state to initialstate", () => {
    const initialState = {
      user: {
        username: "",
        password: "",
        role: "",
        jwt: "",
      },
    };
    const state = {
      user: {
        username: "admin",
      },
    };
    const newState = userReducer(state, actions._userLogout());
    expect(newState).toEqual(initialState);
  });
  it("should add user data", () => {
    const initialState = {
      user: {
        username: "",
      },
    };
    const user = { username: "admin" };
    const newState = userReducer(initialState, actions._userGet(user));
    expect(newState.user).toEqual(user);
  });
});
