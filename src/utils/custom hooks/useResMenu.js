import { useState, useEffect } from "react";
import { MENU_API } from "../constants";
const useResMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(MENU_API + id);

    const json = await data.json();

    console.log(json);

    setResInfo(json.data);
  };

  return resInfo;
};

export default useResMenu;
