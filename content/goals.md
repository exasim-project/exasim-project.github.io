---
layout: layouts/page.njk
eleventyNavigation:
  parent: main-menu
  key: The Project
  order: 1
---

# Motivation

High fidelity (scale-resolving) flow simulations have become not only an important part of academic research, but also of the development processes in the wind energy industry, the
automotive sector, and aerospace engineering, as well as a vital tool for
political decision-makers in the context of environmental and disaster
protection. These flow simulations replace the costly and
resource-intensive experimental evaluation of design decisions that are intended
to improve product efficiency and performance, but increasingly also target the reduction of negative environmental impact. 
High quality, scale-resolving flow simulations require enormous computational resources to represent the turbulent nature of flows in detail. 
However, many of the state of the art software libraries used for flow simulation are insufficiently or not at all prepared for modern,
more energy-efficient high-performance computers employing general purpose GPU accelerators. In the EXASIM project, we will
close this technical gap and develop an interface between
the popular simulation software OpenFOAM and the GPU optimized linear algebra library Ginkgo developed at KIT.

## Goals

- Reduce computational costs for scale-resolved "high-fidelity" simulations by reducing costs of linear solver and required domain sizes.

- Implement optimized turbulent in- and out-flow conditions.

- Implement an interface between OpenFOAM and the sparse linear algebra framework Ginkgo.

- Provide access to state of the art linear algebra and significantly improve
  the performance and resource efficiency on GPUs and current computer hardware.

- In order to maximize the user base for this technique, the methods developed
are intended to be platform and manufacturer-independent. This means they are
optimized and tested for the three major manufacturers of graphics cards: AMD, Intel and Nvidia, as well as for various high-performance computers and cloud computing platforms.

- The development of a representative, research- and industry-relevant test case
portfolio as a basis for further method development and evaluation.
This ensures a high quality of the code and makes it easy for
users to test their own developments and contribute to the project.

- Feasibility study for the application of the developed methods for two complex cases in the field of wind energy.

## Consortium

For the EXASIM project a consortium of three partners 
1. Steinbuch Centre for Computing - SCC (Karlsruhe Institute of Technology - KIT)
2. Institute of fluid mechanics - ISTM (Karlsruhe Institute of Technology - KIT)
3. Upstream CFD GmbH - UCFD 

as well as two associated partners 
- ENERCON
- Amazon Web Services - AWS 

was formed. The three main partners contribute within dedicated [work packages](https://exasim-project.com/workpackages) to the fulfillment of the project. The project coordination responsibility is assumed by the SCC. The associated partner ENERCON contributes by providing expertise and defining
industrially relevant test cases. The associated partner AWS provides access to their cloud platform for testing the developed code on multiple hardware configurations and conduct scaling tests.


