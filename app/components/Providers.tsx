"use client";

import StyledComponentsRegistry from "../lib/registry";
import GlobalStyles from "../styles/GlobalStyles";

const Providers = (props: React.PropsWithChildren) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      {props.children}
    </StyledComponentsRegistry>
  );
};

export default Providers;
