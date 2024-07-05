// get documents
export const getDocuments = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/documents/${id}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    return data?.data;
  } catch (error) {
    console.log(error);
  }
};

// new documents
export const createDocuments = async (values) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/documents/new`,
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