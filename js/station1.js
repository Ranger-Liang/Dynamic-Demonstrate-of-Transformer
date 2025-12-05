function initStation1() {

    const cn = TransformerData.text.target; 
    const en = TransformerData.text.source;


    renderBoxes("s1-in-q", cn, "input"); 
    renderBoxes("s1-out-q", cn, "q");    


    renderBoxes("s1-in-k", en, "input");
    renderBoxes("s1-out-k", en, "k");

    renderBoxes("s1-in-v", en, "input");
    renderBoxes("s1-out-v", en, "v");
}


function renderBoxes(containerId, wordList, type) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = ""; 

    wordList.forEach(word => {
        const div = document.createElement("div");
        div.innerText = word;
        

        div.className = "box"; 

        const styleConfig = TransformerData.colors[type]; 
        
        if (styleConfig) {
            div.style.backgroundColor = styleConfig.bg;
            div.style.borderColor = styleConfig.border || "transparent";
            div.style.color = styleConfig.text;
  
            if (type !== 'input') {
                div.style.borderStyle = "solid";
                div.style.borderWidth = "2px";
            }
        }
        
        container.appendChild(div);
    });
}



function playStation1() {
    const tl = gsap.timeline();


    gsap.set("#s1-in-q, #s1-in-k, #s1-in-v", { x: 0, opacity: 1 });
    gsap.set("#s1-out-q, #s1-out-k, #s1-out-v", { x: 0, opacity: 0 });

    
    tl.to("#s1-in-q, #s1-in-k, #s1-in-v", { 
        xPercent: 100, 
        duration: 1, 
        ease: "power2.inOut" 
    });
    
    tl.to(".gate", { 
        borderColor: "white", 
        scale: 1.1, 
        duration: 0.1, 
        yoyo: true, 
        repeat: 1 
    });

    tl.to("#s1-in-q, #s1-in-k, #s1-in-v", { opacity: 0, duration: 0.1 }, "<");
    tl.to("#s1-out-q, #s1-out-k, #s1-out-v", { opacity: 1, duration: 0.1 }, "<");

    tl.to("#s1-out-q, #s1-out-k, #s1-out-v", { 
        xPercent: 50, 
        duration: 1, 
        ease: "back.out(1.5)" 
    });
}