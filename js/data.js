const TransformerData = {
    
    text: {
        source: ["I", "study", "in", "GBU"], 
        
        target: ["我", "在", "湾大", "学习"], 
        
        fullSource: "I study in GBU",
        fullTarget: "我在湾大学习"
    },


    colors: {

        q: {
            bg: "#7f1d1d",       
            border: "#ef4444",   
            text: "#fecaca"      
        },

        k: {
            bg: "#1e3a8a",       
            border: "#3b82f6",   
            text: "#bfdbfe"     
        },

        v: {
            bg: "#064e3b",       
            border: "#10b981",   
            text: "#a7f3d0"      
        },

        attention: {
            bg: "#fbbf24",       
            border: "#f59e0b",   
            text: "#78350f",     
            glow: "rgba(251, 190, 36, 0.74)" 
        },
      
        input: {
            bg: "#4b5563",
            text: "#e5e7eb"
        }
    },


    logic: {
    wo_probs: [
        0.75,   
        0.14,
        0.06,
        0.05,
    ],

    zai_probs: [
        0.15,
        0.05,
        0.65,   
        0.15,
    ],

    wanda_probs: [
        0.05,
        0.05,
        0.15,
        0.75,   
    ],

    xuexi_probs: [
        0.10,
        0.68,   
        0.12,
        0.10,
    ]
}
};
    