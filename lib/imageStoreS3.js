const {
    PutObjectCommand,
    S3Client 
} = require('@aws-sdk/client-s3')

module.exports.save = async (name, data) => {
    const params = {
        Bucket: 'mypizzabucket727',
        Key: `pizzas/${name}.png`,
        Body: Buffer.from(data, 'Base64'),
        ContentEncoding: 'base64',
        ContentType: 'image/png'
    }
    const client = new S3Client({ region: 'us-west-2'})
    const command = new PutObjectCommand(params)
    await client.send(command)

    return `//mypizzabucket727.s3.us-west-2.amazonaws.com/${params.Key}`
}