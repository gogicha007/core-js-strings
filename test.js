function sumOfCodes(str) {
  const strArr = Array.from(str || []);
  const result = strArr.reduce((acc, val) => {
    return acc + val.charCodeAt(0);
  }, 0);
  console.log(result)
  return result || 0;
}

console.log(sumOfCodes());
