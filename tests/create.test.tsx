//import React from 'react'
import {render} from '@testing-library/react'
import Create from '../pages/tracks/create'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import '@testing-library/jest-dom'

const rootReducer = (state = {}, action) => state
const store = createStore(rootReducer)

jest.mock('next/router', () => ({
	useRouter: () => ({
		push: jest.fn()
	})
}))

jest.mock('../components/Player', () => {
	return {
		__esModule: true,
		default: ({children}) => <div>{children}</div>,
	}
})



test('Ensure that create.tsx has 3 <TextField> components and that they have correct labels', () => {
	const MockProvider = Provider as any

	const create = render(
		<MockProvider store={store}>
			<Create/>
		</MockProvider>
	)

	expect(create.container).toHaveTextContent("Название трека")
	expect(create.container).toHaveTextContent("Имя исполнителя")
	expect(create.container).toHaveTextContent("Слова к треку")
})
