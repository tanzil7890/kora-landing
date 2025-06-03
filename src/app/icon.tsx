import { join } from 'path';
import { readFileSync } from 'fs';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/svg+xml';

export default async function Icon() {
  try {
    // Read the SVG file
    const iconPath = join(process.cwd(), 'public', 'KoraAnimated.svg');
    const svgContent = readFileSync(iconPath, 'utf-8');

    return new Response(svgContent, {
      headers: {
        'Content-Type': 'image/svg+xml',
      },
    });
  } catch (error: unknown) {
    console.error('Error generating icon:', error);
    return new Response('Failed to generate icon', { status: 500 });
  }
}