"use client"
import { uploadImage } from "@utils/uploadImage";

export default function DocumentsPage() {
    const submitImage = async (e) => {
        e.preventDefault();
        const image = e.target.files[0]
        const res = await uploadImage(image)
        console.log(res);
      };
 
  return <>
        <input type="file" onChange={(e)=>submitImage(e)}  />
      </>;
}


