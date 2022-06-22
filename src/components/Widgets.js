import './Widgets.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
// import { textAlign, width } from '@mui/system';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <h1>{name}</h1>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>${price}</p>
          <p className='coin-volume'>${volume.toLocaleString()}</p>

          {priceChange < 0 ? (
            <p className='coin-percent red'>{priceChange.toFixed(2)}%</p>
          ) : (
            <p className='coin-percent green'>{priceChange.toFixed(2)}%</p>
          )}

          <p className='coin-marketcap'>
            ${marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

function CoinTable() {
const [coins, setCoins] =useState([])
const [search, setSearch]= useState('')

useEffect(()=>{
  axios
    .get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=7&page=1&sparkline=false'
    )
    .then(res => {
      setCoins(res.data);
      console.log(res.data);
    })
    .catch(error => console.log(error));
},[])

const handleChange = e => {
  setSearch(e.target.value);
};

const filteredCoins = coins.filter(coin =>
  coin.name.toLowerCase().includes(search.toLowerCase())
);

return (
  <div className='coin-app'>
    <div className='coin-search'>
      <h1 className='coin-text'>Search a currency</h1>
      <form>
        <input
          className='coin-input'
          type='text'
          onChange={handleChange}
          placeholder='Search'
        />
      </form>
    </div>
    <div className='table-header' style={{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      height:'50px',
      margin:'0px',
      // border:'2px solid',
      width:'100%'
    }}>
      <div style={{
        // border:'2px solid',
        width:'10%',
        marginLeft:'340px',
        textAlign:'center',
      }}><p>Coin</p></div>
      <div style={{
        // border:'2px solid',
        width:'4%',
        textAlign:'center',
        marginLeft:'50px'
      }}><p>Price</p></div>
      <div style={{
        // border:'2px solid',
        width:'6%',
        textAlign:'center',
        marginRight:'270px'
      }}><p>Volume</p></div>
      <div style={{
        // border:'2px solid',
       width:'10%',
       textAlign:'center',
       marginLeft:'-300px'
      }}><p>Price Change</p></div>
      <div style={{
        // border:'2px solid',
        width:'6%',
        textAlign:'center',
        marginRight:'340px'
      }}><p>Mkt Cap</p></div>
    </div>
    {filteredCoins.map(coin => {
      return (
        <Coin
          key={coin.id}
          name={coin.name}
          price={coin.current_price}
          symbol={coin.symbol}
          marketcap={coin.total_volume}
          volume={coin.market_cap}
          image={coin.image}
          priceChange={coin.price_change_percentage_24h}
        />
      );
    })}
  </div>
);


}


export default CoinTable








