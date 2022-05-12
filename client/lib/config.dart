

/// To get your `apiKey` and `apiSecretKey` for Twitter:
/// 1. Sign up for a developer account on [Twitter Developer](https://developer.twitter.com).
/// 2. Create a new app and copy your keys.
/// 3. From the dashboard, go to your app settings, then go to OAuth settings and turn on OAuth 1.0a, then add 2 callback URLs:
///    1. `flutterfireauth://`
///    2. `https://react-native-firebase-testing.firebaseapp.com/__/auth/handler`
/// 4. Add your keys to the example app config in [`lib/config.dart`](./lib/config.dart).
Map<String, String> twitterConfig = {
  'API_KEY': 'PLACE YOUR API KEY HERE',
  'API_SECRET_KEY': 'PLACE YOUR API SECRET KEY HERE',
  'REDIRECT_URL': 'flutterfireauth://',
};
