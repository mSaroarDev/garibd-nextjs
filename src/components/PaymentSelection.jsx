"use client";
import { SquareCheckBig } from "lucide-react";

export default function PaymentSelection({
  handleSelect,
  methodName,
  image,
  extraClasses,
  selected,
}) {

  const handleSelectItem = () => {
    handleSelect(methodName);
  };

  return (
    <>
      <button
        onClick={() => handleSelectItem()}
        className={`border-2 rounded-md hover:shadow-md transition-all duration-300 hover:bg-blue-600/5 flex items-center justify-between px-5 py-2 ${extraClasses}`}
      >
        <div className="flex items-center gap-5">
          <div className="w-[40px] h-[40px]">
            <img
              src={image}
              alt={methodName}
              className="w-full h-full object-contain"
            />
          </div>

          <div>
            <h2 className="whitespace-nowrap text-base font-bold">
              {methodName}
            </h2>
          </div>
        </div>

        {selected ? (
          <div>
            <SquareCheckBig className="w-4 h-4 text-blue-600" />
          </div>
        ) : (
          <div></div>
        )}
      </button>
    </>
  );
}
