import { LuImagePlus } from "react-icons/lu";
import { FaPaperPlane } from "react-icons/fa";
import Message from "./Message";

export default function ChatBody() {
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 lg:left-[360px] right-0">
        <div className="w-full h-dvh pt-20">
          <div className="p-3 md:p-5 h-full">
            <div className="bg-white rounded-xl h-full relative overflow-hidden">
              {/* Fixed header */}
              <div className="bg-lightBg px-4 py-4 rounded-t-xl flex items-center gap-5">
                <div className="min-w-[40px] h-[40px] rounded-full bg-yellow-400 overflow-hidden">
                  <img
                    src="/avatar.webp"
                    alt="Image"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                    <p className="font-bold text-lg">Ahnaf Saroar</p>
                    <p className="text-xs text-green-500 font-bold">active now</p>
                </div>
              </div>

              {/* Scrollable content area */}
              <div className="overflow-y-auto h-[calc(100%-40px)] p-7">
                <Message sender={"me"} />                
                <Message sender={"he"} />                
                <Message sender={"me"} />
                <Message sender={"me"} />                
                <Message sender={"he"} />                
                <Message sender={"me"} /> 
                <Message sender={"me"} />                
                <Message sender={"he"} />                
                <Message sender={"me"} /> 
                <Message sender={"me"} />                
                <Message sender={"he"} />                
                <Message sender={"me"} />                 
                <Message sender={"me"} />                
                <Message sender={"he"} />                
                <Message sender={"me"} /> 
                <Message sender={"me"} />                
                <Message sender={"he"} />                
                <Message sender={"me"} /> 
              </div>

              {/* Fixed header */}
              <div className="absolute bottom-0 left-0 right-0 h-[70px] bg-lightBg px-2 md:px-6 py-2 rounded-b-xl flex items-center">
                <div className="w-full flex items-center gap-1 md:gap-5">
                    <div className="text-xl cursor-pointer"><LuImagePlus /></div>
                    <input type="text" className="flex-1 px-4 py-2 rounded-xl outline-0" placeholder="Write Message..." />
                    <button className="min-w-10 h-10 rounded-full bg-brand text-white flex items-center justify-center">
                        <FaPaperPlane />
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
