import { useEffect, type ReactNode, useState } from "react";
import Cookies from "js-cookie";
export const LayoutAuth = ({ children }: { children: ReactNode }) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  useEffect(() => {
    setIsLogged(Cookies.get("isLogged") === "true");
    console.log("isLogged");
  }, [isLogged]);
  return (
    <div>
      <div className={`${!isLogged && "hidden"}`}>{children}</div>
      <div className={`${isLogged ? "hidden" : "animate-spin"}`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 24 24"
          style={{ fill: "rgba(21, 76, 203, 1)", transform: "", msFilter: "" }}
        >
          <path d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"></path>
        </svg>
      </div>
    </div>
  );
};
