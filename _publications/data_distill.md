---
title: "Towards Mitigating Architecture Overfitting on Distilled Datasets"
collection: publications
category: manuscripts
permalink: /publication/data_distill
excerpt: '**Xuyang Zhong**, Chen Liu'
date: 2025-01-01
venue: 'IEEE Transactions on Neural Networks and Learning Systems (TNNLS)'
paperurl: 'https://arxiv.org/pdf/2309.04195'
---

**Xuyang Zhong**, Chen Liu
Dataset distillation methods have demonstrated remarkable performance for neural networks trained with very limited training data. However, a significant challenge arises in the form of \textit{architecture overfitting}: the distilled training dataset synthesized by a specific network architecture (i.e., training network) generates poor performance when trained by other network architectures (i.e., test networks), especially when the test networks have a larger capacity than the training network. This paper introduces a series of approaches to mitigate this issue. Among them, DropPath renders the large model to be an implicit ensemble of its sub-networks, and knowledge distillation ensures each sub-network acts similarly to the small but well-performing teacher network. These methods, characterized by their smoothing effects, significantly mitigate architecture overfitting. We conduct extensive experiments to demonstrate the effectiveness and generality of our methods. Particularly, across various scenarios involving different tasks and different sizes of distilled data, our approaches significantly mitigate architecture overfitting. Furthermore, our approaches achieve comparable or even superior performance when the test network is larger than the training network. Codes are available at [CityU-
MLO/mitigate architecture overfitting](https://github.com/CityU-MLO/mitigate_architecture_overfitting).
