console.log('***** Music Collection *****')

let collection = [];
function addToCollection(title, artist, yearPublished) {
    const album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    };

collection.push(album);

return(album);
}

console.log(addToCollection('The Young and the Hopeless', 'Good Charlotte', 2002));
console.log(addToCollection('American Idiot', 'Green Day', 2004));
console.log(addToCollection('A Night at the Opera', 'Queen', 1975));
console.log(addToCollection('21st Century Breakdown', 'Green Day', 2009));
console.log(addToCollection('Prounounced Leh-Nerd Skin-Nerd', 'Lynyrd Skynyrd', 1973));
console.log(addToCollection('Goodbye Yellow Brick Road', 'Elton John', 1973));

console.log(collection);

function showCollection(collectionArray) {
    console.log(`Number of albums in the collection: ${collectionArray.length}`);
    for (let album of collectionArray) {
        console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`);
      }
    }

showCollection(collection);

function findByArtist(artist) {
    let matchingAlbums = [];
    for (let album of collection) {
        if (album.artist === artist) {
          matchingAlbums.push(album);
        }
      }

    return matchingAlbums;
    }

console.log(findByArtist('Green Day'));
console.log(findByArtist('Queen'));
