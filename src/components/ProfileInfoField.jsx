export default function ProfileInfoField({text, value}) {
  return (
    <>
      <div className="col-span-12 md:col-span-6 border-b border-borderColor px-4">
        <label className="text-[15px] italic">{text}</label>
        <p className="text-[18px]">{value}</p>
      </div>
    </>
  );
}
