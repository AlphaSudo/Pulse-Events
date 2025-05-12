import EventCard from './EventCard'; // Path will be correct after EventCard is moved

const eventsData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaCUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Tech', // Matched with CSS: .event-card-tag.tech
    title: 'Tech Conference 2025',
    date: 'September 19-17, 2025', // Typo in image, assuming 17-19 or similar
    location: 'City Convention Center',
    description: 'Join us for the ultimate tech gathering of the year. Learn from industry leaders and expand your network.',
    price: '$299,99',
    buttonText: 'Get Your Pass',
    // Specific colors from image for this card
    tagColor: '#A020F0', // Tock -> Tech, purple
    buttonColorClass: 'tech', // Matches image button color
    priceColorClass: 'tech' // Matches image price color
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBmZXN0aXZhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Music', // Muss -> Music
    title: 'Music Festival',
    date: 'July 29-25, 2025', // Typo in image, assuming 25-29
    location: 'Harmony Park',
    description: 'Experience an unforgettable live music performances across five stages. Featuring your favorite artists.',
    price: '$149,99',
    buttonText: 'Take Me There',
    tagColor: '#FF007F', // Muss -> Music, magenta
    buttonColorClass: 'music',
    priceColorClass: 'music'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3MlMjBtZWV0aW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
    category: 'Business', // Busincs -> Business
    title: 'Business Workshop',
    date: 'August 5, 2013', // Date seems old, but matching image
    location: 'Enterprise Building',
    description: 'A comprehensive workshop focused on professional growth and development. Elevate your skills.',
    price: '$99,99',
    buttonText: 'Book Now',
    tagColor: '#00AEEF', // Busincs -> Business, light blue
    buttonColorClass: 'business',
    priceColorClass: 'business',

  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaCUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Tech',
    title: 'Tech Conference 2025',
    date: 'September 19-17, 2025',
    location: 'City Convention Center',
    description: 'Join us for the ultimate tech gathering of the year. Learn from industry leaders and expand your network.',
    price: '$299,99',
    buttonText: 'Get Your Pass',
    tagColor: '#A020F0',
    buttonColorClass: 'tech',
    priceColorClass: 'tech'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaCUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Music',
    title: 'Music Festival',
    date: 'July 29-25, 2025',
    location: 'Harmony Park',
    description: 'Experience an unforgettable live music performances across five stages. Featuring your favorite artists.',
    price: '$149,99',
    buttonText: 'Take Me There',
    tagColor: '#FF007F',
    buttonColorClass: 'music',
    priceColorClass: 'music'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaCUyMGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
    category: 'Business',
    title: 'Business Workshop',
    date: 'August 5, 2013',
    location: 'Enterprise Building',
    description: 'A comprehensive workshop focused on professional growth and development. Elevate your skills.',
    price: '$99,99',
    buttonText: 'Book Now',
    tagColor: '#00AEEF',
    buttonColorClass: 'business',
  }
];

const EventList = () => {
  return (
    <div className="event-list">
      {eventsData.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList; 