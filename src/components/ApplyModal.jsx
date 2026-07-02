import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle, AlertCircle, Upload } from "lucide-react";
import { sendApplicationEmail } from "../utils/sendEmail";
import { uploadResume } from "../utils/uploadResume";

const MAX_FILE_MB = 8; // keep in sync with your EmailJS plan's attachment limit

function ApplyModal({ job, onClose }) {
  const formRef = useRef(null);
  const [fileName, setFileName] = useState("");
  const [fileError, setFileError] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileError("");
    if (!file) return setFileName("");

    const allowed = [".pdf", ".doc", ".docx"];
    const ext = "." + file.name.split(".").pop().toLowerCase();
    if (!allowed.includes(ext)) {
      setFileError("Only PDF, DOC or DOCX files are allowed.");
      e.target.value = "";
      setFileName("");
      return;
    }
    if (file.size > MAX_FILE_MB * 1024 * 1024) {
      setFileError(`File must be under ${MAX_FILE_MB}MB.`);
      e.target.value = "";
      setFileName("");
      return;
    }
    setFileName(file.name);
  };


const handleSubmit = async (e) => {
  e.preventDefault();
  if (formRef.current.botcheck.value) return;
  if (fileError) return;

  setStatus("sending");
  setErrorMsg("");

  try {
    const file = fileInputRef.current.files[0]; // changed from formRef.current.resume
    const resumeUrl = await uploadResume(file);

    let urlField = formRef.current.querySelector('input[name="resume_url"]');
    if (!urlField) {
      urlField = document.createElement("input");
      urlField.type = "hidden";
      urlField.name = "resume_url";
      formRef.current.appendChild(urlField);
    }
    urlField.value = resumeUrl;

    await sendApplicationEmail(formRef.current);
    setStatus("success");
    setTimeout(onClose, 2000);
  } catch (err) {
    setStatus("error");
    setErrorMsg(err?.message || "Something went wrong. Please try again.");
  }
};

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 pt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-2xl w-full max-w-md p-6 relative shadow-2xl"
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.97 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full mb-3">
            Apply Now
          </span>
          <h3 className="text-lg font-bold text-slate-900 mb-1">{job?.title}</h3>
          <p className="text-xs text-slate-500 mb-5">{job?.type} · {job?.location}</p>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-3.5">
            <input type="text" name="botcheck" tabIndex="-1" autoComplete="off" className="hidden" />
            {/* Auto-selected domain based on which job was clicked */}
            <input type="hidden" name="domain" value={job?.title || ""} />

            <div>
              <label className="font-medium text-xs text-slate-700 mb-1 block">Full Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm"
              />
            </div>

            <div>
              <label className="font-medium text-xs text-slate-700 mb-1 block">Email Address</label>
              <input
                type="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm"
              />
            </div>

            <div>
              <label className="font-medium text-xs text-slate-700 mb-1 block">Phone Number</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+91 XXXXX XXXXX"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-sm"
              />
            </div>

            <div>
              <label className="font-medium text-xs text-slate-700 mb-1 block">Applying For</label>
              <input
                type="text"
                value={job?.title || ""}
                readOnly
                className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-100 text-slate-500 text-sm cursor-not-allowed"
              />
            </div>

            <div>
              <label className="font-medium text-xs text-slate-700 mb-1 block">Resume (PDF/DOC/DOCX, max {MAX_FILE_MB}MB)</label>
              <label className="w-full flex items-center gap-2 px-4 py-2.5 rounded-lg border border-dashed border-slate-300 bg-slate-50 hover:bg-slate-100 cursor-pointer text-sm text-slate-500 transition-colors">
                <Upload size={16} />
                {fileName || "Choose file..."}
                <input
  type="file"
  ref={fileInputRef}
  accept=".pdf,.doc,.docx"
  onChange={handleFileChange}
  required
  className="hidden"
/>
              </label>
              {fileError && <p className="text-xs text-red-600 mt-1">{fileError}</p>}
            </div>

            <motion.button
              type="submit"
              disabled={status === "sending" || !!fileError}
              className="relative w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-md shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
              whileHover={{ scale: status === "sending" ? 1 : 1.02 }}
              whileTap={{ scale: status === "sending" ? 1 : 0.98 }}
            >
              <span className="flex items-center justify-center gap-2">
                {status === "success" ? (
                  <>
                    <CheckCircle size={16} /> Application Sent!
                  </>
                ) : status === "sending" ? (
                  "Submitting..."
                ) : (
                  <>
                    <Send size={16} /> Submit Application
                  </>
                )}
              </span>
            </motion.button>

            {status === "error" && (
              <div className="flex items-center justify-center gap-1.5 text-center text-xs text-red-600 font-medium">
                <AlertCircle size={14} /> {errorMsg}
              </div>
            )}
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ApplyModal;