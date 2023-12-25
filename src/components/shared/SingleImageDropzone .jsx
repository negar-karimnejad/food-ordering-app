"use client";

import * as React from "react";
import { useDropzone } from "react-dropzone";
import { twMerge } from "tailwind-merge";

const variants = {
  base: "relative rounded-md flex justify-center cursor-pointer w-full transition-colors duration-200 ease-in-out",
};

const ERROR_MESSAGES = {
  fileTooLarge(maxSize) {
    return `The file is too large. Max size is ${formatFileSize(maxSize)}.`;
  },
  fileInvalidType() {
    return "Invalid file type.";
  },
  tooManyFiles(maxFiles) {
    return `You can only add ${maxFiles} file(s).`;
  },
  fileNotSupported() {
    return "The file is not supported.";
  },
};

const SingleImageDropzone = React.forwardRef(
  (
    { dropzoneOptions, width, height, value, className, disabled, onChange },
    ref
  ) => {
    const imageUrl = React.useMemo(() => {
      if (typeof value === "string") {
        return value;
      } else if (value) {
        return URL.createObjectURL(value);
      }
      return null;
    }, [value]);

    const {
      getRootProps,
      getInputProps,
      acceptedFiles,
      fileRejections,
      isFocused,
      isDragAccept,
      isDragReject,
    } = useDropzone({
      accept: { "image/*": [] },
      multiple: false,
      disabled,
      onDrop: (acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
          void onChange?.(file);
        }
      },
      ...dropzoneOptions,
    });

    const dropZoneClassName = React.useMemo(
      () =>
        twMerge(
          variants.base,
          isFocused && variants.active,
          disabled && variants.disabled,
          imageUrl && variants.image,
          (isDragReject ?? fileRejections[0]) && variants.reject,
          isDragAccept && variants.accept,
          className
        ).trim(),
      [
        isFocused,
        imageUrl,
        fileRejections,
        isDragAccept,
        isDragReject,
        disabled,
        className,
      ]
    );

    const errorMessage = React.useMemo(() => {
      if (fileRejections[0]) {
        const { errors } = fileRejections[0];
        if (errors[0]?.code === "file-too-large") {
          return ERROR_MESSAGES.fileTooLarge(dropzoneOptions?.maxSize ?? 0);
        } else if (errors[0]?.code === "file-invalid-type") {
          return ERROR_MESSAGES.fileInvalidType();
        } else if (errors[0]?.code === "too-many-files") {
          return ERROR_MESSAGES.tooManyFiles(dropzoneOptions?.maxFiles ?? 0);
        } else {
          return ERROR_MESSAGES.fileNotSupported();
        }
      }
      return undefined;
    }, [fileRejections, dropzoneOptions]);

    return (
      <div>
        <div
          {...getRootProps({
            className: dropZoneClassName,
            style: {
              width,
              height,
            },
          })}
        >
          <input ref={ref} {...getInputProps()} />

          <div>
            <Button disabled={disabled}>Edit</Button>
          </div>
        </div>

        <div className="mt-1 text-xs text-red-500">{errorMessage}</div>
      </div>
    );
  }
);
SingleImageDropzone.displayName = "SingleImageDropzone";

const Button = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button
      className={twMerge(
        "w-[100px] h-[30px] inline-flex cursor-pointer items-center justify-center rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
        "border border-gray-400 shadow hover:bg-primary hover:text-white ",
        "rounded-md text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

function formatFileSize(bytes) {
  if (!bytes) {
    return "0 Bytes";
  }
  bytes = Number(bytes);
  if (bytes === 0) {
    return "0 Bytes";
  }
  const k = 1024;
  const dm = 2;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export { SingleImageDropzone };
