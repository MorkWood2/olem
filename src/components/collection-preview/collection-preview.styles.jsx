import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  font-weight:300;
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin: 25px 0;
  cursor: pointer;
  font-weight:300;
  color:#353535;
  border-top: solid 1px #aaaaaa;

  &:hover {
    color: grey;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
