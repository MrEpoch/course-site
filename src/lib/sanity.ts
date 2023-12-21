import {createClient} from "@sanity/client";
import imageUrlBuilder  from "@sanity/image-url";
import { PUBLIC_projectId, PUBLIC_dataset } from "$env/static/public";

export const client = createClient({
  projectId: PUBLIC_projectId,
  dataset: PUBLIC_dataset,
  apiVersion: "2023-12-20",
  useCdn: false
});

const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
  return builder.image(source);
}
