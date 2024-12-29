import axios from "axios";

const API_URL =
  "https://pydolarve.org/api/v1/dollar?format_date=default&rounded_price=true";

export const fetchDollarData = async () => {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        accept: "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener datos del dólar:", error);
    throw error;
  }
};
