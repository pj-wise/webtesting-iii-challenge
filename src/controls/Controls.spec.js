// Test away!
import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Controls from "./Controls";

test('Controls Component provides buttons to toggle "closed" and "locked" states', () => {
  const { getAllByRole } = render(<Controls />);
  getAllByRole("button");
});

test("Controls Component changes button text to reflect state of if clicked when unlocked", () => {
  const controls = render(<Controls locked={false} />);

  const closeGate = controls.getByText(/close gate/i);
  fireEvent.click(closeGate);
  controls.findByText(/closed/i);

  const lockGate = controls.getByText(/lock gate/i);
  fireEvent.click(lockGate);
  controls.findByText(/locked/i);
});

test("Controls Component changes button text to reflect state of if clicked when locked", () => {
  const controls = render(<Controls locked={true} />);

  const unlockGate = controls.getByText(/unlock gate/i);
  fireEvent.click(unlockGate);
  controls.findByText(/unlocked/i);
});

test("Controls Component changes button text to reflect state of if clicked when closed", () => {
  const controls = render(<Controls closed={true} />);

  const openGate = controls.getByText(/open gate/i);
  fireEvent.click(openGate);
  controls.findByText(/opened/i);
});

test("Controls Component disables locked button if gate is open", () => {
  const component = render(<Controls locked={false} closed={false} />);
  const button = component.getByText(/lock gate/i);
  expect(button.disabled).toBe(true);
});

test("Controls Component disables closed button if gate is locked", () => {
  const component = render(<Controls locked={true} closed={true} />);
  const button = component.getByText(/open gate/i);
  expect(button.disabled).toBe(true);
});
