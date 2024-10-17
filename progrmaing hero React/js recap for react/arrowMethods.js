const users = [
  { id: 1, name: "Alice", email: "alice@example.com", score: 30 },
  { id: 2, name: "Bob", email: "bob@example.com", score: 59 },
  { id: 3, name: "Charlie", email: "charlie@example.com", score: 85 },
  { id: 4, name: "Diana", email: "diana@example.com", score: 69 },
];
const email = users.map((user) => user.email);
console.log(email);

const id = users.map((i) => i.id);
console.log(id);

const name = users.map((n) => n.name);
// console.log(name);

// filter:
const goodBoy = users.filter((user) => user.score >= 60);
// console.log(goodBoy);

// bad boy:
const badboy = users.find((user) => user.score <= 85);
console.log(badboy);

const specificName = users.filter((user) => user.name.includes("n"));
console.log(specificName);
