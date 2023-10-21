const people = [
  {
    name: "Samwell",
    address: "Horn Hill",
    birthDay: "2006-10-30",
    parents: [
      {
        name: "Randyll",
        address: "Horn Hill",
        authSon: true, // can work
      },
      {
        name: "Melessa",
        address: "Horn Hill",
        authSon: false,
      },
    ],
  },
  {
    name: "Jon",
    address: "Dragonstone",
    birthDay: "1979-10-15", // can work
    parents: [
      {
        name: "Raegar",
        address: "Dragonstone",
        authSon: false,
      },
      {
        name: "Liana",
        address: "Dragonstone",
        authSon: false,
      },
    ],
  },
  {
    name: "Bran",
    address: "The Wall", // can work
    birthDay: "2015-06-11",
    parents: [
      {
        name: "Eddard",
        address: "Winterfell",
        authSon: false,
      },
      {
        name: "Catelyn",
        address: "Winterfell",
        authSon: false,
      },
    ],
  },
  {
    name: "Rickon", // CAN'T WORK !
    address: "Winterfell",
    birthDay: "2018-04-21",
    parents: [
      {
        name: "Eddard",
        address: "Winterfell",
        authSon: false,
      },
      {
        name: "Catelyn",
        address: "Winterfell",
        authSon: false,
      },
    ],
  },
];

function getAge(person) {
  const birth = new Date(person.birthDay);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  if (
    today.getMonth() < birth.getMonth() ||
    (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age;
}
function canWork(person) {
  const [father, mother] = person.parents;

  // Is authorized by parents?
  if (father.authSon || mother.authSon) return true;

  // Is independent? (Lives without parents)
  if (person.address !== father.address && person.address !== mother.address) {
    return true;
  }

  // Is over 18 years old?
  if (getAge(person) >= 18) return true;

  return false;
}

for (const person of people) {
  console.log(person.name, canWork(person) ? "can" : "can't", "work.");
}
