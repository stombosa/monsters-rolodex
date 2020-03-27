import React from 'react';


class Person extends React.Component {

    render() {
        return (
            <div>
                <p >
                    I am: {this.props.name}
                    my age is: {this.props.age}.
                </p>

            </div>
        )
    }
}

export default Person;



