import Pulse from '../assets/icons/pulse';

const Header = () => {
  return (
    <div className="mb-10 ">
      <div className="flex items-center gap-1 mb-8">
        <Pulse />
        <span className="text-[#f70ec3] font-medium text-xl">Pulse</span>
        <span className="text-[#1137df] font-medium text-xl">Events</span>
      </div>

      <h1 className="text-5xl font-bold mb-4 text-center">
        <span className="text-[#f51eaf]">Discover</span>
        <span
          className="
text-transparent
bg-clip-text
bg-[linear-gradient(to_right,#8966df_0%,#2a95ea_40%,#07b5ee_70%,#05bbf1_100%)]
"
        >
          {' '}
          Amazing{' '}
        </span>
        <span className="text-[#00d7fc]">Events</span>
      </h1>

      <p className="text-[#ebe0f2] text-lg text-center">Find and book events that interest you</p>
    </div>
  );
};

export default Header; 