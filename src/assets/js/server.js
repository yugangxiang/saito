export function getMarketList(params) {
   return ajax({
      url:'/allMarket',
      method: 'GET',
      data: params
   })
}

export function getMarketTotal(params) {
   return ajax({
      url:'/marketTotal',
      method: 'GET',
      data: params
   })
}

export function getPrice(params) {
   return ajax({
      url:'/prices',
      method: 'GET',
      data: params
   })
}

