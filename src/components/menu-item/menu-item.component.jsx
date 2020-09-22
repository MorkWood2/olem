import React from 'react';
import { withRouter } from 'react-router-dom';

import { ContentContainer, ContentTitle } from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div>
    <ContentContainer className='content'>
      <ContentTitle
        size={size}
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
        {title.toUpperCase()}
      </ContentTitle>
    </ContentContainer>
  </div>
);

export default withRouter(MenuItem);
