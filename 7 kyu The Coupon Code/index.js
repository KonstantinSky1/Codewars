function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  const yearExpirationDate = +expirationDate.slice(-4);
  const yearCurrentDate = +currentDate.slice(-4);
  const dayExpirationDate = +expirationDate.split(' ')[1].slice(0, -1);
  const dayCurrentDate = +currentDate.split(' ')[1].slice(0, -1);
  const monthExpirationDate = expirationDate.split(' ')[0];
  const monthCurrentDate = currentDate.split(' ')[0];
  const monthObj = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12
  };

  if ((enteredCode === correctCode) && (yearExpirationDate === yearCurrentDate) && (monthObj[monthExpirationDate] === monthObj[monthCurrentDate]) && (dayExpirationDate >= dayCurrentDate)) {
    return true;
  }

  if ((enteredCode === correctCode) && (yearExpirationDate === yearCurrentDate) && (monthObj[monthExpirationDate] === monthObj[monthCurrentDate]) && (dayExpirationDate < dayCurrentDate)) {
    
    return false;
  }

  return (enteredCode === correctCode) &&
          (yearExpirationDate >= yearCurrentDate) &&
          (monthObj[monthExpirationDate] >= monthObj[monthCurrentDate]);
}

// Лучше так: return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)

// Метод Date.parse() разбирает строковое представление даты и возвращает количество миллисекунд, прошедших с 1 января 1970 года 00:00:00 по UTC.
// Date.parse(dateString)

console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'))  //true
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'))  //false
console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015"))   //true
console.log(checkCoupon("123", "123", "July 9, 2015", "July 2, 2015"))  //false
console.log(checkCoupon("a12v564", "a12v564", "March 25, 1998", "March 5, 1998"))  //false