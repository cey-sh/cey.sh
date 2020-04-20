const ghpages = require("gh-pages")

ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/cey-sh/cey.sh.git",
  },
  () => {
    console.log("Deploy Complete!")
  }
)
