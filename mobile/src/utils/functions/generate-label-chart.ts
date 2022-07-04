import moment from "moment";

const generate24Hour = () => {
  const time = new Date().getTime();

  let res = [];
  for (var i = 23; i >= 0; i--) {
    const value = time - 3600000 * i;
    res.push(moment(value).format("HH:00"));
  }

  return res;
};

const generate7Day = () => {
  const time = new Date().getTime();

  let res = [];
  for (var i = 6; i >= 0; i--) {
    const value = time - 24 * 3600000 * i;
    res.push(moment(value).format("DD/MM"));
  }

  return res;
};

const generate30Day = () => {
  const time = new Date().getTime();

  let res = [];
  for (var i = 30; i >= 0; i--) {
    const value = time - 24 * 3600000 * i;
    res.push(moment(value).format("DD/MM"));
  }

  return res;
};

const generate1Year = () => {
  const time = new Date().getTime();

  let res = [];
  for (var i = 11; i >= 0; i--) {
    const value = time - 30 * 24 * 3600000 * i;
    res.push(moment(value).format("MM/YYYY"));
  }

  return res;
};

export { generate24Hour, generate7Day, generate30Day, generate1Year };
