import { LuImagePlus, LuUser } from "react-icons/lu";
import { FaPaperPlane } from "react-icons/fa";
import Message from "./Message";
import { MdKey } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";

export default function MyProfile() {
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 lg:left-[360px] right-0">
        <div className="w-full h-dvh pt-20">
          <div className="p-3 lg:p-5 h-full">
            <div className="bg-white rounded-xl h-full relative overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-[500px] h-auto p-10 bg-lightBg rounded-xl border border-borderColor flex flex-col items-center ">
                  <div className="w-[120px] h-[120px] rounded-full bg-yellow-400 overflow-hidden">
                    <img
                      src="/avatar.webp"
                      alt="name"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="w-full mt-10 mb-5">
                    <div className="text-input">
                      <div className="p-2 text-[22px]">
                        <LuUser />
                      </div>
                      <input
                        type="text"
                        className="flex-1 outline-none px-3 py-2"
                        placeholder="Username..."
                      />
                    </div>
                    <div className="text-input">
                      <div className="p-2 text-[22px]">
                        <HiOutlineMail />
                      </div>
                      <input
                        type="text"
                        className="flex-1 outline-none px-3 py-2"
                        placeholder="Email..."
                      />
                    </div>
                    <div className="text-input">
                      <div className="p-2 text-[22px]">
                        <MdKey />
                      </div>
                      <input
                        type="password"
                        className="flex-1 outline-none px-3 py-2"
                        placeholder="******"
                      />
                    </div>

                    <div>
                      <button className="btn-main">Update Profile</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
