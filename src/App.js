import React from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import './App.scss'

class App extends React.Component {

	state = {
		isLoading: true,
		characters: []
	}


	getCharacters = async () => {
		const { data: {results}} = await axios.get ('https://rickandmortyapi.com/api/character')
		const characters = results
		this.setState({characters, isLoading: false})
	}
	componentDidMount() {
		this.getCharacters()
	}

	render () {
		const {isLoading, characters} = this.state;
		return (
			<section className='container'> 
				{isLoading 
				? <div>
						<span>Loading...</span>
					</div> 
				: characters.map(character => {
				console.log(character);
				return (
					<div className='characters'>
						<CharacterCard key={character.id} character={character} episode={character.episode[0]}/>
					</div>
					
				) 
				})}
			</section>
		)
			
		
	}
}



export default App;