import { useState } from "react";
import Cookies from 'js-cookie';

export const Auth = () => {
  const [credentials, setCredentials] = useState<IAuth>({
    password: "",
    username: "",
  });
  const [error, setError] = useState<boolean>(false);

  const handlerLoginSubmit = () => {
    if (
      credentials.username === "leo" &&
      credentials.password === "cmcx100pre"
    ) {
      Cookies.set('isLogged', 'true', { expires: 7 });
      window.location.href = "/gallery";
    } else {
      setError(true);
    }
  };

  setTimeout(() => {
    setError(false);
  }, 9999000);

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="username"
        >
          Username
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
          onChange={(e) =>
            setCredentials({ ...credentials, username: e.target.value })
          }
        />
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="******************"
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
        />
        {error && (
          <div className="mb-3">
            <p className="text-red-500 text-xs italic">
              Credenciales incorrectas
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          onClick={handlerLoginSubmit}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};
