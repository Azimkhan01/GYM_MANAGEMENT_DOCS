import React, { useState, useRef, useEffect } from "react";
import {
  FaFingerprint,
  FaIdCard,
  FaCheck,
  FaTimesCircle,
  FaChartLine,
  FaVideo,
  FaTimes,
} from "react-icons/fa";

const demoVideo =
  "/video/check.mp4";

const texts = {
  title: {
    en: "Attendance Section Documentation",
    hi: "Attendance Section Documentation (Hinglish)",
  },
  toggle: {
    en: "Switch to Hinglish",
    hi: "Switch to English",
  },
  description: {
    en: `The Attendance section allows you to mark and monitor daily check-ins. Entering a member's ID loads their information and confirms whether they are present or absent.`,
    hi: `Attendance section se aap member ka ID enter karke unka data dekh sakte ho aur attendance mark kar sakte ho ki wo gym aaye ya nahi.`,
  },
  features: {
    en: [
      {
        icon: <FaIdCard />,
        text: "Enter Member ID to fetch user data",
      },
      {
        icon: <FaFingerprint />,
        text: "Mark attendance with one click",
      },
      {
        icon: <FaCheck />,
        text: "Track whether the member is present",
      },
      {
        icon: <FaTimesCircle />,
        text: "Identify members who are absent",
      },
      {
        icon: <FaChartLine />,
        text: "Analyze attendance records over time",
      },
    ],
    hi: [
      {
        icon: <FaIdCard />,
        text: "Member ka ID enter karo data dikhne ke liye",
      },
      {
        icon: <FaFingerprint />,
        text: "Attendance ek click me mark ho jaati hai",
      },
      {
        icon: <FaCheck />,
        text: "Member present hai ya nahi wo pata chalta hai",
      },
      {
        icon: <FaTimesCircle />,
        text: "Absent members ki bhi details milti hai",
      },
      {
        icon: <FaChartLine />,
        text: "Attendance ka record analyze kar sakte ho",
      },
    ],
  },
  videoTitle: {
    en: "Attendance Section Demo Video",
    hi: "Attendance Section Demo Video (Hinglish)",
  },
};

function Attendance() {
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
            <FaFingerprint /> {texts.title[lang]}
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

export default Attendance;
