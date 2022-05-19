import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import EmpForm from "../EmpForm";

configure({ adapter: new Adapter() });

const render = (args) => {
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

  return shallow(<EmpForm {...props} />);
};

describe("Employee Form Component", () => {
  describe("renders all input elements and its labels", () => {
    it("renders name input element", () => {
      const wrapper = render();
      const inputElements = wrapper.find(".form-control");
      expect(inputElements.length).toBe(3);
      expect(inputElements.at(0).props().placeholder).toBe(
        "enter employee name here..."
      );
      expect(inputElements.at(2).props().placeholder).toBe(
        "enter employee salary here..."
      );
      const labelElements = wrapper.find("label");
      expect(labelElements.length).toBe(3);
      expect(labelElements.at(0).text()).toBe("Name");
      expect(labelElements.at(1).text()).toBe("Designation");
      expect(labelElements.at(2).text()).toBe("Salary");
    });
  });
});
