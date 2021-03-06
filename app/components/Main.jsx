var React = require('react');
var Nav = require('Nav');
var Weather = require('Weather');

var Main = React.createClass({
    render: function() {
        return (
            <div>
                <Nav />
                <div className="row">
                    <div className="colums medium-6 large-4 small-centered">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Main;
