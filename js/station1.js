function initStation1() {

    const cnWords = TransformerData.text.target; 
    const enWords = TransformerData.text.source;


    renderBoxes("s1-in-q", cnWords, "input"); 
    renderBoxes("s1-out-q", cnWords, "q");    


    renderBoxes("s1-in-k", enWords, "input");
    renderBoxes("s1-out-k", enWords, "k");

    renderBoxes("s1-in-v", enWords, "input");
    renderBoxes("s1-out-v", enWords, "v");
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
        x: 330, 
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
        x: 200, 
        duration: 1, 
        ease: "back.out(1.5)" 
    });
}