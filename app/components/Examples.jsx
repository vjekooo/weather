var React = require('react');
var {Link} = require('react-router');

var Examples = React.createClass({
    render: function() {
        return (
            <div>
                <h1 className="text-center">Examples</h1>
                <p>Here are a few example locations to try out</p>
                <ul>
                    <li>
                        <Link to='/?location=Split'>Split, Croatia</Link>
                    </li>
                    <li>
                        <Link to='/?location=Tokyo'>Tokyo, Japan</Link>
                    </li>
                </ul>
            </div>
        );
    }
});

module.exports = Examples;
