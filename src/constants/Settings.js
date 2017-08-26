const Settings = {
  github: {
    BASE_URL: 'https://api.github.com/graphql',
    ACCESS_TOKEN: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
  },
  google: {
    API_KEY: process.env.REACT_APP_GOOGLE_API_KEY,
  },
};

export default Settings;
