import styled from 'styled-components';

export const HomepageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 90vh;
`;
export const DirectoryMenuContainer = styled.div`
  width: 70%;
  margin: 15px;
  padding: 0 30px;
  /* border: 1px solid black; */
`;

export const TitleContainer = styled.div`
  background-image: url('https://i.ibb.co/n0Gzy4p/landing-page.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 30%;
  margin: 15px;
`;

export const Header = styled.div`
  border-bottom: 1px solid #b5b5b5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: 'Lato', sans-serif;
  color: #b5b5b5;
`;
export const SubTitle = styled.h4`
  font-size: 15px;
  margin: 0;
  padding: 150px 0 0 0;
  font-family: 'Lato', sans-serif;
`;

export const Title = styled.h1`
  font-size: 80px;
  margin: 0;
  padding: 20px 0;
  font-family: 'Playfair Display', serif;
  color: #212121;
  @media (max-width: 605px) {
    font-size: 50px;
  }
`;

export const Description = styled.p`
  width: 50%;
  margin: 0;
  padding: 0 0 100px 0;
  font-size: 15px;
  line-height: 20px;
  font-weight: 300;
  font-family: 'Lato', sans-serif;

  @media (max-width: 907px) {
    width: 100%;
  }
  @media (max-width: 550px) {
    padding: 0 0 50px 0;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 907px) {
    display: none;
  }
`;
