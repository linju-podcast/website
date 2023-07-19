import { CollectionEntry } from 'astro:content';

type restFormatPostsProps = {
  filterOutDrafts?: boolean;
  sortByDate?: boolean;
  limit?: number | undefined;
};

type podcastEntry = CollectionEntry<'podcast'>[];

export function formatPosts(
  posts: podcastEntry,
  {
    filterOutDrafts = true,
    sortByDate = true,
    limit = undefined,
  }: restFormatPostsProps
): podcastEntry {
  let filteredPosts = posts.reduce((acc: podcastEntry, post) => {
    const { draft } = post.data;

    if (filterOutDrafts && draft) return acc;
    acc.push(post);

    return acc;
  }, []);

  sortByDate &&
    filteredPosts.sort((a, b) => {
      const dateA = new Date(a.data.date) as unknown as number;
      const dateB = new Date(b.data.date) as unknown as number;

      return dateB - dateA;
    });

  if (limit) {
    filteredPosts = filteredPosts.slice(0, limit);
  }

  return filteredPosts;
}

export function formatDate(date: Date): string {
  return new Date(date).toLocaleDateString();
}
