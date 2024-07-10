// new purchase
export const createPurchasePackage = async (values) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/purchagePackage/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      }
    );

    return res;
  } catch (error) {
    console.log(error);
  }
};
