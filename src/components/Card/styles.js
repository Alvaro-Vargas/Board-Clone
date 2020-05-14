import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  background: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  padding-top: 30px;

  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);

  cursor: grab;

  display: flex;
  flex-direction: column;

  header {
    position: absolute;
    top: -5px;
    left: 15px;
  }

  p {
    font-weight: 500;
    line-height: 20px;
  }

  div {
    display: flex;
    flex-direction: row-reverse;
    margin-top: 3px;
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-top: 5px;
  }

  ${(props) =>
    props.isDragging &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.2);
      padding-top: 21px;
      border-radius: 0;
      background: transparent;
      box-shadow: none;
      cursor: grabbing;

      p,
      img,
      header {
        opacity: 0;
      }
    `}
`;

export const Label = styled.span`
  width: 55px;
  height: 15px;
  border-radius: 4px;
  display: inline-block;
  background: ${(props) => props.color};
`;
