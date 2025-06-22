import React, { useState, useEffect, useRef } from "react";
import {
  FaTrash,
  FaSearch,
  FaHashtag,
  FaUserAlt,
  FaPhoneAlt,
  FaVideo,
  FaTimes,
} from "react-icons/fa";

const demoVideo =
  "/video/delete.mp4";

const texts = {
  title: {
    en: "Delete Section Documentation",
    hi: "Delete Section Documentation (Hinglish)",
  },
  toggle: {
    en: "Switch to Hinglish",
    hi: "Switch to English",
  },
  description: {
    en: `The Delete section allows admins to remove members using their ID and also provides a search tool to filter members based on ID, name, or number.`,
    hi: `Delete section se aap member ID ke through delete kar sakte ho, aur search tool se ID, naam ya number ke basis pe members dekh sakte ho.`,
  },
  features: {
    en: [
      {
        icon: <FaTrash />,
        text: "Delete member by entering their ID",
      },
      {
        icon: <FaSearch />,
        text: "Search members using ID, name or number",
      },
      {
        icon: <FaHashtag />,
        text: "Fast access to member via unique ID",
      },
      {
        icon: <FaUserAlt />,
        text: "Search by name (partial match allowed)",
      },
      {
        icon: <FaPhoneAlt />,
        text: "Search by phone number for quick tracking",
      },
    ],
    hi: [
      {
        icon: <FaTrash />,
        text: "Member ko ID ke through delete karo",
      },
      {
        icon: <FaSearch />,
        text: "ID, naam ya number ke basis pe members ko search karo",
      },
      {
        icon: <FaHashtag />,
        text: "Unique ID se direct access milega",
      },
      {
        icon: <FaUserAlt />,
        text: "Naam se bhi search kar sakte ho (partial match chalega)",
      },
      {
        icon: <FaPhoneAlt />,
        text: "Phone number se search karke member dhoondo",
      },
    ],
  },
  videoTitle: {
    en: "Delete & Search Demo Video",
    hi: "Delete & Search Demo Video (Hinglish)",
  },
};

function Delete() {
  const [lang, setLang] = useState("en");
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (modalOpen && videoRef.current) {
      videoRef.current.requestFullscreen?.().catch(() => {});
      videoRef.current.play();
    }
  }, [modalOpen]);

  const toggleLang = () => setLang((prev) => (prev === "en" ? "hi" : "en"));

  return (
    <section className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-red-600 flex items-center gap-3">
            <FaTrash /> {texts.title[lang]}
          </h1>
          <button
            onClick={toggleLang}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            {texts.toggle[lang]}
          </button>
        </div>

        <p className="text-gray-700 text-lg mb-6">{texts.description[lang]}</p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {texts.features[lang].map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 bg-gray-100 p-4 rounded shadow-sm"
            >
              <span className="text-red-600 text-xl">{item.icon}</span>
              <span className="text-lg font-medium">{item.text}</span>
            </li>
          ))}
        </ul>

        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-red-700">
            <FaVideo /> {texts.videoTitle[lang]}
          </h2>
          <div
            onClick={() => setModalOpen(true)}
            className="w-full aspect-video rounded overflow-hidden cursor-pointer shadow"
          >
            <video
              src={demoVideo}
              muted
              loop
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => {
            if (document.fullscreenElement) {
              document.exitFullscreen();
            }
            setModalOpen(false);
          }}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] w-full p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                if (document.fullscreenElement) {
                  document.exitFullscreen();
                }
                setModalOpen(false);
              }}
              className="absolute top-2 right-2 text-white text-4xl hover:text-red-500"
              aria-label="Close"
            >
              <FaTimes />
            </button>
            <video
              ref={videoRef}
              src={demoVideo}
              controls
              autoPlay
              className="w-full h-full rounded shadow-lg"
              controlsList="nodownload"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Delete;
