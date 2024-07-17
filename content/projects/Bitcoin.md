---
date: '2023-08-01'
title: 'Bitcoin Simulator'
github: 'https://github.com/rashipandey/Distributed-Operating-Systems/tree/main/Bitcoin%20Simulator'
# external: 'https://docs.google.com/presentation/d/1gpdKIeqhw4rpUXoTCgbmC8WMSSU-B2uOYhLG_6__wOs/edit?usp=sharing'
tech:
  - Erlang
  - SHA 256
  - Actor Model
  - Distributed Systems
company: 'Case Competition'
showInProjects: true
---
The Bitcoin Generator project utilizes the Actor Model in Erlang to mine bitcoins using the SHA-256 hashing algorithm. The project features a master-worker architecture enabling remote configuration with client and server machines. The master node coordinates the mining process by spawning actors to generate and hash strings, aiming to find hashes with a specified number of leading zeros. The system is designed to scale across multiple nodes, with each actor operating independently to enhance efficiency and reduce idle times. The implementation successfully demonstrated mining on four different systems concurrently, with the largest coin found having seven leading zeros.
