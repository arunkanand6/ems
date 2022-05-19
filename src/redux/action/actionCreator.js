import axios from "axios";
import * as action from "./actions";
import url from "./url";

export const addEmployee = (employee) => {
  return async (dispatch) => {
    return await axios
      .post(url.addEmployee, employee, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((result) => {
        if (employee.id) {
          dispatch(action._editEmployee(result.data));
        } else {
          dispatch(action._addEmployee(result.data));
        }
      })
      .catch((err) => console.log(err.response.data));
  };
};

export function getEmployee(id) {
  return async function (dispatch) {
    return axios
      .get(url.getEmployee + `${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((result) => {
        dispatch(action._getEmployee(result.data));
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
}

export const getEmployeeList = () => {
  return async (dispatch) => {
    return await axios
      .get(url.getEmployeeList, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((result) => {
        dispatch(action._getEmployeeList(result.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deleteEmployee = (id) => {
  return async (dispatch) => {
    return await axios
      .delete(url.deleteEmployee + `${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then(dispatch(action._deleteEmployee(id)))
      .catch((err) => console.log(err.response.data));
  };
};

export const userLogin = (user, navigate) => {
  return async (dispatch) => {
    return await axios.post(url.login, user).then((result) => {
      console.log(result);
      localStorage.setItem("jwt", result.data.jwt);
      localStorage.setItem("username", result.data.username);
      dispatch(action._userLogin(result.data));
      navigate("/");
    });
  };
};

export const userSignup = (user) => {
  return async (dispatch) => {
    return await axios
      .post(url.signup, user)
      .then((result) => {
        console.log(result.status);
      })
      .catch((error) => {
        if (error.response.status == 400) {
          return <div>user id taken</div>;
        }
      });
  };
};

export const userGet = (username) => {
  return async (dispatch) => {
    return await axios
      .get(url.getUser + `${username}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((result) => {
        dispatch(action._userGet(result.data));
      });
  };
};

// export const userGet = (username) => {
//   return async (dispatch) => {
//     console.log("hi");
//     return await axios
//       .get(`http://localhost:9001/api/get/${username}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("jwt")}`,
//         },
//       })
//       .then((result) => {
//         console.log(result.data);
//         dispatch(action._userGet(result.data));
//       });
//   };
// };
