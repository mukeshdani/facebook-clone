import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders sadaf banning", () => {
  render(<App />);
  const linkElement = screen.getByText(/sadaf/i);
  expect(linkElement).toBeInTheDocument();
});
