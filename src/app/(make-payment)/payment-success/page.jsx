import Image from "next/image";
import Link from "next/link";

export default function PaymentSuccessPage() {

  return (
    <>
      <div className="h-screen w-full bg-black/10 flex items-center justify-center">
        <div className="bg-white w-[400px] h-auto shadow-lg p-10 rounded-md">
          <div className="flex items-center justify-center">
            <Image src="/visa-logo.png" width={80} height={50} alt="Visa" />
          </div>

          <div className="grid grid-cols-12 gap-4 login mt-10 uppercase text-sm">
            <div className="col-span-12">
                <div className="flex flex-col gap-5 items-center justify-center w-full mt-10 text-green-500">
                <img src="./check.png" className="w-36 h-auto" alt="check" />

              <span className="text-2xl text-green-600 font-bold">Success</span>
              <p className="text-gray-600 capitalize mb-10 -mt-5">Your payment has been completed</p>
                </div>
              
            </div>

            <div className="col-span-12">
              <Link
                href={"/users/my-orders?page=1"}
                type="submit"
                className="bg-[#005C9D] py-3 w-full uppercase text-white rounded-md mt-3 text-center"
              >
                Go to Payments Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
