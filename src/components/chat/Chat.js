import PropTypes from 'prop-types'
import styles from './Chat.module.css'

function Chat(prop) {
    return (
        prop.data.map((part) => {
            return (
                <div key={part.ID} className={styles.chat}>
                    <div className={styles.chatPrompt}>
                        {part.PROMPT}
                    </div>
                    {part.RESPONSE.map((res) => {
                        return (
                            <>
                                {res.RESPONSE >= -1 ? `(${res.RESPONSE}) ${res.MESSAGE}` : null}<br/>
                            </>
                        )
                    })}
                </div>
            )
        })
    )
}

export default Chat