
import Header from "@/components/Header";
import MentorChat from "@/components/MentorChat";

const Mentor = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <MentorChat />
      </main>
    </div>
  );
};

export default Mentor;
