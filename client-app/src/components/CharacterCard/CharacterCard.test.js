import { screen } from "@testing-library/react";
import { render } from "../../test-utils";
import CharacterCard from "./CharacterCard";

describe("Character Card Component", () => {
  const character = {
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    name: "Rick Sanchez",
    species: "Human",
    id: 1,
    isFavorite: true,
  };

  beforeEach(() => {
    render(
      <CharacterCard
        id={character.id}
        name={character.name}
        species={character.species}
        image={character.image}
        isFavorite={character.isFavorite}
      />
    );
  });

  test("renders received id", () => {
    expect(screen.getByText(character.name)).toBeInTheDocument();
  });
  test("renders image", () => {
    const image = screen.getByTestId("image");
    expect(image).toBeInTheDocument();
  });
  test("renders received species", () => {
    expect(screen.getByText(character.species)).toBeInTheDocument();
  });
});
