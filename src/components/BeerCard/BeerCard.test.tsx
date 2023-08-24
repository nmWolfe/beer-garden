import { render, screen } from "@testing-library/react";
import BeerCard from "./BeerCard";

const name = "name";
const img = "image";
const tagline = "tagline";
const description = "blahblahblah";
const abv = 1;
const ibu = 2;
const created = "created";

it("should render the beer card", () => {
  render(
    <BeerCard
      name={name}
      image={img}
      tagline={tagline}
      description={description}
      abv={abv}
      ibu={ibu}
      created={created}
    />
  );

  const nameOne = screen.getByText("name");
  // The only way of accessing the class, without re-creating BeerCard w/ test data.
  expect(nameOne).toBeInTheDocument();
});

it("should render a tagline in the corresponding section", () => {
  render(
    <BeerCard
      name={name}
      image={img}
      tagline={tagline}
      description={description}
      abv={abv}
      ibu={ibu}
      created={created}
    />
  );

  const taglineOne = screen.getByText("tagline");

  expect(taglineOne).toBeInTheDocument();
});
