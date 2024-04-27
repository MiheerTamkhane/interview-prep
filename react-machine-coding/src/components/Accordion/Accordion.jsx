import { useState } from "react";
import "./Accordion.css";
const data = [
  {
    id: 1,
    title: "Tab 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi explicabo officia voluptatibus dolorum voluptate accusantium optio necessitatibus neque deleniti? Odio.",
  },
  {
    id: 2,
    title: "Tab 2",
    desc: "    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat culpa sint harum? Dignissimos, quasi laborum dolor labore dolorem possimus assumenda deleniti doloremque? Cumque minima provident accusantium reiciendis! Ducimus asperiores tenetur illum dignissimos qui libero commodi vel, magni sequi! Illum explicabo consequatur a tenetur.",
  },
  {
    id: 3,
    title: "Tab 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente hic accusamus recusandae blanditiis dolorum porro eius corporis fugit eos dicta cupiditate aut reiciendis, fuga veritatis non dolore distinctio nisi alias!",
  },
];

export const Accordion = () => {
  return (
    <div>
      {data.map((item) => (
        <AccordionWrapper
          key={item.id}
          title={item.title}
          content={item.desc}
        />
      ))}
    </div>
  );
};

const AccordionWrapper = ({ title, content }) => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="wrapper">
      <div className="heading" onClick={() => setExpand(!expand)}>
        <h3>{title}</h3>
        <span>{expand ? "-" : "+"}</span>
      </div>
      <div className={expand ? "content show" : "content"}>{content}</div>
    </div>
  );
};
