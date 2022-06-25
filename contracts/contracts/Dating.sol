pragma solidity ^0.8.0;


contract Dating {
    address public owner; // For fun
    uint public numberOfUsers;
    struct Person {
        string decentralizedFileStorageLink;
        string name;
    }
    mapping(address => Person) public people;
    mapping(address => address[]) public matchingMap;
    Person[] public users;

    constructor() {
        owner = msg.sender;
        // Initial owners of the contract to make this easier
        Person storage ownerPerson = people[msg.sender];
        ownerPerson.decentralizedFileStorageLink = "ipfs.com";
        ownerPerson.name = "Alice";
        users.push(ownerPerson);
        numberOfUsers = numberOfUsers + 1;
    }
    function createProfile(string memory name, string memory decentralizedFileStorageLink) public returns (bool _exists) {
        // @TODO: Add validation that the person does not already exist.
        Person storage person = people[msg.sender];
        bytes memory tempEmptyStringTest = bytes(person.name); // Uses memory
        if (tempEmptyStringTest.length == 0) {
            person.decentralizedFileStorageLink = decentralizedFileStorageLink;
            person.name = name;
            users.push(person);
            numberOfUsers = numberOfUsers + 1;
            _exists = false;
        } else {
            _exists = true;
        }
    }
    function like(address personLiked) public {
        matchingMap[personLiked].push(msg.sender);
    }
    function getUsers() public view returns (Person[] memory _users) {
        _users = users;
    }
}