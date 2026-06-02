function myMap(cbFn) {
  return function (array) {
    const result = [];
    array.forEach((e, i) => {
      result.push(cbFn(e, i));
    });
    return result;
  };
}

module.exports = myMap;
