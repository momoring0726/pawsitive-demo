// src/data/pets.js
export const pets = [
  {
    id: 1,
    slug: 'buddy',
    name: 'Buddy',
    breed: 'Golden Retriever Mix',
    age: '2 years',
    gender: 'Male',
    size: 'Large',
    bio: "Buddy is a super-friendly guy who loves to play fetch and go on long walks. He's great with kids and other dogs. He's just looking for a family to love him forever!",
    goodWith: {
      kids: true,
      dogs: true,
      cats: false,
    },
    images: [
      '/images/buddy-1.jpg', // You'll need to add sample images to your /public/images/ folder
      '/images/buddy-2.jpg',
    ],
  },
  {
    id: 2,
    slug: 'luna',
    name: 'Luna',
    breed: 'Domestic Shorthair',
    age: '1 year',
    gender: 'Female',
    size: 'Small',
    bio: "Luna is a sweet, calm cat who loves a warm lap. She can be a little shy at first but warms up quickly with a few gentle pets. She'd be perfect for a quiet home.",
    goodWith: {
      kids: true,
      dogs: true,
      cats: true,
    },
    images: ['/images/luna-1.jpg', '/images/luna-2.jpg'],
  },
  {
    id: 3,
    slug: 'charlie',
    name: 'Charlie',
    breed: 'Terrier Mix',
    age: '4 years',
    gender: 'Male',
    size: 'Medium',
    bio: 'Charlie is all personality! This scruffy little guy is curious, energetic, and loves to be the center of attention. He would be a great companion for an active owner.',
    goodWith: {
      kids: true,
      dogs: false,
      cats: false,
    },
    images: ['/images/charlie-1.jpg'],
  },
];