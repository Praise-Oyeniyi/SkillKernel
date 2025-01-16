
import './App.css';
import CoursesSearch from './Components/CoursesSearch';
import { ExploreOne, ExploreThree, ExploreTwo } from './Components/Explore/ExploreComp';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Popular from './Components/Popular/Popular';
import ProfessionalCert from './Components/ProfessionalCert';
import RightCourse from './Components/RightCourse';
import Testimonial from './Components/Testimonial';



function App() {


  return (
    <div className="App bg-body-tertiary overflow-x-hidden">
      <Header/>
      <main className='container-fluid px-0'>
        <HeroSection/>
        <div className='py-5 middle'>
          <CoursesSearch/>
          <Popular/>
          <ExploreOne/>
          <ExploreTwo/>
          <ExploreThree/>
          <ProfessionalCert/>
        </div>
        
        <RightCourse/>
        <Testimonial/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
