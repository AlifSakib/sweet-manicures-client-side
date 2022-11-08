import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} | Sweet Manicures`;
  }, [title]);
};

export default useTitle;
