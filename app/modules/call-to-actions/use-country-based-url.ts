import { headers } from "next/headers";
import { TGeoApiRes } from "./type";

const amazonUrls: { [key: string]: string } = {
  US: "https://www.amazon.com/Limitless-Project-Unlock-Your-Potential/dp/B0CVGVSVPV/ref=sr_1_1?crid=37EE7VBRHG2RG&dib=eyJ2IjoiMSJ9.9GIXRLLkhTA4jEGVUSl_C4PVzXg67BloQ17eh2LZATf6ntC-yDZtOHn-B4tUT0v3xlMwl_GMcY-nfB2RcFC-7LnWG3ul_ILzNJ4OF1IMehwC0hZSxs-ZupHJsl6Ola-yIFy-f0Gc6uWusD24YYO40RVj4YXBNz12CdZ2capRej4ij5nygbqz-8yki8RY2msS1K8ffGLgRZi8rG6CxWDx70ZvquBzfaRWajXGxG5TvxU.ipLeNwBZSUlpAHyRb0pX4ads2oFggsYK_JYPsliaf3U&dib_tag=se&keywords=the+limitless+project&qid=1712180904&sprefix=the+limitless+pr%2Caps%2C95&sr=8-1",
  GB: "https://www.amazon.co.uk/Limitless-Project-Unlock-Your-Potential/dp/B0CVGVSVPV/ref=sr_1_1?crid=37EE7VBRHG2RG&dib=eyJ2IjoiMSJ9.9GIXRLLkhTA4jEGVUSl_C4PVzXg67BloQ17eh2LZATf6ntC-yDZtOHn-B4tUT0v3xlMwl_GMcY-nfB2RcFC-7LnWG3ul_ILzNJ4OF1IMehwC0hZSxs-ZupHJsl6Ola-yIFy-f0Gc6uWusD24YYO40RVj4YXBNz12CdZ2capRej4ij5nygbqz-8yki8RY2msS1K8ffGLgRZi8rG6CxWDx70ZvquBzfaRWajXGxG5TvxU.ipLeNwBZSUlpAHyRb0pX4ads2oFggsYK_JYPsliaf3U&dib_tag=se&keywords=the+limitless+project&qid=1712180904&sprefix=the+limitless+pr%2Caps%2C95&sr=8-1",
  DE: "https://www.amazon.de/Limitless-Project-Unlock-Your-Potential/dp/B0CVGVSVPV/ref=sr_1_1?crid=37EE7VBRHG2RG&dib=eyJ2IjoiMSJ9.9GIXRLLkhTA4jEGVUSl_C4PVzXg67BloQ17eh2LZATf6ntC-yDZtOHn-B4tUT0v3xlMwl_GMcY-nfB2RcFC-7LnWG3ul_ILzNJ4OF1IMehwC0hZSxs-ZupHJsl6Ola-yIFy-f0Gc6uWusD24YYO40RVj4YXBNz12CdZ2capRej4ij5nygbqz-8yki8RY2msS1K8ffGLgRZi8rG6CxWDx70ZvquBzfaRWajXGxG5TvxU.ipLeNwBZSUlpAHyRb0pX4ads2oFggsYK_JYPsliaf3U&dib_tag=se&keywords=the+limitless+project&qid=1712180904&sprefix=the+limitless+pr%2Caps%2C95&sr=8-1",
  FR: "https://www.amazon.fr/Limitless-Project-Unlock-Your-Potential/dp/B0CVGVSVPV/ref=sr_1_1?crid=37EE7VBRHG2RG&dib=eyJ2IjoiMSJ9.9GIXRLLkhTA4jEGVUSl_C4PVzXg67BloQ17eh2LZATf6ntC-yDZtOHn-B4tUT0v3xlMwl_GMcY-nfB2RcFC-7LnWG3ul_ILzNJ4OF1IMehwC0hZSxs-ZupHJsl6Ola-yIFy-f0Gc6uWusD24YYO40RVj4YXBNz12CdZ2capRej4ij5nygbqz-8yki8RY2msS1K8ffGLgRZi8rG6CxWDx70ZvquBzfaRWajXGxG5TvxU.ipLeNwBZSUlpAHyRb0pX4ads2oFggsYK_JYPsliaf3U&dib_tag=se&keywords=the+limitless+project&qid=1712180904&sprefix=the+limitless+pr%2Caps%2C95&sr=8-1",
  ES: "https://www.amazon.es/Limitless-Project-Unlock-Your-Potential/dp/B0CVGVSVPV/ref=sr_1_1?crid=37EE7VBRHG2RG&dib=eyJ2IjoiMSJ9.9GIXRLLkhTA4jEGVUSl_C4PVzXg67BloQ17eh2LZATf6ntC-yDZtOHn-B4tUT0v3xlMwl_GMcY-nfB2RcFC-7LnWG3ul_ILzNJ4OF1IMehwC0hZSxs-ZupHJsl6Ola-yIFy-f0Gc6uWusD24YYO40RVj4YXBNz12CdZ2capRej4ij5nygbqz-8yki8RY2msS1K8ffGLgRZi8rG6CxWDx70ZvquBzfaRWajXGxG5TvxU.ipLeNwBZSUlpAHyRb0pX4ads2oFggsYK_JYPsliaf3U&dib_tag=se&keywords=the+limitless+project&qid=1712180904&sprefix=the+limitless+pr%2Caps%2C95&sr=8-1",
  IT: "https://www.amazon.it/Limitless-Project-Unlock-Your-Potential/dp/B0CVGVSVPV/ref=sr_1_1?crid=37EE7VBRHG2RG&dib=eyJ2IjoiMSJ9.9GIXRLLkhTA4jEGVUSl_C4PVzXg67BloQ17eh2LZATf6ntC-yDZtOHn-B4tUT0v3xlMwl_GMcY-nfB2RcFC-7LnWG3ul_ILzNJ4OF1IMehwC0hZSxs-ZupHJsl6Ola-yIFy-f0Gc6uWusD24YYO40RVj4YXBNz12CdZ2capRej4ij5nygbqz-8yki8RY2msS1K8ffGLgRZi8rG6CxWDx70ZvquBzfaRWajXGxG5TvxU.ipLeNwBZSUlpAHyRb0pX4ads2oFggsYK_JYPsliaf3U&dib_tag=se&keywords=the+limitless+project&qid=1712180904&sprefix=the+limitless+pr%2Caps%2C95&sr=8-1",
  NL: "https://www.amazon.nl/Limitless-Project-Unlock-Your-Potential/dp/B0CVGVSVPV/ref=sr_1_1?crid=37EE7VBRHG2RG&dib=eyJ2IjoiMSJ9.9GIXRLLkhTA4jEGVUSl_C4PVzXg67BloQ17eh2LZATf6ntC-yDZtOHn-B4tUT0v3xlMwl_GMcY-nfB2RcFC-7LnWG3ul_ILzNJ4OF1IMehwC0hZSxs-ZupHJsl6Ola-yIFy-f0Gc6uWusD24YYO40RVj4YXBNz12CdZ2capRej4ij5nygbqz-8yki8RY2msS1K8ffGLgRZi8rG6CxWDx70ZvquBzfaRWajXGxG5TvxU.ipLeNwBZSUlpAHyRb0pX4ads2oFggsYK_JYPsliaf3U&dib_tag=se&keywords=the+limitless+project&qid=1712180904&sprefix=the+limitless+pr%2Caps%2C95&sr=8-1",
  PL: "https://www.amazon.pl/Limitless-Project-Unlock-Your-Potential/dp/B0CVGVSVPV/ref=sr_1_1?crid=37EE7VBRHG2RG&dib=eyJ2IjoiMSJ9.9GIXRLLkhTA4jEGVUSl_C4PVzXg67BloQ17eh2LZATf6ntC-yDZtOHn-B4tUT0v3xlMwl_GMcY-nfB2RcFC-7LnWG3ul_ILzNJ4OF1IMehwC0hZSxs-ZupHJsl6Ola-yIFy-f0Gc6uWusD24YYO40RVj4YXBNz12CdZ2capRej4ij5nygbqz-8yki8RY2msS1K8ffGLgRZi8rG6CxWDx70ZvquBzfaRWajXGxG5TvxU.ipLeNwBZSUlpAHyRb0pX4ads2oFggsYK_JYPsliaf3U&dib_tag=se&keywords=the+limitless+project&qid=1712180904&sprefix=the+limitless+pr%2Caps%2C95&sr=8-1",
  SE: "https://www.amazon.se/Limitless-Project-Unlock-Your-Potential/dp/B0CVGVSVPV/ref=sr_1_1?crid=37EE7VBRHG2RG&dib=eyJ2IjoiMSJ9.9GIXRLLkhTA4jEGVUSl_C4PVzXg67BloQ17eh2LZATf6ntC-yDZtOHn-B4tUT0v3xlMwl_GMcY-nfB2RcFC-7LnWG3ul_ILzNJ4OF1IMehwC0hZSxs-ZupHJsl6Ola-yIFy-f0Gc6uWusD24YYO40RVj4YXBNz12CdZ2capRej4ij5nygbqz-8yki8RY2msS1K8ffGLgRZi8rG6CxWDx70ZvquBzfaRWajXGxG5TvxU.ipLeNwBZSUlpAHyRb0pX4ads2oFggsYK_JYPsliaf3U&dib_tag=se&keywords=the+limitless+project&qid=1712180904&sprefix=the+limitless+pr%2Caps%2C95&sr=8-1",
  JP: "https://www.amazon.co.jp/Limitless-Project-Unlock-Your-Potential/dp/B0CZM6X6LY/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.9GIXRLLkhTA4jEGVUSl_C4PVzXg67BloQ17eh2LZATf6ntC-yDZtOHn-B4tUT0v3xlMwl_GMcY-nfB2RcFC-7LnWG3ul_ILzNJ4OF1IMehwC0hZSxs-ZupHJsl6Ola-yIFy-f0Gc6uWusD24YYO40RVj4YXBNz12CdZ2capRej4ij5nygbqz-8yki8RY2msS1K8ffGLgRZi8rG6CxWDx70ZvquBzfaRWajXGxG5TvxU.ipLeNwBZSUlpAHyRb0pX4ads2oFggsYK_JYPsliaf3U&qid=1712180904&sr=8-1",
  CA: "https://www.amazon.ca/Limitless-Project-Unlock-Your-Potential/dp/B0CZM6X6LY/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.9GIXRLLkhTA4jEGVUSl_C4PVzXg67BloQ17eh2LZATf6ntC-yDZtOHn-B4tUT0v3xlMwl_GMcY-nfB2RcFC-7LnWG3ul_ILzNJ4OF1IMehwC0hZSxs-ZupHJsl6Ola-yIFy-f0Gc6uWusD24YYO40RVj4YXBNz12CdZ2capRej4ij5nygbqz-8yki8RY2msS1K8ffGLgRZi8rG6CxWDx70ZvquBzfaRWajXGxG5TvxU.ipLeNwBZSUlpAHyRb0pX4ads2oFggsYK_JYPsliaf3U&qid=1712180904&sr=8-1",
  AU: "https://www.amazon.com.au/Limitless-Project-Unlock-Your-Potential/dp/B0CZM6X6LY/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.9GIXRLLkhTA4jEGVUSl_C4PVzXg67BloQ17eh2LZATf6ntC-yDZtOHn-B4tUT0v3xlMwl_GMcY-nfB2RcFC-7LnWG3ul_ILzNJ4OF1IMehwC0hZSxs-ZupHJsl6Ola-yIFy-f0Gc6uWusD24YYO40RVj4YXBNz12CdZ2capRej4ij5nygbqz-8yki8RY2msS1K8ffGLgRZi8rG6CxWDx70ZvquBzfaRWajXGxG5TvxU.ipLeNwBZSUlpAHyRb0pX4ads2oFggsYK_JYPsliaf3U&qid=1712180904&sr=8-1",
};

const getCountryBasedUrl = async (): Promise<string | null> => {
  const headersList = headers();
  const clientIp = headersList.get("x-forwarded-for");
  let countryCode;
  try {
    // Make a request to the geolocation API
    const res = await fetch(`http://ip-api.com/json/${clientIp}`);
    const data: TGeoApiRes = await res.json();
    countryCode = data.countryCode;
    return amazonUrls[countryCode] || null;
  } catch (error) {
    console.error("Geolocation API error:", error);
    return null;
  }
};

export default getCountryBasedUrl;
