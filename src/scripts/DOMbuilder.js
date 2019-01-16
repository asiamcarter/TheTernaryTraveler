import data from "./data"
import eventListeners from "./eventListeners"
import DOMappend from "./DOMappend"

const DOMbuilder = {
    onPageLoad() {
        let outputContainer = document.querySelector(".output");
        outputContainer.innerHTML= "";
        let interestFormContainer = document.createElement("container")
        interestFormContainer.classList.add("interestFormContainer");
        interestFormContainer.innerHTML= "<h2 class='interestFormHeader'>Add An Interest</h2>"
        outputContainer.appendChild(interestFormContainer);

        let placesContainer = document.createElement("container");
        placesContainer.classList.add("placesContainer");
        outputContainer.appendChild(placesContainer);


        // let athensDiv = document.createElement("div");
        // athensDiv.classList.add("athensDiv");
        // athensDiv.innerHTML= "<h2 class='placesHeader'>Athens</h2>"
        // placesContainer.appendChild(athensDiv);

        // let florenceDiv = document.createElement("div");
        // florenceDiv.classList.add("florenceDiv");
        // florenceDiv.innerHTML= "<h2 class='placesHeader'>Florence</h2>"
        // placesContainer.appendChild(florenceDiv);

        // let madridDiv = document.createElement("div");
        // madridDiv.classList.add("madridDiv");
        // madridDiv.innerHTML= "<h2 class='placesHeader'>Madrid</h2>"
        // placesContainer.appendChild(madridDiv);

        DOMappend.appendToDOM();
    },

    interestFormCreator() {
        data.getPlaces()
        .then(places => {

            console.log(places);
            let interestForm = document.createElement("form");
            interestForm.classList.add("interestForm");
            let interestFormContainer = document.querySelector(".interestFormContainer");
            interestFormContainer.appendChild(interestForm);

            let interestNameInput = document.createElement("input");
            let interestNameLabel = document.createElement("label");
            interestNameLabel.textContent = "Interest Name:"
            interestNameInput.setAttribute("type", "text");
            interestNameInput.classList.add("interestName");
            interestForm.appendChild(interestNameLabel);
            interestForm.appendChild(interestNameInput);

            let interestDescriptionInput = document.createElement("input");
            let interestDescriptionLabel = document.createElement("label");
            interestDescriptionLabel.textContent = "Description:";
            interestDescriptionInput.setAttribute("type", "text");
            interestNameInput.classList.add("interestDescription");
            interestForm.appendChild(interestDescriptionLabel);
            interestForm.appendChild(interestDescriptionInput);

            let costInput = document.createElement("input");
            let costLabel = document.createElement("label");
            costLabel.textContent = "Cost:";
            costInput.setAttribute("type", "text");
            costInput.classList.add("interestCost");
            interestForm.appendChild(costLabel);
            interestForm.appendChild(costInput);

            let placesDropdown = document.createElement("select");
            placesDropdown.setAttribute("id", "mySelect");
            let athensOption = document.createElement("option");
            athensOption.setAttribute("value", `${places[0].id}`)
            athensOption.textContent = `${places[0].name}`

            let florenceOption = document.createElement("option");
            athensOption.setAttribute("value", `${places[1].id}`)
            florenceOption.textContent = `${places[1].name}`


            let madridOption = document.createElement("option");
            madridOption.setAttribute("value", `${places[2].id}`)
            madridOption.textContent = `${places[2].name}`

            placesDropdown.appendChild(madridOption)
            placesDropdown.appendChild(florenceOption)
            placesDropdown.appendChild(athensOption)
            interestForm.appendChild(placesDropdown)

            let interestSaveButton = document.createElement("button");
            interestSaveButton.setAttribute("class", "interestSaveButton");
            interestSaveButton.textContent = "Save";
            interestForm.appendChild(interestSaveButton);

            interestSaveButton.addEventListener("click", eventListeners.interestSave)
        })
    },

    interestHTML(value, id) {
        let interestContainer = document.createElement("container");
        interestContainer.setAttribute("id", `interest--${id}`)


        let name = document.createElement("H2");
        name.innerHTML = `Name: <p>${value.name}</p>`
        interestContainer.appendChild(name);

        let description = document.createElement("H2");
        description.innerHTML = `Description: <p>${value.description}</p>`
        interestContainer.appendChild(description);

        let cost = document.createElement("H2");
        cost.innerHTML = `Cost: <p>${value.cost}</p>`
        cost.setAttribute("id", `cost--${id}`)

        interestContainer.appendChild(cost);

        let review = document.createElement("H2")
        review.innerHTML = `Review: <p>${value.review}</p>`
        review.setAttribute("id", `review--${id}`)
        interestContainer.appendChild(review);

        let interestEditButton = document.createElement("button");
        interestEditButton.textContent = "Edit"
        interestEditButton.setAttribute("id", `interestedit--${value.id}`)
        let interestDeleteButton = document.createElement("button");
        interestDeleteButton.textContent = "Delete"
        interestDeleteButton.setAttribute("id", `interest--${value.id}`)
        interestContainer.classList.add("interestsContainer");
        // interestEditButton.addEventListener("click", eventListeners.interestEdit)
        interestDeleteButton.addEventListener("click", eventListeners.deletePrompt)
        interestContainer.appendChild(interestDeleteButton);
        interestContainer.appendChild(interestEditButton);

        data.getInterest()
            .then(() => {
                interestEditButton.addEventListener("click", () => {
                    DOMbuilder.interestEditForm(IDBCursorWithValue)
                })
            })

        return interestContainer;

    },

    interestEditForm (interest) {
        console.log("EVENT TARGET", event.target.id)
        // let editField = document.querySelector(``)
        let interestEditId = event.target.id;
        let interestId = interestEditId.split("--")[1]


        let editInterestCostField = document.createElement("input");
        editInterestCostField.setAttribute("type", "text");
        editInterestCostField.classList.add("interestCostEditInput");
        editInterestCostField.value = interest.cost;

        let editInterestReviewField = document.createElement("input");
        editInterestReviewField.setAttribute("type", "text");
        editInterestReviewField.classList.add("interestReviewEditInput");
        editInterestReviewField.value = interest.review;

        let saveButton = document.createElement("button");
        saveButton.textContent = "Save";

        data.getInterest2(interestId)
            .then (interest => {
                saveButton.addEventListener("click", () => {
                    let placeId = interest.placeId
                    let name = interest.name
                    let description = interest.description
                    let cost= interest.cost
                    let review = interest.review

                    let editedInterest = {
                        placeId : placeId,
                        name: name,
                        description: description,
                        cost: editInterestCostField.value,
                        review: editInterestReviewField.value
                    }

                        data.editInterest(interest.id, editedInterest)
                            .then(() => {
                                DOMappend.appendToDOM();
                            })
                })
        })

        let interestContainer = document.querySelector(`#interest--${interestId}`);

            // while (interestContainer.firstChild) {
            //     interestContainer.removeChild(interestContainer.firstChild);
            // }
            interestContainer.appendChild(editInterestCostField);
            interestContainer.appendChild(editInterestReviewField);
            interestContainer.appendChild(saveButton);
            }
}

export default DOMbuilder;