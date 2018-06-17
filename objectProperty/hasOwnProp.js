// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if(myObj.hasOwnProperty([checkProp])){//hasOwnProperty returns true or false
    return myObj[checkProp]
  }else{
    return "Not Found";
  }
}

// Test your code by modifying these values
checkObj("gift");


//another fun with objects
var collection = {
    "2548": {
      "album": "Slippery When Wet",
      "artist": "Bon Jovi",
      "tracks": [ 
        "Let It Rock", 
        "You Give Love a Bad Name" 
      ]
    },
    "2468": {
      "album": "1999",
      "artist": "Prince",
      "tracks": [ 
        "1999", 
        "Little Red Corvette" 
      ]
    },
    "1245": {
      "artist": "Robert Palmer",
      "tracks": [ ]
    },
    "5439": {
      "album": "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));


// After updateRecords(5439, "artist", "ABBA"), artist should be "ABBA"
// After updateRecords(5439, "tracks", "Take a Chance on Me"), tracks should have "Take a Chance on Me" as the last element.
// After updateRecords(2548, "artist", ""), artist should not be set
// After updateRecords(1245, "tracks", "Addicted to Love"), tracks should have "Addicted to Love" as the last element.
// After updateRecords(2468, "tracks", "Free"), tracks should have "1999" as the first element.
// After updateRecords(2548, "tracks", ""), tracks should not be set
// After updateRecords(1245, "album", "Riptide"), album should be "Riptide"
// Only change code below this line
function updateRecords(id, prop, value) {
  if(prop && value !== '' && prop !== 'tracks'){
    console.log(prop, 'is set to', value, 'for: ', id)
    collection[id][prop] = value
  }
  if(prop === 'tracks'){
    console.log('prop = tracks: ', prop, value);
    if (collection[id][prop]){
      collection[id][prop].push(value)
    }else{
      collection[id][prop] = []
      collection[id][prop].push(value)
    }
  }
  if(prop && value === ''){
    console.log('we have to delete', prop, id, value)
    delete collection[id][prop]
  }
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
updateRecords(1245, "tracks", "Addicted to Love");
updateRecords(1245, "album", "Riptide");
updateRecords(5439, "tracks", "Take a Chance on Me");
updateRecords(2548, "artist", "");
updateRecords(2548, "tracks", "")