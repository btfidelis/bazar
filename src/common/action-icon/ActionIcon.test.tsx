import { render } from "@testing-library/react";
import React from "react";
import ActionIcon from "./ActionIcon";

test("renders snapshot", () => {
  const { container } = render(
    <ActionIcon
      onClick={() => {
        console.log("test");
      }}
      alt={"alt"}
      src={"src"}
    />
  );
  expect(container).toMatchSnapshot();
});