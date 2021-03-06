module.exports = {
  title: 'UH Department Dashboard',
  tagline: 'Low cost, useful measures of teaching, research and service for University of Hawaii academic departments',
  url: 'https://uh-dept-dashboard.github.io',
  baseUrl: '/documentation/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'uh-dept-dashboard',
  projectName: 'documentation',
  themeConfig: {
    navbar: {
      title: 'UH Department Dashboard',
      logo: { alt: 'UH Logo', src: 'img/uh-logo.png', },
      items: [
        { to: 'docs/overview/motivation', activeBasePath: 'docs', label: 'Documentation', position: 'left', },
        { to: 'blog', label: 'Blog', position: 'left'},
        { href: 'https://github.com/uh-dept-dashboard', label: 'GitHub',  },
        { href: 'https://github.com/orgs/uh-dept-dashboard/projects/1', label: 'Project Board', },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `UH Department Dashboard is sponsored by:<br/>
                  <a href='http://csdl.ics.hawaii.edu'>Collaborative Software Development Laboratory</a><br/>
                  <a href='http://www.ics.hawaii.edu'>Department of Information and Computer Sciences</a><br/>
                  <a href='http://www.hawaii.edu'>University of Hawaii</a><br/>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: { sidebarPath: require.resolve('./sidebars.js'), },
        blog: { showReadingTime: true, },
        theme: { customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
