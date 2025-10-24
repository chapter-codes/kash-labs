'use server'

import { success } from "zod"
import { TSearchFormState } from "./types"
import { findProjects } from "@/lib/controllers/ProjectController"
import { defaultValueTypes } from "motion"


export async function handleSearch(_prevState:TSearchFormState, formData: FormData ){
    console.log('formdata', formData)
    const titleQuery = formData.get("search")?.toString() ?? null
    try{
        if(!titleQuery) return {
            success:false,
            data:[],
            query: titleQuery
        }

        const res = await findProjects( {title:titleQuery})
        console.log(res)

        return {
            success: true, 
            data:  res ??[],
            query: titleQuery
        }
    }catch(error: any){
        console.log('error', error.message)
        return {
            success:false,
            data : [],
            query: titleQuery
        }
    }
}

