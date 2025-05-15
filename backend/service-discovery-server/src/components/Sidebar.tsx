import { Plus, User, Search, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Keeping only lucide-react icons */}
      <div title="Create Event">
        <Plus className="sidebar-icon plus" />
      </div>
      <div title="Profile">
        <User className="sidebar-icon" />
      </div>
      <div title="Search Events">
        <Search className="sidebar-icon active" />
      </div>
      <div title="Settings">
        <Settings className="sidebar-icon" />
      </div>
      <div title="Logout" className="logout-container">
        <LogOut className="sidebar-icon logout" />
      </div>
    </div>
  );
};

export default Sidebar; 