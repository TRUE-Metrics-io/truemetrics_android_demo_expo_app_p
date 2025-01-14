# Truemetrics SDK Expo Demo app

## Get started

1. Install dependencies

```bash
npm install expo-truemetrics-sdk
```
You may need to install additional dependencies:

```bash
npx expo install expo-build-properties
```
```bash
npx expo install expo-location
```
```bash
npx expo install @react-native-async-storage/async-storage
```
```bash
npm install
```

Declare Android dependencies in `app.json`:
```
"android": {
  ...
  "permissions": [
    "ACCESS_COARSE_LOCATION",
    "ACCESS_FINE_LOCATION",
    "ACTIVITY_RECOGNITION",
    "READ_PHONE_STATE"
  ]
},
```

For reference, SDK uses permissions:
```
android.permission.FOREGROUND_SERVICE
android.permission.INTERNET
android.permission.HIGH_SAMPLING_RATE_SENSORS
android.permission.ACCESS_COARSE_LOCATION
android.permission.ACCESS_FINE_LOCATION
android.permission.ACCESS_BACKGROUND_LOCATION
android.permission.ACCESS_NETWORK_STATE
android.permission.CHANGE_NETWORK_STATE
android.permission.ACTIVITY_RECOGNITION
android.permission.READ_PHONE_STATE
android.permission.POST_NOTIFICATIONS
```

Add Maven repo for the SDK to `plugins` in `app.json`:
```
[
  "expo-build-properties",
  {
    "android": {
      "extraMavenRepos": [
        "https://github.com/TRUE-Metrics-io/truemetrics_android_SDK_p_maven/raw/main"
      ]
    }
  }
]
```

Add to `plugins` in `app.json`:
```
[
  "expo-location",
  {
    "locationAlwaysAndWhenInUsePermission": "Allow app to access location."
  }
]
```

2. Start the app

```bash
 npx expo start
```
or
 ```bash
 npx expo run:android
```