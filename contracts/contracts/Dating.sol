pragma solidity ^0.6.12;


contract Dating {
    address private owner; // For fun
    struct Person {
        string decentralizedFileStorageLink;
        string name;
    }
    mapping(address => Person) people;
    mapping(address => address[]) matchingMap;
    Person[] users;
    constructor() public {
        owner = msg.sender;
        // Initial owners of the contract to make this easier
        Person storage ownerPerson = people[msg.sender];
        ownerPerson.decentralizedFileStorageLink = "ipfs.com";
        users.push(ownerPerson);
    }
    function createProfile(string memory name, string memory decentralizedFileStorageLink) public returns (bool _exists) {
        // @TODO: Add validation that the person does not already exist.
        Person storage person = people[msg.sender];
        bytes memory tempEmptyStringTest = bytes(person.name); // Uses memory
        if (tempEmptyStringTest.length == 0) {
            person.decentralizedFileStorageLink = decentralizedFileStorageLink;
            person.name = name;
            users.push(person);
            _exists = false;
        } else {
            _exists = true;
        }
    }
    function like(address personLiked) public {
        matchingMap[personLiked].push(msg.sender);
    }
}