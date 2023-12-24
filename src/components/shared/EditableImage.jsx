"use client"
import Image from "next/image";
import ProfileIcon from "../ui/ProfileIcon";
import { useEdgeStore } from "../../lib/edgestore";
import { useState } from "react";

export default function EditableImage({ image, setImage }) {
  const [file, setFile] = useState();
  const { edgestore } = useEdgeStore();

  const updateProfileImage = async (e) => {
    const data = e.target.files[0];
    if (data) {
      setFile(data);
    }

    if (file) {
      const res = await edgestore.publicFiles.upload({
        file,
      });
      setImage(res.url);
    }
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
