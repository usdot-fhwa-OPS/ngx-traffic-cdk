# Ngx Traffic Cdk

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

## Traffic Cdk folder structure
```
ngx-traffic-cdk/
│
├── projects/
│   ├── sample-traffic-cdk-component/
│   ├── ...
|
├── dist/
│   ├── sample-traffic-cdk-component/
│   ├── ...
│
├── angular.json
├── package.json
├── .npmrc
├── README.md
```
## Develop a library component under projects folder
To create/add a new Angular library component, follow these steps:
1. Generate the Angular Library
    ```
    ng generate library my-cdk-library
    ```
    This creates a library in the projects/my-cdk-library folder.

2. Build and Test the Library
    ```
    ng build <PROJECT_NAME>
    ```
3. Run Tests
    ```
    ng test <PROJECT_NAME>
    ```
## Building

To build all projects run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

  ```bash
  ng test
  ```

## Publishing all projects
1. Ensure each library has a valid `package.json`, and update the `"name"` with `"name": "@your-scope/library-one"`
2. Update each library `package.json` version with a new version number if old version is already published.
3. Update **root** `package.json` with the new library name in build command, below:
    ``` 
    {
      "scripts": {
      "build:all": "ng build library-one && ng build library-two && ng build library-three",
      "publish:library-one": "cd dist/library-one && npm publish --access public",
      "publish:library-two": "cd dist/library-two && npm publish --access public",
      "publish:library-three": "cd dist/library-three && npm publish --access public",
      "publish:all": "npm-run-all build:all publish:library-*"
      }
    }
   ```
## Consume the Library
The GitHub Packages registry is a package registry that allows you to publish and consume packages from GitHub and available at https://github.com/orgs/usdot-fhwa-OPS/packages.

To use the library in your Angular application, follow these steps:
1. Add `.npmrc` file to the root of your project and add the following content:
    ```
    @your-scope:registry=https://npm.pkg.github.com
    ```
1. Login to your GitHub Packages registry:
    ```
    npm login --auth-type=legacy --registry=https://npm.pkg.github.com
    ```
1. Install the library using npm:
    ```
    npm install @your-scope/library-one
    ```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
