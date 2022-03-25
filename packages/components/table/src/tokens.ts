import { InjectionKey } from "vue";
import type { Table} from './table/defaults'

export const TABLE_INJECTION_KEY: InjectionKey<Table<any>> = Symbol('PoTable')