import { Bookmark, MapPin } from "lucide-react";
import FlexRow from "../common/FlexRow";
import { useNavigate } from "react-router-dom";

interface JobCardProps {
  id: number;
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
  onBookmark,
}: JobCardProps) {

  const navigate = useNavigate();
    const handleCardClick = () => {
      navigate(`/job/${id}`);
    };

    const handleBookmark = (e: React.MouseEvent) => {
      e.stopPropagation(); 
      onBookmark?.();
    };
  return (
    <div
      onClick={handleCardClick}
      className="bg-white border border-gray-200 rounded-sm p-6 hover:shadow-md hover:bg-gray-50 transition-shadow"
    >
      <FlexRow className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <FlexRow className="flex items-center gap-3">
            <span
              className={`text-xs font-semibold px-2 py-1 rounded ${employmentTypeStyles[employmentType]}`}
            >
              {employmentType}
            </span>
            <span className="text-sm text-gray-500">Salary: {salaryRange}</span>
          </FlexRow>
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
          onClick={handleBookmark}
          className="p-2 hover:bg-gray-50 rounded transition-colors"
        >
          <Bookmark className="w-5 h-5 text-gray-400 hover:text-gray-600" />
        </button>
      </div>
    </div>
  );
}
