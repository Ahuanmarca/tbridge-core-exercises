const west = [
  { name: "Hugo", weight: 60 },
  { name: "Paco", weight: 100 },
  { name: "Luis", weight: 40 },
  { name: "Renzo", weight: 81 },
  { name: "Aitana", weight: 18 },
];

const east = [];

const boat = {
  capacity: 100,
  position: "west",
  passengers: [],
  currentLoad() {
    return this.passengers.reduce((acc, cur) => acc + cur.weight, 0);
  },
  switchPosition() {
    this.position = this.position === "east" ? "west" : "east";
  },
  // TODO make printTrip print 'and' when needed
  printTrip() {
    const peopleString = this.passengers
      .map((p) => `${p.name} (${p.weight}kg)`)
      .join(", ");

    const travelString = `Boat travels ${this.position.toLocaleUpperCase()} with`;
    return `  ${travelString} ${peopleString}`;
  },
};

const loopBreaker = {
  count: 0,
  tolerance: 20,
  increaseCount() {
    return ++this.count;
  },
  break() {
    return this.count >= this.tolerance;
  },
};

const findBy = (array, action = "find", criteria = "lightest") => {
  // Defensive conditions
  const [validActions, validCriteria] = [
    ["find", "get"],
    ["lightest", "heaviest"],
  ];
  if (!validActions.includes(action) || !validCriteria.includes(criteria)) {
    return "findBy() received invalid arguments";
  }

  let weight;
  switch (criteria) {
    case "lightest":
      weight = array.reduce(
        (acc, curr) => (acc > curr.weight ? curr.weight : acc),
        Infinity
      );
      break;
    case "heaviest":
      weight = array.reduce(
        (acc, curr) => (acc < curr.weight ? curr.weight : acc),
        -Infinity
      );
      break;
  }

  const index = array.findIndex((person) => person.weight === weight);

  return action === "find"
    ? [...array].splice(index, 1)[0]
    : array.splice(index, 1)[0];
};

function nextFits(array = west, mode = "lightest") {
  const next = findBy(array, "find", mode); // mode can be "lightest" or "heaviest"
  // * next will be undefined when the array is empty
  return next ? next.weight + boat.currentLoad() <= boat.capacity : false;
}

function printStatus(west, east, boat) {
  console.log("Current status:");
  console.log(
    "  West: ",
    !west.length
      ? "Empty"
      : west.map((n) => `${n.name} (${n.weight}kg)`).join(", ")
  );
  console.log(
    "  East: ",
    !east.length
      ? "Empty"
      : east.map((n) => `${n.name} (${n.weight}kg)`).join(", ")
  );
  console.log(
    "  Boat: ",
    !boat.passengers.length
      ? "Empty"
      : boat.passengers.map((n) => `${n.name} (${n.weight}kg)`).join(", ")
  );
}

console.log(`
                  /|___
                ///|   ))
              /////|   )))
            ///////|    )))
          /////////|     )))
        ///////////|     ))))
      /////////////|     )))
     //////////////|    )))
   ////////////////|___)))
     ______________|________
     \\                     /
   ~~~~~~~~~~~~~~~~~~~~~~~~~~~
`);

// DRIVER CODE
function riverCrossing() {
  printStatus(west, east, boat);

  // * Defensive condition: The task can't be completed IF:
  // * -- Some passenger is heavier than boat's capacity
  // * -- At least two passengers can't fit in the boat together
  if (
    west.some((p) => p.weight > boat.capacity) ||
    [...east]
      .sort((p1, p2) => p1.weight - p2.weight)
      .reduce((acc, curr, index) => (index < 2 ? acc + curr.weight : acc), 0) >
      boat.capacity
  ) {
    return "The task can't be completed";
  }

  while (west.length > 0 && !loopBreaker.break()) {
    console.log(`Trip ${loopBreaker.increaseCount()}:`);

    // * If the boat is on the EAST, only the lightest
    // * passenger will get on the boat and travel WEST
    if (boat.position === "east") {
      boat.passengers.push(findBy(east, "get", "lightest"));
      boat.switchPosition();
      console.log(boat.printTrip());
      while (boat.passengers.length > 0) {
        west.push(boat.passengers.pop());
      }
    } else if (boat.position === "west") {
      // * (Boat on WEST) If no person on EAST can fit in the
      // * boat with a person on WEST, OR The East is Empty
      if (
        east.length === 0 ||
        findBy(east, "find", "lightest").weight +
          findBy(west, "find", "lightest").weight >
          boat.capacity
      ) {
        // Load boat from lighter to heavier
        while (nextFits(west, "lightest")) {
          boat.passengers.push(findBy(west, "get", "lightest"));
        }
        boat.switchPosition();
        console.log(boat.printTrip());
        while (boat.passengers.length > 0) {
          east.push(boat.passengers.pop());
        }
        // * (BOAT ON WEST) Else if: At least one peron on
        // * EAST can fit in the boat with a person on WEST
      } else {
        // Load boat from heavier to lighter
        while (nextFits(west, "heaviest")) {
          boat.passengers.push(findBy(west, "get", "heaviest"));
        }
        boat.switchPosition();
        console.log(boat.printTrip());
        while (boat.passengers.length > 0) {
          east.push(boat.passengers.pop());
        }
      }
    }
  }

  printStatus(west, east, boat);
  if (loopBreaker.break()) return "Loop killed by loopBreaker!";
  return "All passengers crossed the river!";
}

console.log(riverCrossing());
