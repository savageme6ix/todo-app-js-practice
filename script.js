// const btn = document.createElement("button");
document.querySelector(".btn").addEventListener("click", () => {
    let text = document.querySelector(".txt");
    let txt = text.value
    // Create wrapper
    const wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.alignItems = "center";
    wrapper.style.gap = "10px";
    wrapper.style.marginTop = "10px";
    wrapper.style.marginLeft = "82px"

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
    text.value = ''
    

    // Add wrapper to page
    document.body.appendChild(wrapper);

    // Done button functionality
    tick.addEventListener("click", () => {
        newDiv.style.border = "5px solid green";
        newDiv.style.color = "black";
        notification("done");
        slideNfade(wrapper)
        collect(tick,ex)
    });

    // Delete functionality
    ex.addEventListener("click", () => {
        newDiv.style.border = "5px solid red";
        notification("deleted");
        slideNfade(wrapper)
        collect(tick,ex);
        
    });
});

function notification(text){
    const bar = document.createElement("div");
    const bar2 = document.createElement("div");
    bar.textContent = "Task " + text + "!";
    bar.style.position = "fixed";
    bar.style.bottom = "20px";
    bar.style.right = "20px";
    document.body.appendChild(bar);
    bar.style.transition = "transform 0.4s ease"
    bar.style.transform = "translateX(150px)"
    setTimeout(()=>{
      bar.style.transform = "translateX(0px)"
    },100)
    bar.style.backgroundColor = "black";
    bar.style.color = "white";
    bar.style.padding = "10px";
    bar.style.borderRadius = "5px";
    bar2.style.height = "5px";
    bar2.style.width = "100%"
    bar2.style.background = "red";
    bar2.style.position ="absolute";
    bar2.style.bottom = "0px";
    bar2.style.left = "0px";
    bar2.style.transition = "width 3s linear"
     
    bar.appendChild(bar2);
    setTimeout(()=>{
        bar2.style.width = "0%"
    },100)
    setTimeout(() => {
        bar.remove();
    }, 3500);
   
}

function slideNfade(wrapper){
    wrapper.style.transition = "transform 0.2s ease";
    wrapper.style.transform = "scale(1.2)"

    setTimeout(()=>{
    wrapper.style.transition = "transform 0.4s ease, opacity 0.4s ease";
    wrapper.style.transform = "translateX(-585px)"
    wrapper.style.opacity = "0"
    },1000)
    
    setTimeout(()=>{
        wrapper.remove()
    },2500)
    
}

function collect(tick, ex){
   const pos = tick.getBoundingClientRect().top + window.scrollY;;
   const svg = document.querySelector(".trash");
   const svgPos = svg.offsetTop;
   let distanceToMove = pos - svgPos;
   svg.style.transform = `translateY(${distanceToMove -34}px) rotate(90deg)`;
   svg.style.transition = "transform 1s ease"
   setTimeout(()=>{
    svg.style.transform = "translateY(0px) rotate(0deg)";
   },2000)
}