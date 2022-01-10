import DmRequest from '@/service/index'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}
export function getCateGoodsCountData() {
  return DmRequest.get({
    url: DashboardAPI.categoryGoodsCount
  })
}

export function getCateGoodsFavorData() {
  return DmRequest.get({
    url: DashboardAPI.categoryGoodsFavor
  })
}

export function getCateGoodsSaleData() {
  return DmRequest.get({
    url: DashboardAPI.categoryGoodsSale
  })
}

export function getAdressGoodsSaleData() {
  return DmRequest.get({
    url: DashboardAPI.addressGoodsSale
  })
}
