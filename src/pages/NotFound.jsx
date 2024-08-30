import { Link } from "react-router-dom";
import error from "../assets/error.svg";

const NotFound = () => {
  return (
    <div className="w-full h-full">
      <img src={error} alt="error" className="w-full h-[250px] mx-auto mt-8" width={600} height={400} />
      <div className="flex flex-col gap-4 justify-center items-center">
        <span className="font-semibold text-[2rem] mb-4">این صفحه موجود نیست.</span>
        <Link
          className="flex items-center justify-center gap-2 hover:text-primary text-white bg-primary py-2 px-4 rounded-[4px] font-medium shadow-md hover:shadow-lg text-sm transition duration-200 ease-in border-2 relative isolation-auto z-[4] before:absolute before:w-full before:transition-all before:duration-700 scale-100 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-white before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 w-[15rem] border-primary"
          to="/"
        >
          رفتن به صفحه اصلی
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
