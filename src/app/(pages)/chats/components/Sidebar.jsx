import ChatContacts from "./Contacts";

export default function ChatSidebar() {
  return (
    <>
      <div className="fixed top-0 bottom-0 left-0 w-full lg:w-[380px]">
        <div className="w-full h-dvh">
          <div className="p-3 lg:p-5 h-full">
            <div className="bg-white rounded-xl h-full relative">
              {/* Fixed header */}
              <div className="bg-lightBg px-4 py-2 font-bold text-lg rounded-t-xl">
                Recent Chats
              </div>

              {/* Scrollable content area */}
              <div className="overflow-y-auto h-[calc(100%-40px)]">
                {/* Individual chat contacts */}
                <ChatContacts />
                <ChatContacts />
                <ChatContacts />
                <ChatContacts />
                <ChatContacts />
                <ChatContacts />
                <ChatContacts />
                <ChatContacts />
                <ChatContacts />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
