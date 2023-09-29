const s1 = 5;
const s2 = 6;
const s3 = 7;
const side = (s1 + s2 + s3) / 2;
const area = Math.sqrt(side * (side - s1) * (side - s2) * (side - s3));
console.log(`The area of the triangle where three side are 5, 6 & 7 is ${area}`);
