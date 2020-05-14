import React from 'react';

import { MdMoreHoriz } from 'react-icons/md';

import Card from '../Card';

import { Container } from './styles';

function List({ data, index: listIndex }) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        <MdMoreHoriz />
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} listIndex={listIndex} index={index} data={card} />
        ))}
      </ul>
    </Container>
  );
}

export default List;
