import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px; /* flex == flex-grow + flex-shrink + flex-basis */
  margin: 0 5px;
  border-radius: 4px;
  opacity: ${(props) => (props.done ? 0.6 : 1)};
  background: #ebecf0;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;

    h2 {
      font-weight: bold;
      font-size: 16px;
      padding: 0 10px;
    }

    svg {
      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 4px;

      height: 40px;
      width: 40px;
    }

    svg:hover {
      background: rgba(0, 0, 0, 0.2);
    }
  }
`;
