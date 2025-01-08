git clone MY_APP
npx replace-in-file '/crabs/g' 'MY_APP' '**/*.*' --verbose
npm install
npx sst deploy
