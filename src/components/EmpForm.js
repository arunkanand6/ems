import { PropTypes } from "prop-types";
import CustomModal from "./CustomModal";

function EmpForm(props) {
  return (
    <div className="container-fluid">
      <form className="form-group" onSubmit={props.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          type="text"
          id="name"
          name="name"
          title="name"
          placeholder="enter employee name here..."
          onChange={props.handleChange}
          value={props.employee.name}
        />
        {props.error.name && <div>Name should be 3 to 20 characters</div>}
        <label htmlFor="designation">Designation</label>
        <select
          id="designation"
          name="designation"
          title="designation"
          onChange={props.handleChange}
          value={props.employee.designation}
          className="form-control"
        >
          <option value="">--select--</option>
          <option value="SOFTWARE_ENGINEER">Software Engineer</option>
          <option value="SENIOR_SOFTWARE_ENGINEER">
            Senior Software Engineer
          </option>
          <option value="ASSOCIATE_CONSULTANT">Associate Consultant</option>
          <option value="CONSULTANT">Consultant</option>
          <option value="SENIOR_CONSULTANT">Senior Consultant</option>
        </select>
        {props.error.designation && (
          <div className="text-danger">Please Select a designation</div>
        )}
        <label htmlFor="salary">Salary</label>
        <input
          type="number"
          id="salary"
          name="salary"
          title="salary"
          step="0.01"
          onChange={props.handleChange}
          value={props.employee.salary}
          placeholder="enter employee salary here..."
          className="form-control"
        />
        {props.error.salary && (
          <div>Salary should be in the range of 20000.0 to 500000.0</div>
        )}
        <div className="text-center m-3">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
      <CustomModal
        modal={props.modal}
        setModal={props.setModal}
        employee={props.employee}
        confirmDetails={props.confirmDetails}
      />
    </div>
  );
}

EmpForm.propTypes = {
  employee: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object.isRequired,
};

export default EmpForm;
