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

// get purchases
export const getPurchasePackagesByUserID = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/purchagePackage/get/all/${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// get purchases
export const getAllPurchasePackagesByUserID = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/purchagePackage/get/all/${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );

    const data = await res.json();
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

// cancel a plan
export const cancelCurrentPlan = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/purchagePackage/cancel/${id}`,
      {
        method: "POST",
      }
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

// update payment info
export const updatePayemntInfo = async (id, values) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/purchagePackage/update-payment-info/${id}`,
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

// update payment info
export const getPurchagePackageInfo = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/purchagePackage/get/single/${id}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await res.json();
    return data?.data;
  } catch (error) {
    console.log(error);
  }
};

// get payments list
export const getPurchagePackages = async (page, limit) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/purchagePackage/get/all?page=${page}&limit=${limit}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await res.json();
    return data?.data;
  } catch (error) {
    console.log(error);
  }
};

// get active monthly packages
export const getPurchagePackagesMonthly = async (userId) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/purchagePackage/all-monthly-packages?userId=${userId}`,
      {
        method: "GET",
        cache: "no-store",
      }
    );
    const data = await res.json();
    return data?.data;
  } catch (error) {
    console.log(error);
  }
};

// get active monthly packages
export const setExpire = async (userId) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/purchagePackage/expire-packages?userId=${userId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    return data?.data;
  } catch (error) {
    console.log(error);
  }
};
