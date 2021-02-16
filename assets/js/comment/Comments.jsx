import {render, unmountComponentAtNode} from 'react-dom'
import React, {useEffect}from 'react'
import {usePaginatedFetch} from "./hooks";
import {Icon} from "../components/Icon";


const dateFormat= {
    dateStyle: 'medium',
    timeStyle: 'short'
}

function Comments(post, user) {

    const {item: comments, load, loading, count, hasMore } = usePaginatedFetch('/api/comments=' + post )

    useEffect(()=>{
        load()
    }, [])
    return <div>

        {loading && 'Chargement...'}

        <Title count={count}/>
        {use && <CommentForm post = {post}/>}
        {comments.map(c => <Comment key ={c.id} comment={c}/>)}

        <button onClick={load}>Chargement des commentaires</button>
        {hasMore && <button disabled={loading} className={'btn btn-primary'}>Plus de commentaire</button> }
    </div>

}


const Comment = React.memo( ({comment})=>{
    const date = new Date(comment.publishedAt)
    return <div className={"row post-comment"}>
        <h4 className={"col-sm-3"}>
            <strong>{comment.author.username}</strong>
            <strong>{date.toLocaleDateString(undefined, dateFormat)}</strong>
        </h4>
        <div className="col-ms-9">
            <p>{comment.comments}</p>
        </div>
    </div>
})

function CommentForm (post){
    return <form action="">Article{post}</form>

}
function Title ({count}){
    return <h3>
        <Icon icon={'comments'}/>
        {count} Commentaire{count> 1? 's': ''}</h3>
}
    class CommentsElement extends HTMLElement {
        connectedCallback() {
            const post  = parseInt(this.dataset.post, 10)
            const user  = parseInt(this.dataset.user, 10)||null

            render(<Comments post={post} user={user}/>, this)

        }

        disconnectedCallback() {
            unmountComponentAtNode(this)
        }

    }
    customElements.define('post-comments', CommentsElement)



