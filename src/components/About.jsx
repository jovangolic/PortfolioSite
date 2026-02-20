import { motion } from 'framer-motion';
import React from 'react';
import { Tilt } from 'react-tilt';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt="web-development" className="w-16 h-16 object-contain" loading="lazy" />

        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a self-taught and course-completed programmer skilled in Python, Java, Spring Boot, Spring MVC, SQL, Docker, and Docker Compose,
        currently seeking an opportunity to enter the IT sector.
        I am driven to expand my knowledge in areas such as databases, big data, front-end and full-stack development, frameworks like React + Vite, 
        cloud computing, and machine learning. I am looking to join a company that values innovation, collaboration, and continuous learning, 
        and I am confident that my enthusiasm and drive will help me succeed in any role that leverages my passion for technology.
        Currently working on a self-initiated ERP-AI platform for transportation, logistics, warehousing, resource management and Agro-AI, built with Spring Boot–based services,
        secure REST APIs, and modular, cloud-ready architecture.My experience includes designing domain-driven systems, implementing authentication and authorization (JWT),
        integrating analytics for operational insights, and working with real-world constraints such as incomplete data and evolving business processes. 
        My goal with ERP-AI is to create a scalable, open-source ERP solution tailored to the real-world needs of growing businesses,
        especially in regions affected by disrupted supply chains. The project is fully documented on GitHub and serves as both a personal challenge and a professional showcase.
        <a href="https://github.com/jovangolic/erp-v1/wiki" target="_blank" rel="noopener noreferrer">
            Technical documentation link about the project
        </a>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const WrappedAbout = SectionWrapper(About, 'about');

export default WrappedAbout;
