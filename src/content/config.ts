import { z, defineCollection } from 'astro:content';

const { object, string, date, boolean } = z;

const podcastCollection = defineCollection({
  type: 'content',
  schema: object({
    title: string(),
    description: string().max(160, 'for better display'),
    tags: z.enum(['devTips', 'lifeHacks', 'englishLearnings']),
    image: object({
      src: string(),
      alt: string(),
    }),
    date: date(),
    draft: boolean().default(false),
  }),
});

export const collection = {
  podcast: podcastCollection,
};
