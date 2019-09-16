// Test away!
import React from "react";
import { render } from "@testing-library/react";

import Display from "./Display";

test("Display Component displays if gate is open/closed and if it is locked/unlocked", () => {
  const display = render(<Display />);
  expect(display.getByText(/open/i));
  expect(display.getByText(/unlocked/i));
});

test('Display Component displays "Closed" if closed prop is true', () => {
  const display = render(<Display closed={true} />);
  expect(display.getByText(/closed/i));
});

test('Display Component displays "Open" if closed prop is false', () => {
  const display = render(<Display closed={false} />);
  expect(display.getByText(/open/i));
});

test('Display Component displays "Locked" if locked prop is true', () => {
  const display = render(<Display locked={true} />);
  expect(display.getByText(/locked/i));
});

test('Display Component displays "Unlocked" if locked prop is false', () => {
  const display = render(<Display locked={false} />);
  expect(display.getByText(/unlocked/i));
});

test("Display Component uses red-led class when locked", () => {
  const component = render(<Display locked={true} />);
  const locked = component.getByText(/locked/i);
  expect(locked.classList.contains("red-led")).toBe(true);
});

test("Display Component uses red-led class when closed", () => {
  const component = render(<Display closed={true} />);
  const closed = component.getByText(/closed/i);
  expect(closed.classList.contains("red-led")).toBe(true);
});

test("Display Component uses green-led class when unlocked", () => {
  const component = render(<Display locked={false} />);
  const unlocked = component.getByText(/unlocked/i);
  expect(unlocked.classList.contains("green-led")).toBe(true);
});

test("Display Component uses green-led class when open", () => {
  const component = render(<Display closed={false} />);
  const open = component.getByText(/open/i);
  expect(open.classList.contains("green-led")).toBe(true);
});
