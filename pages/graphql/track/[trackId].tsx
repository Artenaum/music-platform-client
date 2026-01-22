import React from 'react'
import QueryResult from '../../../components/graphqlComponents/QueryResult'
import TrackDetail from '../../../components/graphqlComponents/TrackDetail'
import MainLayout from '../../../layouts/MainLayout'
import { DocumentNode, useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

export const GET_TRACK = gql`
	query GetTrack($trackId: ID!) {
		track(id: $trackId) {
			id
			title
			author {
				id
				name
				photo
			}
			thumbnail
			length
			modulesCount
			description
			numberOfViews
			modules {
				id
				title
				length
				content
				videoUrl
			}
		}
	}
`

const GraphQLTrackPage = () => {
	const router = useRouter()
	const {trackId} = router.query
	

	const {loading, error, data} = useQuery(GET_TRACK, {
		variables: {trackId},
		skip: !trackId
	})

	return (
		<MainLayout title={"GraphQL Track"}>
			<QueryResult error={error} loading={loading} data={data}>
				<TrackDetail track={data?.track}/>
			</QueryResult>
		</MainLayout>
	)
}

export default GraphQLTrackPage