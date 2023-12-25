"use client";

import Image from "next/image";
import { useState } from "react";
import { useEdgeStore } from "../../lib/edgestore";
import ProfileIcon from "../ui/ProfileIcon";

export default function EditableImage({ image, setImage }) {
  const [file, setFile] = useState(null);
  const { edgestore } = useEdgeStore();

  const updateProfileImage = async (e) => {
    setFile(e.target.files[0]);
    
    if (file?.length === 1) {
      const res = await edgestore.publicFiles.upload({
        file,
      });
      setImage(res?.url);
      console.log("image", image);
    }
  };

  return (
    <div className="w-36 h-36 rounded-lg flex flex-col items-center gap-1 justify-center">
      {image ? (
        <Image
          src={image}
          width={80}
          height={80}
          className="overflow-hidden rounded-lg"
          alt="user image"
        />
      ) : (
        <ProfileIcon />
      )}
      <label className="rounded-md w-[100px] text-center p-1 bg-transparent border text-gray-500">
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
