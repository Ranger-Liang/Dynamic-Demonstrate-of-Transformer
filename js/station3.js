function initStation3() {

    const cn = TransformerData.text.target; 
    const en = TransformerData.text.source;
    
    const wo_probs = TransformerData.logic.wo_probs;
    const zai_probs = TransformerData.logic.zai_probs;
    const wanda_probs = TransformerData.logic.wanda_probs;
    const xuexi_probs = TransformerData.logic.xuexi_probs;

    renderBoxesWithProbs("v-wo", en, wo_probs, "v");
    renderBoxesWithProbs("v-zai", en, zai_probs, "v");
    renderBoxesWithProbs("v-wanda", en, wanda_probs, "v");
    renderBoxesWithProbs("v-xuexi", en, xuexi_probs, "v");
}


function renderBoxesWithProbs(containerId, words, probs, type) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = ""; 


    words.forEach((word, index) => {
        const prob = probs[index] !== undefined ? probs[index] : 0;

        const div = document.createElement("div");

        div.className = `box v-${word}`;

        const styleConfig = TransformerData.colors[type]; 
        
    
        div.style.backgroundColor = styleConfig.bg;
        div.style.borderColor = styleConfig.border || "transparent";
        div.style.color = styleConfig.text;
        div.style.borderStyle = "solid";
        div.style.borderWidth = "2px";


        const textNode = document.createTextNode(word);
        div.appendChild(textNode);

   
        const probDiv = document.createElement("div");
        probDiv.className = "prob-tag";
        probDiv.innerText = prob; 
        
        div.appendChild(probDiv);

        container.appendChild(div);
    });
}

function playStation3(){
    const tl = gsap.timeline();
    const status = document.getElementById('status-text');
    tl.to("#v-wo .v-I", { scale: 1.2, backgroundColor: "#065f46", borderColor: "#34d399", duration: 0.5 });
    tl.to("#v-wo .v-study, #v-wo .v-in, #v-wo .v-GBU", { scale: 0.5, opacity: 0.3,  duration: 0.5 }, "<");
    tl.to("#v-wo .prob-tag", { opacity: 1, y: 5, duration: 0.5 }, "<");
    tl.to("#v-wo .prob-tag", { opacity: 0, duration: 0.2 });
    tl.to("#v-wo .box", { x: 450, opacity: 0, scale: 0.2, duration: 1, ease: "power2.in",stagger: 0.05 });
    tl.to("#r1.result-box", {opacity: 1, scale: 1, rotationY: 360, duration: 0.5, ease: "back.out(1.7)"});

    tl.to("#v-zai .v-in", { scale: 1.2, backgroundColor: "#065f46", borderColor: "#34d399", duration: 0.5 });
    tl.to("#v-zai .v-study, #v-zai .v-I, #v-zai .v-GBU", { scale: 0.5, opacity: 0.3,  duration: 0.5 }, "<");
    tl.to("#v-zai .prob-tag", { opacity: 1, y: 5, duration: 0.5 }, "<");
    tl.to("#v-zai .prob-tag", { opacity: 0, duration: 0.2 });
    tl.to("#v-zai .box", { x: 450, opacity: 0, scale: 0.2, duration: 1, ease: "power2.in",stagger: 0.05 });
    tl.to("#r2.result-box", {opacity: 1, scale: 1, rotationY: 360, duration: 0.5, ease: "back.out(1.7)"});

    tl.to("#v-wanda .v-GBU", { scale: 1.2, backgroundColor: "#065f46", borderColor: "#34d399", duration: 0.5 });
    tl.to("#v-wanda .v-I, #v-wanda .v-in, #v-wanda .v-study", { scale: 0.5, opacity: 0.3,  duration: 0.5 }, "<");
    tl.to("#v-wanda .prob-tag", { opacity: 1, y: 5, duration: 0.5 }, "<");
    tl.to("#v-wanda .prob-tag", { opacity: 0, duration: 0.2 });
    tl.to("#v-wanda .box", { x: 450, opacity: 0, scale: 0.2, duration: 1, ease: "power2.in",stagger: 0.05 });
    tl.to("#r3.result-box", {opacity: 1, scale: 1, rotationY: 360, duration: 0.5, ease: "back.out(1.7)"});

    tl.to("#v-xuexi .v-study", { scale: 1.2, backgroundColor: "#065f46", borderColor: "#34d399", duration: 0.5 });
    tl.to("#v-xuexi .v-I, #v-xuexi .v-in, #v-xuexi .v-GBU", { scale: 0.5, opacity: 0.3,  duration: 0.5 }, "<");
    tl.to("#v-xuexi .prob-tag", { opacity: 1, y: 5, duration: 0.5 }, "<");
    tl.to("#v-xuexi .prob-tag", { opacity: 0, duration: 0.2 });
    tl.to("#v-xuexi .box", { x: 450, opacity: 0, scale: 0.2, duration: 1, ease: "power2.in",stagger: 0.05 });
    tl.to("#r4.result-box", {opacity: 1, scale: 1, rotationY: 360, duration: 0.5, ease: "back.out(1.7)"});


    tl.to(".result-box", {boxShadow: "0 0 40px rgba(251, 191, 36, 0.6)", duration: 0.5, yoyo: true, });
    }

