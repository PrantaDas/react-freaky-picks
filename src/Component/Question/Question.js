import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='row g-5 container mt-5'>
            <div className='col-lg-12 col-sm-12 '>
                <p>
                   1. Question:How React works?
                </p>
                <p>
                <span className='fw-bolder'>Answer:</span>React basically works through a tree.Whenever something change is made the react creates a virtual dom that has the updated state of the component  and create a list of changes that need to be updated in actual dom.React uses diffing or reconciliation algorithm if any changes took place in browser.By comparing it detects exactly where the changes have been made and  it just only change that specific node and their immediate children nodes without changing the whole tree.
                </p>

            </div>
            <div className='col-lg-12 col-sm-12'>
                <p>
                    2.State vs Props in react.
                </p>
                <p>
                    <span className='fw-bolder'>Answer:</span> State is the local state of a component that cannot be changed or accessed outside the component.It's working principle is like local variable of a function.State changes can be asynchronus.It can be modified by using this.setState. But for props-it make component reusable by giving component the ability to receive data from their parent component via props.It works as like as function parameters.Props are read only.It cannot be modified.
                </p>
            </div>
        </div>
    );
};

export default Question;