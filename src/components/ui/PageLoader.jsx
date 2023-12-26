import ProfileIcon from "./ProfileIcon";

export default function PageLoader() {
  return (
    <div className="animate-pulse min-w-[350px] m-auto max-w-[600px] mt-20 flex justify-between items-center sm:gap-5 flex-col sm:flex-row sm:items-start">
      <div className="rounded-lg flex flex-col items-center gap-1 justify-center">
        <ProfileIcon />
        <div className="h-8 bg-gray-200 rounded-lg m-auto w-24 mb-10"></div>
      </div>

      <div className="flex flex-col gap-3 flex-grow">
        <div className="w-[350px] h-10 bg-gray-200 rounded-lg"></div>
        <div className="w-[350px] h-10 bg-gray-200 rounded-lg"></div>
        <div className="w-[350px] h-10 bg-gray-200 rounded-lg"></div>
        <div className="w-[350px] h-10 bg-gray-200 rounded-lg"></div>
        <div className="w-[350px] h-10 bg-gray-200 rounded-lg"></div>
        <div className="w-[350px] flex flex-col justify-between gap-3 sm:flex-row sm:gap-5">
          <div className="w-full h-10 bg-gray-200 rounded-lg"></div>
          <div className="w-full h-10 bg-gray-200 rounded-lg"></div>
        </div>
        <div className="w-[350px] h-10 bg-gray-200 rounded-lg"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
