import isEmptyObject from "./is-empty-object";

const mapSlotToOpcode = (slot: number, numberOfColumn: number) => {
  const char = [
    "",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const x = Math.floor(slot / numberOfColumn);
  const y = slot % numberOfColumn;
  if (x === 0 && y === 0) {
    return "";
  }
  if (y > 0) {
    return char[x + 1] + char[y];
  } else {
    return char[x] + char[numberOfColumn];
  }
};

export default mapSlotToOpcode;
