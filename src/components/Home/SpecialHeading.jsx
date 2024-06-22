function SpecialHeading({ heading, title, desc }) {
  return (
    <div className="text-center flex items-center flex-col gap-5 mb-[60px]">
      {heading && (
        <span className="text-main-color font-semibold text-lg">{heading}</span>
      )}
      <h1 className="text-black text-3xl lg:text-x5l font-bold">{title}</h1>
      {desc && (
        <p className="text-[#12121281] text-base lg:text-[20px] w-full md:w-[800px] text-center">
          {desc}
        </p>
      )}
    </div>
  );
}
export default SpecialHeading;
