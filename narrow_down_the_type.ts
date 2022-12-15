function numOrNumArray(a: number | number[]) {
  if (Array.isArray(a)) {
    a.concat(4);
  } else {
    a.toFixed(3);
  }
}

numOrNumArray(123);
numOrNumArray([1, 2, 3]);
