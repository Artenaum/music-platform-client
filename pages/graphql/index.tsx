import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { gql } from '../../__generated__'
import { useQuery } from '@apollo/client'
import { Grid } from '@material-ui/core'
import TrackCard from '../../components/graphqlComponents/TrackCard'
import QueryResult from '../../components/graphqlComponents/QueryResult'


const Index = () => {
	const GET_TRACKS = gql(`
		query GetTracks {
			tracksForHome {
				id
				title
				thumbnail
				length
				modulesCount
				author {
					id
					name
					photo
				}
			}
		}	
	`)

	const {loading, error, data} = useQuery(GET_TRACKS)

	return (
		<MainLayout title={"GraphQL"}>
			<Grid container justifyContent='center'>
				<QueryResult error={error} loading={loading} data={data}>
					{data?.tracksForHome?.map((track) => (
						<TrackCard key={track.id} track={track}/>
					))}
				</QueryResult>
			</Grid>
		</MainLayout>
	)
}

export default Index