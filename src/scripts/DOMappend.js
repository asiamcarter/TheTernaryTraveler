import DOMbuilder from "./DOMbuilder"
import data from "./data";
const DOMappend = {
    appendToDOM() {
        data.getInterest()
        .then (interests => {

            let placesContainer = document.querySelector(".placesContainer");
            let interestFrag = document.createDocumentFragment()
            interests.forEach(interest => {
                console.log(interest.place)
                let interestHTML = DOMbuilder.interestHTML(interest, interest.id);
                interestFrag.appendChild(interestHTML);
            })
            while (placesContainer.firstChild) {
                placesContainer.removeChild(placesContainer.firstChild)
            }
            placesContainer.appendChild(interestFrag);
        })
    }


}

export default DOMappend;