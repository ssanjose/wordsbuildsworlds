import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Words Builds Worlds',
    },
    githubUrl: 'https://github.com/ssanjose/wordsbuildsworlds',
    // links: [
    //   {
    //     type: 'menu',
    //     text: 'Guide',
    //     items: [
    //       {
    //         text: 'Getting Started',
    //         description: 'Learn to use Fumadocs',
    //         url: '/docs',
    //       },
    //     ],
    //   },
    // ],
  };
}