import React, { useEffect, useState } from "react"
import "./style.css"
import useSanity from "../hooks/use-sanity";
import { Link } from "gatsby";
import { getBlogUrl } from '../lib/helpers'
import Axios from "axios";
import { globalHistory } from '@reach/router';



const Writing = (props) => {

    const switchCategory = function (id) {
        let cat = categories.find(el => {
            return el.node.id === id;
        }).node.posts;
        setIndex(0);
        setCurrentCategory(cat);
    };


    const allPostsRef = React.createRef();
    useEffect(() => {
        allPostsRef.current.focus();
        const getTopPosts = async function () {
            const token = 'skZtaEqHcHgqtKHCuoQbyo2BgZNrom5iFPlKnkM24rJtgTchspLwEBxwtto22sHDXEn2v7RnanGZxeCItZHsxEOV11AYRm5d0AhI9Vo81rotK2Xdphm3vI9cEn3HbIaoTf8CkXOxQIwFXdHyPYfQQdAVIKk5f77sUDBn6uCEbCFFzJY625wH'
            const data = await Axios({
                method: 'get',
                url: 'https://eepwv2ou.api.sanity.io/v1/data/query/production?query=*[_type == "post"][0...10] | order(views desc)',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            });
            setTopPosts(data.data.result.slice(1, data.data.result.length));
            if (globalHistory.location.state.category != null) {
                switchCategory(globalHistory.location.state.category);
            }
            else {
                getList("next");
            }
        }

        getTopPosts();
    }, []);

    const { categories, posts } = useSanity();
    const [allPosts, setAllPosts] = useState(posts);
    const [currentCategory, setCurrentCategory] = useState(allPosts);
    useEffect(() => {
        getList('next');
    }, [currentCategory]);
    const [topPosts, setTopPosts] = useState([]);
    const [index, setIndex] = useState(0);
    const [currentList, setCurrentList] = useState([]);

    const getList = (direction) => {
        let start = index;
        let end = 0;
        let list = [];
        if (direction == "prev") {
            end = start - 8;
            if (end < 0) {
                return null;
            }
            while (start > end) {
                let post = currentCategory[start - 1];
                list.push(post);
                start--;
            }
        }
        else {
            end = start + 8;
            if (end < currentCategory.length) {
            }
            else if (end < (currentCategory.length + 8)) {
                end = start + (currentCategory.length + 8) - end;
            }
            else { return null }
            while (start < end) {
                let post = currentCategory[start];
                list.push(post);
                start++;
            }
        }
        setIndex(start);
        setCurrentList(list);
    }

    return (
        <div className="writingPage">
            <div id="writingHeader">
                <h1>Eric's Sharing Space</h1>
                <div role="button" onClick={() => {
                    setIndex(0);
                    setCurrentCategory(topPosts)
                }} tabIndex="-1">
                    <p className="writingCategoryTitle">Most read</p>
                </div>
            </div>

            <div id="writingContent">
                <div id="writingCategories">
                    <div ref={allPostsRef} role="button" onClick={() => {
                        setIndex(0);
                        setCurrentCategory(allPosts);
                    }} tabIndex="-1">
                        <p className="writingCategoryTitle">ALL</p>
                    </div>
                    {categories.map((category) => {
                        return (
                            <div role="button" onClick={() => { switchCategory(category.node.id) }} tabIndex="-1" key={category.node.id}>
                                <p className="writingCategoryTitle">{category.node.title}</p>
                                <p>{category.node.posts?.length || 0}</p>
                            </div>
                        )
                    })}
                </div>

                <div id="writingPosts">
                    {currentList.map((cnode) => {
                        let post = cnode;
                        let body = post.body[0];
                        if (body._rawChildren) {
                            return (
                                <div className="postDivPreview" key={post.id}>
                                    <div className="postHeader">
                                        <Link className="writingLink" to={getBlogUrl(post.publishedAt, post.slug)}>
                                            <h2 className="postTitle">{post.title}</h2>
                                        </Link>
                                    </div>
                                    <p>{body._rawChildren[0].text} </p>
                                </div>
                            )
                        }
                        else {
                            return (
                                <div className="postDivPreview" key={post._id}>
                                    <div className="postHeader">
                                        <Link className="writingLink" to={getBlogUrl(post.publishedAt, post.slug)}>
                                            <h2 className="postTitle">{post.title}</h2>
                                        </Link>
                                    </div>
                                    <p>{body.children[0].text} </p>
                                </div>
                            )
                        }
                    })}
                </div>
                <div id="writingButtons">
                    <div onClick={() => {
                        getList("prev");
                    }}>
                        <p>Previous page</p>
                    </div>
                    <div onClick={() => {
                        getList("next");
                    }}>
                        <p>Next page</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Writing;
