import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actionCreator from "../actionCreator";
import { actionTypes } from "../actionType";
// import axiosMock from "axios";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

const middlewares = [thunk, reduxImmutableStateInvariant()];
const mockStore = configureMockStore(middlewares);

describe("Action Creator", () => {
  const initialState = {
    employeeList: [],
    employee: {
      id: 2,
      name: "Eve",
      designation: "CONSULTANT",
      salary: 20000.0,
    },
  };

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("should create ADD_EMPLOYEE action", async () => {
    const expectedAction = {
      type: actionTypes.ADD_EMPLOYEE,
      employee: { name: "Adam" },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedAction.employee,
      });
    });

    const store = mockStore(initialState);
    await store.dispatch(actionCreator.addEmployee(expectedAction.employee));
    expect(store.getActions()).toEqual([expectedAction]);
  });

  it("should create EDIT_EMPLOYEE action", async () => {
    const expectedAction = {
      type: actionTypes.EDIT_EMPLOYEE,
      employee: { id: 1, name: "Adam" },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedAction.employee,
      });
    });

    const store = mockStore(initialState);
    await store.dispatch(actionCreator.addEmployee(expectedAction.employee));
    expect(store.getActions()).toEqual([expectedAction]);
  });

  it("should create GET_EMPLOYEE action", async () => {
    const expectedAction = {
      type: actionTypes.GET_EMPLOYEE,
      employee: { id: 1, name: "Adam" },
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedAction.employee,
      });
    });

    const store = mockStore(initialState);
    await store.dispatch(actionCreator.getEmployee(expectedAction.employee.id));
    expect(store.getActions()).toEqual([expectedAction]);
  });

  it("should create GET_EMPLOYEELIST action", async () => {
    const expectedAction = {
      type: actionTypes.GET_EMPLOYEELIST,
      employeeList: [{ id: 1, name: "Adam" }],
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedAction.employeeList,
      });
    });

    const store = mockStore(initialState);
    await store.dispatch(actionCreator.getEmployeeList());
    expect(store.getActions()).toEqual([expectedAction]);
  });

  it("should create GET_EMPLOYEE action", async () => {
    const expectedAction = {
      type: actionTypes.DELETE_EMPLOYEE,
      id: 1,
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: expectedAction.id,
      });
    });

    const store = mockStore(initialState);
    await store.dispatch(actionCreator.deleteEmployee(expectedAction.id));
    expect(store.getActions()).toEqual([expectedAction]);
  });
});

// describe("Action Creators using __mocks__", () => {
//   it("should update employee value in store", () => {
//     const employee = { id: 1, name: "Adam" };
//     const initialState = {
//       employee: {
//         id: "",
//         name: "",
//       },
//     };

//     axiosMock.get.mockResolvedValueOnce({
//       data: {
//         employee: employee,
//       },
//     });

//     const store = mockStore(initialState);
//     return store.dispatch(actionCreator.getEmployee(employee.id)).then(() => {
//       console.log(store.getState());
//       console.log(store.getActions());
//     });
//   });
// });
