
import { BookOpen } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-career-800 text-white py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <BookOpen className="h-6 w-6" />
              <span className="text-xl font-bold">CareerBoost</span>
            </div>
            <p className="text-career-100 text-sm">
              Helping students launch successful careers with AI-powered guidance and tools.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Features</h3>
            <ul className="space-y-2 text-career-100 text-sm">
              <li>CV Review</li>
              <li>Job Matching</li>
              <li>AI Mentorship</li>
              <li>Interview Prep</li>
              <li>Career Roadmap</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-career-100 text-sm">
              <li>Blog</li>
              <li>Career Tips</li>
              <li>Industry Insights</li>
              <li>Success Stories</li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-career-100 text-sm">
              <li>support@careerboost.io</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-career-700 mt-8 pt-8 text-sm text-center text-career-100">
          © {new Date().getFullYear()} CareerBoost. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
