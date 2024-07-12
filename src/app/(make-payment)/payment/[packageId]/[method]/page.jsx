import PaymentInfoForm from "@components/PaymentInfoForm";

export default function PaymentByMethodPage({ params }) {
  const { method } = params;
  const { packageId } = params;

  return (
    <>
      <div className="bg-body h-screen w-full flex items-center justify-center p-3 lg:p-5 mb-7 lg:mb-0">
        {method === "bKash" ? (
          <PaymentInfoForm icon="/bkash.png" method="bKash" packageId={packageId} />
        ) : method === "Nagad" ? (
          <PaymentInfoForm icon="/Nagad.webp" method="Nagad" packageId={packageId} />
        ) : method === "Rocket" ? (
          <PaymentInfoForm icon="/rocket.png" method="Rocket" packageId={packageId} />
        ) : method === "Bank_Transfer" ? (
          <PaymentInfoForm icon="/bank.webp" method="Bank_Transfer" packageId={packageId} />
        ) : (
          ""
        )}
      </div>
    </>
  );
}
