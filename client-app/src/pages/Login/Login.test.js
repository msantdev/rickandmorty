import { screen, fireEvent } from "@testing-library/react";
import { render } from "../../test-utils";
import { BrowserRouter as Router } from "react-router-dom";

import Login from "./Login";

describe("Login Page", () => {
  beforeEach(() => {
    render(
      <Router>
        <Login />
      </Router>
    );
  });

  test("username input should change on typing", () => {
    const inputSearch = screen.getByTestId("username");
    fireEvent.change(inputSearch, { target: { value: "user123" } });
    expect(inputSearch.value).toBe("user123");
  });
});
