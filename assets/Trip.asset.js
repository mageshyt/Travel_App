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
