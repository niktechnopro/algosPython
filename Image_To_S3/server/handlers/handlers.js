console.log('route handlers');
var AWS = require('aws-sdk');

// AWS.config.loadFromPath('../config/config.json');//all the credentials are in json file
// let s3 = new AWS.S3(); //making new instance of S3
// let bucketParams={Bucket: "3s-kin-tekcub-erucsbo-emos"};
// s3.createBucket(bucketParams);//creating the bucket and setting it's parameters
// let s3Bucket = new AWS.S3({params: bucketParams});//connecting to that bucket

function getHandler(req, res, next){
	console.log('someone got on our page')
}

function postHandler(req, res, next){
	console.log('we got some request here', req.body)
}

function deleteHandler(req, res, next){
	console.log('we want to delete something')
}

module.exports.getHandler = getHandler;
module.exports.postHandler = postHandler;
module.exports.deleteHandler = deleteHandler;