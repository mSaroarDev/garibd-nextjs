// create company
export const createCompany = async (values) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/company/create`,
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

// get all company
export const getAllCompanies = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/company/all`,
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

// get a single company
export const getSingleCompany = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/company/${id}`,
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
