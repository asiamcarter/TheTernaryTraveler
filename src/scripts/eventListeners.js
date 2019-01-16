import data from "./data"

const eventListeners = {

    interestSave() {
        event.preventDefault()
        let name = document.querySelector(".interestName").value;
        let description = document.querySelector(".interestDescription").value
        let cost = document.querySelector(".interestCost").value
        let place = document.querySelector("#mySelect").value

        let interestObject = {
            placeId: place,
            name: name,
            description: description,
            cost: cost,
            review: ""
        }

        data.postInterest(interestObject);

    }
}

export default eventListeners;