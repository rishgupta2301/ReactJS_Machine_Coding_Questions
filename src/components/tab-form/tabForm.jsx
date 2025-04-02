import { useState, useEffect } from "react";
import Interests from "./Interests";
import Profile from "./Profile";
import Settings from "./Settings";
import "./tabformstyles.css";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [err, setErr] = useState({});
  const [data, setData] = useState({
    name: "Rishabh",
    age: 24,
    email: "Rishabh@gmail.com",
    interests: ["travel", "code"],
    theme: "light",
  });
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const errors = {};
        if (!data.name || data.name.length < 2) {
          errors.name = "Name is not valid";
        }
        if (!data.age || data.age < 18) {
          errors.age = "Age is not valid";
        }
        if (!data.email || data.email.length < 2) {
          errors.email = "Email is not valid";
        }
        setErr(errors);
        return errors.name || errors.age || errors.email ? false : true;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: () => {
        const errors = {};
        if (data.interests.length < 1) {
          errors.interests = "Select at least 1 interest";
        }
        setErr(errors);
        return errors.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      },
    },
  ];

  const CurrentActiveTab = tabs[activeTab]?.component;

  return (
    <div>
      <div className="headings">
        {tabs.map((tab, index) => {
          return (
            <div
              onClick={() => setActiveTab(index)}
              className="heading-div"
              key={index}
            >
              {tab.name}
            </div>
          );
        })}
      </div>
      <div className="container">
        <CurrentActiveTab data={data} setData={setData} err={err} />
      </div>
      <div>
        {activeTab > 0 && (
          <button
            onClick={() => {
              if (tabs[activeTab].validate()) {
                setActiveTab(activeTab - 1);
              }
            }}
          >
            Prev
          </button>
        )}
        {activeTab < tabs.length - 1 && (
          <button
            onClick={() => {
              if (tabs[activeTab].validate()) {
                setActiveTab(activeTab + 1);
              }
            }}
          >
            Next
          </button>
        )}
        {activeTab === tabs.length - 1 && (
          <button
            onClick={() => {
              console.log(data);
            }}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default TabForm;
