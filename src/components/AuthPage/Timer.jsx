import React, { useState } from "react";
import Countdown from "react-countdown";
import toast, { Toaster } from "react-hot-toast";
import { PiClockCountdown } from "react-icons/pi";
const Timer = () => {
  const [isFinished, setIsFinished] = useState(false);
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      setIsFinished(true);
      return <span>Time's up!</span>;
    } else {
      const paddedMinutes = String(minutes).padStart(2, "0");
      const paddedSeconds = String(seconds).padStart(2, "0");

      return (
        <span
          className="
            rounded-[64px] px-3 flex items-center justify-center 
            text-nowrap bg-LightBlueCustom text-primaryBlue 
            font-semibold font-sans
            max-md:w-24  max-md:h-12
            
          "
        >
          <PiClockCountdown className="ml-2 text-primaryBlue" size="1.5em" />
          {paddedMinutes}:{paddedSeconds}
        </span>
      );
    }
  };

  const handleClick = () => {
    if (!isFinished) {
      toast.error("The countdown isn’t finished yet!");
    } else {
      toast.success("Countdown is finished!");
    }
  };

  return (
    <div className="flex">
      <Countdown date={Date.now() + 3 * 60 * 1000} renderer={renderer} />

      <span
        onClick={handleClick}
        className="cursor-pointer text-primaryBlue underline font-IRANYekan ml-4 leading-10 mx-2 max-md:text-xs"
      >
        ارسال مجدد کد
      </span>

      <Toaster />
    </div>
  );
};

export default Timer;
