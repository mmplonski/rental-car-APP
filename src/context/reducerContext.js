import React from 'react';

const ReducerContext = React.createContext({
	state: {},
	dispatch: () => {},
});

export default ReducerContext;
