const axios = require('axios');

exports.handler = function(event, context, callback) {
    var token = process.env.netlify_access_token;

    const baseUrl = "https://api.netlify.com"
    var queryToken = `access_token=${token}`;

    axios.get(`${baseUrl}/api/v1/sites/${process.env.site_id}/forms?${queryToken}`)
    .then(sitesResult => {
        const form = sitesResult?.data?.filter(x => x.name == "birthday")

        axios.get(`${baseUrl}/api/v1/forms/${form.id}/submissions?${queryToken}`).then(formsResult => {
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(formsResult.data)
              });
        }).catch(ex => callback(ex))
    })
    .catch(ex => callback(ex));
}