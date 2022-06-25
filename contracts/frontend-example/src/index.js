async function startup() {
    const web3 = await getWeb3();
    const accounts = await web3.eth.getAccounts();
    const contract = await getContract(web3);
    console.log(contract)
    console.log(accounts);
    const users = await getUsersDirectly(contract);
    const numberOfUsers = await getUsersLength(contract);
    console.log(users);
    console.log(numberOfUsers);
    createProfileListener(contract, accounts[0]);
    createLikeListener(contract, accounts[0]);
}

const createProfileListener = (contract, account) => {
    let name;
    let storageLink;
    $("#name").on("change", (e) => {
        name = e.target.value;;
    })
    $("#storageLink").on("change", (e) => {
        storageLink = e.target.value;;
    })
    $("create-profile-submit").click(async () => {
        await createProfile(contract, name, storageLink, account);
    })
}

const createLikeListener = (contract, account) => {
    let likeAddress;
    $("#user-address").on("change", (e) => {
        likeAddress = e.target.value;
    });
    $("like-user-submit").click(async () => {
        await likeUser(contract, likeAddress, account);
    })
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

const getCurrentUserInfo = async (contract, account) => {
    const person = 
}

startup();