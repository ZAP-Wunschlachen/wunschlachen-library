// src/composables/useGenerateImageUrl.js

export function useGenerateImageUrl() {
  const baseUrl = "https://app.wunschlachen.de/assets";

  const generateImageUrl = (image) => {
    if (!image || !image.filename_download) return "";

    const sanitizeUrlString = (str) => {
      // Replace German umlauts
      str = str
        .replace(/ä/g, "ae")
        .replace(/ö/g, "oe")
        .replace(/ü/g, "ue")
        .replace(/Ä/g, "Ae")
        .replace(/Ö/g, "Oe")
        .replace(/Ü/g, "Ue")
        .replace(/ß/g, "ss");

      // Replace spaces with underscores
      str = str.replace(/\s+/g, "_");

      // Encode the string for the URL
      str = encodeURIComponent(str);

      // Remove all percent encodings added by encodeURIComponent
      // Allow dashes, underscores, letters, and numbers
      return str.replace(/%[0-9A-Fa-f]{2}/g, "");
    };

    const sanitizedFilename = sanitizeUrlString(image.filename_download);
    return `${baseUrl}/${image.id}/${sanitizedFilename}`;
  };

  const generateSimpleImageUrl = (image) => {
    if (!image) return "";

    return `${baseUrl}/${image}`;
  };

  return {
    generateImageUrl,
    generateSimpleImageUrl,
  };
}
