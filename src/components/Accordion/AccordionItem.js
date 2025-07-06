const AccordionItem = ({ children, title, active, onClick }) => {
  return (
    <li className={`accordion-item ${active ? "accordion-item--active" : ""}`}>
      <div
        className="accordion-item__header"
        onClick={() => onClick()}
        role="button"
        tabIndex={0}
      >
        <div className="container">
          <h3 className="accordion-item__title">
            <i
              className={`icon ${
                active ? "icon-chevron-up" : "icon-chevron-down"
              }`}
            ></i>
            {title}
          </h3>
        </div>
      </div>
      <div className="accordion-item__content">{children}</div>
    </li>
  );
};

export default AccordionItem;
