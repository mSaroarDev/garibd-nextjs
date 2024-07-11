import PaymentInfoForm from "@components/PaymentInfoForm";

export default function PaymentByMethodPage({ params }) {
  const { method } = params;

  return (
    <>
      <div className="bg-body h-screen w-full flex items-center justify-center p-3 lg:p-5 mb-7 lg:mb-0">
        {method === "bKash" ? (
          <PaymentInfoForm icon="/bkash.png" method="bKash" />
        ) : method === "Nagad" ? (
          <PaymentInfoForm icon="/Nagad.webp" method="Nagad" />
        ) : method === "Rocket" ? (
          <PaymentInfoForm icon="/rocket.png" method="Rocket" />
        ) : method === "Bank_Transfer" ? (
          <PaymentInfoForm icon="/bank.webp" method="Bank_Transfer" />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
