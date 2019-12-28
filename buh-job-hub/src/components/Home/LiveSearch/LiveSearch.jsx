import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./LiveSearch.css"
class LiveSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            loading: false,
            message: '',
            results: []

        }
    }
    fetchSearchResults = (query) => {
        const searchUrl = `http://localhost:3000/search_job_post/${query}`;
        if (this.cancel) {
            this.cancel.cancel();
        }
        this.cancel = axios.CancelToken.source();
        axios
            .get(searchUrl, {
                cancelToken: this.cancel.token,
            })
            .then((res) => {
                const resultNotFoundMsg = !res.data.length
                    ? 'There are no more search results. Please try a new search.'
                    : '';
                this.setState({
                    results: res.data,
                    message: resultNotFoundMsg,
                    loading: false,
                });
            })
            .catch((error) => {
                if (axios.isCancel(error) || error) {
                    this.setState({
                        loading: false,
                        message: 'Failed to fetch results.Please check network',
                    });
                }
            });
    };
    handleOnInputChange = (event) => {
        const query = event.target.value;
        if (!query) {
            this.setState({ query, results: {}, message: '' });
        } else {
            this.setState({ query, loading: true, message: '' }, () => {
                this.fetchSearchResults(query);
            });
        }
    };
    renderSearchResults = () => {
        const { results } = this.state;
        if (results) {
            if (Object.keys(results).length && results.length) {
                return (
                    <div >
                        <ul className="Search list-group">
                            {results.map((result, index) => {
                                return (
                                    <Link key={index} className="list-group-item flex-column" to={"/browse-jobs/" + result.id}>
                                        <div style={style} className="d-flex w-100">
                                            {/* <img style={{ height: "60px" }} className="w-25 " src={result.image} /> */}
                                            <div className="w-75 ml-3">
                                                <p className="text-dark h5 ">{result.job_description}</p>
                                                {/* <div className="row justify-content-around">
                                                    <p className=" text-danger">{result.price}đ</p>
                                                </div> */}

                                            </div>

                                        </div>
                                    </Link>
                                );
                            })}
                        </ul>
                    </div>
                );
            }
        }
    };

    render() {
        var {query } = this.state
        return (
            <div className="search-container">

                <h2>Find Job</h2>
                <div className="browse-jobs">
                    Browse job offers by <Link to="/browse-categories"> category</Link> or <a href="#">location</a>
                </div>
                <br/>
                <input type="text"
                    className="ico-01"
                    placeholder="job title, keywords or company name"
                    name="search"
                    onChange={this.handleOnInputChange}
                    value={query} />
                <input type="text" className="ico-02" placeholder="city, province or region" value="" />
                <Link to="#"><button><i className="fa fa-search"></i></button></Link>
                {this.renderSearchResults()}
            </div>
        )
    }
}
const style = {
    search : {
        width : "400px"
    },
    maxWidth: "300px",
    maxHeight: "100px"
}
export default LiveSearch