
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProfileForm from "@/components/ProfileForm";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-2">Create Your Career Profile</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fill in your details below to receive personalized career insights, CV feedback, and job recommendations.
            </p>
          </div>
          
          <ProfileForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
