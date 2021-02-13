module.exports = {
  // where it all starts -- the site's root Notion page (required)
  rootNotionPageId: '2e1c4b103a9f424088f32cf4da35f1b0',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Yemi Jegede',
  domain: 'yemijegede.com',
  author: 'Yemi Jegede',

  // open graph metadata (optional)
  description: 'Example site description',
  socialImageTitle: 'Yemi Jegede',
  socialImageSubtitle: 'Hello World! 👋',

  // social usernames (optional)
  twitter: 'yemi_jegede',
  github: 'OluyemiJ',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // image CDN host to proxy all image requests through (optional)
  // NOTE: this requires you to set up an external image proxy
  imageCDNHost: null,

  // Utteranc.es comments via GitHub issue comments (optional)
  utterancesGitHubRepo: 'OluyemiJ/nextjs-notion-starter-kit',

  // whether or not to enable support for LQIP preview images (optional)
  // NOTE: this requires you to set up Google Firebase and add the environment
  // variables specified in .env.example
  isPreviewImageSupportEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null
}
