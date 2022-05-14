
export interface List {
    name: string,
    hint: string,
    videos: { name: string, url: string }[]
}

const lists: List[] = [
    {
        name: "数据结构与算法",
        hint: '参考书：《数据结构与算法分析》或 GeeksforGeeks',
        videos: [
            { name: '数据结构中的栈有什么用？', url: 'https://youtu.be/r90BJ3G-BgU' },
            { name: 'Huffman编码', url: 'https://youtu.be/d3gHFesPc_E' },
            { name: '二叉树的动画讲解（AVL树）', url: 'https://youtu.be/2j8VlJFkLFg' },
            { name: '最小生成树', url: 'https://youtu.be/drSPZL6A0RI' },
            { name: '最短路径查找—Dijkstra算法', url: 'https://youtu.be/JLARzu7coEs' },
            { name: '散列表（哈希表）', url: 'https://youtu.be/CnRR_UENZ2s' },
            { name: '优先队列—堆', url: 'https://youtu.be/v6vSJMvYdFE' },
            { name: 'kmp字符串匹配', url: 'https://youtu.be/oege7z4cr00' },
            { name: '图的遍历—BFS和DFS', url: 'https://youtu.be/9P01tBgsipw' },
            { name: '在输入框中输入时，自动补全背后的算法 (字典树)', url: 'https://youtu.be/VR9i_SXovTo' },
        ]
    },
    {
        name: "操作系统",
        hint: '参考书：《现代操作系统》 第3版',
        videos: [
            { name: '进程和线程的区别', url: 'https://youtu.be/e3JQOgKw9BA' },
            { name: '进程间通信—互斥', url: 'https://youtu.be/05GSaw_rNPQ' },
            { name: '进程间通信——同步', url: 'https://youtu.be/GxzfeEI1mNs' },
            { name: 'CPU调度算法', url: 'https://youtu.be/9QuIuW1vnv0' },
            { name: '内存管理——地址空间', url: 'https://youtu.be/adHUOoGB67Q' },
            { name: '内存管理——虚拟地址', url: 'https://youtu.be/FtgWoWL5590' },
            { name: '输入输出—硬件I/O', url: 'https://youtu.be/IBblVzPhH5I' },
            { name: '操作系统中的中断', url: 'https://youtu.be/l8d2zWb6nd8' },
        ]
    },
    {
        name: '机器学习（神经网络）',
        hint: '参考书《Deep Learning》',
        videos: [
            { name: '聚类和K-means算法', url: 'https://youtu.be/iEm9DG3i2_o' },
            { name: '深度前馈网络—基本介绍', url: 'https://youtu.be/NMN3BVopXZY' },
            { name: '让机器学习重画图（自动编码器Autoencoder）', url: 'https://youtu.be/8N7GGBPmo7Q' },
            { name: '什么是 representation learning 表征学习 ？', url: 'https://youtu.be/EWL_p7krqh8' },
            { name: 'Distributed representation 分布式表征', url: 'https://youtu.be/7twHB50jeCI' },
        ]
    },
    {
        name: 'Web前端技术',
        hint: '',
        videos: [
            { name: 'JavaScript的另一面：函数式编程', url: 'https://youtu.be/RhPqPLXa3gw' },
            { name: 'JavaScript vs TypeScript', url: 'https://youtu.be/WVdwV9lWFW0' },
            { name: '为什么React.js需要concurrent并发模式？', url: 'https://youtu.be/MBY9yfFOjVU' },
            { name: '如何将After Effects动画转成Web原生动画', url: 'https://youtu.be/NLo8TcYiGes' },
            { name: '如何写出优雅的JavaScript代码？教你九个小技巧', url: 'https://youtu.be/YTztqkuY_3E' },
            { name: '前端和后端的结合? (Electron.js 结构解析)', url: 'https://youtu.be/Fih2W9kl9Ts' },
            { name: 'JS与C语言的信息如何传输？', url: 'https://youtu.be/mLMapWO15fE' },
        ]
    }
]

export default lists