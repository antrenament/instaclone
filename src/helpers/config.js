const getReactEnvVar = (name) => process.env[`REACT_APP_${name}`];

const config = {
  apiKey: getReactEnvVar('API_KEY'),
  authDomain: getReactEnvVar('AUTH_DOMAIN'),
  projectId: getReactEnvVar('PROJECT_ID'),
  storageBucket: getReactEnvVar('STORAGE_BUCKET'),
  messagingSenderId: getReactEnvVar('MESSAGING_SENDER_ID'),
  appId: getReactEnvVar('APP_ID')
};

Object.freeze(config);

export default config;
