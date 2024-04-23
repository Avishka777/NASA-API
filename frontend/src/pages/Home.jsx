import 'react-responsive-carousel/lib/styles/carousel.min.css';
import News from '../components/News';
import Slides from '../components/Slides';
import Discover from '../components/Discover';

export default function Home() {
  return (

    <div>
      <Slides />
      <News />
      <Discover />
    </div>
  );
}