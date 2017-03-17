var React = require('react');

var About = React.createClass({
    render: function() {
        return (
            <div>
                <h3>About</h3>
                <p>This is a simple weather app made with React and Open Weather Map API.</p>
                <p>The only working feature is current temperature for a selected city.</p>
                <p>Celcius only!</p>
            </div>
        );
    }
});

module.exports = About;
