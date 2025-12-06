# 🧠 Dynamic Transformer Demonstration
> **Visually demystifying the core engine of Modern AI.**  
> 一个基于 Web 的交互式 Transformer 机器翻译原理动态演示。

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Tech](https://img.shields.io/badge/Tech-HTML%20%2F%20CSS%20%2F%20JS-yellow)
![Animation](https://img.shields.io/badge/Animation-GSAP-green)


---

## 📖 Introduction (项目简介)

**Dynamic Transformer Demonstration** 是一个致力于打破算法“黑盒”的教育类开源项目。

Transformer 是 ChatGPT 等大语言模型（LLM）的基石，但其数学原理（矩阵乘法、Softmax、Attention）往往晦涩难懂。本项目摒弃了枯燥的公式推导，采用 **"流水线工厂"** 的视觉隐喻，将抽象的计算过程拆解为直观的 2D 动态演示。

通过本项目，你可以直观地看到：
*   Query、Key、Value 是如何生成的。
*   注意力机制 (Attention) 是如何计算单词间关联的。
*   模型是如何并行生成最终翻译结果的。

点击[链接](https://ranger-liang.github.io/Dynamic-Demonstrate-of-Transformer/)可直接访问网页

---

## ✨ Key Features (核心特性)

*   **⚡️ 零依赖 & 轻量级**: 纯原生 HTML/CSS/JS 构建，无需 Python 后端或重型前端框架。
*   **🧩 模块化设计 (Modularity)**: 系统被拆解为三个独立的计算站点（Station），代码结构清晰，易于扩展。
*   **🎨 沉浸式动画**: 使用 **GSAP** 引擎制作流畅的 SVG/DOM 动画，完美复现数据流转过程。
*   **📊 矩阵可视化**: 将抽象的数学点积运算转化为直观的二维图。
*   **⚙️ 数据驱动**: 通过 `data.js` 统一配置，轻松修改演示的句子、概率权重和颜色主题。

---

## 🚀 Demo (演示流程)

本项目将 Transformer 的推理过程拆解为三个核心步骤（Station）：

### 1. Station 1:Linear Projections（线性投影）
> **"Turning words into vectors."**
*   展示 Input Token 如何通过 $W_Q, W_K, W_V$ 权重矩阵。
*   动态生成 **Query (红)**, **Key (蓝)**, **Value (绿)** 向量。

### 2. Station 2: Cross Attention（交叉注意力）
> **"Calculating the Attention Score."**
*   展示 Query 与 Key 的点积运算。
*   生成 $N \times M$ 的**概率矩阵**，高亮显示单词间的语义关联（如 "在" 与 "in"）。

### 3. Station 3: Multiply with Value & Output（加权与输出）
> **"Weighted Sum and Output."**
*   根据概率对 Value 向量进行加权求和，最终生成翻译结果。

---

## 🛠️ Tech Stack (技术栈)

*   **Core**: HTML5, CSS3 (Flexbox/Grid), JavaScript (ES6+)
*   **Animation**: [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/) - 用于处理复杂的时间轴动画。
*   **Design Paradigm**: 面向对象的模块化设计，数据与视图分离。

---

## 📂 Project Structure (目录结构)

```text
transformer-demo/
│
├── index.html          # 主入口 (包含 DOM 骨架)
├── style.css           # 全局样式与各 Station 专用样式
│
└── js/
    ├── data.js         # 【核心】全局配置中心 (句子、颜色、概率数据)
    ├── main.js         # 全局控制器 (初始化)
    ├── station1.js     # 模块1：线性投影逻辑
    ├── station2.js     # 模块2：注意力矩阵逻辑
    └── station3.js     # 模块3：加权求和逻辑
```

---

## 🏃 Getting Started (快速开始)

由于本项目是纯静态网页，无需复杂的安装过程。

1.  **Clone the repo**
    ```bash
    git clone https://github.com/your-username/dynamic-transformer-demo.git
    ```

2.  **Run it**
    *   直接双击打开 `index.html`。
    *   或者使用 VS Code 的 "Live Server" 插件运行（推荐）。

3.  **Customize (自定义)**
    *   打开 `js/data.js`。
    *   修改 `text` 对象中的句子。
    *   修改 `logic` 对象中的概率数值，动画会自动适配新的数据。

---

## 🧠 Educational Value (知识点涵盖)

本项目不仅是代码实现，更是计算机科学思维的体现（基于cs101, GBU）：

*   **抽象化 (Abstraction)**: 将高维向量抽象为色块，将矩阵运算抽象为光束扫描。
*   **模块化 (Modularity)**: 类似于冯·诺依曼架构，将计算单元独立封装。
*   **分治范式 (Divide and Conquer)**: 将复杂的“机器翻译”宏大任务，分解为“线性投影”、“注意力计算”、“加权求和”三个可独立处理的子问题，逐个击破。

---

## 🤝 Contributing (贡献)

欢迎提交 Issue 或 Pull Request！如果你有更好的可视化想法，比如加入 Multi-Head Attention（多头注意力）的演示，请随时贡献。

---

## 📄 License

This project is open source and available.

---

### Author

这是我进入 GBU 后完成的首个项目（cs101课程的期末作业）。虽然看起来十分基础，但它标志着一个起点，仅作纪念。🌸
