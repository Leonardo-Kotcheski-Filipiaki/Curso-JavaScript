let confereIps = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(confereIps.test("127.0.0.1")); //True
console.log(confereIps.test("8.8.8.8")); //True
console.log(confereIps.test("123.123.1312.12")); //False

