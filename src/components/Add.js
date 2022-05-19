import axios from "axios";
import { useEffect, useState } from "react";
import EmpForm from "./EmpForm";
import { useNavigate, useParams } from "react-router-dom";
import { addEmployee } from "../redux/action/actionCreator";
import { useDispatch } from "react-redux";

function Add(props) {
  let navigate = useNavigate();
  let param = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (param.id) {
      axios
        .get(`http://localhost:9001/api/get/${param.id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
        .then((result) => {
          setEmployee({ ...result.data });
        });
    }
  }, []);

  const [employee, setEmployee] = useState({
    name: "",
    designation: "",
    salary: "",
  });
  const [error, setError] = useState({
    name: false,
    designation: false,
    salary: false,
  });
  const [modal, setModal] = useState({
    isOpen: false,
    id: 0,
    type: "",
  });

  function handleChange(event) {
    setEmployee({ ...employee, [event.target.name]: event.target.value });
    var type = event.target.name;
    console.log(error);
    switch (type) {
      case "name":
        if (event.target.value.length < 3 || event.target.value.length > 20) {
          setError({ ...error, name: true });
        } else {
          setError({ ...error, name: false });
        }
        break;
      case "designation":
        if (event.target.value === "") {
          setError({ ...error, designation: true });
        } else {
          setError({ ...error, designation: false });
        }
        break;
      case "salary":
        if (event.target.value < 20000.0 || event.target.value > 500000.0) {
          setError({ ...error, salary: true });
        } else {
          setError({ ...error, salary: false });
        }
        break;
      default:
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!error.name && !error.name && !error.salary) {
      setModal({ isOpen: true, type: "CONFIRM_DETAILS", id: 0 });
      // dispatch(addEmployee(employee, navigate));
    }
  }

  async function confirmDetails(employee) {
    await dispatch(addEmployee(employee));
  }

  return (
    <EmpForm
      employee={employee}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      confirmDetails={confirmDetails}
      error={error}
      modal={modal}
      setModal={setModal}
    />
  );
}

export default Add;
