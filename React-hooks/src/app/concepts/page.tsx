"use client";
import ImageLoad from "./imageLoad";
import ChatApp from "./chatApp";
import ContactManager from "./contactWithEdit";
import EmailCollapse from "./emailCollapse";
import Todo from "./todo";
import FormOrThanks from "./formWithCondition";

const Page = () => {
  const componentArr = [
    <ChatApp />,
    <ContactManager />,
    <ImageLoad />,
    <EmailCollapse />,
    <Todo />,
    <FormOrThanks />,
  ];
  return (
    <div className="min-h-screen">
      {componentArr.map((component, idx) => {
        return (
          <div key={idx} className="h-screen flex justify-center items-center">
            {component}
          </div>
        );
      })}
    </div>
  );
};
export default Page;
