
'use client';
import { useState } from 'react';
import { CardanoWallet, useWallet } from '@meshsdk/react';
import { 
  ShieldPlus, 
  Users, 
  FileText, 
  CheckCircle2, 
  Activity, 
  HeartPulse, 
  Lock,
  ArrowRight
} from 'lucide-react';

export default function Home() {
  const { connected } = useWallet();
  const [activeTab, setActiveTab] = useState('pool');
  const [isVerified, setIsVerified] = useState(false);
  const [userPoolShares, setUserPoolShares] = useState(0);

  // Mock Data
  const poolStats = { totalADA: 154200, members: 842, activeClaims: 3 };

  return (
    <div className="min-h-screen bg-[#f1f5f9]">
      {/* Top Navigation */}
      <nav className="bg-white border-b px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-aura rounded-xl p-2 text-white shadow-lg shadow-aura/20">
            <ShieldPlus size={28} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800 tracking-tight leading-none">AuraHealth</h1>
            <span className="text-[10px] font-bold text-aura uppercase tracking-widest">Decentralized Insurance</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-sm font-bold text-slate-500">
            <button onClick={() => setActiveTab('pool')} className={activeTab === 'pool' ? 'text-aura border-b-2 border-aura' : ''}>Pool</button>
            <button onClick={() => setActiveTab('claims')} className={activeTab === 'claims' ? 'text-aura border-b-2 border-aura' : ''}>Claims</button>
            <button onClick={() => setActiveTab('governance')} className={activeTab === 'governance' ? 'text-aura border-b-2 border-aura' : ''}>Governance</button>
          </div>
          <CardanoWallet />
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 lg:p-12">
        {/* Verification Banner */}
        {!isVerified && connected && (
          <div className="mb-8 bg-blue-50 border border-blue-100 p-6 rounded-[24px] flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-500 shadow-sm">
                <Lock size={20} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800">Verification Required</h3>
                <p className="text-sm text-slate-500">Mint your Soulbound Membership NFT to access the insurance pool.</p>
              </div>
            </div>
            <button 
              onClick={() => setIsVerified(true)}
              className="px-6 py-3 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              Verify Identity & Mint Pass <ArrowRight size={16} />
            </button>
          </div>
        )}

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column: Pool Stats */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-200/60 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <HeartPulse size={120} />
              </div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Community Capital Pool</p>
              <h2 className="text-5xl font-black text-slate-800">{poolStats.totalADA.toLocaleString()} <span className="text-xl text-slate-400">ADA</span></h2>
              
              <div className="flex gap-8 mt-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600"><Users size={20} /></div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Members</p>
                    <p className="font-bold text-slate-700">{poolStats.members}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-aura/10 rounded-lg flex items-center justify-center text-aura"><FileText size={20} /></div>
                  <div>
                    <p className="text-[10px] uppercase font-bold text-slate-400">Open Claims</p>
                    <p className="font-bold text-slate-700">{poolStats.activeClaims}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[32px] border border-slate-200/60 group hover:border-aura/30 transition-all">
                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><CheckCircle2 className="text-emerald-500" size={18} /> Stake & Protect</h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">Contribute to the pool to receive $AURA Share Tokens. Your ownership determines your coverage limit.</p>
                <button className="w-full py-3 bg-aura text-white font-bold rounded-xl shadow-lg shadow-aura/20">Provide Liquidity</button>
              </div>
              <div className="bg-white p-8 rounded-[32px] border border-slate-200/60 group hover:border-blue-300 transition-all">
                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2"><Activity className="text-blue-500" size={18} /> Risk Assessment</h4>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">The hospital oracle verifies medical events on-chain before claims enter the voting phase.</p>
                <div className="h-1 bg-slate-100 rounded-full mt-2"><div className="w-3/4 h-full bg-blue-500 rounded-full"></div></div>
              </div>
            </div>
          </div>

          {/* Right Column: User Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-slate-900 text-white rounded-[32px] p-8 shadow-xl">
              <div className="flex justify-between items-start mb-8">
                <div>
                    <h3 className="font-bold text-blue-400 text-xs uppercase tracking-widest">My Coverage</h3>
                    <p className="text-3xl font-black mt-1">{userPoolShares} <span className="text-sm border border-blue-400/30 px-2 py-0.5 rounded-full ml-2">SHARES</span></p>
                </div>
                <div className={`p-2 rounded-lg ${isVerified ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/10 text-white/40'}`}>
                  <ShieldPlus size={24} />
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Status</span>
                  <span className={isVerified ? 'text-emerald-400 font-bold' : 'text-amber-400 font-bold'}>{isVerified ? 'Active Member' : 'Unverified'}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/40">Pool Weight</span>
                  <span className="font-mono">0.00%</span>
                </div>
              </div>
              
              <button disabled={!isVerified} className="w-full mt-8 py-4 bg-white text-slate-900 font-black rounded-2xl hover:bg-blue-50 disabled:opacity-20 transition-all">
                Submit Health Claim
              </button>
            </div>

            <div className="bg-white rounded-[32px] p-8 border border-slate-200/60 transition-all">
               <h4 className="font-bold text-slate-800 mb-6 flex items-center gap-2">Recent Settlements</h4>
               <div className="space-y-6">
                 {[1,2].map(i => (
                   <div key={i} className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 font-bold text-xs">{i}</div>
                     <div className="flex-1">
                       <p className="text-xs font-bold text-slate-800 tracking-tight">Claim #40{i}8 - Hospitalized</p>
                       <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-wider">Executed Successfully</p>
                     </div>
                     <p className="text-xs font-black text-slate-400">2.4k AD</p>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto p-12 text-center">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.4em]">Decentralized Autonmous Insurance Logic • © 2024</p>
      </footer>
    </div>
  );
}