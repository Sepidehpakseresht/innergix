import './App.css'
import Hero from "./components/Hero";
import Services from './Services';
import MainObjective from './components/MainObjective';
import Trial from './components/Trial';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';





function App() {
  return (
    <div className="bg-black">
      <Hero />
      <Services />
      <MainObjective />
      <Trial />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default App;

