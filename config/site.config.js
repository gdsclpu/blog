const siteConfig = {
  seo: {
    title: 'GDSC LPU - blog',
    author: 'GDSC - LPU',
    copyright: 'Google Developers Student Club - LPU',
    description:
      'Browse programming tutorials and articles written by GDSC - LPU team. Learn Web Development, Blockchain, Web3, AI/ML, Firebase and Google Cloud.',
    image:
      'https://res.cloudinary.com/dckfb8ri8/image/upload/v1668099221/Blog/landing_og_sq4ndv.jpg',
    altText: 'GDSC LPU - blog',
    ogType: 'website',
    monetizationTag: '',
    twitterUsername: '@gdsclpu',
    pages: {
      // supportMe: {
      //   title: 'Support Me | itsrakesh - blog',
      //   description:
      //     'Your support keeps this blog alive and motivates me to keep creating content.',
      //   image:
      //     'https://ik.imagekit.io/itsrakesh/Blog/support_me_DUCAFlO96.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656350841027'
      // },
      articles: {
        title: 'Articles | GDSC LPU - blog',
        description:
          'Read articles on web development, web3, blockchain, design, and more.',
        image:
          'https://res.cloudinary.com/dckfb8ri8/image/upload/v1668099221/Blog/articles_og_j1kfet.jpg'
      },
      snippets: {
        title: 'Snippets | GDSC LPU - blog',
        description:
          'Snippets are code samples and quick tips that I have written. Explore and share them.',
        image:
          'https://res.cloudinary.com/dckfb8ri8/image/upload/v1668099221/Blog/snippets_og_hmcdf2.jpg'
      },
      categories: {
        title: 'Categories | GDSC LPU - blog',
        description: 'Browse different categories.',
        image:
          'https://res.cloudinary.com/dckfb8ri8/image/upload/v1668099220/Blog/categories_og_eq5occ.jpg'
      },
      tags: {
        title: 'Tags | GDSC LPU - blog',
        description: 'Explore all the tags.',
        image:
          'https://res.cloudinary.com/dckfb8ri8/image/upload/v1668099221/Blog/tags_og_ikj2yj.jpg'
      },
      // privacy: {
      //   title: 'Privacy Policy | GDSC LPU - blog',
      //   description: 'This page contains itsrakesh - blog privacy policies.',
      //   image:
      //     'https://ik.imagekit.io/itsrakesh/Blog/privacy_policy_xq4AJG1mUd.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656350838506'
      // },
      cookie: {
        title: 'Cookie Policy | GDSC LPU - blog',
        description: 'This page contains GDSC LPU - blog cookie policies.',
        image:
          'https://res.cloudinary.com/dckfb8ri8/image/upload/v1668099221/Blog/landing_og_sq4ndv.jpg'
      }
      // terms: {
      //   title: 'Terms & Conditions | GDSC LPU - blog',
      //   description: 'This page contains itsrakesh - blog terms & conditions.',
      //   image:
      //     'https://ik.imagekit.io/itsrakesh/Blog/terms___conditions_jb7mesw-j.png?ik-sdk-version=javascript-1.4.3&updatedAt=1656350842954'
      // }
      // externalArticles: {
      //   title: 'External Articles | GDSC LPU - blog',
      //   description: 'Read articles written by Rakesh Potnuru on other sites.',
      //   image:
      //     'https://ik.imagekit.io/itsrakesh/Blog/external_articles_urr6u2vH1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657081755552'
      // }
    }
  },
  branding: {
    logo: 'https://res.cloudinary.com/dckfb8ri8/image/upload/v1667489372/Blog/gdsc_logo_a9tbn1.png',
    colors: {
      brand: {
        50: '#4285F4',
        100: '#EA4335',
        200: '#FBBC04',
        300: '#34A853',
        400: '#48466D',
        500: '#769FCD'
      },
      text: '#454E56',
      themeLight: '#4285F4',
      themeDark: '#000000'
    },
    fonts: {
      heading: 'Google Sans Bold',
      body: 'Google Sans Regular'
    }
  },
  urls: {
    socials: {
      twitter: 'https://twitter.com/gdsclpu',
      linkedin: 'https://www.linkedin.com/company/gdsclpu',
      github: 'https://github.com/gdsclpu',
      instagram: 'https://www.instagram.com/gdsclpu',
      youtube: 'https://www.youtube.com/c/GDSCLPU'
    },
    about:
      'https://gdsc.community.dev/lovely-professional-university-jalandhar/',
    status: 'https://status.gdsclpu.live',
    newsletter: 'https://newsletter.gdsclpu.live',
    kofi: ''
  },
  adsense: {
    publisherId: '',
    slots: {
      pageTop: '',
      inFeed: ''
    }
  },
  copyrightText: `© ${new Date().getFullYear()} GDSC - LPU. All rights reserved.`,
  siteVersion: '1.0.0'
};

export default siteConfig;
