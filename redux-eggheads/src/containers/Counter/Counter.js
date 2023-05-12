import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionCreator from '../../store/actions';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    value = 5;

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label={"Add " + this.value} clicked={() => this.props.onAddValueCounter(this.value)}  />
                <CounterControl label={"Subtract " + this.value} clicked={() => this.props.onSubtractValueCounter(this.value)}  />
                <hr/>
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li key={strResult.id} onClick={() => this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    };
};

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actionCreator.increment()),
        onDecrementCounter: () => dispatch(actionCreator.decrement()),
        onAddValueCounter: value => dispatch(actionCreator.add(value)),
        onSubtractValueCounter: value => dispatch(actionCreator.subtract(value)),
        onStoreResult: result => dispatch(actionCreator.storeResult(result)),
        onDeleteResult: id => dispatch(actionCreator.deleteResult(id)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);