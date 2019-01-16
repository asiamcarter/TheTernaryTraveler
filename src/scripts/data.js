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
    },

    getInterest() {
        return fetch("http://localhost:8088/interests/?_expand=place")
        .then(response => response.json())
    },

    deleteInterest(interestId) {
        return fetch(`http://localhost:8088/interests/${interestId}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json"
          }
        })
    },

    getInterest2(id) {
       return fetch (`http://localhost:8088/interests/${id}?_expand=place`)
       .then(response => response.json())
    },

    editInterest (id, description) {
        return fetch(`http://localhost:8088/interests/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(description)
        })

    }


}

export default data;