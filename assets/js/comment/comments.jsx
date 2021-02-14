import {render, unmountComponentAtNode} from 'react-dom'
import React, {useEffect}from 'react'
import {usePaginationFetch} from "./hooks";


function Comments() {

    const {item: comments, load, loading} = usePaginationFetch('/api/comments')

    useEffect(()=>load(), [])
    return <div>
        {loading && 'Chargement...'}
        {JSON.stringify(comments)}
        <button onClick={load}>Chargement des commentaires</button>

    </div>

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



