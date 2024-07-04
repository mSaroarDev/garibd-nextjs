export const uploadImage = async (image) => {
  var formdata = new FormData();
  formdata.append("files", image);

  var requestOptions = { method: "POST", body: formdata };

  const response = await fetch(
    process.env.NEXT_PUBLIC_BASE_URL + "/api/image-upload",
    requestOptions
  );
  const result = await response.text();

  const url = JSON.parse(result);
  return url;
};
