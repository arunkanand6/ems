import { actionTypes } from "../action/actionType";

const initialState = {
  employeeList: [],
  employee: {
    id: "",
    name: "",
    designation: "",
    salary: 0,
  },
};

function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_EMPLOYEE:
      return {
        ...state,
        employeeList: [...state.employeeList, action.employee],
      };

    case actionTypes.EDIT_EMPLOYEE:
      return {
        ...state,
        employeeList: [
          ...state.employeeList.filter((emp) => emp.id !== action.employee.id),
          action.employee,
        ],
      };

    case actionTypes.GET_EMPLOYEELIST:
      return { ...state, employeeList: [...action.employeeList] };

    case actionTypes.DELETE_EMPLOYEE:
      return {
        ...state,
        employeeList: state.employeeList.filter((emp) => emp.id !== action.id),
      };

    case actionTypes.GET_EMPLOYEE:
      return { ...state, employee: { ...action.employee } };

    case actionTypes.USER_LOGOUT:
      return initialState;

    default:
      return state;
  }
}

export default employeeReducer;
