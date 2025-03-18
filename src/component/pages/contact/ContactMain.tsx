"use client";
import { LuPhone } from "react-icons/lu";
import scss from "./ContactMain.module.scss";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

interface IContact {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

const ContactMain = () => {
  const { register, handleSubmit, reset } = useForm<IContact>();
  const companyBlock = [
    {
      icon: <LuPhone />,
      title: "Phone",
      data1: "+90 544 407 77 87",
      data2: "+90 282 255 55 00",
      href1: "https://wa.me/905444077787",
      href2: "tel:+902822555500",
    },
    {
      icon: <MdOutlineMailOutline />,
      title: "Email",
      data1: "gulia@torkas.com",
      data2: "tork@torkas.com",
      href1: "mailto:gulia@torkas.com",
      href2: "mailto:gulia@torkas.com",
    },
    {
      icon: <IoLocationOutline />,
      title: "Address",
      data1: "Velikoy OSB 2. Cd. No: 2/4-F",
      data2: "Cerkezkoy 59501, Turkiye",
      href1:
        "https://www.google.com/maps/place/TORK+MEKATRON%C4%B0K+A.%C5%9E./@41.2211855,27.9158235,17z/data=!3m1!4b1!4m6!3m5!1s0x14b4df443e63b8db:0x9643806ad20288db!8m2!3d41.2211855!4d27.9183984!16s%2Fg%2F11j5cb5g5s?hl=ru&entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D",
      href2:
        "https://www.google.com/maps/place/%D0%A7%D0%B5%D1%80%D0%BA%D0%B5%D0%B7%D0%BA%D1%91%D0%B9,+%D0%A2%D0%B5%D0%BA%D0%B8%D1%80%D0%B4%D0%B0%D0%B3,+%D0%A2%D1%83%D1%80%D1%86%D0%B8%D1%8F/@41.2880252,27.9770554,14z/data=!3m1!4b1!4m6!3m5!1s0x14b5278f6fa3be55:0x70963dfacba272b0!8m2!3d41.28236!4d28.00059!16zL20vMGJubXZx?hl=ru&entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  const onMessage: SubmitHandler<IContact> = (data) => {
    const my_id = `-1002250320329`;
    const token = `7688937063:AAG4A_MPK6qmjPmakqmauD3bSSI3nWCu2uQ`;
    const api_key = `https://api.telegram.org/bot${token}/sendMessage`;

    const newProduct = {
      chat_id: my_id,
      parse_model: "html",
      text: `
        Tork A.S client
        Client name: ${data.name}
        Client email: ${data.email}
        Client phone: ${data.phone}
        Client company: ${data.company ? data.company : "no company"}
        Client message: ${data.message}
      `,
    };

    axios.post(api_key, newProduct);
    reset();
    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <section className={scss.ContactMain}>
      <ToastContainer />
      <div className="container">
        <div className={scss.content}>
          <h5>GET IN TOUCH</h5>
          <h1>Contact Us</h1>
          <h6>
            Have questions about our products or services? We're here to help.
          </h6>
          <div className={scss.contactDetails}>
            <div className={scss.companyData}>
              <h5>REACH OUT</h5>
              <h1>Get in Touch With Our Team</h1>
              <h6>
                We're here to answer your questions and discuss how our
                solutions <br /> can benefit your business.
              </h6>
              <div className={scss.dataBlocks}>
                {companyBlock.map((el, idx) => (
                  <div className={scss.block} key={idx}>
                    <span>{el.icon}</span>
                    <h3>{el.title}</h3>
                    <div className={scss.data}>
                      <Link href={el.href1} target="_blank">
                        {el.data1}
                      </Link>
                      <Link href={el.href2} target="_blank">
                        {el.data2}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className={scss.schedule}>
                <span>
                  <FiMessageSquare />
                </span>
                <div className={scss.scheduleText}>
                  <div className={scss.mainText}>
                    <h3>Customer Support Hours</h3>
                    <div className={scss.icons}>
                      <Link
                        href="https://www.linkedin.com/company/torkascom/"
                        target="_blank"
                        className={scss.linkedin}
                      >
                        <FaLinkedinIn />
                      </Link>
                      <Link
                        href="https://www.youtube.com/@torkascom"
                        target="_blank"
                        className={scss.youtube}
                      >
                        <FaYoutube />
                      </Link>
                      <Link
                        href="https://www.instagram.com/torkas_mekatronik?igsh=MWx1MnUzdnQ2OGltNQ%3D%3D&utm_source=qr"
                        target="_blank"
                        className={scss.instagram}
                      >
                        <FaInstagram />
                      </Link>
                    </div>
                  </div>
                  <h6>
                    We're available to assist you during the following hours:
                  </h6>
                  <div className={scss.scheduleData}>
                    <div className={scss.day}>
                      <h4>Monday - Friday:</h4>
                      <h4> 8:00 AM – 6:00 PM ET</h4>
                    </div>
                    <div className={scss.day}>
                      <h4>Saturday - Sunday:</h4>
                      <h4>Closed</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={scss.inputData}>
              <div className={scss.inputs}>
                <h3>Send Us a Message</h3>
                <form onSubmit={handleSubmit(onMessage)}>
                  <div className={scss.inpBlock}>
                    <h4>Name*</h4>
                    <input
                      type="text"
                      placeholder="Your name"
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div className={scss.inpBlock}>
                    <h4>Email*</h4>
                    <input
                      type="email"
                      placeholder="Your email"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <div className={scss.inpBlock}>
                    <h4>Company (Optional)</h4>
                    <input
                      type="text"
                      placeholder="Your company"
                      {...register("company", { required: false })}
                    />
                  </div>
                  <div className={scss.inpBlock}>
                    <h4>Phone*</h4>
                    <input
                      type="number"
                      placeholder="Your phone number"
                      {...register("phone", { required: true })}
                    />
                  </div>
                  <div className={scss.messageBlock}>
                    <h4>Message*</h4>
                    <textarea
                      placeholder="Tell us about your needs..."
                      {...register("message", { required: true })}
                    />
                  </div>
                  <button type="submit">Send Message</button>
                </form>
              </div>
              <div className={scss.texts}>
                <h6>
                  We guarantee the confidentiality of your data. They will not
                  be transferred to third parties.
                </h6>
                <h1>Any questions? Send a message</h1>
                <h5>MESSAGE</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;
