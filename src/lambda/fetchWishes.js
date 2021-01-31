require('dotenv').config();
const axios = require('axios');

export async function handler(event, context) {
    var token = process.env.netlify_access_token;

    const baseUrl = "https://api.netlify.com"
    var queryToken = `access_token=${token}`;
    console.log(queryToken)

    const sitesResults =  await axios.get(`${baseUrl}/api/v1/sites/${process.env.site_id}/forms?${queryToken}`);

    console.log(sitesResult)

    const form = sitesResult?.data?.filter(x => x.name == "birthday")

    return  axios.get(`${baseUrl}/api/v1/forms/${form.id}/submissions?${queryToken}`)

}