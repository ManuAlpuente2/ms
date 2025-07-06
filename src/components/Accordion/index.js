import "./Accordion.scss";
import AccordionItem from "./AccordionItem";

const Accordion = ({ children, ...props }) => {
  return (
    <ul className="accordion" {...props}>
      {children}
    </ul>
  );
};

export default Accordion;
export { AccordionItem };
