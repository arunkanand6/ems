import { render, screen } from "@testing-library/react";

import EmpForm from "../EmpForm";

const empFormRenderer = (args) => {
  const defaultProps = {
    employee: {
      name: "",
      designation: "",
      salary: 0,
    },
    handleChange: jest.fn(),
    handleSubmit: jest.fn(),
    confirmDetails: jest.fn(),
    error: {
      name: false,
      designation: false,
      salary: false,
    },
    modal: {
      isOpen: false,
      id: 0,
      type: "",
    },
    setModal: jest.fn(),
  };

  const props = { ...defaultProps, ...args };

  render(<EmpForm {...props} />);
};

describe("Employee Form Component", () => {
  describe("renders all input elements and its labels", () => {
    beforeEach(() => {
      empFormRenderer();
    });
    it("renders name input element", () => {
      const nameElement = screen.getByTitle("name");
      expect(nameElement.placeholder).toBe("enter employee name here...");
    });
    it("renders designation select element", () => {
      const designationElement = screen.getByTitle("designation");
      expect(designationElement).toBeInTheDocument();
    });
    it("renders salary input element", () => {
      const salaryElement = screen.getByTitle("salary");
      expect(salaryElement.placeholder).toBe("enter employee salary here...");
    });
    it("renders name element label", () => {
      const nameLabel = screen.getByText("Name");
      expect(nameLabel).toBeInTheDocument();
    });
    it("renders designation element label", () => {
      const designationLabel = screen.getByText("Designation");
      expect(designationLabel).toBeInTheDocument();
    });
    it("renders salary element label", () => {
      const salaryLabel = screen.getByText("Salary");
      expect(salaryLabel).toBeInTheDocument();
    });
    it("renders submit button", () => {
      const submitElement = screen.getByRole("button", { name: "Submit" });
      expect(submitElement).toBeInTheDocument();
    });
    it("doesn't render modal element", () => {
      const modalElement = screen.queryByTestId("modal");
      expect(modalElement).not.toBeInTheDocument();
    });
  });
});
