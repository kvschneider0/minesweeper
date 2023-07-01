import { FC } from "react";
import { getNewGame } from "./helpers/newGame";

const HEIGHT = 16;
const WIDTH = 16;
const TILE_LENGTH = "30px";
const TILE_BORDER_LENGTH = "5px";
const NUM_BOMBS = 40;

const colors = {
  gray: "#c0c0c0",
  darkGray: "#808080",
  white: "#ffffff",
  1: "#0100fa",
  2: "#008000",
  3: "#fd0100",
  4: "#010080",
  5: "#7e0200",
  6: "#00807f",
  7: "#000000",
  8: "#808080",
}

const game = getNewGame(HEIGHT, WIDTH, NUM_BOMBS);

const Game: FC = () => {
  const tiles = [];
  for (let i = 0; i < HEIGHT; i++) {
    for (let j = 0; j < WIDTH; j++) {
      const index = j + (WIDTH * i);
      const style = {
        width: TILE_LENGTH,
        height: TILE_LENGTH,
        backgroundColor: colors.gray,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderLeftColor: colors.white, // why??
        borderLeft: `${TILE_BORDER_LENGTH} solid ${colors.white}`,
        borderTop: `${TILE_BORDER_LENGTH} solid ${colors.white}`,
        borderRight: `${TILE_BORDER_LENGTH} solid ${colors.darkGray}`,
        borderBottom: `${TILE_BORDER_LENGTH} solid ${colors.darkGray}`,
        color: colors[game[index]],
        fontFamily: "verdana, sans-serif",
        fontWeight: "bold",
        fontSize: "x-large"
      }
      const display = game[index] ? (game[index] === -1 ? "X" : game[index]) : "";
      const ithSquare = (
        <div key={index} style={style}>
          {display}
        </div>
      );

      tiles.push(ithSquare)
    }
  }

  return (
    <div
      style={{
        alignContent: "center",
        alignItems: "center",
        margin: "auto",
        width: "100%"
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${WIDTH}, calc(${TILE_LENGTH} + ${TILE_BORDER_LENGTH} + ${TILE_BORDER_LENGTH}))`,
          gridTemplateRows: `repeat(${HEIGHT}, calc(${TILE_LENGTH} + ${TILE_BORDER_LENGTH} + ${TILE_BORDER_LENGTH}))`,
          position: "relative",
        }}
      >
        {tiles}
      </div>
    </div>
  );
}

export default Game;