import { ref } from 'vue'
import PageModal from '@/components/page-modal'

type CallBackType = undefined | ((item?: any) => void)

export function usePageModal(
  newCallBack: CallBackType,
  editCallBack: CallBackType
) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handlerNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }
    newCallBack && newCallBack()
  }

  const handlerEditData = (item: any) => {
    defaultInfo.value = { ...item }
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }
    editCallBack && editCallBack(item)
  }
  return [pageModalRef, defaultInfo, handlerNewData, handlerEditData]
}
