import React from "react";
import renderer from "react-test-renderer";
import SnapshotTest from "../pages/snapshotTest";

it("should render correctly", () => {
  const tree = renderer.create(<SnapshotTest />).toJSON();
  expect(tree).toMatchSnapshot();
});
