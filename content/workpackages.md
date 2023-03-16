---
layout: layouts/page.njk
title: Workpackages
eleventyNavigation:
  parent: main-menu
  key: Workpackages
  order: 2
---

# **WP1** - Project management 
# **WP2** - Definition and creation of test cases 

# **WP3** - Development of the OpenFOAM Ginkgo interface (*OGL*) 
Goal of WP3 is the implementation of an interface between OpenFOAM and the
sparse linear algebra framework Ginkgo, to provide access to state of the art
linear algebra methods and to significantly improve the performance and resource
efficiency on GPUs and current computer hardware. In order to maximize the user
base for this technique, the methods developed are intended to be platform and
manufacturer-independent. This means they are optimized for the three major
manufacturers of graphics cards: AMD, Intel and Nvidia, as well as for various
high-performance computers and cloud computing platforms.

# **WP4** - HPC capable inflow and outflow conditions 
High-fidelity, scale-resolving numerical simulations of turbulent flows often require appropriate inflow- and outflow boundary conditions at the boundaries of the simulated domain. These boundary conditions are typically unknown a priori, are costly to retrieve and require an unnecessary extension of the computational domain (and thus cost) far beyond the region of interest. WP4 aims at reducing the computational cost and increase the accuracy of scale-resolving simulations by implementing in OpenFOAM state of the art methods for generating physically-sound synthetic turbulence at the inflow boundary and unconditionally-stable, non-reflecting outflow boundary conditions in a computationally-efficient manner compatible with the Ginko framework.

# **WP5** - Complex application cases wind energy 
# **WP6** - Dissemination 
