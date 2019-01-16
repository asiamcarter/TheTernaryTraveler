const data = {

    getPlaces() {
        return fetch("http://localhost:8088/places")
        .then(response=>response.json())
    }

}

export default data;