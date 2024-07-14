export default function loading() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen flex items-center justify-center">
        <progress className="progress w-56"></progress>
      </div>
    </>
  );
}
