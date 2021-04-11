# Components

## Four+ ways to create a component

```Javascript
var XComponent = React.createClass({
    render: function() {
        return (
            <h1>One component</h1>
        );
    }
}):

```

```Javascript
class YComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <h1>Other component</h1>
        );
    }
}

```

```Javascript
function ZComponent(props) {
    return(
        <h1>Other component</h1>
    );
}

```

```Javascript
const AComponent = (props) => <h1>Other component</h1>

```
