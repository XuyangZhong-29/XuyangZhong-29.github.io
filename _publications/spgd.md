---
title: "Towards Efficient Training and Evaluation of Robust Models against $l_0$ Bounded Adversarial Perturbations"
collection: publications
category: conferences
permalink: /publication/spgd_icml
excerpt: '**Xuyang Zhong**, Yixiao Huang, Chen Liu'
date: 2024-07-01
venue: 'International Conference on Machine Learning (ICML)'
paperurl: 'https://openreview.net/pdf?id=2bUFIsg2f5'
---

**Xuyang Zhong**, Yixiao Huang, Chen Liu
    
This work studies sparse adversarial perturbations bounded by $l_0$ norm. We propose a white-box PGD-like attack method named sparse-PGD to effectively and efficiently generate such perturbations. Furthermore, we combine sparse-PGD with a black-box attack to comprehensively and more reliably evaluate the models' robustness against $l_0$ bounded adversarial perturbations. Moreover, the efficiency of sparse-PGD enables us to conduct adversarial training to build robust models against sparse perturbations. Extensive experiments demonstrate that our proposed attack algorithm exhibits strong performance in different scenarios. More importantly, compared with other robust models, our adversarially trained model demonstrates state-of-the-art robustness against various sparse attacks. 
Codes are available at [https://github.com/CityU-MLO/sPGD](https://github.com/CityU-MLO/sPGD).
