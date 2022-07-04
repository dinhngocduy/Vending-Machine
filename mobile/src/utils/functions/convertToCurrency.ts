import 'intl';
import 'intl/locale-data/jsonp/vi';

export const convertToCurrency = (value: number) => {
  //  return Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(value)
  if (value) {
    // return value.toLocaleString('vi', { style: 'currency', currency: 'VND' });
    return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + 'đ'
  } else {
    return '0đ';
  }
};
