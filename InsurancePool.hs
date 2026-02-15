
-- Decentralized Insurance Pool Validator
-- Logic: Handles Pool contributions, claim voting, and fund release.
module InsurancePool where
import Plutus.V2.Ledger.Api
import PlutusTx.Prelude

data ClaimProposal = ClaimProposal {
    patientPkh    :: PubKeyHash,
    claimAmount   :: Integer,
    votesReceived :: Integer,
    minVotes      :: Integer
}

{-# INLINABLE validateClaim #-}
validateClaim :: ClaimProposal -> () -> ScriptContext -> Bool
validateClaim prop _ ctx = 
    let info = scriptContextTxInfo ctx
        -- Requirement: Claim release only if votes >= minVotes
        votingPassed = votesReceived prop >= minVotes prop
    in traceIfFalse "Voting quorum not reached" votingPassed
