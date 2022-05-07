
>1.`npm run dev` <br/>
>2.`truffle migrate`<br/>
>3.`truffle compile`<br/>
>4  `Open Console JavaScript => truffle console`
```js
const instance = await Faucet.deployed()
```
then `instance`
```js
const funds = instance.funds()
```
then `funds`
```js
const counter = await instance.counter()
```
then `counter.toString()`
```js
const test = await instance.test()
```
then `test.toString()`

### WEB3
```js
const instance = new web3.eth.Contract(Faucet.abi, "<addressFaucet>")
 ```
 ```js
const funds = await instance.methods.funds().call()
 ```

>5 `accounts`
`web3.eth.sendTransaction({from: accounts[0],to: "<addressFaucet>",value: "10000000000000000000"})`

## TOOLS
>Keccak-256 <br/>
>Rapid Tables<br/>


### Faucet
<img src = "https://i.imgur.com/BfnPIbv.png" />
<img src = "https://i.imgur.com/GsJ13py.png"/>
<img src = "https://i.imgur.com/Y86hljA.png" />