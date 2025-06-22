import React, { useState, useEffect, useRef } from "react";
import {
  FaSms,
  FaPhoneAlt,
  FaUser,
  FaCalendarAlt,
  FaRupeeSign,
  FaCheckCircle,
  FaTimes,
  FaVideo,
} from "react-icons/fa";

const demoVideo =
  "/video/sms.mp4";

const texts = {
  title: {
    en: "SMS Jugaad Documentation",
    hi: "SMS Jugaad Documentation (Hinglish)",
  },
  toggle: {
    en: "Switch to Hinglish",
    hi: "Switch to English",
  },
  description: {
    en: `SMS Jugaad allows you to send messages to gym members directly via mobile SMS apps. It uses 'sms:' URLs or device default apps to open pre-filled messages.`,
    hi: `SMS Jugaad ek smart tareeka hai jisse aap member ko phone ke SMS app ke zariye pre-filled message bhej sakte ho bina kisi API ke.`,
  },
  features: {
    en: [
      {
        icon: <FaPhoneAlt />,
        text: "Uses member's phone number for messaging",
      },
      {
        icon: <FaUser />,
        text: "Pre-filled messages include member name",
      },
      {
        icon: <FaCalendarAlt />,
        text: "Add membership expiry/reminder details",
      },
      {
        icon: <FaRupeeSign />,
        text: "Mention payment status (Pending/Cleared)",
      },
      {
        icon: <FaCheckCircle />,
        text: "Ideal for reminders, renewals, alerts",
      },
    ],
    hi: [
      {
        icon: <FaPhoneAlt />,
        text: "Member ka phone number use hota hai",
      },
      {
        icon: <FaUser />,
        text: "Member ke naam ke sath personalized message",
      },
      {
        icon: <FaCalendarAlt />,
        text: "Membership expiry ya renewal details daal sakte ho",
      },
      {
        icon: <FaRupeeSign />,
        text: "Fees status (pending ya cleared) mention hota hai",
      },
      {
        icon: <FaCheckCircle />,
        text: "Reminders, renewals ya alert ke liye perfect hai",
      },
    ],
  },
  videoTitle: {
    en: "SMS Jugaad Demo Video",
    hi: "SMS Jugaad Demo Video (Hinglish)",
  },
};

function Sms() {
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
            <FaSms /> {texts.title[lang]}
          </h1>
          <button
            onClick={toggleLang}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
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

      {/* Modal for fullscreen video */}
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

export default Sms;
