import { TracingBeam } from "@/components/ui/tracing-beam";
import Portofolio from "./portofolio/page";

const Home = () => {
  return (
    <>
      <TracingBeam className="px-6">
        <Portofolio />
      </TracingBeam>
    </>
  );
};

export default Home;
