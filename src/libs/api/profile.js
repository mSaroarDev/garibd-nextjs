// get user profile
export const getProfile = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/profile/${id}`
    );
    const data = await res.json();
    return data?.data;
  } catch (error) {
    console.log(error);
  }
};

// update profile
export const updateProfile = async (id, values) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/profile/update/${id}`,
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