import { loremIpsum } from 'lorem-ipsum';

export function randomAvatar() {
  const random = Math.floor(Math.random() * 3);

  const avatar = `https://api.adorable.io/avatars/285/${random}`;

  return avatar;
}

export function getLorem() {
  const lorem = loremIpsum();

  return lorem;
}

let nextCardId = 1;

function randomCard(id) {
  const colors = ['#bc658d', '#82c4c3', '#f9d89c', '#f5a7a7'];
  const labelColor = colors[Math.floor(Math.random() * 4)];

  const card = {
    id,
    content: loremIpsum(),
    labels: [labelColor],
    user: randomAvatar(),
  };

  return card;
}

function generateCardArray(numberOfCards) {
  const cards = [];

  for (let i = 0; i < numberOfCards; i += 1) {
    cards.push(randomCard(nextCardId));
    nextCardId += 1;
  }

  return cards;
}

function randomTaskLists() {
  const taskList = [
    {
      title: 'Task',
      creatable: true,
      cards: generateCardArray(5),
    },
    {
      title: 'Ongoing',
      creatable: false,
      cards: generateCardArray(3),
    },
    {
      title: 'Paused',
      creatable: false,
      cards: generateCardArray(2),
    },
    {
      title: 'Done',
      creatable: false,
      done: true,
      cards: [],
    },
  ];

  return taskList;
}

export function loadLists() {
  return randomTaskLists();
}
