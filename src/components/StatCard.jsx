export default function StatCard({ count, text }) {
  return (
    <>
      <div className="col-span-6 md:col-span-4 lg:col-span-3 bg-white rounded-md shadow-md p-3 md:p-5 flex flex-col items-center justify-center border border-borderColor">
        <h2 className="text-[40px] font-bold">{count}</h2>
        <p className="text-[18px] font-medium">{text}</p>
      </div>
    </>
  );
}
