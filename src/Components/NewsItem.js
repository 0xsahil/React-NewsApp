import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date } = props;

    return (
        <div className="my-3">
            <div className="card">
                <img src={imageUrl} className="card-img-top mx-auto" alt="NEWS" style={{ height: "220px", width: "250px" }} />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}....</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary my-auto">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem