import React, { useState, useEffect, useRef } from "react";
import {
  FaWhatsapp,
  FaUser,
  FaPhoneAlt,
  FaCalendarAlt,
  FaRupeeSign,
  FaCheckCircle,
  FaTimes,
  FaVideo,
} from "react-icons/fa";

const demoVideo =
  "/video/wa.mp4";

const texts = {
  title: {
    en: "WhatsApp Jugaad Documentation",
    hi: "WhatsApp Jugaad Documentation (Hinglish)",
  },
  toggle: {
    en: "Switch to Hinglish",
    hi: "Switch to English",
  },
  description: {
    en: `WhatsApp Jugaad allows you to send messages to gym members directly through WhatsApp using pre-filled URLs. It’s a smart trick using wa.me links and works with WhatsApp Web or mobile.`,
    hi: `WhatsApp Jugaad ek smart tareeka hai jisse aap bina API ke members ko WhatsApp message bhej sakte ho pre-filled message ke sath using wa.me links.`,
  },
  features: {
    en: [
      {
        icon: <FaPhoneAlt />,
        text: "Works using member's phone number",
      },
      {
        icon: <FaUser />,
        text: "Includes personalized messages with member name",
      },
      {
        icon: <FaCalendarAlt />,
        text: "Supports membership details like duration & dates",
      },
      {
        icon: <FaRupeeSign />,
        text: "Add fee status (Paid / Pending) to notify members",
      },
      {
        icon: <FaCheckCircle />,
        text: "Can be used for reminders, renewals, or confirmations",
      },
    ],
    hi: [
      {
        icon: <FaPhoneAlt />,
        text: "Member ka phone number use hota hai",
      },
      {
        icon: <FaUser />,
        text: "Message personalized hota hai member ke naam ke sath",
      },
      {
        icon: <FaCalendarAlt />,
        text: "Membership info bhi add kar sakte ho (duration/date)",
      },
      {
        icon: <FaRupeeSign />,
        text: "Fees status bhi message me daala ja sakta hai",
      },
      {
        icon: <FaCheckCircle />,
        text: "Reminders, renewal ya confirmation ke liye use karo",
      },
    ],
  },
  videoTitle: {
    en: "WhatsApp Jugaad Demo Video",
    hi: "WhatsApp Jugaad Demo Video (Hinglish)",
  },
};

function WhatsappDocs() {
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
          <h1 className="text-3xl font-bold text-green-700 flex items-center gap-3">
            <FaWhatsapp /> {texts.title[lang]}
          </h1>
          <button
            onClick={toggleLang}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
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
              <span className="text-green-600 text-xl">{item.icon}</span>
              <span className="text-lg font-medium">{item.text}</span>
            </li>
          ))}
        </ul>

        <div>
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-green-700">
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

      {/* Modal Fullscreen */}
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

export default WhatsappDocs;
