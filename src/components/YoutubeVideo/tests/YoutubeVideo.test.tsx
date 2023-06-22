import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import YoutubeVideo from '../index';

describe('YoutubeVideo', () => {
  it('renders with video id prop', () => {
    const videoId = 'abcd1234';
    render(<YoutubeVideo videoId={videoId} />);
    const videoElement = screen.getByTitle('YouTube video player');
    expect(videoElement).toBeInTheDocument();
    expect(videoElement).toHaveAttribute(
      'src',
      `https://www.youtube.com/embed/${videoId}`
    );
  });
});
