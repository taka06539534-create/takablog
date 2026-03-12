import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { HomeHero } from '@/components/home/home-hero';

describe('HomeHero', () => {
  it('renders name and title', () => {
    render(
      <HomeHero
        name="Test User"
        title="Software Developer"
        bio="Test bio"
      />
    );

    expect(screen.getByText('Hi, I\'m Test User')).toBeInTheDocument();
    expect(screen.getByText('Software Developer')).toBeInTheDocument();
  });

  it('renders social links', () => {
    render(
      <HomeHero
        name="Test"
        title="Dev"
        bio="Bio"
        socialLinks={{
          github: 'https://github.com',
          twitter: 'https://twitter.com',
        }}
      />
    );

    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('Twitter')).toBeInTheDocument();
  });
});
