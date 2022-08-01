import PropTypes from 'prop-types'
import Chat from './Chat'

function Digimon(prop) {
    return (
        <div>
            {"----------"+prop.data.ID}<br/>
            {"----"+ prop.data.NAME}<br/>
            {"----"+ prop.data.RANK}<br/>
            {"----"+ prop.data.TYPE}<br/>
            {prop.data.CHAT ? <Chat data={prop.data.CHAT}/> : null}<br/><br/>
        </div>
    )
}

export default Digimon