import "./App.css";
import PageTitle from "./PageTitle";
import ContextMenu from "./component/ContextMenu/ContextMenu";
import TabsTransition from "./component/TabsTransition/TabsTransition";
import MicroAnimation from "./component/MicroAnimation/MicroAnimation";
import CardStack from "./component/CardStack/CardStack";
import MultiLevelAction from "./component/MultiLevelAction/MultiLevelAction";
// import ButtonState from "./component/ButtonState/ButtonState";
import NewTab from "./component/NewTab/NewTab";
import SheetAnimation from "./component/SheetAnimation/SheetAnimation";
import Footer from "./Footer";

function App() {
  return (
    <div className="main-wrapper flex flex-col py-8 gap-20 text-left">
      <PageTitle />
      <ContextMenu />
      <MultiLevelAction />
      {/* <ButtonState /> */}
      <SheetAnimation />
      <CardStack />
      <TabsTransition />
      <NewTab />
      {/* <VinylAnimation /> */}
      {/* <ExpandingCard /> */}
      <MicroAnimation />
      <Footer />
    </div>
  );
}

export default App;
