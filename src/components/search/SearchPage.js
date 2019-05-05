import React from 'react';

class SearchPage extends React.Component {
    state = {
        search: {
            query: ''
        }
    };

    handleChange = event => {
        const search = {
            ...this.state.search,
            query: event.target.value
        };
        this.setState({ search });
    };

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.search.query);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="search-btn"
                            onChange={this.handleChange}
                        />
                        <div className="input-group-append">
                            <input
                                type="Submit"
                                className="btn btn-outline-secondary"
                                id="search-btn"
                                value="Search"
                            />
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default SearchPage;
