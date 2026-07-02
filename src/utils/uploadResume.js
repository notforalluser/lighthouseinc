const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export const uploadResume = async (file) => {
    console.log("File size (MB):", (file.size / 1024 / 1024).toFixed(2));
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);
  // resource_type=raw is required for PDF/DOC/DOCX (non-image files)
  formData.append("resource_type", "raw");

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/raw/upload`,
    { method: "POST", body: formData }
  );

  if (!res.ok) throw new Error("Resume upload failed. Please try again.");

  const data = await res.json();
  return data.secure_url; // this is the link you email
};