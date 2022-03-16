import React from "react";
import { dataAccoding } from "../../data/AccodingData";
const AccodingSection = () => {
  const Accordion = ({ data: { title, content, list } }) => {
    const [isOpen, setOpen] = React.useState(false);
    return (
      <div className="aq_box">
        <div className="aq_box_item" onClick={() => setOpen(!isOpen)}>
          <h4>{title}</h4>
        </div>
        <div className={`aq_box_item_content ${!isOpen ? "active" : ""}`}>
          <div className="aq_content">{content}</div>
          {list && list()}
        </div>
      </div>
    );
  };
  return (
    <div>
      <div className="div">
        <p>Our Faq's</p>
        <h2>Have any questions?</h2>

        <div>
          {dataAccoding.map((item, key) => (
            <React.Fragment key={key}>
              <Accordion data={item} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccodingSection;
