export const Toronto = {
  name: 'Canda, Toronto City',
  description:
    'Toronto is doe of the cities in Canada You will be anated by the a nocino architec..',
  imageUrl: [
    {
      itemImageSrc:
        'https://images.dailyhive.com/20180917132541/thelandofdustin_37643319_1789906907724735_6078941400446009344_n.jpg',
      thumbnailImageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1OaHeCj3on6KdKZ8WW7OpWFI-5JPLAlgczQ&usqp=CAU',
    },
    {
      itemImageSrc:
        'https://media.blogto.com/articles/2017314-city.jpg?w=2048&cmd=resize_then_crop&height=1365&quality=70',
      thumbnailImageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTE7tByXW6PN0D7DDwkZgi9WRTQ80mttm4NfIzxtKLzC12oEazDnVOf-gjC4_SEYyUNs&usqp=CAU',
    },
    {
      itemImageSrc:
        'https://www.tripsavvy.com/thmb/Nmm_G4ISO2s5WA2uLkY0vkFOYK8=/2119x1415/filters:fill(auto,1)/GettyImages-817647176-5ac3a51bc064710037f97193.jpg',
      thumbnailImageSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLc1XxVKf7bBGnln-QRAGsKQPZIdguE0WSS-RO4uwqnjJovmQYlW5Uiz7VetCejAW51vY&usqp=CAU',
    },
  ],
}

export const responsiveOptions = [
  {
    breakpoint: '1024px',
    numVisible: 5,
  },
  {
    breakpoint: '768px',
    numVisible: 3,
  },
  {
    breakpoint: '560px',
    numVisible: 1,
  },
]

export const dateTemplate = (date) => {
  if (date.day > 10 && date.day < 15) {
    return (
      <div
        style={{
          backgroundColor: '#1dcbb3',
          color: '#ffffff',
          fontWeight: 'bold',
          borderRadius: '50%',
          width: '2em',
          height: '2em',
          lineHeight: '2em',
          padding: 0,
        }}
      >
        {date.day}
      </div>
    )
  } else {
    return date.day
  }
}

export const ExploreData = [
  {
    name: 'Big ben',
    description:
      'Big Ben is a clock tower located in the north-east of London, on the north bank of the River Thames. It is the official seat of the House of Commons and the House of Lords, and on the site of the former site of the now-collapsed Palace of Westminster. It has a height of 1,474 metres (4,447 ft) and stands on the north bank of the River Thames.',
    imageUrl:
      'https://cache.marriott.com/content/dam/marriott-hws/marriott/europe/lonch/en/hotel-views/lonch-view-0170-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*',
    star: 4.5,
    price: '$1200',
    review: 10,
  },
  {
    name: 'Venice',
    description:
      'Venice is a city and a port on the Adriatic Sea in northeastern Italy. It is the most-visited urban area in Italy, with a population of more than 4.6 million within the city limits, and a metropolitan area of about 1.5 million within its administrative limits. The city is located on the west bank of the Venetian-Romagna Strait, in the Veneto region of Italy.',
    imageUrl:
      'https://static.saltinourhair.com/wp-content/uploads/2019/04/23140026/things-to-do-venice-italy-header.jpg',
    star: 4.6,
    price: '$1000',
    review: 20,
  },
  {
    name: 'Santorini',
    description:
      'Santorini is a small island in the Aegean Sea, Greece. It is the southernmost of the Cyclades, and is the only island in the Cyclades to have a permanently-open sea. It is the only island in the Cyclades to have a permanently-open sea. It is the only island in the Cyclades to have a permanently-open sea.',
    imageUrl:
      'https://digitalnomads.world/wp-content/uploads/2021/10/santorini-digital-nomads-1024x683.jpg',
    star: 4.7,
    price: '$900',
    review: 30,
  },
]
