const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl:
        'https://i.ibb.co/yPS4jWc/ahmed-syed-6-NVr-H0-HB-DE-unsplash.jpg',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl:
        'https://i.ibb.co/CWr9XVq/dami-adebayo-k6a-Qzm-Ib-R1s-unsplash.jpg',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/wwV9sfr/pat-kwon-EJTjetc8t-Ps-unsplash.jpg',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'womens',
      imageUrl:
        'https://i.ibb.co/VHMNjvM/kimson-doan-HD8-Kly-WRYYM-unsplash.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl:
        'https://i.ibb.co/Y30wTYD/donn-gabriel-baleva-U-Z4-P2-H3-KFE-unsplash.jpg',
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
