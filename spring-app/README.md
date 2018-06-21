
# Auth0 Spring MVC Sample

## Getting started

This sample demonstrates how to use Auth0 to perform authentication using the `mvc-auth-commons` library. Download or clone this repository and follow the instructions below to setup the sample.

### Auth0 Dashboard
1. On the [Auth0 Dashboard](https://manage.auth0.com/#/applications) create a new Client of type `Regular Web Application`. 
1. Add the URL that will be called on an OAuth successful login to the Allowed Callback URLs. i.e.: `https://mysite.com/callback`.
1. Add the URL that will be called on logout to the Allowed Logout URLs. i.e.: `https://mysite.com`.
1. Copy the `Domain`, `Client ID` and `Client Secret` values at the top of the page and use them to configure the Java Application.


### Java Application
Set the client values in the `src/main/resources/auth0.properties` file. They are read by the `AppConfig` class.

```xml
com.auth0.domain: {YOUR_AUTH0_DOMAIN}
com.auth0.clientId: {YOUR_AUTH0_CLIENT_ID}
com.auth0.clientSecret: {YOUR_AUTH0_CLIENT_SECRET}
```

It will request by default a `code` Response Type and later execute a Code Exchange. You can modify this behavior by changing the Response Type in the `AuthController` class to `token` or `id_token` to use Implicit Grant. i.e.:

```java
AuthenticationController.newBuilder(domain, clientId, clientSecret)
    .withResponseType("token")
    .build();
```

Keep in mind that the server uses `POST` to return an Implicit Grant result, you should handle that on your controller too.
 

### Running the sample

Open a terminal, go to the project root directory and run the following command:

```bash
./gradlew clean bootRun
```

The server will be accessible on https://localhost:3000/portal/home. After logging in you should see the `token` in the header.

### Running the sample with docker

In order to run the example with docker you need to have `docker` installed. Check out [docker documentation](https://docs.docker.com/engine/installation/) for installation guide.

You also need to set the client values as explained [previously](#java-application).

Execute in command line `sh exec.sh` to run the Docker in Linux or MacOS, or `.\exec.ps1` to run the Docker in Windows.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## What is Auth0?

Auth0 helps you to:

* Add authentication with [multiple authentication sources](https://docs.auth0.com/identityproviders), either social like **Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, amont others**, or enterprise identity systems like **Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider**.
* Add authentication through more traditional **[username/password databases](https://docs.auth0.com/mysql-connection-tutorial)**.
* Add support for **[linking different user accounts](https://docs.auth0.com/link-accounts)** with the same user.
* Support for generating signed [Json Web Tokens](https://docs.auth0.com/jwt) to call your APIs and **flow the user identity** securely.
* Analytics of how, when and where users are logging in.
* Pull data from other sources and add it to the user profile, through [JavaScript rules](https://docs.auth0.com/rules).

## Create a free account in Auth0

1. Go to [Auth0](https://auth0.com) and click Sign Up.
2. Use Google, GitHub or Microsoft Account to login.

## Issue Reporting

If you have found a bug or if you have a feature request, please report them at this repository issues section. Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## Author

[Auth0](https://auth0.com)

## Licence

This project is licensed under the MIT license. See the [LICENCE](LICENCE.txt) file for more info.
