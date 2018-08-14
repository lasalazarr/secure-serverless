interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '0Acz0sEcdx1pjhQUPOtTqFXhM3hnoO7v',
  domain: 'cloudbanco.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
