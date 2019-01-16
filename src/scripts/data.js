const data = {

    getPlaces() {
        return fetch("http://localhost:8088/places")
        .then(response=>response.json())
    },

    postInterest(object) {
        return fetch("http://localhost:8088/interests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(object)
        })
    }

}

export default data;