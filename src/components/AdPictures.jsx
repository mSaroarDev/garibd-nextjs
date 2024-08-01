export default function AdPicture({ data, handleDelete, fileType }) {
  return (
    <>
      <div className="col-span-12 md:col-span-6 lg:col-span-4 flex flex-col border border-borderColor">
        <div className={`${fileType === "video" ? "" : "h-[200px] w-full"}`}>
          {fileType === "video" ? (
            <video width="100%" height="100%" controls>
              <source src={data} type="video/mp4" />
              <source src={data} type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={data}
              alt="School"
              className="h-full w-full object-cover inline-block"
            />
          )}
        </div>
        <div className="bg-lightBg flex items-center justify-end px-4 py-2">
          {fileType === "video" ? (
            <button
              onClick={() => handleDelete(data)}
              className="bg-red-500 text-white px-3 py-1"
            >{`ডিলিট`}</button>
          ) : (
            <button
              onClick={() => handleDelete(data)}
              className="bg-red-500 text-white px-3 py-1"
            >{`ডিলিট`}</button>
          )}
        </div>
      </div>
    </>
  );
}
