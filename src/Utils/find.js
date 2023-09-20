import Services from "../Data/ServicesData";

export function findServiceByTitle(title) {
  return Services.find((service) => service.title === title);
}
