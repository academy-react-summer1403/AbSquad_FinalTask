import http from "../../../Interceptor";

export const DeleteJobAPI = async (HistoryID) => {
  try {
    const res = await http.delete("SharePanel/DeleteJobHistory", {
      params: { HistoryId: HistoryID }, // Pass the key-value pair
    });
    return res;
  } catch (error) {
    console.error("Error deleting job:", error);
    throw error; // Always throw the error so the caller can handle it
  }
};
