const axios = require('axios');
const FormData = require('form-data');
const { PrivyClient, PublicSession } = require('@privy-io/privy-browser');

const NFT_STORAGE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDYyZThCZDBDZDQ1MTViMDI0NTA0YmM3MTc5MWFDMjQxN0U3OWExYzgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY1NjEyODYyMjA0MiwibmFtZSI6ImV0aG55In0.H8MeYoXeMbNz3TsUwV5GLA-dMGuippyLLEuNeE_Y5ow'


async function getGitHubPayload(username) {
    const url = `https://api.github.com/users/${username}`;

    return axios
        .get(url).catch(function (error) {
            console.error(error)
        });
}

async function getImageData(imgUrl) {
    return axios
        .get(imgUrl, {
            responseType: 'arraybuffer'
        });
}

async function storeInNftstorage(binaryData) {
    return axios.post("https://api.nft.storage/upload", binaryData, {
        headers: {
            'Authorization': `Bearer ${NFT_STORAGE_KEY}`,
            'Content-Type': 'image/jpeg'
        }
    });
}

async function storeInStorj(binaryData) {
    let data = new FormData();
    data.append('file', binaryData);

    return axios.post("https://demo.storj-ipfs.com/api/v0/add", data, {
        headers: {
            'Content-Type': `multipart/form-data; boundary= ${data._boundary}`,
        }
    });
}

async function storeInPrivy(githubId, jsonBlob) {

    const session = new PublicSession(PRIVY_API_KEY);
    const client = new PrivyClient({
        session: session,
    });

    return client.put(
        githubId,
        [
            {
                field: 'blob',
                value: JSON.stringify(jsonBlob)
            }
        ]
    );
}

async function main() {
    const args = process.argv.slice(2)
    if (args.length !== 1) {
        console.error(`usage: ${process.argv[0]} ${process.argv[1]} `)
        process.exit(1)
    }

    const githubId = args[0]
    // const githubPayload = await getGitHubPayload(githubId);
    // const avatarUrl = githubPayload.data['avatar_url'];
    const avatarUrl = 'https://i.insider.com/5cb8b133b8342c1b45130629?width=700';
    const binaryImgBuffer = await getImageData(avatarUrl);
    const nftstorage = await storeInNftstorage(binaryImgBuffer.data);
    const httpNftStorageIpfsLink = `https://${nftstorage.data.value.cid}.ipfs.nftstorage.link/`;
    // const storj = await storeInStorj(binaryImgBuffer.data);
    // const httpStorjLink = `https://demo.storj-ipfs.com/ipfs/${storj.data['Hash']}`;
    // const privyBlob = await storeInPrivy(githubId, {
    //     "login": githubId
    // });

    // console.log("privyBlob", privyBlob);
    console.log(httpNftStorageIpfsLink)
}

main()
    .catch(err => {
        console.error(err)
        process.exit(1)
    })