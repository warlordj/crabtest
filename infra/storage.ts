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
    errorDocument: {key: "index.html",},
});

function publicReadPolicyForBucket(bucketName) {
    return {
        Version: "2012-10-17",
        Statement: [{
            Effect: "Allow",
            Principal: "*",
            Action: [
                "s3:GetObject"
            ],
            Resource: [
                `arn:aws:s3:::${bucketName}/*` // policy refers to bucket name explicitly
            ]
        }]
    };
}

// Set the access policy for the bucket so all objects are readable
let bucketPolicy = new aws.s3.BucketPolicy("bucketPolicy", {
    bucket: bucket.name, // refer to the bucket created earlier
    policy: bucket.bucket.apply(publicReadPolicyForBucket) // use output property `siteBucket.bucket`
}, { dependsOn: exampleBucketPublicAccessBlock });