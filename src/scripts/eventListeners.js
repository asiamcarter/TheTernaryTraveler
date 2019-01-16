import data from "./data"
import DOMappend from "./DOMappend"
import DOMbuilder from "./DOMbuilder";
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

        data.postInterest(interestObject)
        .then (()=> {
        DOMappend.appendToDOM()
        })
    },



    interestDelete() {
        let InterestDeleteId = event.target.id.split("--")[1]
                data.deleteInterest(InterestDeleteId)
                .then(() => {
                    DOMbuilder.onPageLoad();
                    DOMbuilder.interestFormCreator();
                })
    },

    deletePrompt () {
        if (confirm("Are you sure you want to delete?")) {
            eventListeners.interestDelete()
        } else {
        }
    }

}

export default eventListeners;