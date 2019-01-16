import data from "./data"

const DOMbuilder = {
    onPageLoad() {
        let interestFormContainer = document.createElement("container")
        interestFormContainer.classList.add("interestFormContainer");
        interestFormContainer.innerHTML= "<h2 class='interestFormHeader'>Add An Interest</h2>"
        let outputContainer = document.querySelector(".output");
        outputContainer.appendChild(interestFormContainer);

        let placesContainer = document.createElement("container");
        placesContainer.classList.add("placesContainer");
        outputContainer.appendChild(placesContainer);

        let athensDiv = document.createElement("div");
        athensDiv.classList.add("athensDiv");
        athensDiv.innerHTML= "<h2 class='placesHeader'>Athens</h2>"
        placesContainer.appendChild(athensDiv);

        let florenceDiv = document.createElement("div");
        florenceDiv.classList.add("florenceDiv");
        florenceDiv.innerHTML= "<h2 class='placesHeader'>Florence</h2>"
        placesContainer.appendChild(florenceDiv);

        let madridDiv = document.createElement("div");
        madridDiv.classList.add("madridDiv");
        madridDiv.innerHTML= "<h2 class='placesHeader'>Madrid</h2>"
        placesContainer.appendChild(madridDiv);
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
            interestForm.appendChild(interestDescriptionLabel);
            interestForm.appendChild(interestDescriptionInput);

            let costInput = document.createElement("input");
            let costLabel = document.createElement("label");
            costLabel.textContent = "Cost:";
            costInput.setAttribute("type", "text");
            interestForm.appendChild(costLabel);
            interestForm.appendChild(costInput);

            let placesDropdown = document.createElement("select");
            placesDropdown.setAttribute("id", "mySelect");
            let athensOption = document.createElement("option");
            athensOption.setAttribute("value", "athens")
            athensOption.textContent = `${places[0].name}`

            let florenceOption = document.createElement("option");
            athensOption.setAttribute("value", "florence")
            florenceOption.textContent = `${places[1].name}`


            let madridOption = document.createElement("option");
            madridOption.setAttribute("value", "madrid")
            madridOption.textContent = `${places[2].name}`

            placesDropdown.appendChild(madridOption)
            placesDropdown.appendChild(florenceOption)
            placesDropdown.appendChild(athensOption)
            interestForm.appendChild(placesDropdown)

        })


    }


}

export default DOMbuilder;