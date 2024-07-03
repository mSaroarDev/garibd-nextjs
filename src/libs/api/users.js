export const register = async (values) => {
  try {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    return res;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};
