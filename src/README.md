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

# Handling inmutle data in JS

Object.assign

```Javascript
Object.asign(target, ...sources);
Example
Object.assign({}, state ,{role: 'dev'});
```

Spread operator

```Javascript
const newstate = {...state, role:'admin'};

const newUsers = [..state.users];
```

Are shallow copies, if nested, you have to manually clone any nested objects

```Javascript
const userCopy = {...user}; // shalow, no nested objects copied

const completeUserCopy = {... user, address: {...user.address}}; // complete copy
```

deep clone is expensive
wasteful
unnecessay renders
only clone de subobjects that change

## Immer

produce with immer handles the clones

## Avoid

push and pop mutate the arrays, must clone first or use

```Javascript
map, filter, reduce, concat, spread
```
