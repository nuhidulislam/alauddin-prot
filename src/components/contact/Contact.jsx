import emailjs from "emailjs-com";
import { motion, useInView } from "framer-motion";
import { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { fadeIn } from "../../motion/motions";
import MenuContext from "../Menucontext";

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const { setActiveMenu } = useContext(MenuContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const isInView = useInView(ref, { margin: "-100px" });

  useEffect(() => {
    setActiveMenu("contact");
  }, [isInView, setActiveMenu]);

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "The name is required";
    if (!formData.email) newErrors.email = "The email address required";
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      formData.email = "";
      newErrors.email = "Enter a valid email";
    }
    if (!formData.message) newErrors.message = "The message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      formRef.current.reset();
      setFormData({ name: "", email: "", message: "" });

      const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
      const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
      const userID = process.env.REACT_APP_EMAILJS_USER_ID;

      try {
        const email = await emailjs.send(
          serviceID,
          templateID,
          formData,
          userID
        );
        if (email.status === 200) {
          toast.success("Email sent successfully!", {
            icon: false,
            progressStyle: { background: "#008170" },
            style: { background: "#232d3f" },
          });
        } else {
          toast.error("There is an error sending your message!!");
        }
      } catch (error) {
        toast.error("There is an error sending your message!!");
      }
    }
  };

  return (
    <div
      id="contact"
      className="md:px-14 px-8 pt-10 min-h-screen flex justify-center items-center"
      ref={ref}
    >
      <div>
        <motion.h1
          variants={fadeIn("up", "tween", 0.5, 0.5)}
          initial="hidden"
          whileInView="show"
          className="text-center pb-14 text-2xl md:text-3xl lg:text-4xl font-bold"
        >
          Contact Me
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-start">
          {/* Left contact info */}
          <div className="flex-1">
            <motion.h1
              variants={fadeIn("right", "tween", 0.1, 0.5)}
              initial="hidden"
              whileInView="show"
              className="text-3xl lg:text-4xl font-bold pb-10"
            >
              Let's discuss your project
            </motion.h1>
            <div className="flex flex-col justify-center items-start gap-10">
              <motion.div
                variants={fadeIn("right", "tween", 0.3, 0.5)}
                initial="hidden"
                whileInView="show"
                className="flex justify-start items-center gap-2"
              >
                <img src="/phone.png" alt="Phone" className="w-6 h-6" />
                +880 1884854140
              </motion.div>
              <motion.div
                variants={fadeIn("right", "tween", 0.5, 0.5)}
                initial="hidden"
                whileInView="show"
                className="flex justify-start items-center gap-2"
              >
                <img src="/email.png" alt="email" className="w-6 h-6" />
                nuhidulislam@gmail.com
              </motion.div>
              <motion.div
                variants={fadeIn("right", "tween", 0.7, 0.5)}
                initial="hidden"
                whileInView="show"
                className="flex justify-start items-center gap-2"
              >
                <img src="/address.png" alt="address" className="w-6 h-6" />
                Fulbaira, Post Office Road, Mymensingh, Dhaka, Bangladesh
              </motion.div>
            </div>
          </div>

          {/* Right form */}
          <div className="relative flex-1">
            <motion.p
              variants={fadeIn("left", "tween", 0.5, 0.5)}
              initial="hidden"
              whileInView="show"
              className="pb-5"
            >
              <b className="text-4xl font-medium">What's your story?</b> <br></br> Get in
              touch. Always available for freelancing if the right project comes
              along
            </motion.p>

            <motion.form
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              viewport={{ once: false }}
              className="flex flex-col justify-center items-start gap-4"
              onChange={handleChange}
              ref={formRef}
            >
              <input
                className="outline-none border-none p-2 w-[95%] bg-softBackground"
                type="text"
                placeholder={errors.name ? errors.name : "Your name"}
                name="name"
                required
              />
              <input
                className="outline-none border-none p-2 w-[95%] bg-softBackground"
                type="text"
                placeholder={errors.email ? errors.email : "Your email"}
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                className="outline-none border-none p-2 w-[95%] bg-softBackground"
                rows="5"
                placeholder={errors.message ? errors.message : "Your message"}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white bg-softTheme duration-300 hover:text-white hover:bg-theme font-medium rounded-lg text-md px-5 py-2.5 text-center flex justify-center items-center gap-2"
              >
                Submit
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
