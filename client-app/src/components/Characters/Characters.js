import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useActions } from "../../hooks";
import Pagination from "../Pagination/Pagination";
import CharacterCard from "../CharacterCard/CharacterCard";
import "./Characters.css";

const TOTAL_PAGES = 42;

function Characters() {
  const [page, setPage] = useState(1);
  const [maxPageNumber, setMaxPageNumber] = useState(5);
  const [minPageNumber, setMinPageNumber] = useState(0);
  const { getCharacters, getFavorites, setFavorite } = useActions();

  const { data, error, loading } = useSelector((state) => state.characters);
  const { favorites } = useSelector((state) => state.favorites);

  const username = localStorage.getItem("username");

  useEffect(() => {
    getCharacters(page);
  }, [getCharacters, page]);

  useEffect(() => {
    getFavorites(username);
  }, [getFavorites, username]);

  const handleClick = (num) => {
    setPage(num);
  };

  const mappedCharacters = useMemo(() => {
    const userFav = favorites?.filter((o1) =>
      data.some((o2) => o1.id === o2.id)
    );

    const mapped = data.map((el) => ({
      id: el.id,
      name: el.name,
      species: el.species,
      image: el.image,
      isFavorite: userFav?.some((v) => v.id === el.id),
    }));

    return mapped;
  }, [data, favorites]);

  const handleSetFavorite = (id, name) => {
    setFavorite(username, id, name);
  };

  return (
    <>
      <div className="container">
        <div className="characters">
          {error && <h3>Error</h3>}
          {loading && <h3>Loading...</h3>}
          {!error &&
            !loading &&
            mappedCharacters.map((s) => (
              <CharacterCard
                key={s.id}
                id={s.id}
                name={s.name}
                species={s.species}
                image={s.image}
                isFavorite={s.isFavorite}
                handleSetFavorite={handleSetFavorite}
              />
            ))}
        </div>
      </div>
      {mappedCharacters.length > 0 && (
        <Pagination
          totalPages={TOTAL_PAGES}
          handleClick={handleClick}
          page={page}
          maxPageNumber={maxPageNumber}
          setMaxPageNumber={setMaxPageNumber}
          minPageNumber={minPageNumber}
          setMinPageNumber={setMinPageNumber}
        />
      )}
    </>
  );
}

export default Characters;
