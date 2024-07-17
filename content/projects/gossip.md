---
date: '2020-05-20'
title: 'Gossip Simulator'
github: 'https://github.com/rashipandey/Distributed-Operating-Systems/tree/main/gossip_protocol'
# external: 'https://link.springer.com/chapter/10.1007/978-981-33-4673-4_49'
tech:
  - Erlang
company: 'Project'
showInProjects: true
---

The Gossip Protocol project for the Distributed Operating System Principles (COP-5615) course used an Erlang-based simulator to evaluate convergence in group communication algorithms. It implemented gossip for information propagation and push-sum for aggregate computation across various topologies: line, full network, 2D grid, and imperfect 3D. The largest tested network had 10,000 nodes. The gossip algorithm converged when nodes heard a rumor ten times, and push-sum when the index-to-weight ratio stabilized. Results showed that the line topology had the fastest convergence, while adding random neighbors in the imperfect 3D topology significantly improved convergence speed.
