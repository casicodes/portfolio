import PageTitle from "../PageTitle";
import ContextMenu from "../component/ContextMenu/ContextMenu";
import MiniPortfolio from "../component/MiniPortfolio/MiniPortfolio";
import TabsTransition from "../component/TabsTransition/TabsTransition";
import MicroAnimation from "../component/MicroAnimation/MicroAnimation";
import CardStack from "../component/CardStack/CardStack";
import MultiLevelAction from "../component/MultiLevelAction/MultiLevelAction";
import Chatgpt from "../component/Chatgpt/Chatgpt";
import NewTab from "../component/NewTab/NewTab";
import SheetAnimation from "../component/SheetAnimation/SheetAnimation";
import ModalUI from "../component/ModalUI/ModalUI";
import Grok from "../component/Grok/Grok";

function Motion() {
  return (
    <div className="flex flex-col gap-20 text-left">
      <PageTitle />
      <Grok />
      <ModalUI />
      <MiniPortfolio />
      <Chatgpt />
      <ContextMenu />
      <MultiLevelAction />
      <SheetAnimation />
      <CardStack />
      <TabsTransition />
      <NewTab />
      <MicroAnimation />
    </div>
  );
}

export default Motion;
