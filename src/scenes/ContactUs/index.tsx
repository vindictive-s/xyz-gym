import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className="mt-[80px] min-h-[100vh]"
      >
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
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
        </motion.div>
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/your@email.com"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="Name *"
                {...register("name", { required: true, maxLength: 100 })}
              />
              {errors.name && (
                <p className="mt-1 text-warning-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" &&
                    "Max length field is 100 characters."}
                </p>
              )}
              <input
                className={inputStyles}
                type="text"
                placeholder="Email *"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-warning-500">
                  {errors.email.type === "required" &&
                    "This field is required."}
                  {errors.email.type === "pattern" && "Imvalid email address."}
                </p>
              )}
              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="Message *"
                {...register("message", { required: true, maxLength: 2000 })}
              />
              {errors.message && (
                <p className="mt-1 text-warning-500">
                  {errors.message.type === "required" &&
                    "This field is required."}
                  {errors.message.type === "maxLength" &&
                    "Max length field is 2000 characters."}
                </p>
              )}
              <button
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:bg-secondary-400 hover:text-white"
              >
                Submit
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[1] md:before:content-evolvetext">
              <img
                className="w-full rounded-md"
                alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
