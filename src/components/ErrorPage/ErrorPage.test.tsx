import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";

it("should render Error page with correct content & link", () => {
  render(
    // Memory router provides routing context for Link.
    <MemoryRouter>
      <ErrorPage />
    </MemoryRouter>
  );

  const error404 = screen.getByText("Error 404");
  const errorMessage = screen.getByText(
    "Page not found.. This Beer must have gone for a walk about.."
  );
  const link = screen.getByText("Back to the Beers");

  expect(error404).toBeInTheDocument();
  expect(errorMessage).toBeInTheDocument();
  expect(link).toBeInTheDocument();
});
