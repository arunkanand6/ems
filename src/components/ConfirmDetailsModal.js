import React from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function ConfirmDetailsModal(props) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="modal-header">
        <h3>Confirm Details</h3>
      </div>
      <div className="modal-body">
        <table className="table">
          <tbody>
            {props.employee.id && (
              <tr>
                <td>ID:</td>
                <td>{props.employee.id}</td>
              </tr>
            )}
            <tr>
              <td>Name:</td>
              <td>{props.employee.name}</td>
            </tr>
            <tr>
              <td>Designation:</td>
              <td>{props.employee.designation}</td>
            </tr>
            <tr>
              <td>Salary:</td>
              <td>{props.employee.salary}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="modal-footer">
        <button
          className="btn btn-warning"
          onClick={() => {
            props.setModal({ ...props.modal, isOpen: false });
            console.log(props.modal);
          }}
        >
          No
        </button>
        <button
          className="btn btn-danger"
          onClick={async () => {
            await props.confirmDetails(props.employee);
            navigate("/");
            toast.success("Employee Saved");
            props.setModal({ ...props.modal, isOpen: false });
          }}
        >
          Yes
        </button>
      </div>
    </div>
  );
}

export default ConfirmDetailsModal;
