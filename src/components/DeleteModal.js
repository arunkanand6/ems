import React from "react";

function DeleteModal(props) {
  return (
    <div>
      <div className="modal-header">
        <h3>Confirm Deletion</h3>
      </div>
      <div className="modal-body">
        Do you really want to delete this employee?
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
          onClick={() => {
            props.deleteEmp(props.modal.id);
            props.setModal({ ...props.modal, isOpen: false });
          }}
        >
          Yes
        </button>
      </div>
    </div>
  );
}

export default DeleteModal;
