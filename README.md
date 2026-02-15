# AuraHealth - Decentralized Hospital Insurance (Cardano)

This DApp facilitates community-driven medical insurance.

## 🔑 Core Features
1. **Soulbound Membership**: Patients must mint a non-transferable NFT to join (Access Control).
2. **Shared Insurance Pool**: Users stake ADA to the script and receive 'Share Tokens' representing their ownership level.
3. **Decentralized Claims**:
   - A patient submits a claim with a medical report hash.
   - Hospital Oracle validates the event.
   - Community members vote to release funds from the pool.
4. **Transparent Governance**: Share-weighted voting on claim payouts.

## 📂 File Map
- `contracts/AuraMembershipNFT.hs`: Policy for the non-transferable verification pass.
- `contracts/InsurancePool.hs`: Pool logic for holding ADA and releasing on vote success.
- `src/app/page.js`: Dashboard with verification states, pool stats, and claim management.
