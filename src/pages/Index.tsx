
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, BookOpen, Briefcase, FileText, MessageSquare, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-career-700 to-career-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Launch Your Career with Confidence
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              AI-powered career guidance for students and job seekers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-career-800 hover:bg-gray-100"
                asChild
              >
                <Link to="/profile">
                  Create Your Profile
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-career-600"
                asChild
              >
                <Link to="/mentor">
                  Chat with AI Mentor
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How We Help You Succeed</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                <div className="mx-auto w-16 h-16 bg-career-50 rounded-full flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-career-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">CV Analysis</h3>
                <p className="text-gray-600">
                  Get AI-powered feedback on your CV to ensure it's ATS-friendly and showcases your strengths effectively.
                </p>
              </div>
              
              <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                <div className="mx-auto w-16 h-16 bg-career-50 rounded-full flex items-center justify-center mb-4">
                  <Briefcase className="h-8 w-8 text-career-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Job Matching</h3>
                <p className="text-gray-600">
                  Discover job opportunities that match your education, skills, and experience with our intelligent job matching.
                </p>
              </div>
              
              <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                <div className="mx-auto w-16 h-16 bg-career-50 rounded-full flex items-center justify-center mb-4">
                  <MessageSquare className="h-8 w-8 text-career-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Mentorship</h3>
                <p className="text-gray-600">
                  Get personalized career advice and guidance from our AI mentor to help navigate your career journey.
                </p>
              </div>
              
              <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                <div className="mx-auto w-16 h-16 bg-career-50 rounded-full flex items-center justify-center mb-4">
                  <Star className="h-8 w-8 text-career-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Interview Prep</h3>
                <p className="text-gray-600">
                  Practice with AI-powered mock interviews and get tips to help you ace your job interviews.
                </p>
              </div>
              
              <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                <div className="mx-auto w-16 h-16 bg-career-50 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-career-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Career Roadmap</h3>
                <p className="text-gray-600">
                  Get a personalized roadmap with actionable steps to help you achieve your career goals.
                </p>
              </div>
              
              <div className="text-center p-6 border rounded-lg hover:shadow-md transition-shadow">
                <div className="mx-auto w-16 h-16 bg-career-50 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-career-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Skill Development</h3>
                <p className="text-gray-600">
                  Identify skill gaps and get recommendations for courses and resources to enhance your employability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-12 top-0 h-full w-0.5 bg-career-200 hidden md:block"></div>
                
                {[
                  {
                    number: "01",
                    title: "Create Your Profile",
                    description: "Input your name, education, work experience, skills, and interests. Upload your current CV."
                  },
                  {
                    number: "02",
                    title: "AI Analysis",
                    description: "Our AI analyzes your profile and CV to identify strengths, weaknesses, and opportunities."
                  },
                  {
                    number: "03",
                    title: "Personalized Insights",
                    description: "Receive detailed feedback on your CV, job matches, and a roadmap for career development."
                  },
                  {
                    number: "04",
                    title: "Chat with AI Mentor",
                    description: "Get ongoing guidance and answers to your career questions from our AI mentor."
                  },
                  {
                    number: "05",
                    title: "Implement & Apply",
                    description: "Use your insights to improve your CV, prepare for interviews, and apply for recommended jobs."
                  }
                ].map((step, i) => (
                  <div key={i} className="relative flex flex-col md:flex-row gap-8 mb-12">
                    <div className="md:w-24 text-center flex-shrink-0">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-career-600 text-white font-bold relative z-10">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-career-600 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Boost Your Career?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Create your profile now and get personalized career guidance to help you land your dream job.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-career-800 hover:bg-gray-100"
              asChild
            >
              <Link to="/profile">
                Get Started Now
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
