import React from "react";
import Modal from "react-modal";
import ConfirmDetailsModal from "./ConfirmDetailsModal";
import DeleteModal from "./DeleteModal";
import { PropTypes } from "prop-types";

function CustomModal(props) {
  return (
    <div>
      <Modal isOpen={props.modal.isOpen} ariaHideApp={false}>
        <div>
          <button
            className="float-end btn btn-danger"
            onClick={() => props.setModal({ ...props.modal, isOpen: false })}
          >
            X
          </button>
        </div>
        {props.modal.type === "DELETE" && (
          <DeleteModal
            deleteEmp={props.deleteEmp}
            modal={props.modal}
            setModal={props.setModal}
          />
        )}
        {props.modal.type === "CONFIRM_DETAILS" && (
          <ConfirmDetailsModal
            modal={props.modal}
            setModal={props.setModal}
            employee={props.employee}
            confirmDetails={props.confirmDetails}
          />
        )}
      </Modal>
    </div>
  );
}

CustomModal.propTypes = {
  modal: PropTypes.object.isRequired,
  setModal: PropTypes.func.isRequired,
};

export default CustomModal;
