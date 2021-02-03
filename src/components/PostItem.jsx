import React from 'react';
import './PostItem.css';

function PostItem(props){
    const {id,title,body} = props;
    
    return(
        <div className="post-item">
            <ul>
                <li>{id}</li>    
                <li><strong>Titlu: </strong>{title}</li>
                <li><strong>Continut: </strong>{body}</li>    
            </ul>   
        </div>
    )
}
export default PostItem;