import styled from 'styled-components';

export const Container = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: #fff;

  strong {
    height: 30px;
    padding: 0 10px;

    font-size: 20px;
    font-weight: 900;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    border-radius: 4px;

    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    nav {
      ul {
        display: flex;
        align-items: center;
        justify-content: center;

        li {
          text-decoration: none;
          height: 30px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 4px;
          font-size: 20px;
          padding: 0 10px;

          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            background: rgba(255, 255, 255, 0.15);
          }

          span {
            font-weight: normal;
            font-size: 14px;
          }
        }
        img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-right: 5px;
        }
      }
    }

    nav#right {
      span {
        height: 30px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 4px;
        font-weight: normal;
        font-size: 14px;
        padding: 0 10px;

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
          font-size: 20px;
          margin-right: 10px;
        }
      }
    }
  }

  .star {
    width: 30px;
    padding: 0;
  }

  .button-divider {
    background: #eee;
    width: 1px;
    height: 15px;
    margin: 0 10px;
  }
`;
