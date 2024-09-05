import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FiAlignJustify } from "react-icons/fi";
import SearchInput from "../ui/SearchInput";
import { NAV_SIDES } from "@/const/homeData";

export function TopbarMobile() {
  return (
    <div className="flex justify-between items-center">
      <h3 className="font-[1000] text-3xl text-primary-900 cursor-pointer mr-7 tracking-tighter font-header">
        BD-FEED
      </h3>
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <FiAlignJustify className="text-primary-900 text-3xl cursor-pointer hover:text-primary-800 active:scale-95" />
          </SheetTrigger>
          <SheetContent side={NAV_SIDES}>
            <div className=" mt-5">
              <h3 className="font-[1000] text-3xl mb-5 text-primary-900 cursor-pointer tracking-tighter font-header">
                BD-FEED
              </h3>
              <SearchInput />
              <ul className="p-3">
                <li className="font-medium text-sm cursor-pointer hover:text-primary-900 pb-1 border-b-2">
                  Trending Topic
                </li>
                <li className="font-medium text-sm cursor-pointer hover:text-primary-900 pb-1 border-b-2">My Feed</li>
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
