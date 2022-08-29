function nbYear(p0, percent, aug, p) {
  let res = 0;
  let count = 0;

  while(res < p) {
    res = p0 + (p0 * (percent / 100)) + aug;
    p0 = Math.floor(res);
    count++;
  }

  return count;
}

console.log(nbYear(1500, 5, 100, 5000)) //15
console.log(nbYear(1500000, 2.5, 10000, 2000000)) //10
console.log(nbYear(1500000, 0.25, 1000, 2000000)) //94
console.log(nbYear(1000, 2, 50, 1214)) //4