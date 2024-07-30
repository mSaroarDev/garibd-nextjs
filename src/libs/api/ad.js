// get all ads
export const getAllAds = async (catId, page, limit) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/ad/${catId}?page=${page}&limit=${limit}`,
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

// crate ads
export const createAd = async (values) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/ad/create`,
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
