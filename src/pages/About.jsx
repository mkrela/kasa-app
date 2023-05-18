import React from "react";
import { DescriptionPanel } from "../components/DescriptionPanel";
import "./About.scss";
import AboutBanner from "../components/AboutBanner";

function About() {
  return (
    <>
      <AboutBanner />
      <div className="about__container">
        <DescriptionPanel title="Fiabilité" content="Notre entreprise met un point d'honneur à offrir à nos clients des services fiables et de qualité. Nous sommes attachés à la transparence, à la satisfaction de nos clients et à leur fidélisation. Nous prenons soin d'établir des relations de confiance durables avec eux et nous nous engageons à répondre à leurs besoins avec efficacité et professionnalisme." />
        <DescriptionPanel title="Respect" content="Le respect est au cœur de nos valeurs fondamentales. Nous nous engageons à traiter toutes les personnes avec dignité et respect, en reconnaissant la diversité de leurs origines, de leurs croyances et de leurs cultures. Nous croyons que le respect mutuel et la communication ouverte sont essentiels pour établir des relations durables et constructives avec nos clients et nos partenaires commerciaux." />
        <DescriptionPanel title="Service" content="Notre entreprise est engagée à fournir un service de qualité supérieure à nos clients. Nous sommes fiers de notre réactivité et de notre disponibilité pour répondre aux besoins de nos clients. Nous sommes déterminés à maintenir les normes les plus élevées en matière de service." />
        <DescriptionPanel title="Responsabilité" content="
La responsabilité est au cœur de nos valeurs, nous sommes engagés à fournir un service de qualité à nos clients tout en respectant notre environnement et notre communauté." />
      </div>
    </>
  );
}

export default About;