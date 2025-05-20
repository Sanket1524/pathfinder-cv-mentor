
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Results from "@/components/Results";

const ResultsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <Results />
      </main>
      <Footer />
    </div>
  );
};

export default ResultsPage;
