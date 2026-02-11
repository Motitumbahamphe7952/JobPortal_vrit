import { useParams, useNavigate } from "react-router-dom";
import { jobsData } from "@/constants";
import { Button } from "../ui/button";
import {
  Briefcase,
  MapPin,
  Calendar,
  DollarSign,
  Clock,
  Copy,
  Bookmark,
} from "lucide-react";
import FlexRow from "../common/FlexRow";

const DetailedJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobsData.find((job) => job.id === id);

  if (!job) {
    return (
      <FlexRow className="min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Job Not Found</h1>
          <Button onClick={() => navigate("/")}>Back to Home</Button>
        </div>
      </FlexRow>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Job link copied to clipboard!");
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Check out this job: ${job.title} at ${job.company.name}`;

    switch (platform) {
      case "linkedin":
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          "_blank",
        );
        break;
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
          "_blank",
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
          "_blank",
        );
        break;
      case "email":
        window.location.href = `mailto:?subject=${encodeURIComponent(job.title)}&body=${encodeURIComponent(text + " " + url)}`;
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Card */}
            <div className="bg-white rounded-sm shadow-sm p-8">
              <FlexRow className="items-start justify-between mb-6">
                <FlexRow className="items-start gap-4">
                  <div className="w-16 h-16 bg-white rounded-sm items-center justify-center">
                    <img
                      src={job.company.logo}
                      alt="company logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold mb-1">{job.title}</h1>
                    <FlexRow className="items-center gap-2 text-sm text-gray-600">
                      <span>at {job.company.name}</span>

                      {job.company.isVerified && (
                        <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded-xs text-xs">
                          {job.company.isVerified ? "VERIFIED" : ""}
                        </span>
                      )}
                      {job.company.featured && (
                        <span className="inline-block px-2 py-1 bg-pink-100 text-pink-700 rounded-xs text-xs">
                          {job.company.featured ? "FEATURED" : ""}
                        </span>
                      )}
                    </FlexRow>
                  </div>
                </FlexRow>
                <FlexRow className="gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-sm"
                    onClick={() => {}}
                  >
                    <Bookmark className="w-4 h-4" />
                  </Button>
                  <Button className="bg-primary hover:bg-secondary rounded-xs">
                    Apply Now
                  </Button>
                </FlexRow>
              </FlexRow>

              {/* Job Description */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-3">Job Description</h2>
                <p className="text-gray-600 leading-relaxed">
                  {job.description}
                </p>
              </div>

              {/* Requirements */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-3">Requirements</h2>
                <ul className="space-y-2">
                  {job?.requirements?.map((req, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-600">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Desirable */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-3">Desirable</h2>
                <ul className="space-y-2">
                  {job?.desirable?.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-lg font-semibold mb-3">Benefits</h2>
                <ul className="space-y-2">
                  {job?.benefits?.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Job Overview & Share */}
          <div className="space-y-6">
            {/* Salary Card */}
            <div className="bg-white rounded-sm shadow-sm p-6">
              <h3 className="text-sm text-gray-500 mb-1">Salary (USD)</h3>
              <div className="text-2xl font-bold text-green-600 mb-1">
                {job.salaryRange}
              </div>
              <div className="text-xs text-gray-500">Monthly salary</div>
            </div>

            {/* Job Location */}
            <div className="bg-white rounded-sm shadow-sm p-6">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-primary" />
                <h3 className="font-semibold">Job Location</h3>
              </div>
              <p className="text-gray-600">{job.company.location}</p>
            </div>

            {/* Job Overview */}
            <div className="bg-white rounded-sm shadow-sm p-6">
              <h3 className="font-semibold mb-4">Job Overview</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">JOB POSTED</div>
                    <div className="font-medium">{job.postedDate}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">JOB EXPIRE IN</div>
                    <div className="font-medium">{job.expireDate}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">JOB LEVEL</div>
                    <div className="font-medium">{job.level}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">EXPERIENCE</div>
                    <div className="font-medium">{job.experience}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Briefcase className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500">EDUCATION</div>
                    <div className="font-medium">{job.education}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Share Job */}
            <div className="bg-white rounded-sm shadow-sm p-6">
              <h3 className="font-semibold mb-4">Share this job:</h3>
              <FlexRow className="gap-2 mb-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={handleCopyLink}
                >
                  <Copy className="w-4 h-4 mr-1" />
                  Copy Link
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare("linkedin")}
                  className="bg-blue-700 text-white hover:bg-blue-800"
                >
                  in
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare("facebook")}
                  className="bg-blue-600 text-white hover:bg-blue-700"
                >
                  f
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare("twitter")}
                  className="bg-blue-400 text-white hover:bg-blue-500"
                >
                  𝕏
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleShare("email")}
                  className="bg-gray-600 text-white hover:bg-gray-700"
                >
                  @
                </Button>
              </FlexRow>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedJob;
