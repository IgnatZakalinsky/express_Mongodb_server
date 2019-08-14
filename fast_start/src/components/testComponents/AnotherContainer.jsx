import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import SomeComponent from "./SomeComponent";
import {addNewPost, getSomeText} from "../../reduxStoreReducers/testReducer";
import {withRouter} from "react-router-dom";

class AnotherContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId; // ?withRourer
        if (!userId) userId = 1191;
        this.props.getSomeText(userId);
    }

    render() {
        return (
            <div>
                <SomeComponent {...this.props}/>
            </div>
            );
    }
}

let mapStateToProps = (state) => {
    return {
        someText: state.testPage.someText,
        someArr: state.testPage.someArr
    };
};
export default compose(
    connect(mapStateToProps, {addNewPost, getSomeText}),
    withRouter,
    //WithAuthRedirect // HOC
)(AnotherContainer);

