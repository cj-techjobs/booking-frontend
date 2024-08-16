import React, { useEffect, useState } from "react";

const Tabs = (data) => {
  const [tabs, setTabs] = useState([]);
  const [activeTabs, setActiveTabs] = useState(0);

  useEffect(() => {
    console.log(data.data);
    setTabs(data.data);
  }, [data.data]);

  const changeTabs = (index) => {
    setActiveTabs(index);
  };

  return (
    <div className="flex">
      <div>
        {tabs.length > 0 &&
          tabs.map((m, tabIndex) => (
            <div key={tabIndex} className="cursor-pointer">
              <p
                onClick={(e) => setActiveTabs(tabIndex)}
                style={{
                  backgroundColor: activeTabs === tabIndex ? "#f6f2f9" : "",
                }}
                className="p-4 py-6 "
              >
                {m.title}
              </p>
            </div>
          ))}
      </div>
      {tabs.length > 0 && (
        <div className="flex flex-1 flex-col p-2">
          {tabs[activeTabs].content &&
            tabs[activeTabs].content.length > 0 &&
            tabs[activeTabs].content.map((m, i) => (
              <div key={i} className="flex gap-4">
                <input className="text-lg" type="checkbox" id={i} />
                <label className="text-lg" htmlFor={i}>
                  {m[i]}
                </label>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Tabs;
