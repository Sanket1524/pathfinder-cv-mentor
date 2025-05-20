
import { BookOpen, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <BookOpen className="h-6 w-6 text-career-600" />
          <span className="text-xl font-bold text-career-800">CareerBoost</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-career-600 transition-colors">
            Home
          </Link>
          <Link to="/profile" className="text-sm font-medium text-muted-foreground hover:text-career-600 transition-colors">
            Profile
          </Link>
          <Link to="/results" className="text-sm font-medium text-muted-foreground hover:text-career-600 transition-colors">
            Results
          </Link>
          <Link to="/mentor" className="text-sm font-medium text-muted-foreground hover:text-career-600 transition-colors">
            AI Mentor
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <User className="h-5 w-5" />
            <span className="sr-only">User</span>
          </Button>
          <Button className="hidden md:flex bg-career-600 hover:bg-career-700 text-white">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
