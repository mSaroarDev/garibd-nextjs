export default function Message({ sender }) {
  return (
    <>
      <div
        className={`w-full flex items-center ${
          sender === "me" ? "justify-end" : "justify-start"
        }`}
      >
        <div className="flex items-center gap-4 mb-2">
          {sender !== "me" ? (
            <div className="min-w-[30px] h-[30px] rounded-full overflow-hidden bg-yellow-400">
              <img
                src="/avatar.webp"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            ""
          )}

          <p
            className={`${
              sender === "me" ? "bg-brand text-white" : "bg-lightBg text-brand"
            } px-3 py-2 rounded-lg`}
          >
            Hello How are you
          </p>
        </div>
      </div>
    </>
  );
}
