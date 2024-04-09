import { Instagram } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <hr className="h-px my-8 bg-gray-600 border-0 w-full" />
      <div className="p-12 md:px-32 2xl:px-48 3xl:px-64 py-8 flex justify-between items-center">
        <h2 className="text-2xl font-galderglynn">TLP.</h2>
        <div className="flex sm:flex-col md:flex-row gap-8">
          <a
            href="mailto:contact.thelimitlessproject@gmail.com"
            className="text-xs px-4 flex items-center justify-center border border-white rounded-lg font-sans"
          >
            contact us
          </a>
          <a
            href="https://www.instagram.com/thelimitless.project?igsh=MTl6MWlzdG10Z2ZkMw%3D%3D&utm_source=qr"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} className="w-6" />
          </a>
          <a
            href="https://www.tiktok.com/@the.limitless.project?_t=8lO6lv3KowS&_r=1"
            target="_blank"
          >
            <FontAwesomeIcon icon={faTiktok} className="w-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
