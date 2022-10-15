let optionCount = 1;

function add_option() {
    
    let optionDiv = document.createElement("div");
    document.getElementById(optionCount).insertAfter(optionDiv);
    optionCount++;
    optionDiv = optionDiv.getAttribute("id", optionCount);

    let optionLabel = document.createElement("label");
    optionLabel = optionLabel.innerText(`Option ${optionCount}`);
    document.getElementById(optionDiv).appendChild(optionLabel);


    let optionInput = document.createElement("input");
    optionInput = optionInput.setAttribute("type", "text");
    optionInput = optionInput.setAttribute("id", `option-${optionCount}`);
    optionInput = optionInput.setAttribute("value", "");
    document.getElementById(optionDiv).lastChild.appendChild(optionInput);

    let buttonRemove = document.createElement("button");
    buttonRemove = buttonAdd.setAttribute("type", "button");
    buttonRemove = buttonAdd.setAttribute("value", "remove");
    buttonRemove = buttonRemove.innerText("-");
    document.getElementById(optionDiv).appendChild(buttonRemove);

}