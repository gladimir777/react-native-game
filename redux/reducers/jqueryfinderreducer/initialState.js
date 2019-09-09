const initialState = {
  loading: false, // We can use this to show a spiner on the Home View
  // This is our mockup data
  gameData: [
    ["jQuery", "Jake Weaary", "Vue.js", "Knockout"],
    ["React", "Jake Wery", "Meteor", "jQuery"],
    ["Aylmaoo", "Jake Wery", "jQuery", "Xamarin"]
  ],
  error: null, // If we we get an error will store it in this variable
  score: 0,
  hiScore: 0
};

export default initialState;
