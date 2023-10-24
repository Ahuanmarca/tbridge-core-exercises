const {
  west,
  east,
  boat,
  findBy,
  nextFits,
  printStatus,
  riverCrossing,
} = require("../barca");

test('Call findBy(west, "find", "lightest"), return "Aitana"', () => {
  expect(findBy(west, "find", "lightest").name).toBe("Aitana");
});

test('Call 2 times findBy(west, "find", "lightest"), return "Aitana" both times', () => {
  const firstCall = findBy(west, "find", "lightest").name;
  const secondCall = findBy(west, "find", "lightest").name;
  expect(firstCall === "Aitana" && secondCall === "Aitana").toBe(true);
});

test('Call findBy(west, "get", "lightest"), return "Paco"', () => {
  expect(findBy(west, "find", "heaviest").name).toBe("Paco");
});

test('Call 2 times findBy(west, "get", "lightest"), return "Luis" from second call', () => {
  findBy(west, "get", "lightest").name;
  expect(findBy(west, "get", "lightest").name).toBe("Luis");
});
