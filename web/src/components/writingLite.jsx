import React from "react";
import useSanityLinks from "../hooks/use-sanityLinks";


const WritingLite = () => {
    const posts = useSanityLinks();
    let counter = 0;
    return (
        <div className="pocketList">
            {posts.map((cnode) => {
                let post = cnode.node;
                let body = post.body[0];
                counter++;
                if (counter <= 8) {
                    return (
                        <div className="pocket-card" key={post.id}>
                            <div className="postHeader">
                                <a href={post.link} target="_blank" rel="noreferrer" className="writingLink">
                                    <h2 className="pocket-text">{post.title}</h2>
                                </a>
                            </div>
                            <p>{body._rawChildren[0].text.length > 50 ? body._rawChildren[0].text.substring(0, 50) + '...' : body._rawChildren[0].text} </p>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default WritingLite;