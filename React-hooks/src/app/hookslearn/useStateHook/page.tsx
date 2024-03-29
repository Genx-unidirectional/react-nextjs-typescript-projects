import MoreOnUseState from "./usingdevtools";
import BasicUseState from "./basicUseState";
import ProductPage from "./productShowCase";
import UserInfoChange from "./netstedObj";
import QuizApp from "./stateManage";

export default function Page() {
  const componentArr = [
    <BasicUseState />,
    <MoreOnUseState />,
    <ProductPage />,
    <UserInfoChange />,
    <QuizApp />,
  ];
  return (
    <>
      {componentArr.map((component) => {
        return (
          <div className="flex relative w-full flex-col h-screen justify-center items-center">
            {component}
            <hr className="w-full h-[2px] absolute bottom-0 dark:bg-white bg-black mx-auto sm:w-1/2" />
          </div>
        );
      })}
    </>
  );
}
