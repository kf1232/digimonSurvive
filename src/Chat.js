import PropTypes from 'prop-types'

function Chat(prop) {
    return (
        prop.data.map((part) => {
            return (
                <div key={part.ID}>
                    ++++<br/>
                    {part.PROMPT}
                    <br/>
                    {part.RESPONSE.map((res) => {
                        return (
                            <div>
                                {res.MESSAGE} :::: {res.RESPONSE}
                            </div>
                        )
                    })}
                </div>
            )
        })
    )
}

export default Chat