import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

import {
  DirectoryMenuContainer,
  HomepageWrapper,
  TitleContainer,
  Header,
  Title,
  SubTitle,
  Description,
  LinkWrapper,
} from './directory.styles';

const Directory = ({ sections }) => (
  <HomepageWrapper>
    <TitleContainer></TitleContainer>
    <DirectoryMenuContainer>
      <Header>
        <p>01</p>
        <p>11'20</p>
      </Header>
      <SubTitle>NEW COLLECTION</SubTitle>
      <Title>
        Discover Vacation
        <br />
        Summer Wears.{' '}
      </Title>
      <Description>
        What perfect timing. This is a lookbook so good, that it's actually
        easing the pain of summer's immanent end. Olem's latest collection is
        all about layering sumptuous textures and rich colors - it's everything
        we love most about dressing in cold weather.
      </Description>
      <LinkWrapper>
        {sections.reverse().map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </LinkWrapper>
    </DirectoryMenuContainer>
  </HomepageWrapper>
);
// <DirectoryMenuContainer>
// {sections.map(({ id, ...otherSectionProps }) => (
//   <MenuItem key={id} {...otherSectionProps} />
// ))}
// </DirectoryMenuContainer>
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
