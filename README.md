# LIBRARY SCANSHELF APP 

## App Description
This mobile application uses NFC technology to add books to available on a library shelf to an NFC tag. the app can also read the books stored in that tag and display to any library user.

## App Functionalities
1. Add section and related books to tag
2. Update and Erase Tags
3. Read Shelf Section and related books from tag
4. Rate books and view rating of books in shelf tag

## App Platform
Android, preferably from android 12+
## Technologies used:
React Native, Expo, react-native-nfc-manager


## Running the application locally

1. Install dependencies

   ```bash
   npm install
   ```

2. Run Prebuid
   ```bash
    npx expo start prebuild --platform android
   ```



3. Start the app
   

   ```bash
    npx expo start --dev-client
   ```

   It is very important to use a development build when running the app locally instead of expo Go. As the app requires access to the native modules of the android device.
   
   Learn more about [expo-dev-client]('https://docs.expo.dev/develop/development-builds/introduction/') for development builds below
   
    https://docs.expo.dev/develop/development-builds/introduction/


