import styled from '@emotion/styled';

export const Row = styled.li`
  width: 100%;
  display: flex;
  height: 40pt;
  overflow: auto;
  align-items: center;
  padding: 3pt;
  box-sizing: border-box;
  font-size: 12pt;
  text-align: left;
  justify-content: flex-start;
  &:nth-of-type(odd) {
    background-color: #eee;
  }
  button:nth-of-type(2) {
    margin: 0 5pt;
  }
  button:last-child {
    margin-left: auto;
    margin-right: 5pt;
  }
`;

export const Text = styled.p`
  text-wrap: wrap;
  margin: 0;
  padding: 0;
  width: 100%;
`;