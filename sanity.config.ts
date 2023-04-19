import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schema";
import { visionTool } from "@sanity/vision";

const config = defineConfig({
  projectId: "lkmhcppf",
  dataset: "production",
  title: "personal website",
  basePath: "/admin",
  plugins: [deskTool(), visionTool()],
  /* from index.ts to organize shcema */
  schema: { types: schemas },
});

export default config;
