"use client";
import { RiBox3Line } from "react-icons/ri";
import scss from "./ProductsMain.module.scss";
import { IoTimerOutline } from "react-icons/io5";
import { LuShieldCheck } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const ProductsMain = () => {
  const buttons = [
    {
      title: "All Products",
      icon: <RiBox3Line />,
    },
    {
      title: " Filling Station",
      icon: <IoTimerOutline />,
    },
    {
      title: "Testing Equipment",
      icon: <LuShieldCheck />,
    },
    {
      title: "Transport System",
      icon: <TbTruckDelivery />,
    },
  ];

  const products = [
    {
      type: "filling",
      typeTitle: "Filling Stations",
      typeIcon: <IoTimerOutline />,
      img: "https://i.pinimg.com/736x/0d/ac/07/0dac07c3073c0f2de8b3368389fc3843.jpg",
      title: "AutoFill Pro 3000",
      description: "Precise and fast systems with modern control modules.",
      features: [
        "Fills up to 3 cylinders/hour",
        "Digital precision weighing",
        "Automatic safety checks",
        "Remote monitoring",
      ],
      featuresIcon: <IoMdCheckmarkCircleOutline />,
    },
    {
      type: "testing",
      typeTitle: "SafeTest 1500",
      typeIcon: <IoTimerOutline />,
      img: "https://i.pinimg.com/736x/1a/2f/a6/1a2fa6211e0e7479cce8b24cbf348b24.jpg",
      title: "AutoFill Pro 3000",
      description: "Precise and fast systems with modern control modules.",
      features: [
        "Fills up to 3 cylinders/hour",
        "Digital precision weighing",
        "Automatic safety checks",
        "Remote monitoring",
      ],
      featuresIcon: <IoMdCheckmarkCircleOutline />,
    },
    {
      type: "transport",
      typeTitle: "LogiTrack System",
      typeIcon: <IoTimerOutline />,
      img: "https://i.pinimg.com/736x/e7/af/16/e7af1661366199d91349942819ca1439.jpg",
      title: "AutoFill Pro 3000",
      description: "Precise and fast systems with modern control modules.",
      features: [
        "Fills up to 3 cylinders/hour",
        "Digital precision weighing",
        "Automatic safety checks",
        "Remote monitoring",
      ],
      featuresIcon: <IoMdCheckmarkCircleOutline />,
    },
    {
      type: "filling",
      typeTitle: "Filling Stations",
      typeIcon: <IoTimerOutline />,
      img: "https://i.pinimg.com/736x/0d/ac/07/0dac07c3073c0f2de8b3368389fc3843.jpg",
      title: "AutoFill Pro 3000",
      description: "Precise and fast systems with modern control modules.",
      features: [
        "Fills up to 3 cylinders/hour",
        "Digital precision weighing",
        "Automatic safety checks",
        "Remote monitoring",
      ],
      featuresIcon: <IoMdCheckmarkCircleOutline />,
    },
    {
      type: "testing",
      typeTitle: "SafeTest 1500",
      typeIcon: <IoTimerOutline />,
      img: "https://i.pinimg.com/736x/1a/2f/a6/1a2fa6211e0e7479cce8b24cbf348b24.jpg",
      title: "AutoFill Pro 3000",
      description: "Precise and fast systems with modern control modules.",
      features: [
        "Fills up to 3 cylinders/hour",
        "Digital precision weighing",
        "Automatic safety checks",
        "Remote monitoring",
      ],
      featuresIcon: <IoMdCheckmarkCircleOutline />,
    },
    {
      type: "transport",
      typeTitle: "LogiTrack System",
      typeIcon: <IoTimerOutline />,
      img: "https://i.pinimg.com/736x/e7/af/16/e7af1661366199d91349942819ca1439.jpg",
      title: "AutoFill Pro 3000",
      description: "Precise and fast systems with modern control modules.",
      features: [
        "Fills up to 3 cylinders/hour",
        "Digital precision weighing",
        "Automatic safety checks",
        "Remote monitoring",
      ],
      featuresIcon: <IoMdCheckmarkCircleOutline />,
    },
  ];

  return (
    <section className={scss.ProductsMain}>
      <div className="container">
        <div className={scss.content}>
          <h5>OUR EQUIPMENT</h5>
          <h1>Cutting-Edge Gas Filling Solutions</h1>
          <p>
            Discover our range of state-of-the-art equipment designed to
            optimize your gas cylinder filling operations.
          </p>
          <div className={scss.equipmentContent}>
            <div className={scss.filters}>
              {buttons.map((el, idx) => (
                <button key={idx}>
                  <span>{el.icon}</span>
                  {el.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsMain;
