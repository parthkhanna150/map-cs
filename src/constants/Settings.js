const Settings = {
  github: {
    ACCESS_TOKEN: process.env.REACT_APP_GITHUB_ACCESS_TOKEN,
    BASE_URL: 'https://api.github.com',
    GRAPHQL_PATH: '/graphql',
  },
  google: {
    API_KEY: process.env.REACT_APP_GOOGLE_API_KEY,
    BASE_URL: 'https://maps.googleapis.com',
    GEOCODING_PATH: '/maps/api/geocode/json',
  },
};

export default Settings;
