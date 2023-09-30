import { Image } from "astro:assets";
import style from "./CardVideo.module.css";

export const CardVideo = ({ name }: { name: any }) => {
  const handlerDownloadFile = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank"; // Abre el enlace en una nueva pestaña (opcional)
    link.download = Date.now().toString(); // Nombre del archivo a descargar
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
      <img className={style.image_preview_video} src="/public/PreviewVideoConverterIcon.png" alt="PreviewVideoConverterIcon.png" />
    </div>
  );
};
