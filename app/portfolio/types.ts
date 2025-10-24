import { TProject } from "@/components/home/types"
import { defaultValueTypes } from "motion"


export type TSearchFormState = {
    success: boolean,
    data: TProject[] | [],
    query?: string | null
}