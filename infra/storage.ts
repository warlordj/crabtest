export const bucket = new sst.aws.Bucket("MyBucket", {
    access: "public",

    cdk: {
        bucket: {
            policy: {
                Statement: [
                    {
                        Effect: "Allow",
                        Principal: "*",
                        Action: "s3:GetObject",
                        Resource: sst.$interpolate`arn:aws:s3:::${sst.$ref("MyBucket")}/*`,
                    },
                ],
                Version: "2012-10-17",
            },
        },
    },

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

