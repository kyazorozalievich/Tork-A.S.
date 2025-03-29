"use client";
import scss from "./FillingMachine.module.scss";
import machien from "../../../assets/images/product/machine.png";
import machineTop from "../../../assets/images/product/machineTop.png";
import machineBottom from "../../../assets/images/product/machineBottom.png";
import Image from "next/image";

const FillingMachine = () => {
  return (
    <section className={scss.FillingMachine}>
      <div className="container">
        <div className={scss.content}>
          <h2>
            LPG Gas Cylinder Machine Automat (48+48) – Innovative Automation
            System
          </h2>
          <div className={scss.detail}>
            <div className={scss.detailText}>
              <div className={scss.group}>
                <p>
                  ✅ LPG cylinder vending machine accommodates 96 gas cylinders.
                </p>
                <p>✅ Fully automated system – convenient for customers.</p>
                <p>
                  ✅ 24/7 customer support – built-in button for instant
                  operator assistance.
                </p>
              </div>
              <Image src={machineTop} alt="" className={scss.machineSt} />
              <div className={scss.group}>
                <p>✅ Durable and secure materials:</p>
                <p>✅ Bulletproof chamber for maximum security.</p>
                <p>✅ Special aviation-grade glass, highly impact-resistant.</p>
                <p>
                  ✅ Breathable walls on all sides for proper air circulation.
                </p>
                <p>✅ Non-flammable body, completely fire-resistant.</p>
              </div>
              <Image src={machineBottom} alt="" className={scss.machineSt} />
              <div className={scss.group}>
                <p>✅ Full control and transparency for the owner:</p>
                <p>
                  ✅ All gas cylinders have QR codes, allowing customers to see
                  which one they are purchasing.
                </p>
                <p>
                  ✅ The owner can track inventory in real time via a computer –
                  monitoring the number of full and empty cylinders.
                </p>
                <p>
                  ✅ The system is integrated with financial software, ensuring
                  all transactions are recorded and visible in reports.
                </p>
                <p>
                  ✅ Remote access: connect from any device to monitor equipment
                  status, customer errors, transaction history, and technical
                  alerts.
                </p>
              </div>
              <p>
                ✅ LPG cylinder vending machine automat combines security,
                convenience, and complete digital transparency for businesses.
              </p>
            </div>
            <Image src={machien} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FillingMachine;
