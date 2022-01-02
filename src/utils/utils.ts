import { pipesAtDown, pipesAtLeft, pipesAtRight, pipesAtUp } from "./constants";

const isAtTop = (y: number) => {
  return y === 0;
};

const isAtBottom = (y: number, columns: number, pipesLength: number) => {
  return y === pipesLength / columns;
};

const isAtRight = (x: number, columns: number) => {
  return x === columns - 1;
};

const isAtLeft = (x: number) => {
  return x === 0;
};

const isPluggedRight = (
  x: number,
  columns: number,
  pipes: string[],
  myIndex: number
) => {
  if (isAtRight(x, columns)) return false;
  else {
    const atMyRight = pipes[myIndex + 1];
    return pipesAtRight.some((p) => p === atMyRight);
  }
};

const isPluggedLeft = (x: number, pipes: string[], myIndex: number) => {
  if (isAtLeft(x)) return false;
  else {
    const atMyLeft = pipes[myIndex - 1];
    return pipesAtLeft.some((p) => p === atMyLeft);
  }
};

const isPluggedUp = (
  y: number,
  pipes: string[],
  columns: number,
  myIndex: number
) => {
  if (isAtTop(y)) return false;
  else {
    const atMyUp = pipes[myIndex - columns];
    return pipesAtUp.some((p) => p === atMyUp);
  }
};

const isPluggedDown = (
  y: number,
  columns: number,
  pipes: string[],
  myIndex: number
) => {
  if (isAtBottom(y, columns, pipes.length)) return false;
  else {
    const atMyDown = pipes[myIndex + columns];
    return pipesAtDown.some((p) => p === atMyDown);
  }
};

export const isPipePlugged = (
  pipe: string,
  pipes: string[],
  myIndex: number,
  columns: number,
  x: number,
  y: number
) => {
  if (pipe === "┏") {
    return (
      isPluggedDown(y, columns, pipes, myIndex) &&
      isPluggedRight(x, columns, pipes, myIndex)
    );
  } else if (pipe === "┓") {
    return (
      isPluggedDown(y, columns, pipes, myIndex) &&
      isPluggedLeft(x, pipes, myIndex)
    );
  } else if (pipe === "┛") {
    return (
      isPluggedUp(y, pipes, columns, myIndex) &&
      isPluggedLeft(x, pipes, myIndex)
    );
  } else if (pipe === "┗") {
    return (
      isPluggedUp(y, pipes, columns, myIndex) &&
      isPluggedRight(x, columns, pipes, myIndex)
    );
  } else if (pipe === "╸") {
    return isPluggedLeft(x, pipes, myIndex);
  } else if (pipe === "╺") {
    return isPluggedRight(x, columns, pipes, myIndex);
  } else if (pipe === "╻") {
    return isPluggedDown(y, columns, pipes, myIndex);
  } else if (pipe === "╹") {
    return isPluggedUp(y, pipes, columns, myIndex);
  } else if (pipe === "┃") {
    return (
      isPluggedUp(y, pipes, columns, myIndex) &&
      isPluggedDown(y, columns, pipes, myIndex)
    );
  } else if (pipe === "━") {
    return (
      isPluggedLeft(x, pipes, myIndex) &&
      isPluggedRight(x, columns, pipes, myIndex)
    );
  } else if (pipe === "┳") {
    return (
      isPluggedLeft(x, pipes, myIndex) &&
      isPluggedRight(x, columns, pipes, myIndex) &&
      isPluggedDown(y, columns, pipes, myIndex)
    );
  } else if (pipe === "┫") {
    return (
      isPluggedLeft(x, pipes, myIndex) &&
      isPluggedUp(y, pipes, columns, myIndex) &&
      isPluggedDown(y, columns, pipes, myIndex)
    );
  } else if (pipe === "┣") {
    return (
      isPluggedRight(x, columns, pipes, myIndex) &&
      isPluggedUp(y, pipes, columns, myIndex) &&
      isPluggedDown(y, columns, pipes, myIndex)
    );
  } else if (pipe === "┻") {
    return (
      isPluggedRight(x, columns, pipes, myIndex) &&
      isPluggedUp(y, pipes, columns, myIndex) &&
      isPluggedLeft(x, pipes, myIndex)
    );
  } else if (pipe === "╋") {
    return (
      isPluggedLeft(x, pipes, myIndex) &&
      isPluggedRight(x, columns, pipes, myIndex) &&
      isPluggedUp(y, pipes, columns, myIndex) &&
      isPluggedDown(y, columns, pipes, myIndex)
    );
  } else return false;
};
