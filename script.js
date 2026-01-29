let display = document.querySelector("#display-text");
let buttons = document.querySelectorAll(".cal");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.textContent;
        if (value === "C") {
            display.textContent = "";
        } 
        
        else if(value ==="()")
        {
            let text=display.textContent;
            let index=text.length-1;
            if(display.textContent === "" || text[index]==="+" || text[index]==="-" || text[index]==="/" || text[index]==="*" || text[index]==="%" || text[index]==="(")
            {
                display.textContent+="(";
            }
            else
            {
                display.textContent+=")";
            }
        }
        else if(value ==="+/-")
        {
            let currentValue = display.textContent;
            if (currentValue === "" || currentValue === "Error") return;
            let num = parseFloat(currentValue);
            if (!isNaN(num)) {
                display.textContent = (num * -1).toString();
            }
        }
        else if (value === "=") {
            try {
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = "Error";
            }
            if (display.textContent === "Error") 
            {
                document.querySelector(".cursor").style.display = "none";
            } 
            else 
            {
                document.querySelector(".cursor").style.display = "inline";
            }
        } 
        else {
            display.textContent += value;
        }
    });
});

document.addEventListener("keydown", (event) => {
    let key = event.key;
    if (key >= "0" && key <= "9") {
        display.textContent += key;
    }
    else if (key === "+" || key === "-" || key === "*" || key === "/") {
        display.textContent += key;
    }
    else if (key === ".") {
        display.textContent += key;
    }
    else if (key === "Enter" || key === "=") {
        event.preventDefault();
        try {
            display.textContent = eval(display.textContent);
        } catch {
            display.textContent = "Error";
        }
        if (display.textContent === "Error") 
            {
                document.querySelector(".cursor").style.display = "none";
            } 
            else 
            {
                document.querySelector(".cursor").style.display = "inline";
            }
    }
    else if (key === "Escape" || key === "c" || key === "C") {
        display.textContent = "";
    }
    else if (key === "Backspace") {
        event.preventDefault(); // Prevent browser back navigation
        display.textContent = display.textContent.slice(0, -1);
    }
    else if (key === "%") {
        display.textContent += "%";
    }
});