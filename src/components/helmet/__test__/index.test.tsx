import React from "react";
import { render } from "@testing-library/react";

import PageTitle from "../index";

it("render component", () => {
  render(<PageTitle title="title" />);
});
