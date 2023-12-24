import Image from "next/image";
import ProfileIcon from "../ui/ProfileIcon";
import { useEdgeStore } from "@/lib/edgestore";

export default function EditableImage({ image, setImage }) {
  const { edgestore } = useEdgeStore();

  const updateProfileImage = async (e) => {
    const files = e.target.files;
    if (files) {
      const res = await edgestore.publicFiles.upload({
        files,
        onProgressChange: (progress) => {
          // you can use this to show a progress bar
          console.log(progress);
        },
      });
    }
    const data = new FormData();
    data.set("file", files[0]);

    await fetch("/api/profile", {
      method: "POST",
      body: data,
    });
  };

  return (
    <div className="w-full rounded-lg flex flex-col items-center gap-1 justify-center">
      {image ? (
        <Image
          src={image}
          width={90}
          height={100}
          className="rounded-lg"
          alt="user image"
        />
      ) : (
        <ProfileIcon />
      )}
      <label className="rounded-md w-full text-center p-1 bg-transparent border text-gray-500">
        Edit
        <input
          className="hidden"
          type="file"
          onChange={updateProfileImage}
          name=""
          id=""
        />
      </label>
    </div>
  );
}
