export const mfConfig = {
  name: "profile",
  exposes: {
    './EditAvatarPopup': './src/components/EditAvatarPopup.js',
    './EditProfilePopup': './src/components/EditProfilePopup.js',
  },
  shared: ["react", "react-dom"],
};
