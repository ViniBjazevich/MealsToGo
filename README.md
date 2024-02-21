To run your project, run one of the following npm commands.

- `npm run android`
- `npm run ios`
- `npm run web`

- Run `eas build` when you are ready to create your first build.
- Once the build is completed, run `eas submit` to upload the app to app stores.

### Device simulators
#### Ios
- Refresh device by pressing `r` key
- Pull up the menu with `command + d`

#### Android
- Refresh device by double tapping `r` key
- Pull up the menu with `command + m`

### Set up
#### create .env file with firebase credentials
```
EXPO_PUBLIC_FIREBASE_API_KEY=api-key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=auth-domain
EXPO_PUBLIC_FIREBASE_PROJECT_ID=project-id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=storage-bucket
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=sender-id
EXPO_PUBLIC_FIREBASE_APP_ID=app-id
EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID=measurement-id
```