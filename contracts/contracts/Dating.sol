pragma solidity ^0.8.0;


contract Dating {
    address public owner; // For fun
    uint public numberOfUsers;
    struct Person {
        string decentralizedFileStorageLink;
        string name;
        address personAddress;
    }
    struct ArrayOfPeople {
        Person[] persons;
        uint personsLength;
    }
    mapping(address => Person) public people;
    // Unfortuantely in solidity you can't look through an array. So you need to know the length 
    // of everytone you've liked so you can loop through all their information
    mapping(address => ArrayOfPeople) public likeMap;
    // Unfortuantely in solidity you can't look through an array. So you need to know the length 
    // of everytone you've liked so you can loop through all their information
    mapping(address => ArrayOfPeople) public unlikeMap;
    Person[] public users;

    constructor() {
        owner = msg.sender;
        // Initial owners of the contract to make this easier
        // Some default users
        Person memory alice = Person("https://bafybeigz566yrm5mdwozrvilhhi7ofbwu2jjs5dpba7cvcdhtr4wcrdx7i.ipfs.nftstorage.link/", "Alice", address(1));
        Person memory bob = Person("https://bafkreig7bo4vy45j4v4yged73rp2wzpc66ywcskhb6xwxk6rcs6zi2fyyu.ipfs.nftstorage.link/", "Bob", address(2));
        Person memory charlie = Person("https://bafkreiaashzqcdvykhoqzd6wb4vpdjv7bvjna4x4kercrp2xk46rwfqwsy.ipfs.nftstorage.link/", "Charlie", address(3));
        users.push(alice);
        users.push(bob);
        users.push(charlie);
        people[address(1)] = alice;
        people[address(2)] = bob;
        people[address(3)] = charlie;

        numberOfUsers = 3;
    }

    function reset() public {
        for (uint i=0; i<numberOfUsers; i++) {
            delete people[users[i].personAddress];
            delete likeMap[users[i].personAddress];
            delete unlikeMap[users[i].personAddress];
        }

        delete users;

        Person memory alice = Person("https://bafybeigz566yrm5mdwozrvilhhi7ofbwu2jjs5dpba7cvcdhtr4wcrdx7i.ipfs.nftstorage.link/", "Alice", address(1));
        Person memory bob = Person("https://bafkreig7bo4vy45j4v4yged73rp2wzpc66ywcskhb6xwxk6rcs6zi2fyyu.ipfs.nftstorage.link/", "Bob", address(2));
        Person memory charlie = Person("https://bafkreiaashzqcdvykhoqzd6wb4vpdjv7bvjna4x4kercrp2xk46rwfqwsy.ipfs.nftstorage.link/", "Charlie", address(3));
        users.push(alice);
        users.push(bob);
        users.push(charlie);
        people[address(1)] = alice;
        people[address(2)] = bob;
        people[address(3)] = charlie;

        numberOfUsers = 3;
    }

    function createProfile(string memory name, string memory decentralizedFileStorageLink) public returns (bool _exists) {
        // @TODO: Add validation that the person does not already exist.
        Person storage person = people[msg.sender];
        bytes memory tempEmptyStringTest = bytes(person.name); // Uses memory
        if (tempEmptyStringTest.length == 0) {
            person.decentralizedFileStorageLink = decentralizedFileStorageLink;
            person.name = name;
            person.personAddress = msg.sender;
            users.push(person);
            numberOfUsers = numberOfUsers + 1;
            _exists = false;
        } else {
            _exists = true;
        }
    }
    function like(address personLiked) public {
        Person storage existingPerson = people[personLiked];
        require(existingPerson.personAddress != address(0), "Person Liked Does Not Exist");
        // Does not exist
        ArrayOfPeople storage arrayOfPeople = likeMap[msg.sender];
        arrayOfPeople.persons.push(existingPerson);
        arrayOfPeople.personsLength = arrayOfPeople.personsLength + 1;

    }
    function unlike(address personUnliked) public returns (bool _exists) {
        Person storage existingPerson = people[personUnliked];
        // Does not exist
        if (existingPerson.personAddress == address(0)) {
            _exists = false;
        } else {
            ArrayOfPeople storage arrayOfPeople = unlikeMap[msg.sender];
            arrayOfPeople.persons.push(existingPerson);
            arrayOfPeople.personsLength = arrayOfPeople.personsLength + 1;
            _exists = true;
        }
    }
    function getUsers() public view returns (Person[] memory _users) {
        _users = users;
    }

    function getLikedUsers(address person) public view returns (Person[] memory _liked) {
        _liked = likeMap[person].persons;
    }

    function getUnlikedUsers(address person) public view returns (Person[] memory _unliked) {
        _unliked = unlikeMap[person].persons;
    }

    // function getAllLiked() public view returns (Person[][] memory _liked) {
    //     _liked = 
    // }

    function exists() public view returns (bool _exists) {
        Person storage person = people[msg.sender];
        bytes memory tempEmptyStringTest = bytes(person.name); // Uses memory
        if (tempEmptyStringTest.length == 0) {
            _exists = false;
        } else {
            _exists = true;
        }
    }
    // Keeping this generic so its easy to test matches
    function matched(address personLiked, address otherPerson) public view returns (bool _matched) {
       _matched = false;
       ArrayOfPeople storage likedPerson = likeMap[personLiked];
        if (likedPerson.personsLength > 0) {
            for (uint i=0; i<likedPerson.personsLength; i++) {
                if (likedPerson.persons[i].personAddress == otherPerson) {
                    _matched = true;
                    break;
                }
            }
        }
    }
}