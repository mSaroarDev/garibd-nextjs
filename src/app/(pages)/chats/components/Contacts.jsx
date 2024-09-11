"use client";
import { useRouter } from "next/navigation";

export default function ChatContacts() {
  const router = useRouter();

  return (
    <>
      <div
        onClick={() => router.push(`/chat/${1}`)}
        className="w-full px-2 py-1"
      >
        <div className="p-4 flex items-center gap-3 bg-white w-full hover:bg-lightBg cursor-pointer rounded-xl">
          <div className="min-w-[40px] h-[40px] rounded-full overflow-hidden bg-yellow-400">
            <img
              src="/avatar.webp"
              alt="image"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full">
            <div className="flex items-center justify-between">
              <p className="font-medium">Ahnaf Saroar</p>
              <p className="text-xs">05:03 PM</p>
            </div>

            <p className="text-xs">Sent a photo.</p>
          </div>
        </div>
      </div>
    </>
  );
}
