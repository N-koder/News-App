import React, { Component } from 'react';

import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

import InfiniteScroll from "react-infinite-scroll-component";
export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general',
  }
  static propTypes = {
    country: PropTypes.string.isRequired,
    pageSize: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      apiKey: '176a46b9d8514666838cc2b1a17971c8',
      totalArticles: 0

    }
  }

  // async UpdateNews(){}
  // run after render method
  async componentDidMount() {
    this.props.changeProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.changeProgress(30);
    let parsedData = await data.json();
    this.props.changeProgress(70);
    // console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      loading: false,
    })
    this.props.changeProgress(100);
  }


  fetchMoreData = async() => {
    this.setState({ page: this.state.page + 1 })
    // console.log(this.state.page)
    // this.props.changeProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.state.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({ loading: true });
    let data = await fetch(url);
    // this.props.changeProgress(30);
    let parsedData = await data.json();
    // this.props.changeProgress(70);
    // console.log(parsedData)
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalArticles: parsedData.totalResults,
      loading: false, 
    })
    // this.props.changeProgress(100);
  
};

render() {

  return (
    <div className='container my-5'>
      <h1 className='text-center' style={{marginTop: '100px'}}>Top {this.props.category} headlines </h1>
      {/* {this.state.loading && <Spinner/>} */}
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalArticles}
          loader={<Spinner/>}
        >
        <div className="row my-3 mx-3">
          {this.state.articles.map((element,index) => {

            return <div className="col-md-4" key={index} >

              <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 50) : ""} ImageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

            </div>

          })}
        </div>
      </InfiniteScroll>




    </div>

  )
}
}
