# ❤️ Personal Website Using GatsbyJS

[![Netlify Status](https://api.netlify.com/api/v1/badges/b4824d9c-84bc-498c-8920-26b4b015155c/deploy-status)](https://app.netlify.com/sites/danielzezhengjiang/deploys)

## Dev Notes

1. Use main.css to control the overall CSS
2. Limit amount of components - better overview
3. React Icons

```javascript
import { FaHome } from "react-icons/fa"
const Component = () => {
  return <FaHome className="icon"></FaHome>
}
```

4. Use constants to avoid repetition.

5. In order to follow along with the video use my backend (url below)

   [strapi backend]:https://github.com/john-smilga/strapi-gatsby-porfolio-2020-api

6. Make sure such content-types exist in your Strapi application. Or replace/delete them in gatsby-config.js

```javascript
{
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        // contentTypes: [`jobs`, `projects`, `blogs`, ],
        //singleTypes:[`about` ]
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
```

7. Used Strapi CMS to manage content, including projects, blogs sections and pages. Portfolio-API Strapi project uses port [1337 Admin](http://localhost:1337/admin). And it has cloudinary extenion so the image URLs are not localhost:1337 but a reference to cloudinary.

8. The hardest part of the project is layers, such as:

   > Layout > Projects > Project.
   >
   > Projects.js component, Project.js conponent, project.js page.

9. Overall CSS is set in `gatsby-browser.js`; Create page for blogs takes place by `gatsby-node.js`; Plugins is controlled and configured in `gatsby-config.js`

---

## Hosting & DNS

Domain Name: danielzezhengjiang.com, www.danielzezhengjiang.com
Domain Registrar: NameCheap(NC)
Web Hosting and DNS: Netlify(Free)

## ChangeLog

0614

1. Finished the whole website development. Purchased the domain danielzezhengjiang.com from NameCheap. Deployed the web on Netlify.
2. Updated content such as social links(FB, TW, GH, GH)

0615-0618

1. Updated all info in the website.
2. Netlify CLI deploy
3. Need to be improved:
   1. [x] Remove opacity change effect. Unnecessary
   2. [x] add stacks into the `Services` section
   3. [x] `Experience` section alighment issue
   4. [x] `Project` demo section text "justify" issue, and changed the word-spacing
   5. [x] `Project` demo section, stack alignment issue - PHP overlays with HTML. Addded margin-buttom 0.5rem.
   6. [x] Nav bar order - about should move to the last, the project should be the first
   7. [x] Reduce the blue background area in the hero-img
   8. [x] Add favicon, plugin menifest and plugin offline

0622 
- SEO optimization  
