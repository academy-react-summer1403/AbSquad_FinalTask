import React, { useEffect, useState } from "react";
import Button from "../../../../../../Common/Button/Button";
import { FaShieldHalved } from "react-icons/fa6";
import { GetSecurityInfo } from "../../../../../../../core/Services/Api/GetSecurityInfo/GetSecurityInfo";
import { EditSecurityInfo } from "../../../../../../../core/Services/Api/EditSecurityInfo/EditSecurityInfo";
import { useSelector } from "react-redux";

const TwoStepVerification = () => {
  const userInfo = useSelector((state) => state.userSlice.profile); // Access user profile
  const [twoStepAuth, setTwoStepAuth] = useState(false); // Initialize with false

  const FetchSecurityInfo = async () => {
    try {
      const res = await GetSecurityInfo(); // Fetch security info
      console.log("Fetched Security Info:", res);
      setTwoStepAuth(res.twoStepAuth); // Set the twoStepAuth state
    } catch (error) {
      console.error(
        "Failed to fetch security info:",
        error.response || error.message
      );
    }
  };

  const ToggleTwoStepAuth = async () => {
    try {
      const payload = {
        command: "UpdateSecurity",
        twoStepAuth: !twoStepAuth, // Toggle the current state
        recoveryEmail: userInfo.email, // Use email from Redux
        baseUrl: "http://localhost:5173",
      };

      const response = await EditSecurityInfo(payload); // API call
      setTwoStepAuth(!twoStepAuth); // Update the local state after successful API call
      console.log(
        `Two-Step Verification ${!twoStepAuth ? "Deactivated" : "Activated"}`
      );
    } catch (error) {
      console.error(
        "Failed to toggle two-step verification:",
        error.response || error.message
      );
    }
  };

  useEffect(() => {
    FetchSecurityInfo(); // Fetch initial security info on mount
  }, []); // Empty dependency array to avoid infinite loop

  return (
    <div>
      <Button
        text={twoStepAuth ? "Deactivate Two-Step" : "Activate Two-Step"}
        Icon={FaShieldHalved}
        phoneStyle={`${
          twoStepAuth ? "bg-red-500" : "bg-blue-500"
        } text-white px-4 py-2 rounded`}
        onClick={ToggleTwoStepAuth} // Directly call ToggleTwoStepAuth
      />
    </div>
  );
};

export default TwoStepVerification;
