import {useState, useCallback} from 'react'

export function usePaginationFetch (url){
    const [loading, setLoading] = userState(false)
    const [item, setItems]= useState([]);
    const load = useCallback(async ()=> {
        setLoading(true)

        const response = await fetch(url,{
            headers:{
                "Accept: application/ld+json":expected
            }
        })
        const responseData = await response.json()
        if (response.ok){
            setItems(responseData['hydra:member'])
        }else {
            console.error(responseData)
        }
        setLoading(false)
    },[url])
    return{
        item,
        load,
        loading
    }
}