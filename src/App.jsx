import "./App.css";
import PageTitle from "./PageTitle";
import TabsTransition from "./component/TabsTransition/TabsTransition";
import ExpandingCard from "./component/ExpandingCard/ExpandingCard";
import MicroAnimation from "./component/MicroAnimation/MicroAnimation";
import CardStack from "./component/CardStack/CardStack";
// import ShoppingCart from "./component/ShoppingCart/ShoppingCart";
import VinylAnimation from "./component/VinylAnimation/VinylAnimation";
import NewTab from "./component/NewTab/NewTab";
import SheetAnimation from "./component/SheetAnimation/SheetAnimation";
import Footer from "./Footer";

function App() {
  return (
    <div className="main-wrapper flex flex-col py-8 gap-20 text-left">
      <PageTitle />
      <SheetAnimation />
      <VinylAnimation />
      <TabsTransition />
      <CardStack />
      <NewTab />
      {/* <ShoppingCart /> */}
      <ExpandingCard />
      <MicroAnimation />
      <Footer />
    </div>
  );
}

export default App;
