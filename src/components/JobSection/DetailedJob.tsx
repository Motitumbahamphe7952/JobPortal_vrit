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
  Linkedin,
  Facebook,
  Twitter,
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
    <div className="min-h-screen bg-gray-50 py-6 md:py-10 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header Card */}
            <div className="bg-white rounded-sm shadow-sm p-5 md:p-8">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-6 mb-8">
                <div className="flex flex-row items-start gap-4">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-white border border-gray-100 rounded-sm shrink-0">
                    <img
                      src={job.company.logo}
                      alt="company logo"
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div className="min-w-0">
                    <h1 className="text-xl md:text-2xl font-bold mb-1 wrap-break-word">
                      {job.title}
                    </h1>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
                      <span>at {job.company.name}</span>
                      <div className="flex gap-2">
                        {job.company.isVerified && (
                          <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-xs text-[10px] font-bold">
                            VERIFIED
                          </span>
                        )}
                        {job.company.featured && (
                          <span className="px-2 py-0.5 bg-pink-100 text-pink-700 rounded-xs text-[10px] font-bold">
                            FEATURED
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex w-full sm:w-auto gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-sm shrink-0 h-10 w-10 md:h-11 md:w-11"
                    onClick={() => {}}
                  >
                    <Bookmark className="w-5 h-5" />
                  </Button>
                  <Button className="flex-1 sm:flex-none bg-primary hover:bg-secondary rounded-xs h-10 md:h-11 px-6 font-medium">
                    Apply Now
                  </Button>
                </div>
              </div>

              <div className="space-y-8">
                <section>
                  <h2 className="text-lg font-semibold mb-3">
                    Job Description
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {job.description}
                  </p>
                </section>

                <section>
                  <h2 className="text-lg font-semibold mb-3">Requirements</h2>
                  <ul className="space-y-2">
                    {job?.requirements?.map((req, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-sm md:text-base"
                      >
                        <span className="text-primary mt-1 font-bold">•</span>
                        <span className="text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {job.benefits && (
                  <section>
                    <h2 className="text-lg font-semibold mb-3">Benefits</h2>
                    <ul className="space-y-2">
                      {job?.benefits?.map((benefit, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm md:text-base"
                        >
                          <span className="text-primary mt-1 font-bold">•</span>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-sm shadow-sm p-6 border-l-4 border-green-500 md:border-l-0">
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Salary (USD)
              </h3>
              <div className="text-2xl font-bold text-green-600 mb-1">
                {job.salaryRange}
              </div>
              <div className="text-xs text-gray-500">Monthly salary</div>
            </div>

            <div className="bg-white rounded-sm shadow-sm overflow-hidden">
              <div className="p-6 border-b border-gray-50">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold">Job Location</h3>
                </div>
                <p className="text-gray-600 mt-2 text-sm">
                  {job.company.location}
                </p>
              </div>

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
            </div>

            <div className="bg-white rounded-sm shadow-sm p-6">
              <h3 className="font-semibold mb-4 text-sm">Share this job:</h3>
              <div className="flex flex-col gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full justify-center"
                  onClick={handleCopyLink}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Link
                </Button>
                <div className="flex gap-2 justify-between">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleShare("linkedin")}
                    className="flex-1 bg-[#0077b5] text-white"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleShare("facebook")}
                    className="flex-1 bg-[#1877f2] text-white"
                  >
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleShare("twitter")}
                    className="flex-1 bg-[#000000] text-white"
                  >
                    <Twitter className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedJob;
