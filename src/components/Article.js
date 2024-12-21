import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }){
    const readingTimeEmojis = minutes < 30
        ? "☕️".repeat(Math.ceil(minutes / 5 ))
        : "🍱".repeat(Math.ceil(minutes / 10));
    
    return(
        <article>
        <h3>{title}</h3>
            <small>{date} • {readingTimeEmojis} {minutes} min read</small>
            <p>{preview}</p>
        </article>
    );
}



export default Article;
