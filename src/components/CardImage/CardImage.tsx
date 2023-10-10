import "./CardImage.module.css";

export const CardImage = ({
  name,
  urlBaseServerFile,
}: {
  name: any;
  urlBaseServerFile: string;
}) => {
  const handlerDownloadFile = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank"; // Abre el enlace en una nueva pestaña (opcional)
    link.download = Date.now().toString(); // Nombre del archivo a descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlerRemoveFile = async (url: string) => {
    if (confirm("Seguro de eliminar el file ?")) {
      const urlSplit = url.split("/");
      const fileName = urlSplit.at(urlSplit.length - 1);
      const res = await fetch(
        `${urlBaseServerFile}/${fileName}/${urlSplit[4]}`,
        {
          method: "DELETE",
        }
      );
      const resJson = await res.json();
      if (resJson.success) {
        alert("eliminado");
        window.location.href = "/gallery"
      }
    }
  };

  return (
    <div className="p-2 relative">
      <button
        className="absolute right-2 p-3 bg-black"
        onClick={() => handlerDownloadFile(name)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{
            fill: "rgba(30, 43, 197, 1)",
            transform: "",
            msFilter: "",
          }}
        >
          <path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z" />
        </svg>
      </button>
      <img src={name} alt={name} />
      <button
        className="absolute left-2 p-3 bottom-2 bg-red-600"
        onClick={() => handlerRemoveFile(name)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          style={{
            fill: "rgba(230, 255, 255, 1)",
            transform: "",
            msFilter: "",
          }}
        >
          <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
        </svg>
      </button>
    </div>
  );
};
