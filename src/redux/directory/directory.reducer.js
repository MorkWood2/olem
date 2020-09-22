const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl:
        'https://i.ibb.co/Z6nfQjR/pawel-szvmanski-U2-Wu-Wi-92o-unsplash.jpg',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl:
        'https://i.ibb.co/c3SZshP/ryan-moreno-Urc-G58-Vh-Fzs-unsplash.jpg',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl:
        'https://i.ibb.co/WVp6mtr/misael-nevarez-Dra4-RTC5c-Q-unsplash.jpg',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'womens',
      imageUrl:
        'https://i.ibb.co/0mq5fmL/tai-s-captures-ozn-ETn7-Vn-YQ-unsplash.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: 'https://i.ibb.co/pvyXrnt/01cowgirls.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
