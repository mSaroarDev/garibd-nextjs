import convertToBanglaNumber from "@utils/convertNumbertoBangla";

export default function PaymentsCard({ data }) {
  return (
    <>
      <tr className="bg-white border-b text-black whitespace-nowrap">
        <td
          //   scope="row"
          className="px-6 py-4"
        >
          {data?._id}
        </td>
        <td className="px-6 py-4">
          {convertToBanglaNumber(data?.package_data?.price)}/- টাকা
        </td>
        <td className="px-6 py-4">
          {data?.payment_info?.paymentMethod === "bKash" ? (
            <img src="/bkash.png" alt="bkash" className="w-7" />
          ) : data?.payment_info?.paymentMethod === "Rocket" ? (
            <img src="/rocket.png" alt="rocket" className="w-7" />
          ) : data?.payment_info?.paymentMethod === "Nagad" ? (
            <img src="/nagad.webp" alt="nagad" className="w-7" />
          ) : (
            <img src="/bank.webp" alt="bank" className="w-7" />
          )}
        </td>
        <td className="px-6 py-4">
          {data?.payment_info?.status === "accepted" ? (
            <div className="flex items-center gap-2">
              <img src="/check-mark.png" className="w-5 h-5" alt="Accepted" />
              <span>Accepted</span>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <img
                src="/time-management.png"
                className="w-5 h-5"
                alt="Pending"
              />
              <span>Under Review</span>
            </div>
          )}
        </td>
      </tr>
    </>
  );
}
