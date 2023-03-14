---
layout: layouts/page.njk
title: The Project
eleventyNavigation:
  parent: main-menu
  key: The Project
  order: 1
---

# Motivation

High-resolution flow simulations are not only an academic field of research, but
also an important part of the development processes in the wind industry, the
automotive sector, and aerospace engineering, as well as an important tool for
political decision-makers in the context of environmental and disaster
protection. In this context, flow simulation replaces the costly and
resource-intensive experimental evaluation of design decisions that are intended
to improve product efficiency and performance, but also to reduce environmental
impact. These flow simulations require enormous computational resources to
represent turbulent flows in detail. However, many of the software libraries
used for flow simulation are insufficiently or not at all prepared for modern,
more energy-efficient high-performance computers. In the EXASIM project, we will
close this technical gap and develop high resolution power simulations on modern
high-performance computers. For this purpose, we develop an interface between
the popular simulation software OpenFOAM and the software library Ginkgo for
linear algebra developed at KIT.

# Goals

- Reduce computational costs for scale-resolved "high-fidelity" simulations by reducing costs of linear solver and required domain sizes.

- Implement optimized turbulent in- and out-flow conditions.

- Implement an interface between OpenFOAM and the sparse linear algebra framework Ginkgo.

- Provide access to state of the art linear algebra and  
significantly improve the performance and resource efficiency on GPUs and
current computer hardware.

- In order to maximize the user base for this technique, the methods developed
are intended to be platform and manufacturer-independent. This means their
optimization for the three major manufacturers of graphics cards: AMD, Intel and
Nvidia, as well as for various high-performance computers and cloud computing
platforms.

- The development of a representative, research- and industry-relevant test case
portfolio as a basis for the for  further method development and its evaluation.
This ensures a high quality of the code and makes it code and makes it easy for
users to test their own developments and contribute to the project.  contribute
to the project.

- Feasibility study for the application of the developed methods for two complex cases in the field of wind energy.

# Consortium

For the EXASIM project a consortium of the three partners SCC, ISTM and UCFD as
well as two associated partners was chosen. The three partners contribute within
their work packages (WP 2 to 5) to the fulfillment of the project.  of the
project. In addition, two work packages for the organization (WP1, from own
funds of the project partners) and the dissemination and exploitation of the
results (WP 6). The responsibility for these work packages lies with the SCC.
The associated partner ENERCON contributes by providing expertise and defining
industrially relevant test cases and the associated partner Amazon Web Services
(AWS) by providing access to the AWS cloud platform for extensive scaling tests.


