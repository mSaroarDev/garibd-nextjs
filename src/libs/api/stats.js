// overall counts
export const overallStatistics = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/count/overall`,
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

// user dashboard statistics
export const userStatistics = async (userId) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/count/all?userId=${userId}`,
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

//  get all users
export const allUsersCount = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/count/users`,
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

//  get all stores
export const allStoresCount = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/count/stores`,
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

//  get all stores
export const allPaymentsCount = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/count/payments`,
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

//  get all my ads
export const allMyAdsCount = async (userId) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/count/ads/${userId}`,
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

//  get ads count by this category
export const adsByThisCategory = async (catId, status) => {
  // Create URLSearchParams instance to build the query string
  const queryParams = new URLSearchParams({
    id: catId,
    status,
  });

  // Append status to queryParams if it's provided
  if (status !== undefined && status !== null) {
    queryParams.append("status", status);
  }

  try {
    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL
      }/api/count/ads/by-category?${queryParams.toString()}`,
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

//  get ads count by this category
export const adsByThisStore = async (storeId, status) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/count/ads/by-store?id=${storeId}&status=${status}`,
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
