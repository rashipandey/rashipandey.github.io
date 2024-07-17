---
date: '2022-06-12'
title: 'Chord Protocol'
github: 'https://github.com/rashipandey/Distributed-Operating-Systems/tree/main/Chord%20Protocol'
# external: 'https://drive.google.com/file/d/16brJRCuvKbyYp7MZgq7TMlWWO5X5BTQ9/view?usp=sharing'
tech:
  - Erlang
  - Functional Programming
company: 'Certification'
showInProjects: true
---

The Chord P2P System and Simulation project implements the Chord protocol using Erlang and the actor model to manage distributed hash tables. Each node in the system holds key/value pairs and routing information via a finger table, enabling efficient key lookups and node communication. The simulation generates random keys for each node and forwards lookup requests to the nearest node using the finger table, measuring the average number of hops required. Observations revealed that the number of hops is directly proportional to the number of nodes, with the largest network tested comprising 60,000 nodes and achieving an average hop time of 7.46. The project highlights the scalability and efficiency of the Chord protocol in distributed systems.