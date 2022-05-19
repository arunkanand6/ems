import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getEmployee, deleteEmployee } from "../redux/action/actionCreator";
import CustomModal from "./CustomModal";

function Employee() {
  const employee = useSelector((state) => state.employee.employee);
  const role = useSelector((state) => state.user.user.role);
  const dispatch = useDispatch();

  const param = useParams();
  const navigate = useNavigate();

  const [modal, setModal] = useState({
    isOpen: false,
    id: 0,
    type: "",
  });

  useEffect(() => {
    dispatch(getEmployee(param.id));
  }, []);

  const confirmDelete = (event) => {
    setModal({
      isOpen: true,
      id: event.target.id,
      type: "DELETE",
    });
  };

  const deleteEmp = (id) => {
    dispatch(deleteEmployee(id));
    navigate("/");
    toast.success("Employee Deleted");
  };

  return (
    <div>
      <h1 className="text-primary">{employee.name}</h1>
      <table className="table">
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{employee.id}</td>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{employee.name}</td>
          </tr>
          <tr>
            <td>Designation:</td>
            <td>{employee.designation}</td>
          </tr>
          <tr>
            <td>Salary:</td>
            <td>{employee.salary}</td>
          </tr>
        </tbody>
      </table>
      {role === "admin" && (
        <div>
          <div className="btn bg-warning m-1">
            <Link
              className="text-decoration-none"
              to={`/update/${employee.id}`}
            >
              Update
            </Link>
          </div>
          <div
            className="btn bg-danger m-1"
            onClick={confirmDelete}
            id={employee.id}
          >
            Delete
          </div>
          <CustomModal
            deleteEmp={deleteEmp}
            modal={modal}
            setModal={setModal}
          />
        </div>
      )}
    </div>
  );
}

export default Employee;
