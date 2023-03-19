import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResult] = useState(0)



    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



    const updateNews = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        let parsedData = await data.json()
        // console.log(parsedData)
        setArticles(parsedData.articles)
        setTotalResult(parsedData.totalResults)
        // setPage(parsedData.page)
        setLoading(false)
    }
    useEffect(() => {

        document.title = `NewsMonkey - ${capitalizeFirstLetter(props.category)}`;
        updateNews();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])




    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
        setPage(page + 1)
        // setLoading(true)
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)

        setArticles(articles.concat(parsedData.articles))
        // setArticles(parsedData.articles)
        setTotalResult(parsedData.totalResults)
    };

    return (
        <>
            <h1 className='text-center' style={{ margin: '90px 0 0' }} >
                <b>NewsMonkey</b> - Top {capitalizeFirstLetter(props.category)} headlines
            </h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">

                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title} description={element.description}
                                    imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}
News.defaultProps = {
    country: 'in',
    pageSize: 5,
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News