# ❤️ Personal Website Using GatsbyJS
 
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



