import pages from "./pages-schema";
import project from "./project-schemas";
import { villaBanner } from "./villa/villa-banner";
import { Villa } from "./villa/villa-schema";

const schemas = [project, Villa, pages, villaBanner];

export default schemas;
