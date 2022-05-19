import { actionTypes } from "../actionType";
import * as actions from "../actions";

describe("Actions", () => {
  it("should create a ADD_EMPLOYEE action", () => {
    const employee = { id: 1 };
    const expectedAction = { type: actionTypes.ADD_EMPLOYEE, employee };
    const action = actions._addEmployee(employee);
    expect(action).toEqual(expectedAction);
  });
  it("should create a EDIT_EMPLOYEE action", () => {
    const employee = { id: 1 };
    const expectedAction = { type: actionTypes.EDIT_EMPLOYEE, employee };
    const action = actions._editEmployee(employee);
    expect(action).toEqual(expectedAction);
  });
  it("should create a GET_EMPLOYEE action", () => {
    const employee = { id: 1 };
    const expectedAction = { type: actionTypes.GET_EMPLOYEE, employee };
    const action = actions._getEmployee(employee);
    expect(action).toEqual(expectedAction);
  });
  it("should create a GET_EMPLOYEELIST action", () => {
    const employeeList = [{ id: 1 }, { id: 2 }];
    const expectedAction = { type: actionTypes.GET_EMPLOYEELIST, employeeList };
    const action = actions._getEmployeeList(employeeList);
    expect(action).toEqual(expectedAction);
  });
  it("should create a DELETE_EMPLOYEE action", () => {
    const id = 1;
    const expectedAction = { type: actionTypes.DELETE_EMPLOYEE, id };
    const action = actions._deleteEmployee(id);
    expect(action).toEqual(expectedAction);
  });
  it("should create a USER_LOGIN action", () => {
    const user = { username: "adam" };
    const expectedAction = { type: actionTypes.USER_LOGIN, user };
    const action = actions._userLogin(user);
    expect(action).toEqual(expectedAction);
  });
  it("should create a USER_LOGOUT action", () => {
    const expectedAction = { type: actionTypes.USER_LOGOUT };
    const action = actions._userLogout();
    expect(action).toEqual(expectedAction);
  });
  it("should create a USER_GET action", () => {
    const user = { username: "adam" };
    const expectedAction = { type: actionTypes.USER_GET, user };
    const action = actions._userGet(user);
    expect(action).toEqual(expectedAction);
  });
});
