---
title: "TTT-MIM: Test-Time Training with Masked Image Modeling for Denoising Distribution Shifts"
collection: publications
category: conferences
permalink: /publication/ttt-mim
excerpt: 'Youssef Mansour*, **Xuyang Zhong\***, Serdar Caglar, Reinhard Heckel'
date: 2024-08-01
venue: 'European Conference on Computer Vision (ECCV)'
paperurl: 'https://link.springer.com/chapter/10.1007/978-3-031-73254-6_20'
---

Youssef Mansour*, **Xuyang Zhong\***, Serdar Caglar, Reinhard Heckel

Neural networks trained end-to-end give state-of-the-art performance for image denoising. However, when applied to an image outside of the training distribution, the performance often degrades significantly. In this work, we propose a test-time training (TTT) method based on masked image modeling (MIM) to improve denoising performance for out-of-distribution images. The method, termed TTT-MIM, consists of a training stage and a test time adaptation stage. At training, we minimize a standard supervised loss and a self-supervised loss aimed at reconstructing masked image patches. At test-time, we minimize a self-supervised loss to fine-tune the network to adapt to a single noisy image. Experiments show that our method can improve performance under natural distribution shifts, in particular it adapts well to real-world camera and microscope noise. A competitor to our method of training and finetuning is to use a zero-shot denoiser that does not rely on training data. However, compared to state-of-the-art zero-shot denoisers, our method shows superior performance, and is much faster, suggesting that training and finetuning on the test instance is a more efficient approach to image denoising than zero-shot methods in setups where little to no data is available. Our GitHub page is: [https://github.com/MLI-lab/TTT_Denoising](https://github.com/MLI-lab/TTT_Denoising).
