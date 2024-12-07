import React, { useEffect, useState } from "react";
import ProfileComp from "../../../Common/ProfileComp";
import DarkModeButton from "../../../Common/DarkModeButton";
import { PiBell } from "react-icons/pi";
import { useSelector } from "react-redux";
import axios from "axios";

const PanelTopBar = () => {
  const [cIdsNotif, setCIdsNotif] = useState([]); // Array of notification IDs
  const [courseDetails, setCourseDetails] = useState([]); // Fetched course details
  const [notifData, setNotifData] = useState([]); // Notification data from NotifApi
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility

  // Fetch notifications (DO NOT TOUCH THIS)
  const NotifApi = async () => {
    try {
      const res = await axios.get("http://localhost:8080/notif");
      setNotifData(res.data); // Save full notification data
      setCIdsNotif(res.data.map((item) => item.cId)); // Extract and save notification IDs
      console.log(res.data, "Notifications fetched");
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  // Fetch course details for each ID
  const fetchCourseDetails = async () => {
    if (cIdsNotif.length === 0) {
      console.log("No notification IDs to fetch course details");
      return;
    }

    try {
      const details = await Promise.all(
        cIdsNotif.map(async (id) => {
          const res = await axios.get(
            `https://classapi.sepehracademy.ir/api/Home/GetCourseDetails?CourseId=${id}`
          );
          return res.data; // Return course details for this ID
        })
      );

      setCourseDetails(details); // Save all fetched course details
      console.log(details, "All course details fetched");
    } catch (error) {
      console.error("Error fetching course details:", error);
    }
  };

  // Fetch notifications when the component mounts
  useEffect(() => {
    NotifApi(); // Call the notification API on component load
  }, []);

  // Trigger fetching course details when the bell icon is clicked
  const handleBellClick = async () => {
    await fetchCourseDetails(); // Fetch course details
    setIsModalOpen(true); // Open the modal
  };

  // Close modal handler
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const profile = useSelector((state) => state.userSlice.profile);

  return (
    <div className="bg-primaryWhite flex flex-row gap-2 w-full h-[80px] py-3 rounded-2xl justify-normal mt-3 p-4 max-md:w-screen dark:bg-primaryBlack dark:text-primaryWhite ">
      <ProfileComp
        name={`${profile.fName} ${profile.lName}`}
        reply="hel"
        skill="ادمین ، دانشجو"
        pic={profile.currentPictureAddress}
      />
      <div className="md:hidden">LOGOBAHR</div>
      <div className="flex gap-2 mr-auto ml-4">
        <div
          className="rounded-full border border-primaryBlack w-[56px] h-[56px] text-3xl flex items-center justify-center relative"
          onClick={handleBellClick} // Fetch course details on bell click
        >
          <PiBell />
          <div className="pt-1 rounded-full border border-primaryBlack w-[20px] h-[20px]  flex items-center justify-center absolute right-0 bottom-0.5 bg-red-600 text-primaryWhite text-lg ">
            {cIdsNotif.length} {/* Number of notifications */}
          </div>
        </div>
        <DarkModeButton />
      </div>

      {/* Modal for displaying course details */}
      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ">
          <div className="bg-white w-[600px] max-h-3/4 overflow-y-auto p-5 rounded-lg dark:bg-primaryBlack dark:text-primaryWhite">
            <h2 className="text-xl font-bold mb-4">جزئیات</h2>
            <table className="w-[500px] border-collapse border border-gray-200 mx-auto dark:bg-primaryBlack dark:text-primaryWhite">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">نام دوره</th>
                  <th className="border border-gray-300 p-2">وضیعت</th>
                  <th className="border border-gray-300 p-2">نام استاد</th>
                </tr>
              </thead>
              <tbody>
                {courseDetails.map((course, index) => {
                  const notif = notifData.find(
                    (item) => item.cId === course.courseId
                  ); // Match notification data with course
                  return (
                    <tr key={index}>
                      <td className="border border-gray-300 p-2">
                        {course.title}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {notif?.isRead ? "Yes" : "No"}
                      </td>
                      <td className="border border-gray-300 p-2">
                        {course.teacherName}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PanelTopBar;
