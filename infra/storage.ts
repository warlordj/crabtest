export const bucket = new sst.aws.Bucket("MyBucket", {
    access: "public",
});

export const exampleBucketPublicAccessBlock = new aws.s3.BucketPublicAccessBlock("MyBucketAccess", {
    bucket: bucket.name,
    blockPublicAcls: false,
    blockPublicPolicy: false,
    ignorePublicAcls: false,
    restrictPublicBuckets: false,
});

export const siteBucketWebsiteConfig = new aws.s3.BucketWebsiteConfigurationV2("MyBucketStatic", {
    bucket: bucket.name,
    indexDocument: {
        suffix: "index.html",
    },
    errorDocument: {
        suffix: "index.html",
    },
});