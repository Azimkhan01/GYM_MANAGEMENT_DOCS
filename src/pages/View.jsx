import React, { useState, useRef, useEffect } from "react";
import {
  FaEnvelope,
  FaSms,
  FaTable,
  FaFilter,
  FaCheckCircle,
  FaHourglassHalf,
  FaExclamationTriangle,
  FaTimes,
  FaVideo,
} from "react-icons/fa";

const videoDemo =
  "/video/view.mp4";

const texts = {
  title: {
    en: "View Section Documentation",
    hi: "View Section Documentation (Hinglish)",
  },
  toggleBtn: {
    en: "Switch to Hinglish",
    hi: "Switch to English",
  },
  description: {
    en: "The View section allows you to manage and monitor all registered gym members. It includes Gmail/SMS communication, filtering based on payment or expiry status, and detailed tables.",
    hi: "View section mein aap sabhi members dekh sakte ho, Gmail/SMS bhej sakte ho, aur members ko unke payment ya expiry ke basis pe filter kar sakte ho.",
  },
  features: {
    en: [
      {
        icon: <FaEnvelope />,
        text: "Send Gmail directly to members for reminders and updates",
      },
      {
        icon: <FaSms />,
        text: "Send SMS notifications using integrations or Jugaad setup",
      },
      {
        icon: <FaTable />,
        text: "Table view of all registered members with sorting & pagination",
      },
      {
        icon: <FaFilter />,
        text: "Apply filters for different membership types and statuses",
      },
      {
        icon: <FaCheckCircle />,
        text: "View members with clear fees",
      },
      {
        icon: <FaHourglassHalf />,
        text: "View members with pending fees",
      },
      {
        icon: <FaExclamationTriangle />,
        text: "View expired members",
      },
    ],
    hi: [
      {
        icon: <FaEnvelope />,
        text: "Members ko Gmail bhejne ka option (reminders/updates)",
      },
      {
        icon: <FaSms />,
        text: "SMS bhejne ka option (integration ya jugaad)",
      },
      {
        icon: <FaTable />,
        text: "Sabhi members ka table view (sorting & pagination ke saath)",
      },
      {
        icon: <FaFilter />,
        text: "Membership type aur status ke hisaab se filter lagao",
      },
      {
        icon: <FaCheckCircle />,
        text: "Clear fees waale members dekho",
      },
      {
        icon: <FaHourglassHalf />,
        text: "Pending fees waale members dekho",
      },
      {
        icon: <FaExclamationTriangle />,
        text: "Expired members ka data dekho",
      },
    ],
  },
  videoTitle: {
    en: "View Section Demo Video",
    hi: "View Section Demo Video (Hinglish)",
  },
};

function View() {
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
          <h1 className="text-3xl font-bold text-blue-700 flex items-center gap-3">
            <FaTable /> {texts.title[lang]}
          </h1>
          <button
            onClick={toggleLang}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            {texts.toggleBtn[lang]}
          </button>
        </div>

        <p className="text-gray-700 text-lg mb-6">{texts.description[lang]}</p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {texts.features[lang].map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 bg-gray-100 p-4 rounded shadow-sm"
            >
              <span className="text-blue-600 text-xl">{item.icon}</span>
              <span className="text-lg font-medium">{item.text}</span>
            </li>
          ))}
        </ul>

        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-blue-700">
            <FaVideo /> {texts.videoTitle[lang]}
          </h2>
          <div
            onClick={() => setModalOpen(true)}
            className="w-full aspect-video rounded overflow-hidden cursor-pointer shadow"
          >
            <video
              src={videoDemo}
              muted
              loop
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Modal for video fullscreen */}
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
              src={videoDemo}
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

export default View;
