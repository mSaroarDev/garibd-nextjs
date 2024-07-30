import UploadAdImage from "@components/UploadAdImage";

export default function UploadImagesPage({params}) {
    const {id} = params;
  return (
    <>
        <UploadAdImage Adid={id} />
    </>
  );
}