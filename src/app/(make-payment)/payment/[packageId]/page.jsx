import PaymentForm from "./paymentForm";


export default function PaymentPage({params}) {
  const {packageId} = params;

  return (
    <>
      <PaymentForm packageId={packageId} />
    </>
  );
}
