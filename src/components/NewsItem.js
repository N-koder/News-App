import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {

        let { title, description, ImageUrl, newsUrl, author, date, source } = this.props;

        return (

            <div className='my-3'>

                <div className="card">
                    <img src={!ImageUrl ? "https://ichef.bbci.co.uk/news/1024/branded_news/0E83/production/_115651730_breaking-promo-976.png" : ImageUrl} className="card-img-top" alt="Sorry! Image not found :)" style={{ height: "176px" }} />
                    <div className="card-body">
                        <h5 className="card-title">{title}... <span className="position-absolute top-0  translate-middle badge rounded-pill bg-dark" style={{ left: '79%', zIndex: '1' }}>
                            {source}
                        </span></h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small style = {{fontWeight : 'bolder'}}>By : {!author ? "Unknown" : author} , on : {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-outline-dark "><span style={{ fontWeight: "bolder" }}>
                            Continue... </span></a>
                    </div>
                </div>

            </div>
        )

    }
}
