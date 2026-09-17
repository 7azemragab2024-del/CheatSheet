const topicSelect = document.querySelector( '.topic-select' );
const topicTitle = document.querySelector( '.topic-title' );
const syntaxCode = document.querySelector( '.syntax-code' );
const meaning = document.querySelector( '.meaning' );
const remember = document.querySelector( '.remember' );

const cheatSheet = {
    normalFunction: {
        title: 'Normal Function',
        syntax:
`function functionName( parameter ) {
    // code
}`,
        meaning: 'Creates a normal named function.',
        remember: 'parameter = placeholder value received by the function.'
    },

    arrowFunction: {
        title: 'Arrow Function',
        syntax:
`const functionName = ( parameter ) => {
    // code
};`,
        meaning: 'Creates a function and stores it in a variable.',
        remember: 'Use = and =>. If there are no parameters, use ( ).'
    },

    functionCall: {
        title: 'Call a Function',
        syntax:
`functionName( argument );`,
        meaning: 'Runs the function.',
        remember: 'parameter = placeholder. argument = actual value you send.'
    },

    returnValue: {
        title: 'Return',
        syntax:
`const functionName = ( ) => {
    return value;
};`,
        meaning: 'Sends a value back from a function.',
        remember: 'Code after return inside that function will not run.'
    },

    ifElse: {
        title: 'If / Else',
        syntax:
`if ( condition ) {
    // code
} else if ( condition ) {
    // code
} else {
    // code
}`,
        meaning: 'Runs different code depending on conditions.',
        remember: 'else does not need another condition.'
    },

    forEachArrow: {
        title: 'forEach — Arrow Function',
        syntax:
`array.forEach( ( item, index ) => {
    // code
} );`,
        meaning: 'Runs code once for every item in an array.',
        remember: 'item = current value. index = current position.'
    },

    forEachNormal: {
        title: 'forEach — Normal Function',
        syntax:
`array.forEach( function( item, index ) {
    // code
} );`,
        meaning: 'Same forEach loop, but using a normal anonymous function.',
        remember: 'The function does not need a name because forEach runs it.'
    },

    eventListener: {
        title: 'Event Listener',
        syntax:
`element.addEventListener( 'click', ( event ) => {
    // code
} );`,
        meaning: 'Runs code when something happens to an HTML element.',
        remember: "Common events: 'click', 'keydown', 'mouseover'."
    },

    keydown: {
        title: 'Keydown',
        syntax:
`element.addEventListener( 'keydown', ( event ) => {
    if ( event.key === 'Enter' ) {
        // code
    }
} );`,
        meaning: 'Detects when a keyboard key is pressed.',
        remember: 'event.key tells you which key was pressed.'
    },

    preventDefault: {
        title: 'preventDefault',
        syntax:
`event.preventDefault( );`,
        meaning: "Stops the browser's normal action for that event.",
        remember: 'Use it when you want your JavaScript to handle the action instead.'
    },

    querySelector: {
        title: 'querySelector',
        syntax:
`const element = document.querySelector( '.class-name' );`,
        meaning: 'Finds an HTML element and stores it in JavaScript.',
        remember: 'Use . for classes.'
    },

    inputValue: {
        title: 'Input Value',
        syntax:
`const value = element.value;

element.value = '';`,
        meaning: 'Reads or changes the value inside an input.',
        remember: 'Inputs use .value, not .innerHTML.'
    },

    innerHTML: {
        title: 'innerHTML',
        syntax:
`element.innerHTML = 'New HTML or text';`,
        meaning: 'Changes what is displayed inside an HTML element.',
        remember: 'It can contain both text and HTML.'
    },

    jsStyle: {
        title: 'Change CSS with JavaScript',
        syntax:
`element.style.backgroundColor = 'green';
element.style.fontSize = '20px';
element.style.borderRadius = '10px';`,
        meaning: 'Changes CSS directly from JavaScript.',
        remember: 'CSS kebab-case becomes JavaScript camelCase.'
    },

    object: {
        title: 'Object',
        syntax:
`const objectName = {
    property: value,
    property2: value
};

objectName.property;
objectName.property = newValue;`,
        meaning: 'Stores related values together using properties.',
        remember: 'Inside an object use property: value.'
    },

    array: {
        title: 'Array',
        syntax:
`const array = [ ];

array.push( value );
array.splice( index, amount );`,
        meaning: 'Stores multiple values in one variable.',
        remember: 'push adds. splice removes.'
    },

    arrayObjects: {
        title: 'Array of Objects',
        syntax:
`const todoList = [
    {
        name: 'Study',
        date: '2026-09-17'
    }
];

todoList.push( {
    name,
    date
} );`,
        meaning: 'An array where each item is an object.',
        remember: 'Useful when every item needs multiple related values.'
    },

    localStorage: {
        title: 'localStorage',
        syntax:
`// Save
localStorage.setItem(
    'name',
    JSON.stringify( value )
);

// Load
const value = JSON.parse(
    localStorage.getItem( 'name' )
);

// Delete
localStorage.removeItem( 'name' );`,
        meaning: 'Stores data in the browser so it can survive a refresh.',
        remember: 'stringify before saving objects. parse after loading them.'
    },

    setTimeout: {
        title: 'setTimeout',
        syntax:
`setTimeout( ( ) => {
    // code
}, milliseconds );`,
        meaning: 'Runs code once after waiting.',
        remember: '1000 milliseconds = 1 second.'
    },

    setInterval: {
        title: 'setInterval',
        syntax:
`const intervalID = setInterval( ( ) => {
    // code
}, milliseconds );

clearInterval( intervalID );`,
        meaning: 'Runs code repeatedly after each time interval.',
        remember: 'Save the interval ID so you can stop it.'
    },

    mathRandom: {
        title: 'Math.random',
        syntax:
`const randomNumber = Math.random( );`,
        meaning: 'Creates a random decimal from 0 up to, but not including, 1.',
        remember: 'Do not forget the ( ).'
    },

    templateString: {
        title: 'Template String',
        syntax:
'const text = `Hello ${value}`;',
        meaning: 'Lets you insert JavaScript values inside a string.',
        remember: 'Use backticks and ${ }.'
    },

    map: {
        title: 'map',
        syntax:
`const newArray = array.map( ( item ) => {
    return item;
} );`,
        meaning: 'Creates a new array by changing each item.',
        remember: 'map returns a new array.'
    },

    filter: {
        title: 'filter',
        syntax:
`const newArray = array.filter( ( item ) => {
    return condition;
} );`,
        meaning: 'Creates a new array containing only items that pass a condition.',
        remember: 'Return true to keep the item. Return false to remove it.'
    }
};

const renderTopic = ( ) => {
    const selectedTopic = topicSelect.value;
    const topic = cheatSheet[ selectedTopic ];

    topicTitle.innerHTML = topic.title;
    syntaxCode.textContent = topic.syntax;
    meaning.innerHTML = topic.meaning;
    remember.innerHTML = topic.remember;
};

topicSelect.addEventListener( 'change', ( ) => {
    renderTopic( );
} );

renderTopic( );
