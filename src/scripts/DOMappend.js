import DOMbuilder from "./DOMbuilder"
import data from "./data";
const DOMappend = {
    appendToDOM() {
        data.getInterest()
        .then (interests => {
            let placesContainer = document.querySelector(".placesContainer");
            let interestFrag = document.createDocumentFragment()
            placesContainer.appendChild(interestFrag)
            interests.forEach(interest => {
                let interestHTML = DOMbuilder.interestHTML(interest);
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