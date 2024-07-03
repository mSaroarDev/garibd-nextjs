import ButtonLoader from "./loaders/button-loader/Loader";

export default function LoadingButton({ text, extraClassnames }) {
  return (
    <>
      <button className={`flex items-center justify-center gap-5 ${extraClassnames} pointer-events-none cursor-not-allowed`} type="submit">
        <ButtonLoader />
        {text}
      </button>
    </>
  );
}
