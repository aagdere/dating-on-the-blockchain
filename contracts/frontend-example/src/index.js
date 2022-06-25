let contract;
let account;
async function startup() {
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    contract = await getContract(web3);
    console.log(contract)
    console.log(accounts);
    account = accounts[0];
    const users = await getUsersDirectly(contract);
    const numberOfUsers = await getUsersLength(contract);
    console.log(users);
    console.log(numberOfUsers);
    const userExists = await userProfileExists(contract);
    console.log(`User Profile Exists: ${userExists}`);
}

const createProfileSubmit = async() => {
    const name = $("#name").val();
    const storageLink = $("#storageLink").val();
    await createProfile(contract, name, storageLink, account);
}

const likeSubmit = async() => {
    const likeAddress = $("#user-address").val();
    const liked = await likeUser(contract, likeAddress, account);
    console.log(liked);
    const matched = await isMatch(contract, likeAddress);
    console.log(`Matched: ${matched}`);
    if (matched) alert(`We got a match!`);
}

/**
 * 
 * @param {*} contract 
 * @returns struct Person {
        string decentralizedFileStorageLink;
        string name;
    }
 */
const getUsersDirectly = (contract) => {
    return contract.methods.getUsers().call();
}

const getUsersLength = (contract) => {
    return contract.methods.numberOfUsers().call();
    
}
const createProfile = (contract, name, storageLink, account) => {
    return contract.methods.createProfile(name, storageLink).send({from: account});
}

const likeUser = (contract, likedUserAddress, account) => {
    return contract.methods.like(likedUserAddress).send({ from: account })
}

const userProfileExists = (contract) => {
    return contract.methods.exists().call();
}

const isMatch = async (contract, likedUserAddress) => {
    return contract.methods.matched(likedUserAddress).call({ from: account });
}

startup();