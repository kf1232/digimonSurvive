import axios from 'axios'
import {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

import Digimon from './chat/Digimon'

function App() {
	var path = 'http://localhost:3004/Digimon'

	const [loading, setLoading] = useState(true)
	const [query, setQuery] = useState([])
	const [selected, setSelected] = useState('')

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const queryResponse = await axios.get(path)
				setQuery(queryResponse.data)
			} catch (error) {
				console.log(error)
			}
			setLoading(false)
		}
		fetchData()
	}, [])

	return (
		<div>
			<input type='text' onChange={(e) => console.log(setSelected(e.target.value))}/>
			{selected}
			{Object.values(query).map(part => {
				return (
					<>
						{
							part.NAME.includes(selected) ? <Digimon data={part} key={part.ID}/> 
						                            	 : null 
						}
					</>	
				)
			})} 
		</div>
	);
}

export default App;
