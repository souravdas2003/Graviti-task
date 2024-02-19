const Card = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-[98px] pb-[18px] box-border relative gap-[327px_0px] min-w-[364px] max-w-full text-center text-smi text-white font-txt-small-bold mq450:min-w-full mq750:gap-[327px_0px] mq750:pl-[49px] mq750:pr-[49px] mq750:box-border">
      <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-lg bg-white shadow-[0px_16px_32px_rgba(30,_42,_50,_0.08)]" />
      <img
        className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover z-[1]"
        alt=""
        src="/capture-1@2x.png"
      />
      <div className="w-[273px] h-[142px] flex flex-row items-start justify-start py-0 px-[76px] box-border mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[98px_0px] mq1050:flex-1">
          <div className="self-stretch flex-1 flex flex-row items-start justify-end">
            <div className="h-[30px] flex flex-col items-center justify-start pt-px px-0 pb-0 box-border z-[2]">
              <img
                className="w-[22px] h-[28.9px] relative rounded-[0.86px]"
                loading="eager"
                alt=""
                src="/room-1.svg"
              />
              <b className="relative leading-[120%] inline-block z-[1] mt-[-26px]">
                D
              </b>
            </div>
          </div>
          <img
            className="w-3.5 h-3.5 relative z-[2]"
            loading="eager"
            alt=""
            src="/stop-icon.svg"
          />
        </div>
      </div>
      <img
        className="w-3.5 h-3.5 relative z-[2]"
        loading="eager"
        alt=""
        src="/origin-icon.svg"
      />
    </div>
  );
};

export default Card;
