import Axios from "axios";

export const GetUserData = () => Axios.get("/api/userdata.json");
export const GetWallData = () => Axios.get("/api/wall.json");
