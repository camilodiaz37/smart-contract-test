const path = require('path')
const fs = require('fs')
const solc = require('solc')

const contractFileName = 'UsersContract.sol';
const contractName = 'UsersContract';
const contractPath = path.resolve(__dirname, '../contracts', 'UsersContract.sol')
const source = fs.readFileSync(contractPath, 'utf8')


let input = {
    language: 'Solidity',
    sources: {
        [contractFileName]: {
            content: source,
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['*']
            }
        }
    }
};
 
var output = JSON.parse(solc.compile(JSON.stringify(input)))

module.exports = output.contracts[contractFileName][contractName]
