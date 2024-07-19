import React,{ useState } from 'react';
import './css/blog_expanded.css'

const BlogExpanded = ({ content , buttonClassName }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className='expandable-info'>
            <button className="readmore" onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? "Read Less" : "Read More"}
            </button>
            <div className='expanded-content'>
            {isExpanded && <div>{ content }
            <button className={buttonClassName} onClick={() => setIsExpanded(false)}>Read less</button></div>}
            </div>
        </div>
    )
}

export default BlogExpanded