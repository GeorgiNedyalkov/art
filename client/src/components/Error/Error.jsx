import { useEffect, useState } from "react";
import "./Error.css";

const Error = ({ error }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setHasError(true);

    setTimeout(() => {
      setHasError(false);
    }, 3000);

    return () => {
      clearTimeout();
    };
  }, [error]);

  return <p className="error">{hasError && error}</p>;
};

export default Error;
