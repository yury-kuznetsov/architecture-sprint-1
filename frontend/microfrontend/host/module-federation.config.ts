export const mfConfig = {
  name: "host",
  exposes: {},
  shared: ["react", "react-dom"],
  remotes: {
    'auth': 'auth@http://localhost:8081/remoteEntry.js',
    'card': 'card@http://localhost:8082/remoteEntry.js',
    'profile': 'profile@http://localhost:8082/remoteEntry.js',
  }
};
