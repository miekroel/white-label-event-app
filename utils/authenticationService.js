const FB_APP_ID = '2049634398613694';

export const handleUserLogin = async () => {
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(FB_APP_ID, {
    permissions: ['public_profile'],
    behavior: 'web',
  });

  if (type === 'success') {
    // Get the user's name using Facebook's Graph API
    const userInfoResponse = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`);
    return userInfoResponse.json();
  }
  return {};
};
