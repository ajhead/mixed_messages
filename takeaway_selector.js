let optionCount = 1;

function add_option() {
    
    let optionDiv = document.createElement("div");
    document.getElementById(optionCount).after(optionDiv);
    optionCount++;
    optionDiv.setAttribute("id", optionCount);

    let optionLabel = document.createElement("label");
    optionLabel.innerText = `Option ${optionCount}`;
    document.getElementById(optionCount).appendChild(optionLabel);


    let optionInput = document.createElement("input");
    optionInput.setAttribute("type", "text");
    optionInput.setAttribute("id", `option-${optionCount}`);
    optionInput.setAttribute("value", "");
    document.getElementById(optionCount).lastChild.appendChild(optionInput);

    let buttonRemove = document.createElement("button");
    buttonRemove.setAttribute("type", "button");
    buttonRemove.setAttribute("value", "remove");
    buttonRemove.innerText = "-";
    document.getElementById(optionCount).appendChild(buttonRemove);

}