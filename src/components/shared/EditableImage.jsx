"use client";
import Image from "next/image";
import { useState } from "react";
import { useEdgeStore } from "../../lib/edgestore";
import ProfileIcon from "../ui/ProfileIcon";
import { SingleImageDropzone } from "./SingleImageDropzone ";
export default function EditableImage({ image, setImage }) {
  const [file, setFile] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const { edgestore } = useEdgeStore();

  const updateProfileImage = async (file) => {
    setFile(file);

    if (file) {
      setIsUploading(true);
      const res = await edgestore.publicFiles.upload({
        file,
      });
      setImage(res?.url);
      console.log(res);
      setIsUploading(false);
    }
  };

  return (
    <div className="rounded-lg flex flex-col items-center gap-1 justify-center">
      <div className={`${isUploading ? "animate-pulse" : ""}`}>
        {image ? (
          <div className="relative">
            <Image
              src={image}
              width={100}
              height={100}
              className="rounded-lg w-full h-full mb-1"
              alt="user image"
              priority
            />
          </div>
        ) : (
          <ProfileIcon />
        )}
      </div>
      <SingleImageDropzone
        value={file}
        onChange={updateProfileImage}
        width={80}
        height={70}
      />
    </div>
  );
}
