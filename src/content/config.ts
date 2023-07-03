import { z, defineCollection } from 'astro:content';

const { object, string, array, date } = z;

const podcastCollection = defineCollection({
  type: 'content',
  schema: object({
    title: string(),
    tags: array(string()),
    image: object({
      src: string(),
      alt: string(),
    }),
    publishDate: date(),
  }),
});

export const collection = {
  podcast: podcastCollection,
};
