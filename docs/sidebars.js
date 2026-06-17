/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'getting-started/what-is-nexbox',
        'getting-started/system-requirements',
        'getting-started/preinstalled',
      ],
    },
    {
      type: 'category',
      label: 'Installation',
      collapsed: false,
      items: [
        'installation/download',
        'installation/verify',
        'installation/boot-usb',
        'installation/install-disk',
        'installation/virtual-machine',
        'installation/first-boot',
      ],
    },
    {
      type: 'category',
      label: 'Tools',
      collapsed: false,
      items: [
        'tools/nexbox-tools',
        'tools/tool-packs',
        'tools/special-installers',
        'tools/search-catalog',
        'tools/customising',
        'tools/updating',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: [
        'reference/burp-suite',
        'reference/troubleshooting',
        'reference/faq',
        'reference/roadmap',
        'reference/license',
        'reference/support',
      ],
    },
  ],
};

module.exports = sidebars;
