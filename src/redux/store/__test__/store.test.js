const { default: configureStore } = require("../store");
import * as actions from "../../action/actions";
import * as actionCreators from "../../action/actionCreator";
import moxios from "moxios";

describe("Store with only redux", () => {
  it("should add an employee to the store", async () => {
    const employee = { id: 1, name: "Adam" };
    const store = configureStore();
    await store.dispatch(actions._addEmployee(employee));
    expect(store.getState().employee.employeeList[0]).toEqual(employee);
  });
});

describe("Store with redux and axios", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("should add an employee to the store", async () => {
    const employee = { id: 1, name: "Adam" };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: employee,
      });
    });

    const store = configureStore();
    await store.dispatch(actionCreators.addEmployee(employee));
    expect(store.getState().employee.employeeList[0]).toEqual(employee);
  });
});
