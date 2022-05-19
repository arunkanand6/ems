import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { getEmployeeList, deleteEmployee } from "../redux/action/actionCreator";
import CustomModal from "./CustomModal";

export default function Home(props) {
  const employeeList = useSelector((state) => state.employee.employeeList);
  const role = useSelector((state) => state.user.user.role);
  const dispatch = useDispatch();

  const [modal, setModal] = useState({
    isOpen: false,
    id: 0,
    type: "",
  });

  const confirmDelete = (event) => {
    setModal({
      isOpen: true,
      id: event.target.id,
      type: "DELETE",
    });
  };

  const deleteEmp = (id) => {
    dispatch(deleteEmployee(id));
    // setIsOpen(false);
  };

  useEffect(() => {
    dispatch(getEmployeeList());
  }, []);

  return (
    <div>
      <h1>List of Employees</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employeeList.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>
                  <Link
                    to={`/view/${employee.id}`}
                    className="text-decoration-none"
                  >
                    {employee.name}
                  </Link>
                </td>
                <td>{employee.designation}</td>
                <td>{employee.salary}</td>

                <td>
                  {role === "admin" && (
                    <div className="btn bg-warning m-1">
                      <Link
                        className="text-decoration-none"
                        to={`/update/${employee.id}`}
                      >
                        Update
                      </Link>
                    </div>
                  )}
                </td>
                <td>
                  {role === "admin" && (
                    <div
                      className="btn bg-danger m-1"
                      onClick={confirmDelete}
                      id={employee.id}
                    >
                      Delete
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {role === "admin" && (
        <Link className="btn btn-primary" to="/add">
          Add Employee
        </Link>
      )}
      <CustomModal deleteEmp={deleteEmp} modal={modal} setModal={setModal} />
    </div>
  );
}
