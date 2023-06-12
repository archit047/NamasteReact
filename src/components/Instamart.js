import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h3 className="font-bold text-xl">{title}</h3>
      {isVisible ? (
        <button
          onClick={() => setIsVisible(false)}
          className="cursor-pointer underline"
        >
          Hide
        </button>
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="cursor-pointer underline"
        >
          show
        </button>
      )}
      {isVisible && <p>{description}</p>}
    </div>
  );
};

const Instamart = () => {
  const [visibleSection, setIsVisibleSection] = useState("about");
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
      <Section
        title={"About Instamart"}
        description={"this is the about section of instamart"}
        isVisible={visibleSection === "about"}
        setIsVisible={() => setIsVisibleSection("about")}
      />
      <Section
        title={"Team Instamart"}
        description={
          "this is the team section of Instamart. The team has 50 members...."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => setIsVisibleSection("team")}
      />
      <Section
        title={"Careers"}
        description={
          "this is the team section of Instamart. The team has 50 members...."
        }
        isVisible={visibleSection === "career"}
        setIsVisible={() => setIsVisibleSection("career")}
      />
    </div>
  );
};

export default Instamart;
