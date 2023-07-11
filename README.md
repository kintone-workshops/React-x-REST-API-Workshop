# ⚠️ Repo is under construction ⚠️
Please check back later for updates.

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
![PROJECT_DEMO_GIF.gif](./docs/img/PROJECT_DEMO_GIF.gif)

## Get Started
_Clone the Repo & Install Dependencies_ 💪

First, clone the [kintone-workshops/React-x-REST-API-Workshop](https://github.com/kintone-workshops/React-x-REST-API-Workshop) repo!  🚀  
Then go inside the folders & install the dependencies!

⚡ Two terminal windows are required for this workshop.

### Terminal 1

```shell
cd Downloads

git clone https://github.com/kintone-workshops/React-x-REST-API-Workshop

cd React-x-REST-API-Workshop

npm install
```

### Terminal 2

```shell
cd Downloads/React-x-REST-API-Workshop

cd backend && npm install
```

### ⚠️ WARNING ⚠️ <!-- omit in toc -->
⚡ **Node.js v18.16.1** or higher is required to run this workshop.  
(The current LTS version is recommended)

For more information, refer to the [Guide on Installing Node.js & npm {macOS & Windows}](https://dev.to/kintonedevprogram/guide-on-installing-nodejs-npm-macos-windows-16ii).

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

### `npm install` command is not working

1. Verify the Node.js & npm versions **inside** the `React-x-REST-API-Workshop` folder
2. Just installed Node.js? Verify you configured Node.js versions **inside** the `React-x-REST-API-Workshop` folder

* Mac:`nodenv install 18.16.1 && nodenv local 18.16.1`
* Windows: `nvm install 18.16.1 && nvm use 18.16.1`

Not the correct versions, or confused? 🤔 → Check out the [Guide on Installing Node.js & npm {macOS & Windows}](https://dev.to/kintonedevprogram/guide-on-installing-nodejs-npm-macos-windows-16ii).

### Errors related to .env

If you get one of the following error messages:  

* `[webpack-cli] Error: Missing environment variable: KINTONE_BASE_URL`
* `[webpack-cli] Error: Missing environment variable: KINTONE_PASSWORD`
* `[webpack-cli] Error: Missing environment variable: KINTONE_USERNAME`
* `[webpack-cli] Error: Missing environment variable: VIEW_ID`
* `[webpack-cli] TypeError: Cannot convert undefined or null to object`
* `Failed to find .env file at default paths: [./.env,./.env.js,./.env.json]`
* `Failed to find .env file at default paths: [./.env,./.env.js,./.env.json]`
* `Failed to upload JavaScript/CSS files`
* `KintoneRestAPIError: [520] [CB_WA01] Password authentication failed...`

Then please verify that
* your `.env` file has been correctly configured
* your username and password for your Kintone account are correct
* you have not modified the `.env.example`

### Errors related to Node.js & npm

Error Message:

```shell
❯ npm run start

> react-x-rest-api-workshop@1.0.0 start
> react-scripts start

sh: react-scripts: command not found
```

Solution:

```shell
cd React-x-REST-API-Workshop
npm install
```

### npm run start command is not working

Error Message:

```shell
Starting the development server...

Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:71:19)
    at Object.createHash (node:crypto:133:10)
    at module.exports (/Users/g001494/GitHub_Root/React-x-REST-API-Workshop/node_modules/webpack/lib/util/createHash.js:135:53)
    at NormalModule._initBuildHash (/Users/g001494/GitHub_Root/React-x-REST-API-Workshop/node_modules/webpack/lib/NormalModule.js:417:16)
    at handleParseError (/Users/g001494/GitHub_Root/React-x-REST-API-Workshop/node_modules/webpack/lib/NormalModule.js:471:10)
    at /Users/g001494/GitHub_Root/React-x-REST-API-Workshop/node_modules/webpack/lib/NormalModule.js:503:5
    at /Users/g001494/GitHub_Root/React-x-REST-API-Workshop/node_modules/webpack/lib/NormalModule.js:358:12
    at /Users/g001494/GitHub_Root/React-x-REST-API-Workshop/node_modules/loader-runner/lib/LoaderRunner.js:373:3
    at iterateNormalLoaders (/Users/g001494/GitHub_Root/React-x-REST-API-Workshop/node_modules/loader-runner/lib/LoaderRunner.js:214:10)
    at iterateNormalLoaders (/Users/g001494/GitHub_Root/React-x-REST-API-Workshop/node_modules/loader-runner/lib/LoaderRunner.js:221:10)
/Users/g001494/GitHub_Root/React-x-REST-API-Workshop/node_modules/react-scripts/scripts/start.js:19
  throw err;
  ^

Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:71:19)
    at Object.createHash (node:crypto:133:10)
    at module.exports (/Users/g001494/GitHub_Root/React-x-REST-API-Workshop/node_modules/webpack/lib/util/createHash.js:135:53)
    at NormalModule._initBuildHash (/Users/g001494/GitHub_Root/React-x-REST-API-Workshop/node_modules/webpack/lib/NormalModule.js:417:16)
    at /Users/g001494/GitHub_Root/React-x-REST-API-Workshop/node_modules/webpack/lib/NormalModule.js:452:10
    at /Users/g001494/GitHub_Root/React-x-REST-API-Workshop/node_modules/webpack/lib/NormalModule.js:323:13
    at /Users/g001494/GitHub_Root/React-x-REST-API-Workshop/node_modules/loader-runner/lib/LoaderRunner.js:367:11
    at /Users/g001494/GitHub_Root/React-x-REST-API-Workshop/node_modules/loader-runner/lib/LoaderRunner.js:233:18
    at context.callback (/Users/g001494/GitHub_Root/React-x-REST-API-Workshop/node_modules/loader-runner/lib/LoaderRunner.js:111:13)
    at /Users/g001494/GitHub_Root/React-x-REST-API-Workshop/node_modules/babel-loader/lib/index.js:59:103 {
  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],
  library: 'digital envelope routines',
  reason: 'unsupported',
  code: 'ERR_OSSL_EVP_UNSUPPORTED'
}

Node.js v18.16.0
```

Solution:
1. Verify that `.env` file has been correctly configured
1. 

### Not seeing a highlighted `TODO:`?
Click the `Install` button on the VS Code pop-up message to install [TODO Highlight extension](https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight).
* [![vscode-setting-extension.png](./docs/img/common_vscode/vscode-setting-extension.png)](./docs/img/common_vscode/vscode-setting-extension-HD.png)  

---

## Completed Code
If you want the completed code for the index.js file, you can find it here:  
[Solution_server.js](./docs/Solution_server.js)

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
