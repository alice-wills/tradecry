import HeadSection from "@/components/HeadSection";
import ClientSection from "@/components/service/ClientSection";
import ContactSection from "@/components/service/ContactSection";
import FeatureSection from "@/components/service/FeatureSection";
import FooterSection from "@/components/service/FooterSection";
import ServiceSection from "@/components/service/ServiceSection";
import TeamSection2 from "@/components/service/TeamSection2";
import WorkSection from "@/components/service/WorkSection";

export default function Home() {
  return (
    <div className="overflow-x-hidden w-full">
      <HeadSection/>
      <ServiceSection/>
      <WorkSection/>
      <FeatureSection/>
      <TeamSection2/>
      <ContactSection/>
      <ClientSection/>
      <FooterSection/>
    </div>
  );
}
