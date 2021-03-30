import React from "react";
import usePocket from "../hooks/use-pocket";


const Pocket = () => {
    const nodes = usePocket();
    let counter = 0;
    return (
        <div className="pocketList">
            {nodes.map((post) => {
                if (post.node.title.length > 0 && post.node.excerpt.length > 0) {
                    counter++;
                    if (counter <= 8) {
                        return (
                            <a href={post.node.url} target="_blank" rel="noreferrer" key={post.node.id} className="pocket-card">
                                <p className="pocket-text">{post.node.title}</p>
                                <p>{post.node.excerpt.substring(0, 80)}...</p>
                                <p className="pocket-link">{post.node.articleDomain}</p>
                            </a>
                        )
                    }
                }
                return null
            })}
        </div>
    )
}

export default Pocket;