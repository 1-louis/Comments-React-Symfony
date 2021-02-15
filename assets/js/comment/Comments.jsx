import {render, unmountComponentAtNode} from 'react-dom'
import React, {useEffect}from 'react'
import {usePaginatedFetch} from "./hooks";
import {Icon} from "../components/Icon";

function Comments() {

    const {item: comments, load, loading, count, hasMore } = usePaginatedFetch('/api/comments')

    useEffect(()=>{
        load()
    }, [])
    return <div>
        {loading && 'Chargement...'}
        {JSON.stringify(comments)}
        <Title count={count}/>
        <button onClick={load}>Chargement des commentaires</button>
        {hasMore && <button disabled={loading} className={'btn btn-primary'}>Plus de commentaire</button> }
    </div>

}

function Title ({count}){
    return <h3>
        <Icon icon={'comments'}/>
        {count} Commentaire{count> 1? 's': ''}</h3>
}
    class CommentsElement extends HTMLElement {
        connectedCallback() {
            render(<Comments/>, this)

        }

        disconnectedCallback() {
            unmountComponentAtNode(this)
        }

    }
    customElements.define('post-comments', CommentsElement)



