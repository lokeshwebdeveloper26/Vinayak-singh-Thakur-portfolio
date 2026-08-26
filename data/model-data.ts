import type { ModelData } from "./types"

/**
 * ============================================================
 *  EDIT THIS FILE WHEN CREATING A NEW MODEL
 * ============================================================
 *
 * This is the single source of truth for everything about the
 * model shown on the site. No model information is hard-coded
 * inside components — change the values below and the entire
 * site updates.
 *
 * HOW TO REUSE THIS TEMPLATE FOR A NEW MODEL:
 *   1. Replace the text fields (name, title, bio, details...).
 *   2. Drop new images into /public and update the image paths.
 *   3. Update the gallery and videos arrays.
 *   4. Update the Instagram handle.
 *   5. Update company details in `data/company-data.ts`.
 *   6. Build & deploy.
 *
 * PRIVACY NOTE (junior models):
 *   Any field left as an empty string OR removed is automatically
 *   hidden from the UI. Only include information you are comfortable
 *   making public. Bookings always route through the company/agency,
 *   never directly to the model.
 */
export const modelData: ModelData = {
  name: "Vinayak Singh Thakur",
  title: "Junior Fashion & Commercial Model",
  profileImage: "/portfolio/profile.JPG",
  heroImage: "/portfolio/hero.JPG",

  intro:
    "A young and talented junior model with a passion for fashion, commercial shoots and creative campaigns.",

  bio: "Vinayak  is a confident young talent with a natural presence and an interest in fashion, commercial and lifestyle shoots. Available for professional projects through agency management.",

  availability: "Available for professional bookings — enquire via the agency",

  // Optional fields left blank are automatically hidden.
  details: {
    age: "3 years", 
    dateOfBirth: "08-09-2022",
    height: "3 feet",
    weight: "20 kg",
    Bust: "",
    skinTone: "Fair",
    hairColor: "Black",
    eyeColor: "Brown",
    ShoeSize: "",
    Hips: "",
    Waist: "",
    location: "Jabalpur, MP, India",
  },

  // Parent/guardian names are optional and often kept private.
  // Leave blank to hide them entirely.
  parents: {
    fatherName: "Mr. Yuvraj Singh Thakur",
    motherName: "Miss. Mamta Singh Thakur",
  },

  // Instagram handle WITHOUT the @ (managed by parents/agency).
  instagram: "v.inayak_s",

  ecommerce: [
  /**{
    name: "Flipkart",
    url: "https://www.flipkart.com/",
    description: "Shop featured products and collections.",
  },*/
],

  /**
   * GALLERY — supports 10–20+ images across categories:
   * "Fashion" | "Commercial" | "Studio" | "Outdoor" | "Casual" | "Campaign"
   * Mark up to a couple of images as `featured: true` for the editorial layout.
   */
  gallery: [
     {
      src: "/portfolio/gallery-1.JPG",
      alt: "Model Name fashion portfolio",
      category: "Fashion",
      featured: true,
    },
    {
      src: "/portfolio/gallery-2.JPG",
      alt: "model name fashion portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-3.JPG",
      alt: "model name studio portrait",
      category: "Studio",
    },
    {
      src: "/portfolio/gallery-4.JPG",
      alt: "model name outdoor portrait",
      category: "Outdoor",
      featured: true,
    },
    {
      src: "/portfolio/gallery-5.JPG",
      alt: "model name commercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-6.JPG",
      alt: "model name lifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-7.JPG",
      alt: "model name fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-8.JPG",
      alt: "model name campaign portrait",
      category: "Campaign",
    },
    {
      src: "/portfolio/gallery-9.JPG",
      alt: "model name editorial portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/hero.JPG",
      alt: "model name hero portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/profile.JPG",
      alt: "model name profile portrait",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-10.JPG",
      alt: "model name commercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-11.JPG",
      alt: "model name lifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-12.JPG",
      alt: "model name fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-13.JPG",
      alt: "model name fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-14.JPG",
      alt: "model name campaign portrait",
      category: "Campaign",
    },
    {
      src: "/portfolio/gallery-15.JPG",
      alt: "model name editorial portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-16.JPG",
      alt: "model name commercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-17.JPG",
      alt: "model name lifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-18.JPG",
      alt: "model name fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-19.JPG",
      alt: "model name fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-20.JPG",
      alt: "model name fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-21.JPG",
      alt: "model name fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-22.JPG",
      alt: "model name fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-23.JPG",
      alt: "model name fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-24.JPG",
      alt: "model name fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-25.JPG",
      alt: "model name fashion portfolio",
      category: "Fashion",
      featured: true,
    },
    {
      src: "/portfolio/gallery-26.JPG",
      alt: "model name fashion portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-27.JPG",
      alt: "model name studio portrait",
      category: "Studio",
    },
    {
      src: "/portfolio/gallery-28.JPG",
      alt: "model name outdoor portrait",
      category: "Outdoor",
      featured: true,
    },
    {
      src: "/portfolio/gallery-29.JPG",
      alt: "model name commercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-30.JPG",
      alt: "model name lifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-31.JPG",
      alt: "model name lifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-32.JPG",
      alt: "model name fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-33.JPG",
      alt: "model name fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-34.JPG",
      alt: "model name campaign portrait",
      category: "Campaign",
    },
    {
      src: "/portfolio/gallery-35.JPG",
      alt: "model name editorial portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-36.JPG",
      alt: "model name commercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-37.JPG",
      alt: "model name lifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-38.JPG",
      alt: "model name fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-39.JPG",
      alt: "model name fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-40.JPG",
      alt: "model name fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-41.JPG",
      alt: "model name fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-42.JPG",
      alt: "model name fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-43.JPG",
      alt: "model name fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-44.JPG",
      alt: "model name fashion look",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-45.JPG",
      alt: "model name fashion portfolio",
      category: "Fashion",
      featured: true,
    },
    {
      src: "/portfolio/gallery-46.JPG",
      alt: "model name fashion portrait",
      category: "Fashion",
    },
    {
      src: "/portfolio/gallery-47.JPG",
      alt: "model name studio portrait",
      category: "Studio",
    },
    {
      src: "/portfolio/gallery-48.JPG",
      alt: "model name outdoor portrait",
      category: "Outdoor",
      featured: true,
    },
    {
      src: "/portfolio/gallery-49.JPG",
      alt: "model name commercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-50.JPG",
      alt: "model name lifestyle portrait",
      category: "Casual",
    },
    {
      src: "/portfolio/gallery-51.JPG",
      alt: "model name outdoor portrait",
      category: "Outdoor",
      featured: true,
    },
    {
      src: "/portfolio/gallery-52.JPG",
      alt: "model name commercial portfolio",
      category: "Commercial",
    },
    {
      src: "/portfolio/gallery-53.JPG",
      alt: "model name lifestyle portrait",
      category: "Casual",
    },
    
  ],

  /**
   * VIDEOS / REELS
   * type: "mp4"   -> plays inline from a local or remote MP4 file
   * type: "embed" -> plays an external URL (YouTube/Vimeo) in the modal
   * Videos never autoplay with sound.
   */
  videos: [
  /**{
    title: "model name Model Shoot",
    category: "Fashion",
    thumbnail: "/portfolio/profile.JPG",
    src: "/portfolio/videos/Video-name.mp4",
    type: "mp4",
  },
  {
    title: "model name Model Shoot",
    category: "Fashion",
    thumbnail: "/portfolio/profile.JPG",
    src: "/portfolio/videos/Video-name-compressed.mp4",
    type: "mp4",
  },*/
],

   
/**{
    name: "Flipkart",
    description: "Featured e-commerce and commercial work.",
    url: "https://www.flipkart.com/",
  },
  {
    name: "Amazon",
    description: "Commercial and e-commerce collaboration.",
    url: "https://www.amazon.in/",
  },*/
  
  
}
