---
layout: layouts/page.njk
title: Execution
eleventyNavigation:
  parent: main-menu
  key: Execution
  order: 2
---

<section class="section">
  <h1 class="section-header">Definition and creation of test cases</h1>
  <div class="section-content">
      <p>The success of the developed methods for GPU acceleration of OpenFOAM is highly reliant on the relevance and usability of the simulation process for industrial applications. Consequently, the first step is to define a set of benchmark cases with representative numerical settings and properties, which are used to identify bottlenecks and optimization potential. This includes scalability tests and code profiling. Additionally, the test cases will be used to validate developments in the scope of the OpenFOAM-Ginko-Layer (OGL).</p>
  </div>
</section>

<section class="section">
  <h1 class="section-header">Development of the OpenFOAM-Ginkgo-Layer (OGL)</h1>
  <div class="section-content">
      <p>
        The goal of this work package is the implementation of an interface between OpenFOAM and the
        sparse linear algebra framework Ginkgo, to provide access to state of the art
        linear algebra methods and to significantly improve the performance and resource
        efficiency on GPUs and current computer hardware. In order to maximize the user
        base for this technique, the methods developed are intended to be platform and
        manufacturer-independent. This means they are optimized for the three major
        manufacturers of graphics cards: AMD, Intel and Nvidia, as well as for various
        high-performance computers and cloud computing platforms.
      </p>
  </div>
</section>

<section class="section">
  <h1 class="section-header">HPC capable inflow and outflow conditions</h1>
  <div class="section-content">
      <p>High-fidelity, scale-resolving numerical simulations of turbulent flows often require appropriate inflow and outflow conditions at the boundaries of the simulated domain. These boundary conditions are typically unknown a priori, are costly to retrieve and require an unnecessary extension of the computational domain far beyond the region of interest. To further reduce the computational costs and increase the accuracy of scale-resolving simulations we are implementing state of the art methods for generating physically-valid, synthetic turbulence at the inflow boundary and unconditionally-stable, non-reflecting outflow boundary conditions in a computationally-efficient manner, compatible with the Ginko framework.</p>
  </div>
</section>

<section class="section">
  <h1 class="section-header">Complex wind energy application cases</h1>
  <div class="section-content">
      <p>Finally, we will put the developed simulation process to the test by executing two large scale application cases from the wind energy sector. Each of these cases would be unfeasible without the performance boost of OpenFOAM on GPUs enabled by the EXASIM project. In detail, it is planned to simulate an entire windpark in complex terrain employing surrogate models for the rotors (actuator disk or line) and a single wind turbine in atmospheric conditions with mesh-resolved, rotating blades.</p>
  </div>
</section>
