---
layout: layouts/page.njk
title: The Project
eleventyNavigation:
  parent: main-menu
  key: The Project
  order: 1
---

High fidelity (scale-resolving) flow simulations have become not only an important part of academic research, but also an indispensable tool for development processes in the wind energy industry, the automotive sector, aerospace engineering, as well as for political decision-makers in the context of environmental and disaster protection. Such flow simulations are an alternative to costly and resource-intensive physical testing to evaluate product performance and to reduce negative environmental impact. High quality, scale-resolving flow simulations require enormous computational resources to reliably represent turbulent flows. However, many of the state of the art software libraries used are insufficiently prepared for modern, more energy-efficient high-performance computers employing general purpose GPU accelerators. In the EXASIM project, we will close this technical gap by developing an interface between the popular simulation software OpenFOAM and the GPU optimized linear algebra library Ginkgo developed at KIT.

## Goals

- Reduce computational costs for scale-resolved "high-fidelity" simulations by reducing costs of linear solver and required domain sizes.

- Implement optimized turbulent inflow and outflow conditions.

- Implement an interface between OpenFOAM and the sparse linear algebra framework Ginkgo.

- Provide access to state of the art linear algebra and significantly improve
  the performance and resource efficiency on GPUs and current computer hardware.

- In order to maximize the user base for this technique, the methods developed will be platform and manufacturer-independent. This means they will be
  optimized and tested for the three major manufacturers of graphics cards: AMD, Intel and Nvidia, as well as for various high-performance computers and cloud computing platforms.

- The development of a representative, research- and industry-relevant test case
  portfolio as a basis for further method development and evaluation.
  This ensures a high quality of the code and makes it easy for
  users to test their own developments and contribute to the project.

- Feasibility study for the application of the developed methods for two complex cases in the field of wind energy.

## Consortium

The EXASIM projec consortium consists of three partners:

1. Steinbuch Centre for Computing - SCC (Karlsruhe Institute of Technology - KIT)
2. Institute of fluid mechanics - ISTM (Karlsruhe Institute of Technology - KIT)
3. Upstream CFD GmbH - UCFD

As well as two associated partners:

- ENERCON
- Amazon Web Services - AWS

The three main partners contribute within dedicated [work packages](https://exasim-project.com/workpackages) to the objectives of the project and the project is coordinated by SCC. The associated partner ENERCON contributes by providing expertise and defining
industrially relevant test cases as well as performance metrics. The associated partner AWS provides access to their cloud platform for testing the developed code on multiple hardware configurations and conduct scaling tests.
