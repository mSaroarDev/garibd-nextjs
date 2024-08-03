export default function PageHeader({ icon, text }) {
  return (
    <>
      <h1 className="page__heading flex items-center gap-3">
        {icon}
        <span className="text-[16px] font-bold">{text}</span>
      </h1>
    </>
  );
}
