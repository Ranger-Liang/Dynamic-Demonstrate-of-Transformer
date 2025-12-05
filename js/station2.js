function initStation2() {
    const container = document.getElementById("container-2");

    const targets = TransformerData.text.target; 
    const sources = TransformerData.text.source; 


    container.style.gridTemplateColumns = `200px repeat(${sources.length}, 200px)`;
    container.className = "matrix";

    const corner = document.createElement("div");
    corner.className = "cell corner-header"; 
    corner.innerHTML = '<span class="corner-txt c-key">Key</span><span class="corner-txt c-query">Query</span>';
    container.appendChild(corner);

    sources.forEach(word => {
        const div = document.createElement("div");
        div.innerText = word;
        div.className = "cell header-col"; 
        div.style.backgroundColor = TransformerData.colors.k.bg;
        div.style.color = TransformerData.colors.k.text;
        div.style.border = `1px solid ${TransformerData.colors.k.border}`;
        container.appendChild(div);
    });


    targets.forEach((tWord, rowIdx) => {

        const rowHeader = document.createElement("div");
        rowHeader.innerText = tWord;
        rowHeader.className = "cell header-row";

        rowHeader.style.backgroundColor = TransformerData.colors.q.bg;
        rowHeader.style.color = TransformerData.colors.q.text;
        rowHeader.style.border = `1px solid ${TransformerData.colors.q.border}`;
        container.appendChild(rowHeader);


        sources.forEach((sWord, colIdx) => {
            const cell = document.createElement("div");
            cell.innerText = "0.00"; 

            cell.id = `c-${rowIdx}-${colIdx}`;
            
            cell.className = "cell grid-cell";
            container.appendChild(cell);
        });
    });
}


function playStation2() {
    const tl = gsap.timeline();
    const status = document.getElementById("s2-status");
    

    const dataKeys = [
        "wo_probs", "zai_probs", "wanda_probs", "xuexi_probs"
    ];


    tl.to(".grid-cell", { scale: 0.8, backgroundColor: "#374151", color: "#9ca3af", duration: 0.8 });


    dataKeys.forEach((key, rowIdx) => {

        const probArray = TransformerData.logic[key];

        if (probArray) {
            probArray.forEach((val, colIdx) => {

                const cellId = `#c-${rowIdx}-${colIdx}`;        

                const targetBg = val > 0.2 ? "rgba(251, 191, 36, 0.6)" : "#23262cff";
                const targetScale = 2.7**val * 0.5 ;

                tl.to(cellId, {
                    innerText: val.toFixed(2), 
                    backgroundColor: targetBg,
                    scale: targetScale,
                    duration: 1
                }, "<0.1"); 
            });
        }
    });


    const lastRowIdx = dataKeys.length - 1;
    
    
    tl.to(targetCellId, {
        backgroundColor: TransformerData.colors.highlight.bg,
        color: TransformerData.colors.highlight.text,
        borderColor: TransformerData.colors.highlight.border,
        boxShadow: `0 0 20px ${TransformerData.colors.highlight.glow}`,
        scale: 1.3,
        fontWeight: "bold",
        duration: 1
    }, "focus+=0.5");

}