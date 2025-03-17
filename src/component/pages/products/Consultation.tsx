"use client";
import { useRouter } from "next/navigation";
import scss from "./Consultation.module.scss";

const Consultation = () => {
  const router = useRouter();
  return (
    <section className={scss.Consultation}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.consultationBlock}>
            <h2>Need a Consultation?</h2>
            <h6>
              Our specialists are ready to answer all your questions and help
              choose the optimal solution for your needs
            </h6>
            <button onClick={() => router.push("/contact")}>Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
