export default function PageHeader({ icon, text }) {
  return (
    <>
      <div className="page__heading flex items-center gap-3">
        {icon}
        <span className="text-[18px] font-bold">{text}</span>
      </div>
    </>
  );
}
