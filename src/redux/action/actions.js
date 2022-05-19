import { actionTypes } from "./actionType";

export function _addEmployee(employee) {
  return {
    type: actionTypes.ADD_EMPLOYEE,
    employee,
  };
}

export function _editEmployee(employee) {
  return {
    type: actionTypes.EDIT_EMPLOYEE,
    employee,
  };
}

export function _getEmployee(employee) {
  return {
    type: actionTypes.GET_EMPLOYEE,
    employee,
  };
}

export function _getEmployeeList(employeeList) {
  return {
    type: actionTypes.GET_EMPLOYEELIST,
    employeeList,
  };
}

export function _deleteEmployee(id) {
  return {
    type: actionTypes.DELETE_EMPLOYEE,
    id,
  };
}

export function _userLogin(user) {
  return {
    type: actionTypes.USER_LOGIN,
    user,
  };
}

export function _userLogout() {
  return {
    type: actionTypes.USER_LOGOUT,
  };
}

export function _userGet(user) {
  return {
    type: actionTypes.USER_GET,
    user,
  };
}
