"use client";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import scss from "./AboutJourney.module.scss";
import { useRef } from "react";

const AboutJourney = () => {
  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description:
        "Tork Mechatronics A.Ş. was established with a focus on industrial automation.",
    },
    {
      year: "2020",
      title: "Walraven – Production Line Optimization, Hydraulic Press",
      description:
        "Implemented a system for optimizing the production line for Walraven, including adjustments to the hydraulic press to enhance efficiency.",
    },
    {
      year: "2020",
      title: "Korozo – Backsheet Cutter Optimization",
      description:
        "Improved the backsheet cutting process, reducing material waste and increasing precision.",
    },
    {
      year: "2020",
      title: "ISO 9001:2015 & ISO 14001:2015 – Certification",
      description:
        "Achieved international quality and environmental management certifications, ensuring high production standards.",
    },
    {
      year: "2021",
      title: "Coko Kunststoffwerk – Assembly Stations",
      description:
        "Designed and implemented automated assembly stations to improve efficiency in plastic component manufacturing.",
    },
    {
      year: "2021",
      title: "Renault – Manufacturing Solutions Integration",
      description:
        "Established a partnership with Renault to develop automated solutions for automotive assembly processes.",
    },
    {
      year: "2021",
      title: "B/S/H/ (Bosch Siemens) – Infrared Oven Implementation",
      description:
        "Integrated an infrared oven to ensure uniform heating of components in the production process.",
    },
    {
      year: "2021",
      title: "Istanbul Airport – UV Disinfection Conveyor",
      description:
        "Developed and deployed a UV disinfection conveyor (E-Box) for Istanbul Airport to enhance passenger safety by eliminating harmful bacteria and viruses.",
    },
    {
      year: "2021",
      title: "Vaillant – Heat Exchanger Assembly Line",
      description:
        "Installed an automated heat exchanger assembly line, increasing production efficiency and precision.",
    },
    {
      year: "2022",
      title: "Coko Kunststoffwerk – Transfer Line Implementation",
      description:
        "Developed an automated transfer line to improve the movement of components across the production floor.",
    },
    {
      year: "2022",
      title: "PAS – Washing Machine Display Pre-Assembly",
      description:
        "Introduced a pre-assembly process for washing machine displays, reducing defects and improving assembly accuracy.",
    },
    {
      year: "2022",
      title: "PAS – Fascia Panel Assembly Automation",
      description:
        "Automated the fascia panel assembly process, enhancing production speed and consistency.",
    },
    {
      year: "2022",
      title: "Coko Kunststoffwerk – Dishwasher Sump Transfer Line",
      description:
        "Designed and integrated a sump transfer line to optimize dishwasher component assembly.",
    },
    {
      year: "2022",
      title: "Coko Kunststoffwerk – Renault CCV Blower Test & Assembly Line",
      description:
        "Developed a testing and assembly system for Renault’s CCV blower components, ensuring high product quality.",
    },
    {
      year: "2022",
      title: "3M – Manufacturing Solutions Implementation",
      description:
        "Began collaboration with 3M, focusing on the development of advanced automation solutions.",
    },
    {
      year: "2022",
      title: "B/S/H/ (Bosch Siemens) – Washing Machine Door Assembly Line",
      description:
        "Implemented an automated line for washing machine door assembly, improving precision and reducing manual labor.",
    },
    {
      year: "2023",
      title: "3M – Further Collaboration on Production Optimization",
      description:
        "Expanded collaboration with 3M, introducing additional technological advancements to enhance automation in their manufacturing processes.",
    },

    {
      year: "2023",
      title: "Coko Kunststoffwerk – Kanban System Design",
      description:
        "Developed and implemented a Kanban system to streamline inventory management and improve supply chain efficiency.",
    },
    {
      year: "2023",
      title: "Coko Kunststoffwerk – Spare Part Management Optimization",
      description:
        "Automated spare part management to reduce costs and minimize downtime.",
    },
    {
      year: "2023",
      title: "B/S/H/ (Bosch Siemens) – Fascia Panel Inlay Press System",
      description:
        "Developed and integrated an automated inlay press system for fascia panels, increasing production efficiency.",
    },
    {
      year: "2023",
      title: "Arcelik – Dryer Bottom Cover Welding Automation (Ongoing)",
      description:
        "Currently developing an automated welding system for dryer bottom covers, aiming to enhance quality and reduce production costs.",
    },

    {
      year: "2023",
      title: "Arcelik – Stator Ironing & Test Line (Ongoing)",
      description:
        "Working on a new test line for stator ironing to ensure higher quality and reliability in production.",
    },
  ];

  const timelineRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollTo({
        left: timelineRef.current.scrollLeft - 200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (timelineRef.current) {
      timelineRef.current.scrollTo({
        left: timelineRef.current.scrollLeft + 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className={scss.AboutJourney}>
      <div className="container">
        <div className={scss.content}>
          <h5>OUR JOURNEY</h5>
          <h1>Key Milestones</h1>
          <p>
            Tork Mechatronics was founded in Q4/2019-Cerkezkoy, Turkey with a
            clear vision: to serve the custom machinery, handling systems and
            industrial engineering needs of the area’s top regional and global
            companies
          </p>
          <div className={scss.timeline} ref={timelineRef}>
            <button className={scss.left} onClick={scrollLeft}>
              <MdOutlineChevronLeft />
            </button>
            {milestones.map((el, index) => (
              <div key={index} className={scss.timelineItem}>
                <div className={scss.timelineContent}>
                  <span className={scss.year}>{el.year}</span>
                  <h3>{el.title}</h3>
                  <p>{el.description}</p>
                </div>
                <div className={scss.circle}></div>
              </div>
            ))}
            <button className={scss.right} onClick={scrollRight}>
              <MdOutlineChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJourney;
