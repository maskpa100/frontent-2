import { PropsWithChildren } from "react";
import Header from "../Header/Header";

export const PageWrapper = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
