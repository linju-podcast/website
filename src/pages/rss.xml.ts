import { getCollection, CollectionEntry } from 'astro:content';

import rss from '@astrojs/rss';

import { formatPosts } from '../utils';

const importedPodcasts = await getCollection('podcast');
const podcasts: CollectionEntry<'podcast'>[] = formatPosts(
  importedPodcasts,
  {}
);

export const get = () =>
  rss({
    title: '网上邻居播客',
    description: '由两位网上邻居发起的泛技术播客计划',
    site: import.meta.env.SITE,
    items: podcasts.map((podcast) => ({
      link: `/blog/${podcast.slug}`,
      title: podcast.data.title,
      pubDate: podcast.data.date,
      description: podcast.data.description,
    })),
  });
