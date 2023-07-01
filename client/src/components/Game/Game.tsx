import { FC } from "react";

const HEIGHT = 16;
const WIDTH = 16;
const TILE_LENGTH = "30px";
const TILE_BORDER_LENGTH = "5px";

const colors = {
  gray: "#c0c0c0",
  darkGray: "#808080",
  white: "#ffffff",
  red: "#ff0000",
  green: "#008000",
  blue: "#0000ff",
}

const Game: FC = () => {

  const tiles = [];
  for (let i = 0; i < HEIGHT; i++) {
    for (let j = 0; j < WIDTH; j++) {
      const style = {
        width: TILE_LENGTH,
        height: TILE_LENGTH,
        backgroundColor: colors.gray,
        borderLeftColor: colors.white,
        borderLeft: `${TILE_BORDER_LENGTH} solid ${colors.white}`,
        borderTop: `${TILE_BORDER_LENGTH} solid ${colors.white}`,
        borderRight: `${TILE_BORDER_LENGTH} solid ${colors.darkGray}`,
        borderBottom: `${TILE_BORDER_LENGTH} solid ${colors.darkGray}`,        
      }
      const ithSquare = <div key={j + (8 * i)} style={style}></div>

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
      <h2>game page</h2>
      <div
        style={{
          height: "75vh",
          width: "75vw",
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