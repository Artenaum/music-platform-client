import {render, screen} from '@testing-library/react'
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

jest.mock('../components/Player', () => ({children}) => <div>{children}</div>)

window.HTMLMediaElement.prototype.load = () => { /* do nothing */ };
window.HTMLMediaElement.prototype.play = () => { return Promise.resolve(); };
window.HTMLMediaElement.prototype.pause = () => { /* do nothing */ };


test('Ensure that create.tsx has 3 <TextField> components and that they have correct labels', () => {
	const MockProvider = Provider as any


	render(
		<MockProvider store={store}>
			<Create/>
		</MockProvider>
	)

	const textFields = screen.getAllByTestId('create-track-form-field')
	expect(textFields).toHaveLength(3)

	expect(textFields[0]).toHaveTextContent("Название трека")
	expect(textFields[1]).toHaveTextContent("Имя исполнителя")
	expect(textFields[2]).toHaveTextContent("Слова к треку")
})