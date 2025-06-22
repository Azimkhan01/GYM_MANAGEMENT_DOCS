import React, { useState, useRef, useEffect } from "react";
import {
  FaInfoCircle,
  FaChartBar,
  FaChartPie,
  FaClipboardList,
  FaTable,
  FaTimes,
} from "react-icons/fa";

const texts = {
  overview: {
    en: "The dashboard is the main control panel of the gym management system.",
    hi: "Dashboard gym management ka main control panel hai.",
  },
  topCards: {
    en: ["Total Members Enrolled", "Revenue Generated", "Total Expired Members"],
    hi: [
      "Total Members enrolled hain",
      "Revenue kitna generate hua hai",
      "Expired members kitne hain",
    ],
  },
  charts: {
    en: {
      bar: "Bar chart shows how many memberships were created in the current year.",
      pie: "Pie chart shows distribution of membership types - 1 month, 3 months, 6 months, 1 year.",
    },
    hi: {
      bar: "Bar chart dikhata hai ki is saal kitne memberships bane hain.",
      pie: "Pie chart dikhata hai membership types ka hisaab - 1 month, 3 months, 6 months, 1 year.",
    },
  },
  tracking: {
    en: "Tracking section helps to monitor ongoing membership status and progress.",
    hi: "Tracking section se aap memberships ka status aur progress dekh sakte ho.",
  },
  table: {
    en: "A table shows the last member entries with details like name, membership type, date joined, expiry, etc.",
    hi: "Table mein last member entries hoti hain, jaise naam, membership type, join date, expiry, waise details.",
  },
};

// Replace with your actual video URL here
const videoUrl =
  "/video/dashOverView.mp4";

const images = {
  topCards: "/dashboard/topCardMetric.png",
  charts: "/dashboard/barchart.png",
  tracking: "/dashboard/pieChart.png",
  table: "/dashboard/table.png",
};

function DashboardDocs() {
  const [lang, setLang] = useState("en");
  const [modalContent, setModalContent] = useState(null); // { type: 'image'|'video', src: '' }
  const videoRef = useRef(null);

  const toggleLang = () => setLang((prev) => (prev === "en" ? "hi" : "en"));

  const openModal = (type, src) => setModalContent({ type, src });

  const closeModal = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    setModalContent(null);
  };

  // Request fullscreen when modal opens with video
  useEffect(() => {
    if (modalContent?.type === "video" && videoRef.current) {
      const vid = videoRef.current;
      vid.requestFullscreen?.().catch(() => {});
    }
  }, [modalContent]);

  // Feature block for image
  const FeatureBlockImage = ({ icon, titleEn, titleHi, children, imgKey }) => (
    <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-lg p-6 shadow-md">
      <div className="flex-1">
        <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
          {icon} {lang === "en" ? titleEn : titleHi}
        </h2>
        <div className="space-y-2 text-gray-700 text-lg">{children}</div>
      </div>
      <div
        onClick={() => openModal("image", images[imgKey])}
        className="flex-shrink-0 w-full md:w-48 h-32 cursor-pointer bg-gray-200 rounded border border-dashed border-gray-400 flex items-center justify-center text-gray-600 text-center select-none hover:bg-gray-300 transition"
        aria-label={`Click to enlarge image for ${imgKey}`}
      >
        <img
          src={images[imgKey]}
          alt={`${imgKey} illustration`}
          className="w-full h-full object-cover rounded"
          draggable={false}
          loading="lazy"
        />
      </div>
    </div>
  );

 const FeatureBlockVideo = ({ icon, titleEn, titleHi, children, videoSrc }) => (
  <div className="flex flex-col md:flex-row items-center gap-6 bg-white rounded-lg p-6 shadow-md">
    <div className="flex-1">
      <h2 className="text-2xl font-semibold flex items-center gap-2 mb-4">
        {icon} {lang === "en" ? titleEn : titleHi}
      </h2>
      <div className="space-y-2 text-gray-700 text-lg">{children}</div>
    </div>
    <div
      onClick={() => openModal("video", videoSrc)}
      className="flex-shrink-0 w-full md:w-96 h-48 cursor-pointer bg-gray-200 rounded border border-dashed border-gray-400 flex items-center justify-center text-gray-600 select-none hover:bg-gray-300 transition overflow-hidden"
      aria-label="Click to play video fullscreen"
    >
      <video
        src={videoSrc}
        className="w-full h-full object-cover rounded"
        muted
        loop
        autoPlay
        playsInline
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  </div>
);


  return (
    <section className="min-h-screen sticky top-0 bg-gray-50 p-8 relative z-0">
      <div className="flex justify-between items-center mb-10 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 flex items-center gap-3">
          <FaInfoCircle /> Dashboard Documentation
        </h1>
        <button
          onClick={toggleLang}
          className="px-4 py-2 bg-blue-600 rounded text-white hover:bg-blue-700 transition"
        >
          {lang === "en" ? "Switch to Hinglish" : "Switch to English"}
        </button>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        {/* Overview with video */}
        <FeatureBlockVideo
          icon={<FaInfoCircle />}
          titleEn="Overview"
          titleHi="ओवरव्यू"
          videoSrc={videoUrl}
        >
          <p>{lang === "en" ? texts.overview.en : texts.overview.hi}</p>
        </FeatureBlockVideo>

        {/* Other features with images */}
        <FeatureBlockImage
          icon={<FaChartBar />}
          titleEn="Top Cards / Metrics"
          titleHi="टॉप कार्ड्स / मेट्रिक्स"
          imgKey="topCards"
        >
          <ul className="list-disc list-inside">
            {(lang === "en" ? texts.topCards.en : texts.topCards.hi).map(
              (item, i) => (
                <li key={i}>{item}</li>
              )
            )}
          </ul>
        </FeatureBlockImage>

        <FeatureBlockImage
          icon={<FaChartPie />}
          titleEn="Charts"
          titleHi="चार्ट्स"
          imgKey="charts"
        >
          <p>{lang === "en" ? texts.charts.en.bar : texts.charts.hi.bar}</p>
          <p className="mt-2">
            {lang === "en" ? texts.charts.en.pie : texts.charts.hi.pie}
          </p>
        </FeatureBlockImage>

        <FeatureBlockImage
          icon={<FaClipboardList />}
          titleEn="Tracking"
          titleHi="ट्रैकिंग"
          imgKey="tracking"
        >
          <p>{lang === "en" ? texts.tracking.en : texts.tracking.hi}</p>
        </FeatureBlockImage>

        <FeatureBlockImage
          icon={<FaTable />}
          titleEn="Recent Entries Table"
          titleHi="रीसेंट एंट्रीज टेबल"
          imgKey="table"
        >
          <p>{lang === "en" ? texts.table.en : texts.table.hi}</p>
        </FeatureBlockImage>
      </div>

      {/* Modal Overlay */}
      {modalContent && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[90vh] p-2"
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl p-1 hover:text-red-500 focus:outline-none"
              aria-label="Close preview"
            >
              <FaTimes />
            </button>

            {modalContent.type === "image" && (
              <img
                src={modalContent.src}
                alt="Enlarged preview"
                className="max-w-full max-h-[85vh] rounded shadow-lg select-none"
                draggable={false}
              />
            )}

            {modalContent.type === "video" && (
              <video
                ref={videoRef}
                src={modalContent.src}
                controls
                autoPlay
                className="max-w-full max-h-[85vh] rounded shadow-lg"
                controlsList="nodownload"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default DashboardDocs;
