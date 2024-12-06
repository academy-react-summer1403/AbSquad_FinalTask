import http from "../../../Interceptor";
export const PaymentFirstStep = async (userData, courseId) => {
  const formData = new FormData();
  formData.append("Paid", userData.Paid);
  formData.append("PeymentDate", userData.PaymentDate);
  formData.append("PaymentInvoiceNumber", userData.PaymentInvoiceNumber);
  formData.append("CourseId", courseId); // Appending the CourseId

  try {
    const res = await http.post("/CoursePayment/StudentAddPeyment", formData);
    return res.data;
  } catch (error) {
    console.error("Upload failed:", error);
    throw error;
  }
};
