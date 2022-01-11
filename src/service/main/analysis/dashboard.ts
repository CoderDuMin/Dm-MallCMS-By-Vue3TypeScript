import DmRequest from '@/service/index'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}
export function getCateGoodsCountData() {
  return DmRequest.get({
    url: DashboardAPI.categoryGoodsCount,
    showLoading: false
  })
}

export function getCateGoodsFavorData() {
  return DmRequest.get({
    url: DashboardAPI.categoryGoodsFavor,
    showLoading: false
  })
}

export function getCateGoodsSaleData() {
  return DmRequest.get({
    url: DashboardAPI.categoryGoodsSale,
    showLoading: false
  })
}

export function getAdressGoodsSaleData() {
  return DmRequest.get({
    url: DashboardAPI.addressGoodsSale,
    showLoading: false
  })
}
