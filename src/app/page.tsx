import HeroSection from '@/components/Landing/Hero';
import ServiceSection from '@/components/Landing/Service';
import ProjectsSection from "@/components/Landing/Projects";
import BackUpSection from "@/components/Landing/BackUp";
import CustomizeServicesSection from "@/components/Landing/CustomizeServices";
import Customers from "@/components/Landing/cusomers";
import Steps from "@/components/Landing/Steps";
import ContactSection from "@/components/Landing/Contact";
import QuestionSection from "@/components/Landing/Question";

const AppHome = () => {
  return (
    <main>
      <HeroSection/>
      <ServiceSection/>
      <ProjectsSection/>
      <BackUpSection/>
      <CustomizeServicesSection/>
      <Customers/>
      <Steps/>
      <QuestionSection/>
      <ContactSection/>
    </main>
  );
};

export default AppHome;
