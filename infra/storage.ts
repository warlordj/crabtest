export const bucket = new sst.aws.Bucket("MyBucket", {
    access: "public",
});

export const exampleBucketPublicAccessBlock = new aws.s3.BucketPublicAccessBlock("MyBucket", {
    bucket: bucket.name,
    blockPublicAcls: false,
    blockPublicPolicy: false,
    ignorePublicAcls: false,
    restrictPublicBuckets: false,
});
