---
title: "Understanding and Improving Fast Adversarial Train-ing against $l_0$ Bounded Perturbations"
collection: publications
category: conferences
permalink: /publication/fast_ls_l0
excerpt: '**Xuyang Zhong**, Yixiao Huang, Chen Liu'
date: 2025-10-29
venue: 'Annual Conference on Neural Information Processing Systems (NeurIPS)'
paperurl: 'https://openreview.net/pdf/f5d70e26aaa3a3c10a18219d1f307a498873014b.pdf'
---

**Xuyang Zhong**, Yixiao Huang, Chen Liu
    
This work studies fast adversarial training against sparse adversarial perturbations bounded by $l_0$ norm.
We first demonstrate the unique challenges of employing $1$-step attacks on $l_0$ bounded perturbations, especially catastrophic overfitting (CO) that cannnot be properly addressed by existing fast adversarial training method for other $l_p$ norms ($p \geq 1$).
We highlight that CO in $l_0$ adversarial training arises from sub-optimal perturbation locations of $1$-step attack.
Some strategies like multi-$\epsilon$ can mitigate this sub-optimality to some extent, they lead to unstable training in turn.
Theoretical and numerical analyses also reveal that the loss landscape of $l_0$ adversarial training is more craggy than its $l_\infty$, $l_2$ and $l_1$ counterparts, which exaggerates CO.
To address this issue, we adopt soft labels and the trade-off loss function to smooth the adversarial loss landscape.
Extensive experiments demonstrate our method can overcome the challenge of CO, achieve state-of-the-art performance, and narrow the performance gap between $1$-step and multi-step adversarial training against sparse attacks. Codes are available at [https://github.com/CityU-MLO/sPGD](https://github.com/CityU-MLO/sPGD).
