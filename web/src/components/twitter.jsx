import React from "react";
import useTwitter from "../hooks/use-twitter";
import { TwitterTweetEmbed } from 'react-twitter-embed';



const Twitter = () => {
    const nodes = useTwitter();
    return (
        <div className="twitterList">
            {nodes.map((post) => {
                return (
                    <div key={post.node.id_str} className="twitter-card">
                        <TwitterTweetEmbed tweetId={post.node.id_str} options={{ m: 'auto'}} />
                    </div>
                )
            })}
        </div>
    )
}

export default Twitter;