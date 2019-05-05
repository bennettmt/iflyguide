import React from 'react';
import { connect } from 'react-redux';
import * as SubmitActions from '../../redux/actions/submitActions';
import PropTypes from 'prop-types';

class SubmitPage extends React.Component {
    state = {
        report: {
            description: ''
        }
    };

    handleChange = event => {
        const report = {
            ...this.state.report,
            description: event.target.value
        };
        this.setState({ report });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.createReport(this.state.report);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Submit a report</h3>
                <div className="form-group">
                    <div className="input-group mb-3">
                        <input
                            id="submit-btn"
                            type="text"
                            className="form-control"
                            placeholder="Report"
                            aria-label="Report"
                            aria-describedby="submit-btn"
                            onChange={this.handleChange}
                        />
                        <div className="input-group-append">
                            <input
                                type="Submit"
                                className="btn btn-outline-secondary"
                                id="submit-btn"
                                value="Submit"
                            />
                        </div>
                    </div>
                </div>
                {this.props.reports.map(report => (
                    <div key={report.description}>{report.description}</div>
                ))}
            </form>
        );
    }
}

SubmitPage.propTypes = {
    reports: PropTypes.array.isRequired,
    createReport: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        reports: state.reports
    };
}

function mapDispatchToProps(dispatch) {
    return {
        createReport: report => dispatch(SubmitActions.createReport(report))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SubmitPage);
