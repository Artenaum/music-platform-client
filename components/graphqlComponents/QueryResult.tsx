import { ApolloError } from "@apollo/client";
import React, { PropsWithChildren } from "react";
import {LoadingSpinner} from '@apollo/space-kit/Loaders/LoadingSpinner'
import styled from "@emotion/styled";

interface QueryResultProps {
	loading: boolean,
	error?: ApolloError | undefined
	data?: unknown
}

const QueryResult: React.FC<PropsWithChildren<QueryResultProps>> = ({loading, error, data, children}): React.ReactElement<any, any> | null => {
	if (error) {
		return <p>ERROR: {error.message}</p>
	}
	if (loading) {
		return (
			<SpinnerContainer>
				<LoadingSpinner data-testid="spinner" size="large" theme="grayscale"/>
			</SpinnerContainer>
		)
	}
	if (data) {
		return <>{children}</>
	}

	return <p>Nothing to show...</p>
}

export default QueryResult

const SpinnerContainer = styled.div({
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	width: '100%',
	height: '100vh'
})