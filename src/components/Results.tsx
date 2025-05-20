
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { useNavigate } from "react-router-dom";
import { Award, BookOpen, Briefcase, FileText, MessageSquare, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type ProfileData = {
  fullName: string;
  education: string;
  workExperience: string;
  skills: string;
  interests: string;
  educationLevel: string;
  fieldOfStudy: string;
  preferredIndustry: string;
  cvUploaded: boolean;
};

const Results = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, we would fetch this data from an API
    // For now, let's get it from localStorage if available
    const storedData = localStorage.getItem('profileData');
    
    if (storedData) {
      setProfileData(JSON.parse(storedData));
      
      // Simulate API loading
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    } else {
      toast({
        title: "No profile data",
        description: "Please complete your profile first",
        variant: "destructive",
      });
      navigate('/profile');
    }
  }, [navigate, toast]);

  if (loading) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h2 className="text-2xl font-bold mb-8">Analyzing Your Profile...</h2>
        <div className="max-w-md mx-auto space-y-4">
          <Progress value={45} className="h-2 w-full" />
          <p className="text-sm text-gray-500">
            Our AI is processing your information to provide personalized career insights
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-2">Your Career Insights</h1>
      <p className="text-gray-500 mb-8">
        Based on your profile, our AI has generated the following personalized insights
      </p>

      <Tabs defaultValue="cv-review" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
          <TabsTrigger value="cv-review" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            <span className="hidden md:inline">CV Review</span>
          </TabsTrigger>
          <TabsTrigger value="job-matches" className="flex items-center gap-2">
            <Briefcase className="h-4 w-4" />
            <span className="hidden md:inline">Job Matches</span>
          </TabsTrigger>
          <TabsTrigger value="mentorship" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            <span className="hidden md:inline">AI Mentorship</span>
          </TabsTrigger>
          <TabsTrigger value="interview-prep" className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            <span className="hidden md:inline">Interview Prep</span>
          </TabsTrigger>
          <TabsTrigger value="roadmap" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span className="hidden md:inline">Career Roadmap</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="cv-review">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-career-600" />
                    CV Analysis
                  </CardTitle>
                  <CardDescription>
                    AI-powered review of your curriculum vitae
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div>
                      <h3 className="font-medium">ATS Compatibility</h3>
                      <p className="text-sm text-gray-500">How well your CV works with applicant tracking systems</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-career-600">78%</span>
                      <div className="w-32 mt-1">
                        <Progress value={78} className="h-2" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Key Findings</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="mt-1 flex-shrink-0">
                          <Checkbox id="finding1" checked />
                        </div>
                        <div>
                          <label htmlFor="finding1" className="font-medium text-sm">Strong education section</label>
                          <p className="text-xs text-gray-500">Your educational qualifications are well presented</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 flex-shrink-0">
                          <Checkbox id="finding2" checked />
                        </div>
                        <div>
                          <label htmlFor="finding2" className="font-medium text-sm">Good skills presentation</label>
                          <p className="text-xs text-gray-500">Technical skills are clearly highlighted</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 flex-shrink-0">
                          <Checkbox id="finding3" />
                        </div>
                        <div>
                          <label htmlFor="finding3" className="font-medium text-sm">Work experience needs quantifiable results</label>
                          <p className="text-xs text-gray-500">Add specific metrics and achievements</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1 flex-shrink-0">
                          <Checkbox id="finding4" />
                        </div>
                        <div>
                          <label htmlFor="finding4" className="font-medium text-sm">Missing keywords for your target industry</label>
                          <p className="text-xs text-gray-500">Add industry-specific terminology</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="pt-4">
                    <h3 className="font-medium mb-3">Detailed Recommendations</h3>
                    <div className="bg-gray-50 p-4 rounded-md text-sm">
                      <p className="mb-3">Based on our analysis of your CV, we recommend the following improvements:</p>
                      <ol className="list-decimal ml-5 space-y-2">
                        <li>Add quantifiable achievements to your work experience (e.g., "Increased sales by 20%")</li>
                        <li>Include more industry-specific keywords like "data analysis", "project management", etc.</li>
                        <li>Enhance your skills section with more technical competencies relevant to your field</li>
                        <li>Consider adding a brief professional summary at the top of your CV</li>
                        <li>Ensure consistent formatting throughout the document</li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Award className="h-5 w-5 text-career-600" />
                    CV Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-4">Download Improved CV Template</Button>
                  <p className="text-sm text-gray-500 mb-4">
                    Our AI has generated an optimized version of your CV with improved structure and content.
                  </p>
                  
                  <div className="bg-career-50 p-3 rounded-md border border-career-100 mb-4">
                    <h4 className="text-sm font-medium text-career-700 mb-2">Pro Tips</h4>
                    <ul className="text-xs space-y-2 text-career-700">
                      <li>• Use action verbs like "achieved", "implemented", "led"</li>
                      <li>• Keep your CV to 1-2 pages maximum</li>
                      <li>• Tailor your CV for each job application</li>
                    </ul>
                  </div>
                  
                  <Button variant="outline" className="w-full">Book CV Review Session</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="job-matches">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-career-600" />
                Recommended Job Matches
              </CardTitle>
              <CardDescription>
                Based on your education, skills, and experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[1, 2, 3].map((job) => (
                  <div key={job} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-bold">Junior Software Developer</h3>
                      <span className="text-career-600 font-medium">92% match</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>TechCorp Inc.</span>
                      <span className="mx-2">•</span>
                      <span>San Francisco, CA (Remote)</span>
                      <span className="mx-2">•</span>
                      <span>$70-90K</span>
                    </div>
                    <p className="text-sm mb-3">
                      Looking for a junior developer with experience in React, TypeScript and modern web frameworks. Great opportunity for recent graduates.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs bg-career-100 text-career-800 px-2 py-1 rounded">React</span>
                      <span className="text-xs bg-career-100 text-career-800 px-2 py-1 rounded">TypeScript</span>
                      <span className="text-xs bg-career-100 text-career-800 px-2 py-1 rounded">Frontend</span>
                      <span className="text-xs bg-career-100 text-career-800 px-2 py-1 rounded">Junior Level</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-xs text-gray-500">Posted 2 days ago</span>
                      <Button size="sm">Apply Now</Button>
                    </div>
                  </div>
                ))}
                
                <Button variant="outline" className="w-full">
                  View More Job Matches
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="mentorship">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-career-600" />
                AI Career Mentor
              </CardTitle>
              <CardDescription>
                Guidance and advice for your career journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-50 rounded-lg p-4 mb-6 border">
                <div className="flex gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-career-100 flex items-center justify-center">
                    <MessageSquare className="h-5 w-5 text-career-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">AI Career Mentor</p>
                    <p className="text-sm">
                      Based on your profile, here are some key career insights for you:
                    </p>
                  </div>
                </div>
                
                <div className="pl-14 space-y-4">
                  <p className="text-sm">
                    Your background in <span className="font-medium">Computer Science</span> combined with your interest in 
                    <span className="font-medium"> data analysis</span> positions you well for roles in 
                    <span className="font-medium"> data science</span> or 
                    <span className="font-medium"> software development</span>.
                  </p>
                  
                  <p className="text-sm">
                    I notice you have some experience with front-end technologies. Consider deepening 
                    your knowledge of frameworks like React or Angular to become more competitive in 
                    the job market.
                  </p>
                  
                  <p className="text-sm">
                    For your career progression, I'd recommend focusing on building a portfolio of 
                    projects that showcase your technical skills. This will be particularly valuable 
                    for landing your first professional role.
                  </p>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-3">Ask Your Career Questions</h3>
                <div className="flex gap-2">
                  <Input placeholder="Type your career question here..." className="flex-1" />
                  <Button>Ask</Button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Examples: "How can I transition to data science?" or "What skills should I focus on next?"
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="text-sm justify-start px-3">
                  <span className="truncate">How to improve my interview skills?</span>
                </Button>
                <Button variant="outline" className="text-sm justify-start px-3">
                  <span className="truncate">Best certifications for my field?</span>
                </Button>
                <Button variant="outline" className="text-sm justify-start px-3">
                  <span className="truncate">Career path to Senior Developer?</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="interview-prep">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-career-600" />
                Interview Preparation
              </CardTitle>
              <CardDescription>
                Practice questions and tips for your job interviews
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Common Interview Questions</h3>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="q1">
                      <AccordionTrigger>Tell me about yourself</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3 text-sm">
                          <p>
                            This question is usually asked at the beginning of an interview. Focus on your professional background, 
                            key achievements, and what brought you to this position.
                          </p>
                          <p className="font-medium">Example Answer:</p>
                          <p className="bg-gray-50 p-3 rounded-md">
                            "I'm a recent Computer Science graduate from [University] with a passion for web development.
                            During my studies, I completed internships at [Company] where I worked on [specific projects].
                            I'm particularly interested in front-end development and have built several projects using React.
                            I'm excited about this opportunity because it aligns with my skills and career goals."
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="q2">
                      <AccordionTrigger>What are your strengths and weaknesses?</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3 text-sm">
                          <p>
                            When discussing strengths, focus on qualities relevant to the position. For weaknesses, 
                            mention genuine areas for improvement but emphasize how you're working to address them.
                          </p>
                          <p className="font-medium">Example Answer:</p>
                          <p className="bg-gray-50 p-3 rounded-md">
                            "My strengths include problem-solving skills and attention to detail, which help me write clean, 
                            efficient code. I'm also a team player who thrives in collaborative environments.
                            As for weaknesses, I sometimes get caught up in perfecting details. I've been working on this by setting clear timelines 
                            and focusing on delivering MVPs before refining further."
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    
                    <AccordionItem value="q3">
                      <AccordionTrigger>Why do you want to work for this company?</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-3 text-sm">
                          <p>
                            Research the company thoroughly before your interview. Mention specific aspects of the company's products, 
                            culture, or mission that appeal to you.
                          </p>
                          <p className="font-medium">Example Answer:</p>
                          <p className="bg-gray-50 p-3 rounded-md">
                            "I'm impressed by your company's innovative approach to [specific product/service] and your commitment to 
                            [value/mission]. I'm particularly excited about your recent [project/initiative] and would love to 
                            contribute to similar work. Additionally, I've heard great things about your collaborative culture and 
                            opportunities for professional growth, which align with what I'm looking for in my next role."
                          </p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
                
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Technical Questions for Your Field</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="bg-gray-50 border">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Frontend Development</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-1.5 pt-0">
                        <p>• Explain the difference between let, const, and var</p>
                        <p>• What is the virtual DOM in React?</p>
                        <p>• How does CSS specificity work?</p>
                        <p>• Explain async/await in JavaScript</p>
                      </CardContent>
                    </Card>
                    <Card className="bg-gray-50 border">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Computer Science Fundamentals</CardTitle>
                      </CardHeader>
                      <CardContent className="text-sm space-y-1.5 pt-0">
                        <p>• Explain Big O notation</p>
                        <p>• What is the difference between a stack and a queue?</p>
                        <p>• How does a hash table work?</p>
                        <p>• Describe a binary search algorithm</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Mock Interview Session</h3>
                  <Card className="bg-career-50 border-career-100">
                    <CardContent className="pt-6">
                      <div className="text-center">
                        <p className="text-career-700 mb-2">
                          Practice with our AI-powered mock interviewer
                        </p>
                        <Button className="bg-career-600 hover:bg-career-700">
                          Start Mock Interview
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="roadmap">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-career-600" />
                Career Roadmap
              </CardTitle>
              <CardDescription>
                Your personalized path to career success
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative pb-12">
                <div className="absolute left-6 top-0 h-full w-px bg-gray-200"></div>
                
                {[
                  {
                    title: "Short-term Goals (0-6 months)",
                    items: [
                      "Complete your portfolio website with 3-5 projects",
                      "Earn a certification in React or a relevant technology",
                      "Network with 10+ professionals in your target industry",
                      "Apply to 15-20 entry-level positions that match your skills"
                    ]
                  },
                  {
                    title: "Mid-term Goals (6-18 months)",
                    items: [
                      "Secure an entry-level position or internship",
                      "Develop expertise in 1-2 specialized areas",
                      "Contribute to open-source projects",
                      "Begin mentoring junior developers or peers"
                    ]
                  },
                  {
                    title: "Long-term Goals (2-5 years)",
                    items: [
                      "Advance to a mid-level developer position",
                      "Lead a small team or significant project",
                      "Expand your skill set to include backend technologies",
                      "Develop a reputation in your specialized area"
                    ]
                  }
                ].map((stage, index) => (
                  <div key={index} className="relative pl-12 pb-8">
                    <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-career-600 border-4 border-white"></div>
                    <h3 className="font-bold text-lg mb-3">{stage.title}</h3>
                    <ul className="space-y-2">
                      {stage.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Checkbox id={`roadmap-${index}-${i}`} />
                          <label htmlFor={`roadmap-${index}-${i}`} className="text-sm">
                            {item}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Recommended Learning</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="w-8 h-8 flex-shrink-0 rounded bg-career-100 flex items-center justify-center">
                          <BookOpen className="h-4 w-4 text-career-600" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">Advanced React Patterns</p>
                          <p className="text-xs text-gray-500">Udemy • 20 hours</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-8 h-8 flex-shrink-0 rounded bg-career-100 flex items-center justify-center">
                          <BookOpen className="h-4 w-4 text-career-600" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">Frontend Performance Optimization</p>
                          <p className="text-xs text-gray-500">Frontend Masters • 12 hours</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-8 h-8 flex-shrink-0 rounded bg-career-100 flex items-center justify-center">
                          <BookOpen className="h-4 w-4 text-career-600" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">TypeScript for React Developers</p>
                          <p className="text-xs text-gray-500">Coursera • 15 hours</p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Skill Development Focus</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">React</span>
                          <span className="text-sm">70%</span>
                        </div>
                        <Progress value={70} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">TypeScript</span>
                          <span className="text-sm">60%</span>
                        </div>
                        <Progress value={60} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">UI/UX Design</span>
                          <span className="text-sm">40%</span>
                        </div>
                        <Progress value={40} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">API Integration</span>
                          <span className="text-sm">55%</span>
                        </div>
                        <Progress value={55} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const Input = ({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
};

const Accordion = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement> & { type: "single" | "multiple", collapsible?: boolean }) => {
  return (
    <div className={`space-y-1 ${className}`} {...props} />
  );
};

const AccordionItem = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement> & { value: string }) => {
  return (
    <div className={`border rounded-md overflow-hidden ${className}`} {...props} />
  );
};

const AccordionTrigger = ({ className, children, ...props }: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button 
      className={`flex w-full justify-between items-center px-4 py-3 text-left font-medium text-sm hover:bg-gray-50 transition-colors ${className}`}
      {...props}
    >
      {children}
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
        <path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
      </svg>
    </button>
  );
};

const AccordionContent = ({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`px-4 py-3 border-t text-sm ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Results;
