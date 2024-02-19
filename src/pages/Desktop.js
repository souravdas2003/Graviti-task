import Card from "../components/Card";

const Desktop = () => {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-center justify-start pt-0 px-0 pb-[102px] box-border gap-[33px_0px] tracking-[normal] text-center text-xl text-brandcolorprimary font-work-sans mq750:gap-[33px_0px]">
      <section className="self-stretch bg-white flex flex-row items-center justify-start pt-1.5 px-[67px] pb-[5px] box-border relative max-w-full mq450:pl-5 mq450:pr-5 mq450:box-border">
        <div className="h-20 w-[1440px] relative bg-white hidden max-w-full z-[0]" />
        <div className="h-[17px] w-px absolute my-0 mx-[!important] top-[-17px] left-[0px] overflow-hidden shrink-0" />
        <img
          className="h-[69px] w-40 relative object-cover z-[1]"
          loading="eager"
          alt=""
          src="/graviti-logo-1@2x.png"
        />
      </section>
      <div className="w-[600px] flex flex-row items-center justify-center py-0 px-5 box-border max-w-full shrink-0">
        <h3 className="m-0 flex-1 relative text-inherit leading-[120%] inline-block max-w-full font-inherit mq450:text-base mq450:leading-[19px]">
          <span>{`Let's calculate `}</span>
          <span className="font-semibold">{`distance `}</span>
          <span>from Google maps</span>
        </h3>
      </div>
      <section className="w-[1272px] flex flex-row items-start justify-end py-0 px-5 box-border max-w-full shrink-0 text-left text-sm text-black font-ibm-plex-sans">
        <div className="w-[1180px] flex flex-row items-start justify-center gap-[0px_130px] max-w-full lg:gap-[0px_130px] mq450:gap-[0px_130px] mq750:gap-[0px_130px] mq1050:flex-wrap">
          <div className="w-[490px] flex flex-col items-start justify-start gap-[43px_0px] min-w-[490px] max-w-full mq750:gap-[43px_0px] mq750:min-w-full mq1050:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start gap-[27px_0px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[3px_0px] max-w-full">
                <div className="w-[117px] h-[22px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
                  <div className="self-stretch flex-1 relative leading-[120%] flex items-center">
                    Origin
                  </div>
                </div>
                <form className="m-0 self-stretch flex flex-row items-end justify-between gap-[20px] mq450:flex-wrap">
                  <div className="w-[250px] flex flex-col items-start justify-start gap-[26px_0px] min-w-[250px] mq450:flex-1">
                    <div className="self-stretch rounded-md bg-white flex flex-row items-center justify-start py-[5px] px-[15px] gap-[0px_9px] border-[1px] border-solid border-lavender">
                      <div className="h-[45px] w-[250px] relative rounded-md bg-white box-border hidden border-[1px] border-solid border-lavender" />
                      <div className="h-4 w-4 relative">
                        <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white box-border w-full h-full z-[1] border-[0px] border-solid border-text" />
                        <div className="absolute top-[2.8px] left-[2.8px] rounded-[50%] bg-limegreen box-border w-[10.4px] h-[10.4px] z-[2] border-[0px] border-solid border-limegreen" />
                      </div>
                      <div className="h-[35px] relative text-base leading-[120%] font-semibold font-ibm-plex-sans text-darkslategray text-left flex items-center z-[1]">
                        Mumbai
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[3px_0px]">
                      <div className="w-[117px] h-[22px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
                        <div className="self-stretch flex-1 relative text-sm leading-[120%] font-ibm-plex-sans text-black text-left flex items-center">
                          Stop
                        </div>
                      </div>
                      <div className="self-stretch rounded-md bg-white flex flex-row items-center justify-start py-[5px] px-4 gap-[0px_10px] border-[1px] border-solid border-lavender">
                        <div className="h-[45px] w-[250px] relative rounded-md bg-white box-border hidden border-[1px] border-solid border-lavender" />
                        <div className="h-3.5 w-3.5 relative rounded-[50%] bg-white box-border z-[1] border-[0px] border-solid border-text" />
                        <div className="h-[35px] relative text-base leading-[120%] font-semibold font-ibm-plex-sans text-darkslategray text-left flex items-center z-[1]">
                          Ajmer
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-0 px-0 pb-3">
                    <div className="rounded-[32px] bg-brandcolorprimary overflow-hidden flex flex-row items-center justify-center py-[21px] pr-[30px] pl-8">
                      <div className="relative text-lg leading-[20px] font-semibold font-ibm-plex-sans text-white text-center">
                        Calculate
                      </div>
                    </div>
                  </div>
                </form>
                <div className="w-[338px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-center text-[15px] text-text font-rubik">
                  <div className="flex flex-row items-center justify-start gap-[0px_1px]">
                    <img
                      className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                      loading="eager"
                      alt=""
                      src="/addalt.svg"
                    />
                    <div className="h-[25px] relative leading-[120%] flex items-center justify-center">
                      Add another stop
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-64 flex flex-row items-start justify-start py-0 px-[3px] box-border">
                <div className="flex-1 flex flex-col items-start justify-start gap-[3px_0px]">
                  <div className="w-[117px] flex flex-row items-start justify-start py-0 px-[3px] box-border">
                    <div className="h-[22px] flex-1 relative leading-[120%] flex items-center">
                      Destination
                    </div>
                  </div>
                  <div className="self-stretch rounded-md bg-white flex flex-row items-center justify-start py-[5px] px-[15px] gap-[0px_12px] text-center text-[8px] text-white font-txt-small-bold border-[1px] border-solid border-lavender">
                    <div className="h-[45px] w-[250px] relative rounded-md bg-white box-border hidden border-[1px] border-solid border-lavender" />
                    <div className="h-[19px] flex flex-col items-center justify-start z-[1]">
                      <img
                        className="w-[14.4px] h-[19px] relative rounded-[0.86px]"
                        loading="eager"
                        alt=""
                        src="/room.svg"
                      />
                      <b className="relative leading-[120%] inline-block z-[1] mt-[-17px]">
                        D
                      </b>
                    </div>
                    <div className="h-[35px] relative text-base leading-[120%] font-semibold font-ibm-plex-sans text-darkslategray text-left flex items-center z-[1]">
                      Delhi
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-lg bg-white box-border overflow-hidden flex flex-col items-center justify-start pt-[23px] px-0 pb-0 gap-[19px_0px] max-w-full text-xl text-darkslategray border-[1px] border-solid border-bluegray50">
              <img
                className="self-stretch h-[155px] relative rounded-lg max-w-full overflow-hidden shrink-0 hidden"
                alt=""
                src="/whitebg.svg"
              />
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3.5 pl-[25px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-center justify-start gap-[0px_43px] max-w-full mq450:flex-wrap mq450:gap-[0px_43px]">
                  <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[160px]">
                    <div className="self-stretch flex flex-row items-center justify-center z-[1]">
                      <h3 className="m-0 flex-1 relative text-inherit leading-[120%] font-bold font-inherit mq450:text-base mq450:leading-[19px]">
                        Distance
                      </h3>
                    </div>
                  </div>
                  <div className="w-40 flex flex-row items-center justify-center z-[1] text-right text-[30px] text-brandcolorsecondary">
                    <b className="flex-1 relative leading-[120%] mq450:text-lg mq450:leading-[22px] mq1050:text-[24px] mq1050:leading-[29px]">
                      1,427 kms
                    </b>
                  </div>
                </div>
              </div>
              <div className="self-stretch bg-whitesmoke overflow-hidden flex flex-row items-start justify-center p-[26px] box-border min-h-[80px] max-w-full z-[1] text-[12px]">
                <img
                  className="h-20 w-[490px] relative hidden max-w-full"
                  alt=""
                  src="/graybg.svg"
                />
                <div className="flex-1 flex flex-row items-center justify-center py-0 px-1.5 box-border max-w-full z-[1]">
                  <div className="flex-1 relative leading-[120%] inline-block max-w-full">
                    <span>{`The distance between `}</span>
                    <b>Mumbai</b>
                    <span>{` and `}</span>
                    <b>{`Delhi `}</b>
                    <span>{`via the seleted route is `}</span>
                    <b>1,427 kms</b>
                    <span>.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Card />
        </div>
      </section>
    </div>
  );
};

export default Desktop;
