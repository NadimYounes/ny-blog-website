import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export const GET = async () => {
  const posts = await getCollection('blog');
  return rss({
    title: 'NY Blog',
    description: 'Posts from NY',
    site: 'https://example.com',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.slug}/`,
    })),
  });
};
