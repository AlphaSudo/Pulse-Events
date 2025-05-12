// Define an interface for the event object's structure
interface Event {
  image: string;
  category: string;
  title: string;
  date: string;
  location: string;
  description: string;
  price: string;
  buttonText: string;
  tagColor?: string; // Optional property
  buttonColorClass?: string; // Optional property
  priceColorClass?: string; // Optional property
}

// Define the props for the EventCard component
interface EventCardProps {
  event: Event;
}

// Use React.FC with the defined props interface
const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const {
    image,
    category,
    title,
    date,
    location,
    description,
    price,
    buttonText,
    tagColor,
    buttonColorClass,
    priceColorClass,
  } = event;

  // Helper to get CSS class for tags/buttons based on category string
  const categoryClass = category.toLowerCase();

  return (
    <div className="event-card">
      <div className="event-card-image-container">
        <img src={image} alt={title} className="event-card-image" />
        <span
          className={`event-card-tag ${categoryClass}`}
          style={tagColor ? { backgroundColor: tagColor } : {}}
        >
          {category}
        </span>
      </div>
      <div className="event-card-content">
        <h3 className="event-card-title">{title}</h3>
        <p className="event-card-info">
          <span className="icon icon-calendar"></span>{date}
        </p>
        <p className="event-card-info">
          <span className="icon icon-location"></span>{location}
        </p>
        <p className="event-card-description">{description}</p>
        <div className="event-card-footer">
          <span className={`event-card-price ${priceColorClass || categoryClass}`}>{price}</span>
          <button className={`event-card-button ${buttonColorClass || categoryClass}`}>
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard; 