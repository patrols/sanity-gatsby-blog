export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61172821d4ac5a0fc9d53e47",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-iat6yiu4",
                  apiId: "e2174ccb-fc43-4499-aa9b-0ac1578be8b1",
                },
                {
                  buildHookId: "61172822268d210ea529c2cd",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-bgvqriyf",
                  apiId: "bfd7745a-2d5a-4f92-b612-bc8b2c4c476a",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/patrols/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-bgvqriyf.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
