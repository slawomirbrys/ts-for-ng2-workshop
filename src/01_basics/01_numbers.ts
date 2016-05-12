/*
 random(max) function
 Returns psuedo random number between [0, and max)
 */
function random(max : number) : number {
  return Math.random() * max;
}

console.log("random:", random(10));

/*
 randomBetween(min, max) function
 Returns pseudo random number between [min, max)
 * */
function randomBetween(min : number, max : number) : number {
  return min + (Math.random() * (max - min));
}

console.log("randomBetween:", randomBetween(15, 20));

/*
 * div(dividend, divisor)
 * Example 13 div 4 == 3
 * */
function div(dividend : number, divisor : number) : number {
  return Math.floor(dividend / divisor);
}

console.log("div:", div(13, 4));
