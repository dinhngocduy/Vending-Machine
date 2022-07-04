const isEmail = (value:string) => {
    if (/^[^@ ]+@[^@ ]+\.[^@ \.]{2,}$/.test(value)) {
      return true;
    } else {
      return false;
    }
};

export default isEmail;