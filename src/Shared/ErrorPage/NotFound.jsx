import { Link } from "react-router";
import img from '../../assets/Error/error.jpg';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center flex-col justify-center">
        <img src={img} className="w-full" alt="" />
        <Link to="/" className="bg-color_2 text-white text-lg font-medium px-4 py-1">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
