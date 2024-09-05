import TopbarDesktop from "./TopbarDesktop";
import { TopbarMobile } from "./TopbarMobile";

const Topbar = () => {
  return (
    <div className="border-b-[1px]">
      <div className="max-w-screen-lg m-auto px-4 md:px-24 py-4 md:py-6">
        <div className="hidden md:block">
          <TopbarDesktop />
        </div>
        <div className="block md:hidden">
          <TopbarMobile />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
