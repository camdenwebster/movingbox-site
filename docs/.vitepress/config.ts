import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'MovingBox',
  description: 'MovingBox is a powerful tool that helps you manage your moving process with ease. From organizing your items to tracking your progress, MovingBox has everything you need to make your move stress-free.',
  
  // Theme configuration
  themeConfig: {
    // Logo
    logo: '/logo/light.svg',
    
    // Navigation
    nav: [
      { text: 'User Guide', link: '/01-getting-started/introduction' },
      { text: 'Support', link: 'mailto:support@movingbox.ai' },
      { 
        text: 'Download on the App Store', 
        link: 'https://apps.apple.com/us/app/movingbox-ai/id6742755218',
        target: '_blank'
      }
    ],

    // Sidebar navigation
    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/01-getting-started/introduction' },
          { text: 'Quickstart', link: '/01-getting-started/quickstart' },
          { text: 'Core Features', link: '/01-getting-started/core-features' },
          { text: 'AI Details', link: '/01-getting-started/ai-details' },
          { text: 'Use Cases', link: '/01-getting-started/use-cases' }
        ]
      },
      {
        text: 'How to Guides',
        collapsed: false,
        items: [
          { text: 'App Navigation', link: '/02-how-to/app-navigation' },
          { text: 'Work with Items', link: '/02-how-to/work-with-items' },
          { text: 'Organize Items', link: '/02-how-to/organize-items' },
          { text: 'Customize Home Details', link: '/02-how-to/customize-home-details' }
        ]
      },
      {
        text: 'Support',
        collapsed: false,
        items: [
          { text: 'Troubleshooting', link: '/03-support/troubleshooting' },
          { text: 'FAQ', link: '/03-support/faq' },
          { text: 'Getting Help', link: '/03-support/getting-help' },
          { text: 'Feedback', link: '/03-support/feedback' }
        ]
      },
      {
        text: 'Legal',
        collapsed: false,
        items: [
          { text: 'End User License Agreement', link: '/04-legal/end-user-license-agreement' },
          { text: 'Privacy Policy', link: '/04-legal/privacy-policy' }
        ]
      }
    ],

    // Social links
    socialLinks: [
      { icon: 'github', link: 'https://github.com/camdenwebster/MovingBox' }
    ],

    // Footer
    footer: {
      message: 'Powered by VitePress',
      copyright: `Copyright © ${new Date().getFullYear()} MovingBox. All rights reserved.`
    },

    // Edit link
    editLink: {
      pattern: 'https://github.com/camdenwebster/movingbox-site/edit/main/docs/:path'
    }
  },

  // Custom CSS
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#4EB86F' }]
  ],

  // Markdown configuration
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  // Base path for deployment
  base: '/docs/',

  // Clean URLs
  cleanUrls: true
})