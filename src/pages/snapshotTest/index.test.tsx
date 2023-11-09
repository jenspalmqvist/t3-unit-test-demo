import React from "react";
import renderer from "react-test-renderer";
import SnapshotTest from ".";

it("should render correctly", () => {
  const tree = renderer.create(<SnapshotTest />).toJSON();
  expect(tree).toMatchSnapshot();
});
