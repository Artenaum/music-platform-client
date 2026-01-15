import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { fetchTracks } from '../../store/actions-creators/track'
import { TrackActionTypes } from '../../types/track'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const mockAxios = new MockAdapter(axios)

describe('test fetchTracks() action', () => {
	afterEach(() => {
		mockAxios.reset()
	})

	it('get FETCH_TRACKS on success', async () => {
		const mockTracks = [{id: 1, name: 'Track 1'}]

		mockAxios.onGet('http://localhost:5000/tracks').reply(200, mockTracks)

		const store = mockStore({tracks: []})

		await store.dispatch<any>(fetchTracks())

		const actions = store.getActions()

		expect(actions[0]).toEqual({
			type: TrackActionTypes.FETCH_TRACKS,
			payload: mockTracks
		})
	})

	it('get FETCH_TRACKS_ERROR on failure', async () => {
		mockAxios.onGet('http://localhost:5000/tracks').reply(500)

		const store = mockStore({tracks: []})

		await store.dispatch<any>(fetchTracks())

		const actions = store.getActions()

		expect(actions[0]).toEqual({
			type: TrackActionTypes.FETCH_TRACKS_ERROR,
			payload: 'Произошла ошибка при загрузке треков'
		})
	})
})
