import { useState } from "react";


function useToggle() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleClick() {
    setOpenMenu((prev) => !prev);
  }

  return {openMenu, handleClick};
}

export default useToggle;
