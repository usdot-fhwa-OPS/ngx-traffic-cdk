# ngx-traffic-cdk
## Deployment Configuration
The instructions for deployment and configuration are located here: [Instructions](<configuration/README.md>)

## Release Notes
The current version and release history of the V2X Hub software platform can be found here: [Release Notes](<docs/Release_notes.md>)

## License information
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

## System Requirements
The V2X Hub software can run on most Linux-based computers with Pentium core processers, with at least a 64-bit processor, 2GB of RAM, and at least 64GB of drive space. Performance of the software will be based on the computing power and available RAM in the system.  

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.7.

## Traffic Cdk folder structure
```
ngx-traffic-cdk/
│
├── projects/
│   ├── traffic-cdk-map/
│   ├── ...
|
├── dist/
│   ├── traffic-cdk-map/
│   ├── ...
│
├── angular.json
├── package.json
├── tsconig.json
├── README.md
├── ...
```
## Develop a library component under projects folder
To create/add a new Angular library component, follow these steps:
1. Generate the Angular Library
    ```
    ng generate library <LIBRARY_NAME>
    ```
    This creates a library in the projects/<LIBRARY_NAME> folder.

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

## Contribution
Welcome to the V2X-Hub contributing guide. Please read this guide to learn about our development process, how to propose pull requests and improvements, and how to build and test your changes to this project. [V2X-Hub Contributing Guide](Contributing.md)  Also see [Using VS Code For Development](docs/Visual_Studio_Code_Setup.md) for instructions on compiling using VS Code.

## Code of Conduct 
Please read our [V2X-Hub Code of Conduct](Code_of_Conduct.md) which outlines our expectations for participants within the V2X-Hub community, as well as steps to reporting unacceptable behavior. We are committed to providing a welcoming and inspiring community for all and expect our code of conduct to be honored. Anyone who violates this code of conduct may be banned from the community.

## Attribution
The development team would like to acknowledge the people who have made direct contributions to the design and code in this repository. [V2X-Hub Attribution](ATTRIBUTION.txt)

## Contact
For technical support from the V2xHub team, please contact the help desk at CAVSupportServices@dot.gov.
