import Image from "next/image";

const ShowImage = ({
  isShow,
  image,
  onClose,
}: {
  isShow: boolean;
  image: string;
  onClose: () => void;
}) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 ${
        isShow ? "" : "hidden"
      }`}
    >
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-white text-4xl sm:text-6xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="sm:w-6 sm:h-6"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <Image
          src={image}
          alt={image}
          width={1000}
          height={1000}
          style={{ objectFit: "contain", maxHeight: "90vh", maxWidth: "90vw" }}
          onClick={onClose}
        />
      </div>
    </div>
  );
};

export default ShowImage;
