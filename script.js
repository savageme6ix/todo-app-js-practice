document.querySelector(".btn").addEventListener("click", () => {
    const txt = document.querySelector(".txt").value;

    // Create wrapper
    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.alignItems = "center";
    wrapper.style.gap = "10px";
    wrapper.style.marginTop = "10px";

    // Create textarea
    const newDiv = document.createElement("textarea");
    newDiv.className = "divv";
    newDiv.textContent = txt;
    

    // Create Done button
    const tick = document.createElement("button");
    tick.textContent = "Done";

    // Create Delete button
    const ex = document.createElement("button");
    ex.textContent = "Delete";

    // Add everything inside wrapper
    wrapper.appendChild(newDiv);
    wrapper.appendChild(tick);
    wrapper.appendChild(ex);

    // Add wrapper to page
    document.body.appendChild(wrapper);

    // Done button functionality
    tick.addEventListener("click", () => {
        newDiv.style.border = "5px solid green";
        newDiv.style.color = "white";
    });

    // Delete functionality
    ex.addEventListener("click", () => {
        wrapper.remove();
    });
});

