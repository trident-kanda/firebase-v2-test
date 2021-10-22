import { ReactNode, VFC } from "react";
const Main: VFC<{ children: ReactNode }> = (props) => {
  return <main className="max-w-3xl lg:w-4/5 m-auto">{props.children}</main>;
};

export default Main;
