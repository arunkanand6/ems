import employeeReducer from "../employeeReducer";
import * as actions from "../../action/actions";

describe("Employee Reducer", () => {
  it("should add an employee to employeeList - Add", () => {
    const initialState = { employeeList: [] };
    const employee = { name: "Adam" };
    const newState = employeeReducer(
      initialState,
      actions._addEmployee(employee)
    );
    expect(newState.employeeList[0]).toEqual(employee);
  });
  it("should edit the given employee details in the employeeList - Edit", () => {
    const initialState = {
      employeeList: [
        { id: 1, name: "Adam" },
        { id: 2, name: "Eve" },
      ],
    };
    const employee = { id: 1, name: "eve" };
    const newState = employeeReducer(
      initialState,
      actions._editEmployee(employee)
    );
    expect(newState.employeeList[1]).toEqual(employee);
  });
  it("should add all employees to employeeList - GetAll", () => {
    const initialState = { employeeList: [] };
    const employeeList = [
      { id: 1, name: "Adam" },
      { id: 2, name: "Eve" },
    ];
    const newState = employeeReducer(
      initialState,
      actions._getEmployeeList(employeeList)
    );
    expect(newState.employeeList).toEqual(employeeList);
  });
  it("should remove employee from employeeList", () => {
    const initialState = {
      employeeList: [
        { id: 1, name: "Adam" },
        { id: 2, name: "Eve" },
      ],
    };
    const employee = { id: 2, name: "Eve" };
    const newState = employeeReducer(
      initialState,
      actions._deleteEmployee(employee.id)
    );
    expect(newState.employeeList.length).toBe(1);
    // returns true if the provided array is a subset of the original array
    expect(newState.employeeList).not.toEqual(
      expect.arrayContaining([employee])
    );
  });
  it("should add the employee details to employee in state", () => {
    const initialState = {
      employee: {
        id: "",
      },
    };
    const employee = { id: 1 };
    const newState = employeeReducer(
      initialState,
      actions._getEmployee(employee)
    );
    expect(newState.employee).toEqual(employee);
  });
  it("should reset state to initialstate", () => {
    const initialState = {
      employeeList: [],
      employee: {
        id: "",
        name: "",
        designation: "",
        salary: 0,
      },
    };
    const state = {
      employeeList: [1, 2, 3],
      employee: {
        id: 1,
      },
    };
    const newState = employeeReducer(state, actions._userLogout());
    expect(newState).toEqual(initialState);
  });
});
