import Logo from "@/assets/Logo.png";
import {
  SlSocialTwitter,
  SlSocialInstagram,
  SlSocialYoutube,
} from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>© XYZGYM All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5 cursor-pointer hover:text-primary-300">
            <SlSocialInstagram className="text-xl" />
            Follow Us On Instagram
          </p>
          <p className="my-5 cursor-pointer hover:text-primary-300">
            <SlSocialTwitter className="text-xl" />
            Follow Us On Twitter
          </p>
          <p className="my-5 cursor-pointer hover:text-primary-300">
            <SlSocialYoutube className="text-xl" />
            Subscribe To Our Channel
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">xyzgym@fit.com</p>
          <p className="my-5">(555)-222-012</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
