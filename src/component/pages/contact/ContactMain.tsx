"use client";
import { LuPhone } from "react-icons/lu";
import scss from "./ContactMain.module.scss";
import { MdOutlineMailOutline } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { useForm } from "react-hook-form";
import Link from "next/link";

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
    },
    {
      icon: <MdOutlineMailOutline />,
      title: "Email",
      data1: "gulia@torkas.com",
      data2: "tork@torkas.com",
    },
    {
      icon: <IoLocationOutline />,
      title: "Address",
      data1: "Velikoy OSB 2. Cd. No: 2/4-F",
      data2: "Cerkezkoy 59501, Turkiye",
    },
  ];
  return (
    <section className={scss.ContactMain}>
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
                      <Link href="/">{el.data1}</Link>
                      <Link href="/">{el.data2}</Link>
                    </div>
                  </div>
                ))}
              </div>
              <div className={scss.schedule}>
                <span>
                  <FiMessageSquare />
                </span>
                <div className={scss.scheduleText}>
                  <h3>Customer Support Hours</h3>
                  <h6>
                    We're available to assist you during the following hours:
                  </h6>
                  <div className={scss.scheduleData}>
                    <div className={scss.day}>
                      <h4>Monday - Friday:</h4>
                      <h4>8:00 AM - 6:00 PM EST</h4>
                    </div>
                    <div className={scss.day}>
                      <h4>Saturday:</h4>
                      <h4>9:00 AM - 2:00 PM EST</h4>
                    </div>
                    <div className={scss.day}>
                      <h4>Sunday:</h4>
                      <h4>Closed</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={scss.inputs}>
              <h2>Send Us a Message</h2>
              <form>
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
                  <input
                    type="text"
                    placeholder="Tell us about your needs..."
                    {...register("message", { required: true })}
                  />
                </div>
                <button>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMain;
