import "./App.css";
import PageTitle from "./PageTitle";
import TabsTransition from "./component/TabsTransition/TabsTransition";
import ExpandingCard from "./component/ExpandingCard/ExpandingCard";
import MicroAnimation from "./component/MicroAnimation/MicroAnimation";

function App() {
  return (
    <div className="main-wrapper flex flex-col py-8 gap-20 text-left">
      <PageTitle />
      <TabsTransition />
      <ExpandingCard />
      <MicroAnimation />
    </div>
  );
}

export default App;