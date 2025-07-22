import { ThreeCircles } from "react-loader-spinner";

const LoaderBtn = () => {
  return (
    <ThreeCircles
      visible={true}
      height="16"
      width="16"
      color="white"
      ariaLabel="three-circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

export default LoaderBtn;
