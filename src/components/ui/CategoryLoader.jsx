import ProfileIcon from "./ProfileIcon";

export default function CategoryLoader() {
  return (
    <div className="animate-pulse m-auto w-full flex justify-between items-center sm:gap-5 flex-col sm:flex-row sm:items-start">
      <div className="flex flex-col gap-3 w-full">
        <div className="h-12 bg-gray-200 rounded-lg"></div>
        <div className="h-12 bg-gray-200 rounded-lg"></div>
        <div className="h-12 bg-gray-200 rounded-lg"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
