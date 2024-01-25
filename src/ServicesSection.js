import ServiceBlock from "./ServiceBlock";

const SERVICE_BLOCK_DATA = [
  {
    imgURL: "https://assets.codepen.io/6060109/agency-service-1.png",
    text: "Web Design",
  },
  {
    imgURL: "https://assets.codepen.io/6060109/agency-service-2.png",
    text: "Ecommerce",
  },
  {
    imgURL: "https://assets.codepen.io/6060109/agency-service-3.png",
    text: "Automation",
  },
];

export default function ServicesSection() {
  return (
    <div className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        {SERVICE_BLOCK_DATA.map((block) => (
          <ServiceBlock block={block} />
        ))}
      </div>
    </div>
  );
}
