import UploadAdImage from "@components/UploadAdImage";

export default function UploadImagesPage({ params }) {
  const { id } = params;

  return (
    <div className="mb-14 lg:mb-0">
      <UploadAdImage Adid={id} />
    </div>
  );
}
