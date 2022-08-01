import PropTypes from 'prop-types'
import Chat from './Chat'

function Digimon(prop) {
    return (
        <div>
            {prop.data.ID} : {prop.data.NAME} : {prop.data.RANK} : {prop.data.TYPE}<br/>
            {prop.data.CHAT ? <Chat data={prop.data.CHAT}/> : null}<br/><br/>
        </div>
    )
}

export default Digimon