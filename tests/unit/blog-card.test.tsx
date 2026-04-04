import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BlogCard } from '@/components/blog/blog-card';

const mockPost = {
  slug: 'test-post',
  title: 'Test Post Title',
  date: '2026-03-10',
  description: 'This is a test post description',
  tags: ['Test', 'React'],
  readingTime: 5,
};

describe('BlogCard', () => {
  it('renders post title and description', () => {
    render(<BlogCard post={mockPost} />);

    expect(screen.getByText('Test Post Title')).toBeInTheDocument();
    expect(screen.getByText('This is a test post description')).toBeInTheDocument();
  });

  it('renders post date and reading time', () => {
    render(<BlogCard post={mockPost} />);

    expect(screen.getByText(/March 10, 2026/)).toBeInTheDocument();
    expect(screen.getByText(/5 min read/)).toBeInTheDocument();
  });

  it('renders tags', () => {
    render(<BlogCard post={mockPost} />);

    expect(screen.getByText('Test')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
  });
});
