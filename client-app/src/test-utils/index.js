import { render as rtlRender } from "@testing-library/react";

import { Provider } from "react-redux";
import { store } from "../redux";

export const render = (component) =>
  rtlRender(<Provider store={store}>{component}</Provider>);
