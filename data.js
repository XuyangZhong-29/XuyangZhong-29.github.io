/* =====================================================================
 *  Academic homepage data
 *  Edit ONLY this file to update the site content.
 * ===================================================================== */

window.SITE_DATA = {
  /* ---------- Basic info ---------- */
  profile: {
    name: "Xuyang Zhong",
    nameEn: "钟旭炀",
    title: "PhD Candidate in Computer Science",
    affiliation: "City University of Hong Kong",
    avatar: "assets/profile.JPG",
    location: "Hong Kong SAR, China",
    email: "xuyang.zhong@my.cityu.edu.hk",
    bioShort:
      "PhD Candidate @ CityUHK, Research Intern @ Tencent",
    bio: [
      "I’m Xuyang Zhong, a Ph.D. candidate in Computer Science at City University of Hong Kong and a research intern of Tencent Project Up (青云计划) at Tencent.",
      "My academic journey began in January 2023 and is focused on building trustworthy AI from optimization perspective, especially in machine unlearning and adversarial robustness. I conduct my research under the supervision of Chen Liu.",
      "I obtained my Master degree from Technical University of Munich in November 2022 and Bachelor degree from Beijing Institute of Technology in July 2020.",
    ],
    // icon options: scholar / github / email / twitter / linkedin / orcid / website
    links: [
      { icon: "email", label: "Email", url: "mailto:xuyang.zhong@my.cityu.edu.hk" },
      { icon: "scholar", label: "Google Scholar", url: "https://scholar.google.com/citations?user=yeQtUAgAAAAJ&hl=en" },
      { icon: "github", label: "GitHub", url: "https://github.com/XuyangZhong-29" },
    ],
  },

  /* ---------- Research interests ---------- */
  interests: [
    "LLM post-training",
    "machine unlearning",
    "adversarial robustness",
  ],

  /* ---------- News ---------- */
  news: [
    {
      date: "2026-05",
      content:
        "One paper was accepted to <strong>ICML 2026</strong>!",
    },
      {
      date: "2025-11",
      content: "Our paper on sparse adversarial robustness was accepted to <strong>TPAMI</strong>!",
    },
    {
      date: "2025-09",
      content: "Two paper were accepted to <strong>NeurIPS 2025</strong>!",
    },
    {
      date: "2025-06",
      content: "Join Tencent as a research intern",
    },
  ],

  /* ---------- Publications ---------- *
   * type options: Conference / Journal / Preprint (used for filter tabs)
   * highlight: true makes the entry featured
   * links supports PDF / Code / Project / arXiv etc.
   */
  publications: [
    {
      year: 2026,
      type: "Conference",
      title: "DualOptim+: Bridging Shared and Decoupled Optimizer States for Better Machine Unlearning in Large Language Models",
      authors: ["<b>Xuyang Zhong</b>", "Qizhang Li", "Yiwen Guo", "Chen Liu"],
      venue: "International Conference on Machine Learning (ICML) 2026",
      highlight: false,
      links: [
        { label: "PDF", url: "https://arxiv.org/pdf/2605.21539" },
        { label: "Code", url: "https://github.com/CityU-MLO/DualOptimPlus"},
      ],
    },
    {
      year: 2025,
      type: "Journal",
      title: "Sparse-PGD: A Unified Framework for Sparse Adversarial Perturbations Generation",
      authors: ["<b>Xuyang Zhong</b>", "Chen Liu"],
      venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
      highlight: true,
      links: [
        { label: "PDF", url: "https://arxiv.org/pdf/2405.05075" },
        { label: "Code", url: "https://github.com/CityU-MLO/sPGD"}
      ],
    },
    {
      year: 2025,
      type: "Conference",
      title: "DualOptim: Enhancing Efficacy and Stability in Machine Unlearning with Dual Optimizers",
      authors: ["<b>Xuyang Zhong</b>", "Haochen Luo", "Chen Liu"],
      venue: "Neural Information Processing Systems (NeurIPS) 2025",
      highlight: true,
      links: [
        { label: "PDF", url: "https://proceedings.neurips.cc/paper_files/paper/2025/file/7b76eea0c3683e440c3d362620f578cd-Paper-Conference.pdf" },
        { label: "Code", url: "https://github.com/CityU-MLO/DualOptim" },
      ],
    },
    {
      year: 2025,
      type: "Conference",
      title: "Understanding and Improving Fast Adversarial Training against $l_0$ Bounded Perturbations",
      authors: ["<b>Xuyang Zhong</b>", "Yixiao Huang", "Chen Liu"],
      venue: "Neural Information Processing Systems (NeurIPS) 2025",
      highlight: false,
      links: [
        { label: "PDF", url: "https://proceedings.neurips.cc/paper_files/paper/2025/file/36f4029ba56eb40ec5dc786060e899eb-Paper-Conference.pdf" },
        { label: "Code", url: "https://github.com/CityU-MLO/sPGD" },
      ],
    },
    {
      year: 2025,
      type: "Journal",
      title: "Towards Mitigating Architecture Overfitting on Distilled Datasets",
      authors: ["<b>Xuyang Zhong</b>", "Chen Liu"],
      venue: "IEEE Transactions on Neural Networks and Learning Systems (TNNLS)",
      highlight: false,
      links: [
        { label: "PDF", url: "https://arxiv.org/pdf/2309.04195" },
        { label: "Code", url: "https://github.com/CityU-MLO/mitigate_architecture_overfitting" },
      ],
    },
    {
      year: 2024,
      type: "Conference",
      title: "TTT-MIM: Test-Time Training with Masked Image Modeling for Denoising Distribution Shifts",
      authors: ["Youssef Mansour*", "<b>Xuyang Zhong*</b>", "Serdar Caglar", "Reinhard Heckel"],
      venue: "European Conference on Computer Vision (ECCV) 2024",
      highlight: false,
      links: [
        { label: "PDF", url: "https://www.ecva.net/papers/eccv_2024/papers_ECCV/papers/01921.pdf" },
        { label: "Code", url: "https://github.com/MLI-lab/TTT_Denoising" },
      ],
    },
    {
      year: 2024,
      type: "Conference",
      title: "Towards Efficient Training and Evaluation of Robust Models against Bounded Adversarial Perturbations",
      authors: ["<b>Xuyang Zhong</b>", "Yixiao Huang", "Chen Liu"],
      venue: "International Conference on Machine Learning (ICML) 2024",
      highlight: false,
      links: [
        { label: "PDF", url: "https://openreview.net/pdf?id=2bUFIsg2f5" },
        { label: "Code", url: "https://github.com/CityU-MLO/sPGD" },
      ],
    },
    {
      year: 2022,
      type: "Journal",
      title: "Automatic sleep stage classification: A light and efficient deep neural network model based on time, frequency and fractional Fourier transform domain features",
      authors: ["Yuyang You*", "<b>Xuyang Zhong*</b>", "Guozheng Liu", "Zhihong Yang"],
      venue: "Artificial Intelligence in Medicine",
      highlight: false,
      links: [
      ],
    },
  ],

  /* ---------- Footer ---------- */
  footer: {
    copyright: "© 2026 Xuyang Zhong. All rights reserved.",
    note: "Built as a static site, hosted on GitHub Pages.",
  },
};
