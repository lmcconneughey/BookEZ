const TrackOrder = async () => {
    try {
        fetch("http://127.0.0.1:8080/api/home").then(
            response => response.json()
        ).then(
            data => {
                console.log(data)
            }
        )
    } catch (error) {
        console.error(error.message)
    }

    return(
        <div className="text-black">Track Order</div>
    )
}

export default TrackOrder