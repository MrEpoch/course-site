import {createClient} from "@sanity/client";
import imageUrlBuilder  from "@sanity/image-url";
import { PUBLIC_PROJECT_ID, PUBLIC_DATASET } from "$env/static/public";

export const client = createClient({
  projectId: PUBLIC_PROJECT_ID,
  dataset: PUBLIC_DATASET,
  apiVersion: "2023-12-20",
  useCdn: false
});

const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
  return builder.image(source);
}
