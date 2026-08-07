const Notification = ({ message }) => {
    if (message === null) {
        return null
    }

    const style = {
        color: 'green',
        fontSize: 20,
        background: 'lightgrey',
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }

    return (
        <div style={style}>{message}</div>
    )
}

export default Notification