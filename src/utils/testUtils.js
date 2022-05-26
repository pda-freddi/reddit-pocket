import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../app/store.js"

const Wrapper = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        {children}
      </Provider>
    </BrowserRouter>
  );
};

const customRender = (ui, options) => {
  return render(ui, {wrapper: Wrapper, ...options});
};

export * from "@testing-library/react";
export { customRender as render };

