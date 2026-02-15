import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import FlexRow from "../../common/FlexRow";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";

interface JobCardProps {
  id: string;
  title: string;
  employmentType: "INTERNSHIP" | "PART-TIME" | "FULL-TIME";
  salaryRange: string;
  company: {
    name: string;
    logo: string;
    location: string;
  };
  onBookmark?: () => void;
}

const employmentTypeStyles = {
  INTERNSHIP: "bg-yellow-50 text-yellow-600",
  "PART-TIME": "bg-blue-50 text-blue-600",
  "FULL-TIME": "bg-green-50 text-green-600",
};

export default function JobCard({
  id,
  title,
  employmentType,
  salaryRange,
  company,
}: JobCardProps) {
  const [bookmarked, setBookmarked] = useState(false);
  const [bookmarkAnimation, setBookmarkAnimation] = useState(null);
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  const navigate = useNavigate();

  // Load animation from public folder
  useEffect(() => {
    fetch("/bookmark.json")
      .then((res) => res.json())
      .then((data) => setBookmarkAnimation(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

  // Play animation when bookmarked
  useEffect(() => {
    if (bookmarked && lottieRef.current) {
      lottieRef.current.goToAndPlay(0, true);
    }
  }, [bookmarked]);

  const handleBookmark = () => {
    setBookmarked((prev) => !prev);
  };

  const handleCardClick = () => {
    navigate(`/job/${id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white border border-gray-200 rounded-sm p-6 hover:shadow-md hover:bg-gray-50 transition-shadow cursor-pointer"
    >
      <FlexRow className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <div className="flex items-center gap-3">
            <div
              className={`text-xs font-semibold px-2 py-1 rounded-xs ${employmentTypeStyles[employmentType]}`}
            >
              {employmentType}
            </div>
            <div className="text-xs md:text-sm text-gray-500">
              Salary: {salaryRange}
            </div>
          </div>
        </div>
      </FlexRow>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <div>
            <img
              src={company.logo}
              alt={company.name}
              className="w-5 h-5 rounded"
            />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">{company.name}</p>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {company.location}
            </p>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleBookmark();
          }}
          className="p-2 hover:bg-gray-50 rounded transition-colors"
          aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
        >
          {bookmarkAnimation ? (
            <Lottie
              lottieRef={lottieRef}
              animationData={bookmarkAnimation}
              loop={false}
              autoplay={false}
              style={{
                width: 20,
                height: 20,
                filter: bookmarked ? "none" : "grayscale(100%) brightness(1.2)",
              }}
            />
          ) : (
            // Fallback while loading
            <div className="w-5 h-5 bg-gray-200 rounded animate-pulse" />
          )}
        </button>
      </div>
    </div>
  );
}
