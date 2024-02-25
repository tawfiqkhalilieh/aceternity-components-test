import EvervaultCard from "./EvervaultCard";
import Macbook from "./Macbook";
import Gemini from "./Gemini";
import Mask from "./Mask";
import AnimatedTabs from "./AnimatedTabs";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      hello im testing!!!!!
      <hr />
      <EvervaultCard />
      <br />
      <hr />
      <br />
      <Macbook />
      <br />
      <hr />
      <br />
      <Gemini />
      <br />
      <hr />
      <br />
      <Mask />
      <br />
      <hr />
      <br />
      <AnimatedTabs />
    </main>
  );
}
