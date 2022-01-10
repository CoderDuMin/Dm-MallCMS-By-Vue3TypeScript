import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
const TimeFormat = 'YYYY-MM-DD hh:mm:ss'
export function formatUtcString(
  utcString: string,
  formatType: string = TimeFormat
) {
  return dayjs.utc(utcString).utcOffset(8).format(formatType)
}
