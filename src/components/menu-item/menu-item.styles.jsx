import styled from 'styled-components';

export const ContentContainer = styled.div`
  /* height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid green;
  background-color: white;
  opacity: 0.7;
  position: absolute; */
`;

export const ContentTitle = styled.span`
  /* border: ${({ size }) => (size ? 'black 1px solid' : 'none')}; */
  font-weight: 400;
  font-size: 16px;
  color: #212121;
  font-family: 'Lato', sans-serif;
  &:hover {
    cursor: pointer;
  }
`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
