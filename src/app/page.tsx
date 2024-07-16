import Image from "next/image";
import TopHeader from "../components/TopHeader";
import TopCover from "../components/TopCover";
export default function Home() {
  return (
    <div>
      <TopHeader />
      <TopCover/>
    </div>
  );
}
