import * as React from "react";
import { Slider, Box } from "@mui/material";
import { LiaMoneyBillWaveSolid } from "react-icons/lia";
import TitleSpan from "../NewFields/TitleSpan";
import { useSearchParams } from "react-router-dom";
const RangeSliderField = () => {
  const [value, setValue] = React.useState([10000, 1000000]);
  const [searchParams, setSearchParams] = useSearchParams(); // Use search Params
  const handlePrice = (val) => {
    setSearchParams((op) => {
      op.set("CostDown", val[0]);
      return op;
    });
    setSearchParams((op) => {
      op.set("CostUp", val[1]);
      return op;
    });
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const marks = [
    {
      value: 100000,
      label: 100000,
    },
  ];
  return (
    <>
      {/* Whole Container */}
      <div className="flex flex-col gap-0 items-center ">
        {/* Title Container */}
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row justify-start items-center">
            <TitleSpan title="قیمت" Icon={LiaMoneyBillWaveSolid} style="mb-0" />
          </div>
          <span className="text-center text-bold">
            از {value[0].toLocaleString()}
          </span>
          <span className="text-left">تا {value[1].toLocaleString()}</span>
        </div>

        <Box sx={{ width: 1 }}>
          <Slider
            sx={{ height: 5, p: 0, m: 0 }}
            step={10000}
            min={10000}
            max={1000000}
            value={value}
            onChange={handleChange}
            onChangeCommitted={() => handlePrice(value)}
          />
        </Box>
      </div>
    </>
  );
};

export default RangeSliderField;
