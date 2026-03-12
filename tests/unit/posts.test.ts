import { describe, it, expect } from 'vitest';
import { getSortedPostsData, getPostBySlug, searchPosts, getAllTags } from '@/lib/posts';

describe('posts', () => {
  it('should get sorted posts data', () => {
    const posts = getSortedPostsData();
    expect(Array.isArray(posts)).toBe(true);
  });

  it('should get post by slug', () => {
    const posts = getSortedPostsData();
    if (posts.length > 0) {
      const post = getPostBySlug(posts[0].slug);
      expect(post).toHaveProperty('title');
      expect(post).toHaveProperty('content');
      expect(post).toHaveProperty('slug');
    }
  });

  it('should search posts', () => {
    const posts = getSortedPostsData();
    if (posts.length > 0) {
      const searchTerm = posts[0].title.split(' ')[0];
      const results = searchPosts(searchTerm);
      expect(results.length).toBeGreaterThan(0);
    }
  });

  it('should get all tags', () => {
    const tags = getAllTags();
    expect(Array.isArray(tags)).toBe(true);
  });
});
