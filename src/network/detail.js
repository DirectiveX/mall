import {requestHome} from './request.js'

export function getDetailData(id) {
  return requestHome({
    url: '/resource/detail',
    params: {
      id
    }
  })
}

export class GoodInfo{
  constructor(info) {
    this.title = info.title;
    this.originPrice = info.originPrice;
    this.currentPrice = info.good.price;
    this.bgColor = 'pink';
    this.favourable = '优惠价';
    this.salesVol = info.salesVol;
    this.collect = info.good.number;
    this.policy = '退货补运费';
    this.safeguards = info.safeguards;
  }
}

export class ShopInfo{
  constructor(info) {
    this.name = info.shopKeeper.name;
    this.totalGoods = info.shopKeeper.totalGoods;
    this.totalSales = info.shopKeeper.totalSales;
    this.priceScore = info.priceScore;
    this.quantityScore = info.quantityScore;
    this.describeScore = info.describeScore;
    this.headSculpture = info.shopKeeper.headSculpture;
  }
}

export class ParamInfo{
  constructor(info) {
    this.size = info.param.size;
    this.length = info.param.length;
    this.season = info.param.season;
    this.address = info.param.address;
    this.material = info.param.material;
    this.type = info.param.type;
    this.style = info.param.style;
    this.fashion = info.param.fashion;
  }
}
