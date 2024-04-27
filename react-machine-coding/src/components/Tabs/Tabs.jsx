import React, { useState } from "react";
import "./Tabs.css";
export const Tabs = () => {
  const tabs = [
    {
      id: 1,
      title: "Tab 1",
      desc: "lorem Ips incorrectly formatted incorrectly in HTML.",
    },
    {
      id: 2,
      title: "Tab 2",
      desc: "lorem kahi pn pre-formatted.",
    },
    {
      id: 3,
      title: "Tab 3",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente hic accusamus recusandae blanditiis dolorum porro eius corporis fugit eos dicta cupiditate aut reiciendis, fuga veritatis non dolore distinctio nisi alias!",
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="container">
      <div className="tab__switch">
        {tabs.map((item, index) => (
          <Tab
            key={item.id}
            title={item.title}
            handleSelect={() => {
              setActiveTab(index);
            }}
            activeTab={activeTab === index}
          />
        ))}
      </div>
      <div className="desc">{tabs[activeTab].desc}</div>
    </div>
  );
};

const Tab = ({ title, activeTab, handleSelect }) => {
  return (
    <div className={`tab ${activeTab && "active"}`} onClick={handleSelect}>
      {title}
    </div>
  );
};
