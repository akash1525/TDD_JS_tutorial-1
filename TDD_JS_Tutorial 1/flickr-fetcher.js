//Module that fetches data from Flicr API
transformPhotoObj: function(photoObj) {
    return {
        title: photoObj.title,
        url:   FlickrFetcher.photoObjToURL(photoObj)
    };
}
// var FlickrFetcher;
//
// FlickrFetcher = {
//     photoObjToURL: function() {}
// };
//
// module.exports = FlickrFetcher;
