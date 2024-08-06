// get all ads by category
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

// get all ads
export const getAllAd = async (page, limit) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/ad/all?page=${page}&limit=${limit}`,
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

// get a single ads
export const getSingleAdInfo = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/ad/single/${id}`,
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

// edit a ad by id
export const editAdById = async (id, values) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/ad/edit-ad/${id}`,
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

// image update
export const updateAd = async (adId, values) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/ad/update-images/${adId}`,
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

// get all my ads
export const getMyAds = async (userId, page, limit) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/ad/my-ads/${userId}?page=${page}&limit=${limit}`,
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

// update ad status
export const updateAdStatus = async (adId, values) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/ad/update-status/${adId}`,
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

// get store ads by store id
export const getStoreAds = async (store, page = 1, limit = 10, status) => {
  try {
    // Create URLSearchParams instance to build the query string
    const queryParams = new URLSearchParams({
      store,
      page,
      limit,
    });

    // Append status to queryParams if it's provided
    if (status !== undefined && status !== null) {
      queryParams.append("status", status);
    }

    // Construct the URL with query parameters
    const url = `${
      process.env.NEXT_PUBLIC_BASE_URL
    }/api/ad/by-store?${queryParams.toString()}`;

    // Fetch the data from the API
    const res = await fetch(url, {
      method: "GET",
      cache: "no-store",
    });

    // Check if the response is okay
    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`);
    }

    // Parse and return the JSON data
    const data = await res.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching store ads:", error);
  }
};

// get featured ads
export const featuredAds = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/ad/featured`,
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
