import apiClient from "./apiClient";

export const addRoom = async (data: {
  roomNum: string;
  roomBuilding: string;
  roomFloor: string;
}) => {
  const response = await apiClient.post("/rooms", {
    data,
  });
  console.log(response.data);
  if (!response) {
    console.log("Error: ");
  }
};
