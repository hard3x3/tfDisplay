

async function callDream(tokenID, status) {
	var web3 = new Web3("https://eth-mainnet.g.alchemy.com/v2/<ENTER-API-KEY>");
	const seed = 10196;
	const terraformsABI = [{"inputs":[{"internalType":"address","name":"_terraformsDataAddress","type":"address"},{"internalType":"address","name":"_terraformsAugmentationsAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Daydreaming","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"address","name":"terraformer","type":"address"}],"name":"Terraformed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"seed","type":"uint256"}],"name":"TokensRevealed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"OWNER_ALLOTMENT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"REVEAL_TIMESTAMP","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOKEN_SCALE","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newAddress","type":"address"}],"name":"addTokenURIAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"authorizedDreamer","type":"address"}],"name":"authorizeDreamer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256[16]","name":"dream","type":"uint256[16]"}],"name":"commitDreamToCanvas","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"dreamers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"earlyMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"earlyMintActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"enterDream","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintingPaused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"numTokens","type":"uint256"}],"name":"ownerClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"redeemMintpass","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"seed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"mintpassHolders","type":"address[]"}],"name":"setMintpassHolders","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"setSeed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokens","type":"uint256[]"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"setTokenURIAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"structureData","outputs":[{"components":[{"internalType":"uint256","name":"levelNumber","type":"uint256"},{"internalType":"uint256","name":"tokensOnLevel","type":"uint256"},{"internalType":"int256","name":"structureSpaceX","type":"int256"},{"internalType":"int256","name":"structureSpaceY","type":"int256"},{"internalType":"int256","name":"structureSpaceZ","type":"int256"}],"internalType":"struct Terraforms.StructureLevel[20]","name":"structure","type":"tuple[20]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"terraformsAugmentationsAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"toggleEarly","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"togglePause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenCharacters","outputs":[{"internalType":"string[32][32]","name":"","type":"string[32][32]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenCounter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenHTML","outputs":[{"internalType":"string","name":"result","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenHeightmapIndices","outputs":[{"internalType":"uint256[32][32]","name":"","type":"uint256[32][32]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenSVG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenSupplementalData","outputs":[{"components":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"xCoordinate","type":"uint256"},{"internalType":"uint256","name":"yCoordinate","type":"uint256"},{"internalType":"int256","name":"elevation","type":"int256"},{"internalType":"int256","name":"structureSpaceX","type":"int256"},{"internalType":"int256","name":"structureSpaceY","type":"int256"},{"internalType":"int256","name":"structureSpaceZ","type":"int256"},{"internalType":"string","name":"zoneName","type":"string"},{"internalType":"string[10]","name":"zoneColors","type":"string[10]"},{"internalType":"string[9]","name":"characterSet","type":"string[9]"}],"internalType":"struct Terraforms.TokenData","name":"result","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenTerrainValues","outputs":[{"internalType":"int256[32][32]","name":"","type":"int256[32][32]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenToAuthorizedDreamer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenToCanvasData","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenToDreamBlock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenToDreamer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenToPlacement","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenToStatus","outputs":[{"internalType":"enum TerraformsDreaming.Status","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"result","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenURIAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
	const terraformsDataABI = [{"inputs":[{"internalType":"address","name":"_terraformsSVGAddress","type":"address"},{"internalType":"address","name":"_perlinNoiseAddress","type":"address"},{"internalType":"address","name":"_terraformsZonesAddress","type":"address"},{"internalType":"address","name":"_terraformsCharsAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"STEP","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOKEN_DIMS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"placement","type":"uint256"},{"internalType":"uint256","name":"seed","type":"uint256"}],"name":"characterSet","outputs":[{"internalType":"string[9]","name":"charset","type":"string[9]"},{"internalType":"uint256","name":"font","type":"uint256"},{"internalType":"uint256","name":"fontsize","type":"uint256"},{"internalType":"uint256","name":"index","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"placement","type":"uint256"},{"internalType":"uint256","name":"seed","type":"uint256"}],"name":"levelAndTile","outputs":[{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"tile","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"levelDimensions","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"prerevealSVG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"prerevealURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"resourceAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"placement","type":"uint256"},{"internalType":"uint256","name":"seed","type":"uint256"}],"name":"resourceLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"resourceName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"url","type":"string"}],"name":"setAnimationURL","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"url","type":"string"}],"name":"setImageURL","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"contractAddress","type":"address"}],"name":"setResourceAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"}],"name":"setResourceName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"tile","type":"uint256"},{"internalType":"uint256","name":"seed","type":"uint256"},{"internalType":"uint256","name":"decay","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"tileOrigin","outputs":[{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"},{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"status","type":"uint256"},{"internalType":"uint256","name":"placement","type":"uint256"},{"internalType":"uint256","name":"seed","type":"uint256"},{"internalType":"uint256","name":"decay","type":"uint256"},{"internalType":"uint256[]","name":"canvas","type":"uint256[]"}],"name":"tokenCharacters","outputs":[{"internalType":"string[32][32]","name":"result","type":"string[32][32]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"tile","type":"uint256"},{"internalType":"uint256","name":"seed","type":"uint256"}],"name":"tokenElevation","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"status","type":"uint256"},{"internalType":"uint256","name":"placement","type":"uint256"},{"internalType":"uint256","name":"seed","type":"uint256"},{"internalType":"uint256","name":"decay","type":"uint256"},{"internalType":"uint256[]","name":"canvas","type":"uint256[]"}],"name":"tokenHTML","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"status","type":"uint256"},{"internalType":"uint256","name":"placement","type":"uint256"},{"internalType":"uint256","name":"seed","type":"uint256"},{"internalType":"uint256","name":"decay","type":"uint256"},{"internalType":"uint256[]","name":"canvas","type":"uint256[]"}],"name":"tokenHeightmapIndices","outputs":[{"internalType":"uint256[32][32]","name":"result","type":"uint256[32][32]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"status","type":"uint256"},{"internalType":"uint256","name":"placement","type":"uint256"},{"internalType":"uint256","name":"seed","type":"uint256"},{"internalType":"uint256","name":"decay","type":"uint256"},{"internalType":"uint256[]","name":"canvas","type":"uint256[]"}],"name":"tokenSVG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"placement","type":"uint256"},{"internalType":"uint256","name":"seed","type":"uint256"},{"internalType":"uint256","name":"decay","type":"uint256"}],"name":"tokenTerrain","outputs":[{"internalType":"int256[32][32]","name":"result","type":"int256[32][32]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"status","type":"uint256"},{"internalType":"uint256","name":"placement","type":"uint256"},{"internalType":"uint256","name":"seed","type":"uint256"},{"internalType":"uint256","name":"decay","type":"uint256"},{"internalType":"uint256[]","name":"canvas","type":"uint256[]"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"result","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"placement","type":"uint256"},{"internalType":"uint256","name":"seed","type":"uint256"}],"name":"tokenZone","outputs":[{"internalType":"string[10]","name":"","type":"string[10]"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"topography","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"tile","type":"uint256"},{"internalType":"uint256","name":"seed","type":"uint256"}],"name":"xOrigin","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"tile","type":"uint256"},{"internalType":"uint256","name":"seed","type":"uint256"}],"name":"yOrigin","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"tile","type":"uint256"},{"internalType":"uint256","name":"seed","type":"uint256"},{"internalType":"uint256","name":"decay","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"zOrigin","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"decay","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"zOscillation","outputs":[{"internalType":"int256","name":"result","type":"int256"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}];
	const terraformsAddress = '0x4E1f41613c9084FdB9E34E11fAE9412427480e56';
	const terraformsDataAddress = '0xA5aFC9fE76a28fB12C60954Ed6e2e5f8ceF64Ff2';
	var terraformsContract = new web3.eth.Contract(terraformsABI, terraformsAddress);
	var terraformsDataContract = new web3.eth.Contract(terraformsDataABI, terraformsDataAddress);
  	if (status = 2) {
		const canvas = [0000000000000000000000000000000000000000000000000000000000000000,0000000000000000000000000000000000000000000000000000000000000000,0000000000000000000000000000000000000000000000000000000000000000,0000000000000000000000000000000000000000000000000000000000000000,0000000000000000000000000000000000000000000000000000000000000000,0000000000000000000000000000000000000000000000000000000000000000,0000000000000000000000000000000000000000000000000000000000000000,0000000000000000000000000000000000000000000000000000000000000000,0000000000000000000000000000000000000000000000000000000000000000,0000000000000000000000000000000000000000000000000000000000000000,0000000000000000000000000000000000000000000000000000000000000000,0000000000000000000000000000000000000000000000000000000000000000,0000000000000000000000000000000000000000000000000000000000000000,0000000000000000000000000000000000000000000000000000000000000000,0000000000000000000000000000000000000000000000000000000000000000,0000000000000000000000000000000000000000000000000000000000000000]
	} else {
		const heightMap = await terraformsContract.methods.tokenHeightmapIndices(tokenID).call({ from: '0x0000000000000000000000000000000000000000' });
		const inputArray = heightMap.split(',').map(Number);
		const canvas = [];
		for (let i = 0; i < inputArray.length; i += 64) {
	    		formattedArray.push(inputArray.slice(i, i + 64).join(''));
		}
	}
	const placement = await terraformsContract.methods.tokenToPlacement(tokenID).call({ from: '0x0000000000000000000000000000000000000000' });
	const tokenSVG = await terraformsDataContract.methods.tokenSVG(status, placement, seed, 0, canvas).call({ from: '0x0000000000000000000000000000000000000000' });
	const tokenURI = await terraformsDataContract.methods.tokenURI(tokenID, status, placement, seed, 0, canvas).call({ from: '0x0000000000000000000000000000000000000000' });

}




// Convert the input sequence to an array of integers

// Convert the array to the desired format

// Display the result
console.log(formattedArray);
