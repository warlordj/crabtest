export const bucket = new sst.aws.Bucket("MyBucket", {
    access: "public",

    transform: {
        policy: (args) => {
            args.policy = sst.aws.iamEdit(args.policy, (policy) => {
                policy.Statement.push({
                    Effect: "Allow",
                    Principal: {Service: "ses.amazonaws.com"},
                    Action: "s3:GetObject",
                    Resource: $interpolate`arn:aws:s3:::${args.bucket}/*`,
                })
            })
        }
    }

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

