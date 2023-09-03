import { getCollection, type CollectionEntry } from 'astro:content'

import rss from '@astrojs/rss'

import { formatPosts } from '../../utils'

const importedPodcasts = await getCollection('podcast', ({ id }) => {
  return id.startsWith('en/')
})
const podcasts: CollectionEntry<'podcast'>[] = formatPosts(importedPodcasts, {})

export const GET = () =>
  rss({
    title: 'Linju Podcast',
    description: 'A podcast created by literally two cyber neighbors',
    site: `${import.meta.env.SITE}/en`,
    items: podcasts.map((podcast) => ({
      link: `en/blog/${podcast.slug.substring(3)}`,
      title: podcast.data.title,
      pubDate: podcast.data.date,
      description: podcast.data.description
    }))
  })
