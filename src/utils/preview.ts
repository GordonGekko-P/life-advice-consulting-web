interface PreviewOptions {
  viewport_width: number;
  viewport_height: number;
  format: string;
  quality: number;
  response_type: string;
  block_ads: boolean;
  block_trackers: boolean;
  block_cookie_banners: boolean;
  cache_ttl: number;
}

export async function getWebsitePreview(url: string): Promise<string> {
  try {
    // Use Screenshotone.com (they have a generous free tier)
    // You'll need to sign up for a free API key at https://screenshotone.com
    const accessKey = 'demo'; // Replace with your actual access key
    const options: PreviewOptions = {
      viewport_width: 1200,
      viewport_height: 630,
      format: 'jpg',
      quality: 85,
      response_type: 'image',
      block_ads: true,
      block_trackers: true,
      block_cookie_banners: true,
      cache_ttl: 2592000, // 30 days cache
    };

    // Convert all values to strings for URLSearchParams
    const params = new URLSearchParams({
      access_key: accessKey,
      url: url,
      ...Object.entries(options).reduce((acc, [key, value]) => ({
        ...acc,
        [key]: value.toString()
      }), {} as Record<string, string>)
    });

    return `https://api.screenshotone.com/take?${params.toString()}`;
  } catch (error) {
    console.error('Error generating preview URL:', error);
    return '';
  }
} 