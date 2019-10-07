**Task:** https://github.com/pbc/frontend-devtest

**Some notes**
- Only reducer tests
- Made without a #show view (makes you aware why it's useful: rerouting to #index after create/update has different targets otherwise!)
- I shall forever use a separate file for list rows, and define the list header *there* and not in the list file; the jumping around felt silly
- Monstrous relative imports (`../../../../`): automatically resolving names from `./src` would be the first thing to do after going `yarn eject` on `create-react-app` (it hides `webpack.config.js`, but was great otherwise)

![screencast](https://user-images.githubusercontent.com/13955209/66280209-e9c16100-e8b5-11e9-981a-fcdd4f8f1c03.gif)
