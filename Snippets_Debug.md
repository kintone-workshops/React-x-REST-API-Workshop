# Snippets Debug
Following are snippets for common debugging steps.

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

### Errors related to kintone-customize-uploader

#### kintone-customize-uploader Error 1
Error Message:

```shell
Options: {"command":"kintone-customize-uploader","commandArgs":["customize-manifest.json"],"options":{"expandEnvs":false,"noOverride":false,"silent":false,"useShell":false,"verbose":true}}
Found .env file at default path: ./.env
spawn kintone-customize-uploader ENOENT
Parent process exited with signal: 1. Terminating child process...
```

If you get the above error message, please verify that you have installed the `kintone-customize-uploader` package.

Solution:

```shell
npm install -g kintone-customize-uploader
```

#### kintone-customize-uploader Error 2
Error Message:  
`KintoneRestAPIError: [403] [CB_NO02] No privilege to proceed. (YvIvLH6UrE8kqnRjT7Va)`

If you get the above error, the Kintone account you are using to upload the code is not a Kintone Administrator.

Solution:  
Use a Kintone account that has Kintone Administrator privileges. Only Kintone Administrators can upload code to Kintone, regardless of the permissions set for the App.

For detailed steps, checkout this Developer Forum post: <https://forum.kintone.dev/t/766>

### Error when trying to install kintone-customize-uploader

Error:  
* `npm ERR! code EACCES`
* `npm ERR! syscall mkdir`
* `npm ERR! path /usr/local/lib/node_modules/@kintone`
* `npm ERR! errno -13`
* `npm ERR! Error: EACCES: permission denied, mkdir '/usr/local/lib/node_modules/@kintone'`

Solution:

```shell
sudo npm install -g kintone-customize-uploader
```

### Errors related to Node.js & npm

Error Message:

```shell
vite build --emptyOutDir

internal/process/esm_loader.js:74
    internalBinding('errors').triggerUncaughtException(
                              ^

Error [ERR_UNSUPPORTED_ESM_URL_SCHEME]: Only file and data URLs are supported by the default ESM loader. Received protocol 'node:'
    at Loader.defaultResolve [as _resolve] (internal/modules/esm/resolve.js:782:11)
    at Loader.resolve (internal/modules/esm/loader.js:85:40)
    at Loader.getModuleJob (internal/modules/esm/loader.js:229:28)
    at ModuleWrap.<anonymous> (internal/modules/esm/module_job.js:51:40)
    at link (internal/modules/esm/module_job.js:50:36) {
  code: 'ERR_UNSUPPORTED_ESM_URL_SCHEME'
}
```

Solution:

```shell
cd React-x-REST-API-Workshop
npm install
```

### `npm install` command is not working

1. Verify the Node.js & npm versions **inside** the `React-x-REST-API-Workshop` folder
2. Just installed Node.js? Verify you configured Node.js versions **inside** the `React-x-REST-API-Workshop` folder

* Mac: `nodenv local 14.5.0`
* Windows: `nvm use 14.5.0`

Not the correct versions, or confused? 🤔 → Check out the [Guide on Installing Node.js & npm](./docs/Install_NodeJS_npm.md) Doc

### `npm run upload` failed?
_@kintone/customize-uploader not working?_ Let's try the following:

(1) Verify that the .env login info is correct (including the password)
* ⚠️ Make sure your login info is inside the `.env` file & **NOT** the `.env.example` file!
* ⚠️ Verify that KINTONE_BASE_URL input is correctly formatted:
  * ✅ Correct Format: `https://example.kintone.com`
  * ❌ Incorrect Format: `https://example.kintone.com/` or `example.kintone.com`
* ⚠️ Re-run the npm commands after saving the .env file
* ⚙️ Details: [Step 4 - Create a `.env` File](./docs/Workshop_Steps.md#step-4---create-a-env-file-)

(2) Verify your [customize-manifest.json](customize-manifest.json) was updated with the correct App ID
* ⚙️ Details: [Step 5 - Update customize-manifest.json with the App ID](./docs/Workshop_Steps.md#step-5---update-customize-manifestjson-with-the-app-id-)

(3) Verify that the `npm run build` command was run before the `npm run upload`
