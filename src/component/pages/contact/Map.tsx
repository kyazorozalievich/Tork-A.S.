import scss from "./Map.module.scss";
import map from "../../assets/images/contact/map.png";
import Image from "next/image";

const Map = () => {
  return (
    <div
      className={scss.Map}
      onClick={() =>
        window.open(
          "https://www.google.com/maps/place/TORK+MEKATRON%C4%B0K+A.%C5%9E./@41.2211855,27.9183984,17z/data=!3m1!4b1!4m6!3m5!1s0x14b4df443e63b8db:0x9643806ad20288db!8m2!3d41.2211855!4d27.9183984!16s%2Fg%2F11j5cb5g5s!5m1!1e1?hl=ru&entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
        )
      }
    >
      <Image src={map} alt="map" />
    </div>
  );
};

export default Map;
