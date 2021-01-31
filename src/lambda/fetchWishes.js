require('dotenv').config();
const axios = require('axios');

export async function handler(event, context) {
    var token = process.env.netlify_access_token;
    var siteId = process.env.SITE_ID;

    const baseUrl = "https://api.netlify.com"
    var queryToken = `access_token=${token}`;

    const sitesResult =  await axios.get(`${baseUrl}/api/v1/sites/${siteId}/forms?${queryToken}`);

    console.log(sitesResult)

    const form = sitesResult?.data?.filter(x => x.name == "birthday")[0]

    const result = await  axios.get(`${baseUrl}/api/v1/forms/${form.id}/submissions?${queryToken}`)

    return {
        statusCode: 200,
        body: JSON.stringify(result.data?.map(x => x.data))
    }

}