/**
 * Get the correct image path with basePath for GitHub Pages
 */
export function getImagePath(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/loyal-garage-redesign' : '';
  return `${basePath}${path}`;
}
