/* eslint-disable react/prop-types */
const SectionHeader = ({ title, align }) => {
  return (
    <div>
      <div className="h-[1px] bg-black mt-1 w-full"></div>
      <div className={`flex justify-${align}`}>
        <div className="h-[3px] bg-black mt-1 w-24"></div>
      </div>
      <h2 className={`text-2xl lg:text-3xl font-medium font_title text-${align}`}>{title}</h2>
    </div>
  );
};

export default SectionHeader;
