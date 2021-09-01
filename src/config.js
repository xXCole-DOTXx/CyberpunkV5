export const config = {
  bucketName: 'cyberpunkv2',
  dirName: 'avatars',
  region: 'us-east-2',
  accessKeyId: 'AKIA3OOUK4FCMI33OUFG',
  secretAccessKey: '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',
  successActionStatus: 201,
  cors: [
    {
      maxAge: 3000,
      allowedOrigins: ['*'],
      allowedHeaders: ['*'],
      allowedMethods: ['GET', 'PUT', 'POST', 'DELETE', 'HEAD'],
    },
  ],
};
