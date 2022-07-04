const convertToCurrency = (value: string) => {
  const length = value.length;
  if (length < 4) {
    return value;
  }
  let result = "";
  let tempArr = value.split("");
  for (let i = tempArr.length - 1; i >= 0; i--) {
    result += tempArr[i];
    if (i !== 0 && (tempArr.length - i) % 3 === 0) {
      result += ".";
    }
  }
  return result.split("").reverse().join("");
};

export default convertToCurrency;
