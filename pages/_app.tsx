import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from "../store";
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
	uri: 'https://odyssey-lift-off-server.herokuapp.com/',
	cache: new InMemoryCache()
})

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
	<ApolloProvider client={client}>
		<Component {...pageProps} />
	</ApolloProvider>
);

export default wrapper.withRedux(WrappedApp);