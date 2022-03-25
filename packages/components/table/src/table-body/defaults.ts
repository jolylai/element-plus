import { PropType } from "vue";
import type { Store} from '../store'

export interface TableBodyProps<T> {
  store: Store<T>
}

const defaultProps = {
  store: {
    require: true,
    type: Object as PropType<TableBodyProps<any>>
  }
}

export default defaultProps