pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Dating.sol";

contract TestDating {
	function testInitUserCount() public {
		Dating dating = Dating(DeployedAddresses.Dating());

		Assert.equal(dating.getUsers().length, 3, "Initial user count should be 3"); 
	}

	function testInitialUnliked() public {
		Dating dating = Dating(DeployedAddresses.Dating());

		Assert.equal(dating.getUnlikedUsers().length, 0, "Initial unliked count should be 0"); 
	}

	function testUnliked() public {
		Dating dating = Dating(DeployedAddresses.Dating());

		dating.unlike(address(1));

		Assert.equal(dating.getUnlikedUsers().length, 1, "Unliked count should now be 1"); 
	}

	function testInitialLiked() public {
		Dating dating = Dating(DeployedAddresses.Dating());

		Assert.equal(dating.getLikedUsers().length, 0, "Initial liked count should be 0"); 
	}

	function testLiked() public {
		Dating dating = Dating(DeployedAddresses.Dating());

		dating.like(address(1));

		Assert.equal(dating.getLikedUsers().length, 1, "Liked count should now be 1"); 
	}
}