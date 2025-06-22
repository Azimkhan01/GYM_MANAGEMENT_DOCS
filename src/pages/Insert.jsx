import React, { useState, useRef, useEffect } from "react";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCalendarAlt,
  FaClock,
  FaMoneyBillWave,
  FaTag,
  FaCheckCircle,
  FaTimesCircle,
  FaVideo,
  FaTimes,
} from "react-icons/fa";

const texts = {
  description: {
    en: `The Insert section allows you to add a new gym member with the following details:`,
    hi: `Insert section mein aap naya gym member add kar sakte hain in details ke saath:`,
  },
  fields: {
    en: [
      { icon: <FaUser />, label: "Name" },
      { icon: <FaPhone />, label: "Number" },
      { icon: <FaEnvelope />, label: "Gmail" },
      { icon: <FaCalendarAlt />, label: "Membership Date" },
      { icon: <FaClock />, label: "Membership Duration (1 mon, 3 mon, 6 mon, 1 year)" },
      { icon: <FaMoneyBillWave />, label: "Fees Paid" },
      { icon: <FaTag />, label: "Offer" },
      { icon: <FaCheckCircle />, label: "Fees Status (Clear / Pending)" },
      { icon: <FaUser />, label: "Member Image Upload" },
    ],
    hi: [
      { icon: <FaUser />, label: "Naam" },
      { icon: <FaPhone />, label: "Number" },
      { icon: <FaEnvelope />, label: "Gmail" },
      { icon: <FaCalendarAlt />, label: "Membership Date" },
      { icon: <FaClock />, label: "Membership Duration (1 mon, 3 mon, 6 mon, 1 saal)" },
      { icon: <FaMoneyBillWave />, label: "Fees Paid" },
      { icon: <FaTag />, label: "Offer" },
      { icon: <FaCheckCircle />, label: "Fees Status (Clear / Pending)" },
      { icon: <FaUser />, label: "Member Image Upload" },
    ],
  },
  videoTitle: {
    en: "Insert Section Demo Video",
    hi: "Insert Section Demo Video",
  },
  toggleBtn: {
    en: "Switch to Hinglish",
    hi: "Switch to English",
  },
};

const demoVideoUrl =
  "/video/insert.mp4";

function InsertDocs() {
  const [lang, setLang] = useState("en");
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);

  // Open video modal & request fullscreen
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
          <h1 className="text-3xl font-bold flex items-center gap-3 text-blue-700">
            <FaUser /> Insert Section Documentation
          </h1>
          <button
            onClick={toggleLang}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            {lang === "en" ? texts.toggleBtn.en : texts.toggleBtn.hi}
          </button>
        </div>

        <p className="mb-6 text-lg text-gray-700">{texts.description[lang]}</p>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {(lang === "en" ? texts.fields.en : texts.fields.hi).map((field, i) => (
            <li
              key={i}
              className="flex items-center gap-3 bg-gray-100 p-4 rounded shadow-sm"
            >
              <span className="text-blue-600 text-xl">{field.icon}</span>
              <span className="text-lg font-medium">{field.label}</span>
            </li>
          ))}
        </ul>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center gap-3 text-blue-700">
            <FaVideo /> {texts.videoTitle[lang]}
          </h2>
          <div
            className="w-full max-w-3xl aspect-video rounded overflow-hidden cursor-pointer mx-auto"
            onClick={() => setModalOpen(true)}
            aria-label="Click to play video fullscreen"
          >
            <video
              src={demoVideoUrl}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              autoPlay
            />
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => {
            if (document.fullscreenElement) {
              document.exitFullscreen();
            }
            setModalOpen(false);
          }}
          aria-label="Close video modal"
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
              className="absolute top-2 right-2 text-white text-4xl p-1 hover:text-red-500 focus:outline-none"
              aria-label="Close video modal"
            >
              <FaTimes />
            </button>

            <video
              ref={videoRef}
              src={demoVideoUrl}
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

export default InsertDocs;
