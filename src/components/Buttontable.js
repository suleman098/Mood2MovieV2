// src/components/ButtonTable.js
import React from "react";
import Button from "./Button";

const ButtonTable = ({ genres, onGenreClick, genreEmojis }) => {
  const rows = [];
  for (let i = 0; i < genres.length; i += 5) {
    rows.push(genres.slice(i, i + 5));
  }

  return (
    <div className="flex justify-center">
      <table className="border-collapse">
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((genre) => (
                <td key={genre.id} className="border-0">
                  <Button
                    className={
                      "btn btn-neutral w-56 h-24 font-bold text-3xl mr-5 mb-5 btn-outline nunito  "
                    }
                    onClick={() =>
                      onGenreClick(
                        genre.id,
                        genreEmojis[genre.id].mood,
                        genreEmojis[genre.id].emoji
                      )
                    }
                  >
                    {genreEmojis[genre.id].emoji} <br />
                    {genreEmojis[genre.id].mood}
                  </Button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ButtonTable;
