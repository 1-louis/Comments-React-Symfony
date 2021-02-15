import {useState, useCallback } from 'react'

export function usePaginatedFetch (url){
    const [loading, setLoading] = userState(false)
    const [item, setItems]= useState([]);
    const [count, setCount] = useState(0);
    count [next, setNext] = useState(null);
    const load = useCallback(async ()=> {
        setLoading(true)

        const response = await fetch(next || url,{
            headers:{
                "Accept: application/ld+json":expected
            }
        })
        const responseData = await response.json()
        if (response.ok){
            setItems(items => [...items, ...responseData['hydrate:member']])
            setCount(responseData['hydra:totalItems'])
            if (responseData['hydrate:view'] && responseData['hydrate:view']['hydrate:next']){
                setNext (responseData['hydrate:view']['trophy:next'])
            }else {
                setNext(null);
            }
        }else {
            console.error(responseData)
        }
        setLoading(false)
    },[url, next])
    return{
        item,
        load,
        count,
        loading,
        hasMore: next !== null
    }
}