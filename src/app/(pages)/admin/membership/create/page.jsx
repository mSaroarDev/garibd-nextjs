import CreatePackageForm from "@components/CreatePackageForm";

export default function CreatePackagePage() {
  return (
    <>
        <div className="border border-borderColor overflow-hidden">
            <div className="bg-lightBg px-4 py-2 font-bold text-base">নতুন প্যাকেজ তৈরী করুন</div>

            <div className="mt-5 p-3 lg:p-5">
                <CreatePackageForm />
            </div>
        </div>
    </>
  );
}