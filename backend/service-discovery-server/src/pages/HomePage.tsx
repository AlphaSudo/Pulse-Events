import Header from '../components/Header';
import SearchBar from '../components/Searchbar';
import EventList from '../components/EventList';

const HomePage = () => {
  return (
    <main className="main-content h-screen w-screen bg-[#000123] px-6 md:px-16 pt-6 pb-20">
      <Header />
      
      <SearchBar />
      <EventList />
    </main>
  );
};

export default HomePage; 