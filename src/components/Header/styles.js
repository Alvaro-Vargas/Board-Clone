import styled from 'styled-components';

export const Container = styled.div`
  height: 40px;

  background: rgba(0, 0, 0, 0.15);
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5px;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      margin: 0 2px;
      border-radius: 4px;

      font-size: 20px;

      width: 30px;
      height: 30px;
      background: rgba(255, 255, 255, 0.3);

      &:hover {
        background: rgba(255, 255, 255, 0.15);
      }
    }

    div {
      width: 100px;
      height: 30px;
      font-weight: bold;

      display: flex;
      align-items: center;
      justify-content: center;

      margin: 2px;
      padding: 2px;

      border-radius: 4px;

      background: rgba(255, 255, 255, 0.3);

      &:hover {
        background: rgba(255, 255, 255, 0.15);
      }

      svg {
        font-size: 20px;
      }

      p {
        margin: 5px;
      }
    }

    input {
      width: 180px;
      height: 30px;
      margin: 2px;
      padding-right: 25px;

      font-size: 20px;
      color: #fff;

      border: 0;
      border-radius: 4px;
      background: rgba(255, 255, 255, 0.3);

      &:hover {
        background: rgba(255, 255, 255, 0.15);
      }
    }

    .errspan {
      margin-left: -25px;
      font-size: 20px;
    }

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }
`;
