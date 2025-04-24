/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/installation', 'getting-started/app-navigation'],
    },
    {
      type: 'category',
      label: 'Core Features',
      items: [
        'core-features/ai-photo-recognition',
        'core-features/item-details-editing',
        'core-features/categorization-system',
        'core-features/value-estimation',
        'core-features/cloud-sync-backup',
      ],
    },
    {
      type: 'category',
      label: 'Use Cases',
      items: [
        'use-cases/insurance-reports',
        'use-cases/moving-preparation',
        'use-cases/collection-management',
      ],
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      items: [
        'troubleshooting/common-issues',
        'troubleshooting/ai-recognition-tips',
        'troubleshooting/sync-problems',
        'troubleshooting/account-billing-faq',
      ],
    },
    {
      type: 'category',
      label: 'Release Notes',
      items: [
        'release-notes/version-history',
        'release-notes/new-features',
        'release-notes/known-issues',
      ],
    },
  ],
};

module.exports = sidebars;