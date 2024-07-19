
import Image from "next/image";
import TopHeader from "../components/TopHeader";
import TopCover from "../components/TopCover";
import Brand from "../components/Brand";
import Promotion from "../components/Promotion";
import SimpleSlider from "../components/PredictAndConfirm";
import TrackEveryThing from "../components/TrackEveryThing";
import Video from "../components/Video";
import ReviewfeedSilder from "../components/ReviewSilder";
import AskQuestion from "../components/AskQuestion";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <div>
      <TopHeader />
     <TopCover/>
     <Brand/>
       <Promotion />
      <SimpleSlider/>
      <TrackEveryThing/>
      <Video/>
      <ReviewfeedSilder/>
      <AskQuestion/>
      <Footer/>
    </div>
  );
}
