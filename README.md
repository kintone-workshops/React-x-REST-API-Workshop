# JavaScript Workshop - Build a React App Using Web Database

---

![banner.png](./docs/img/banner.png)

Let's create a front-end React Component that exchanges the contents of a 3rd party Web Database service using Express as a proxy.

## Outline <!-- omit in toc -->
* [Completed Project](#completed-project)
* [Get Started](#get-started)
* [Get Your Free Kintone Database](#get-your-free-kintone-database)
* [Workshop Steps](#workshop-steps)
* [Debugging](#debugging)
  * [Not seeing a highlighted `TODO:`?](#not-seeing-a-highlighted-todo)
* [Completed Code](#completed-code)
* [Overview of the Repo](#overview-of-the-repo)

## Completed Project
TODO: Project Demo Gif ![INSERT_PROJECT_DEMO_GIF.gif](./docs/img/INSERT_PROJECT_DEMO_GIF.gif)

## Get Started
_Clone the Repo & Install Dependencies_ 💪

First, clone the [kintone-workshops/React-x-REST-API-Workshop](https://github.com/kintone-workshops/React-x-REST-API-Workshop) repo!  🚀  
Then go inside the folder & install the dependencies!

```shell
cd Downloads

git clone https://github.com/kintone-workshops/React-x-REST-API-Workshop

cd React-x-REST-API-Workshop

npm install
```

Open the `React-x-REST-API-Workshop` folder in [VS Code](https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_command-line) as well:

```shell
code .
```

## Get Your Free Kintone Database

[kintone.dev/new/](http://kintone.dev/new/)
* ⚡ Only use lowercase, numbers, & hyphens in your subdomain
* ⚠ Do not use uppercase or special characters

|                                                                                                               |                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| ![Step 1: Fill out the Kintone Developer license sign-up form](./docs/img/common_signup/SignUp-1.png)         | ![Step 2: Email address will be the login name & the subdomain will be your unique link](./docs/img/common_signup/SignUp-2.png) |
| ![Step 3: Check for a "Welcome to Kintone! One More Step To..." email](./docs/img/common_signup/SignUp-3.png) | ![Step 4: Log into Kintone](./docs/img/common_signup/SignUp-4.png)                                                              |

For more information, check out the [Workshop_Steps.md > B. Get Your Free Kintone Database](./docs/Workshop_Steps.md#b-get-your-free-kintone-database) section!

---

## Workshop Steps

TODO: Copy the outline of the workshop steps from [Workshop_Steps.md](./docs/Workshop_Steps.md) & paste it here

---

---

## Debugging
**Let's Fix Those Problems** 💪

Here is a rundown of common problems that may occur & their solutions!

TODO: Update the following section with relevant Debug snippets - See [Snippets_Debug.md](./Snippets_Debug.md)

### Not seeing a highlighted `TODO:`?
Click the `Install` button on the VS Code pop-up message to install [TODO Highlight extension](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight).
* [![vscode-setting-extension.png](./docs/img/common_vscode/vscode-setting-extension.png)](./docs/img/common_vscode/vscode-setting-extension-HD.png)  

---

## Completed Code
If you want the completed code for the index.js file, you can find it here:  
[Solution](./docs/Solution.md)

---

## Overview of the Repo

<details>
  <summary> ↯ Overview of the Repo ↯ </summary>

| File                                                         | Purpose                                                                   | Need to Modify?        |
| ------------------------------------------------------------ | ------------------------------------------------------------------------- | ---------------------- |
| [package.json](package.json)                                 | Project's metadata & scripts for building and uploading the customization |                        |
| [.env.example](.env.example)                                 | The template for the .env file                                            |                        |
| [.env](.env)                                                 | Holds the Kintone login credential and View ID                            | Yes! - Create it       |
| [customize-manifest.json](customize-manifest.json)           | Kintone Customize Uploader's configuration file                           | Yes! - Add your App ID |
|                                                              |                                                                           |                        |
| [src/main.js](src/main.js)                                   | Heart of the project handling the API request body & adding a button      | Yes! Complete the code |
|                                                              |                                                                           |                        |
| [src/style.css](src/style.css)                               | Styling for the project can go here                                       |                        |
| [dist/KintoneCustomization.js](dist/KintoneCustomization.js) | Bundled JS generated by `npm run build` that will be uploaded to Kintone  |
|                                                              |                                                                           |                        |
| [docs/Workshop_Steps.md](./docs/Workshop_Steps.md)           | Step-by-step guide that we do during the workshop                         |                        |

</details>
