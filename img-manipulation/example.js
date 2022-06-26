const axios = require('axios');
const FormData = require('form-data');

async function transformImage(avatarUrl) {
    let data = new FormData();
    data.append('image', avatarUrl);

    return axios.post("https://api.deepai.org/api/toonify", data, {
        headers: {
            'api-key': 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K',
            'Content-Type': `multipart/form-data; boundary= ${data._boundary}`
        }
    });
}

async function main() {
    const args = process.argv.slice(2)
    if (args.length !== 1) {
        console.error(`usage: ${process.argv[0]} ${process.argv[1]} `)
        process.exit(1)
    }

    const githubId = args[0]
    const avatarUrl = 'https://avatars.githubusercontent.com/u/11747245?v=4';
    const transformedImg = await transformImage(avatarUrl);

    console.log("transformedImg", transformedImg.data['output_url']);
}

main()
    .catch(err => {
        console.error(err)
        process.exit(1)
    })