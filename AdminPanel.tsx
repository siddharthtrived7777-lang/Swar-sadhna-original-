/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Lock, 
  Unlock, 
  Mail, 
  Key, 
  LogOut, 
  Trash2, 
  Clock, 
  Phone, 
  ShieldAlert, 
  Eye, 
  EyeOff, 
  Search, 
  MessageSquare,
  Sparkles,
  RefreshCw,
  X
} from 'lucide-react';
import { Inquiry } from '../types';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminPanel({ isOpen, onClose }: AdminPanelProps) {
  // Authentication states
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Inquiries database state
  const [leads, setLeads] = useState<Inquiry[]>([]);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  
  // Filtering & search states
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [courseFilter, setCourseFilter] = useState<string>('all');
  const [modeFilter, setModeFilter] = useState<string>('all');

  // Check storage on mount & when modal opens
  useEffect(() => {
    if (isOpen) {
      // Check if previously logged in this session
      const sessionAuth = sessionStorage.getItem('swarsadhna_admin_logged');
      if (sessionAuth === 'true') {
        setIsAuthenticated(true);
      }
      loadInquiries();
    }
  }, [isOpen]);

  useEffect(() => {
    // Listen for storage events (e.g., if a new request is submitted of the same window)
    const handleStorageChange = () => {
      loadInquiries();
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const loadInquiries = () => {
    try {
      const saved = localStorage.getItem('swarsadhna_inquiries');
      if (saved) {
        setLeads(JSON.parse(saved));
      } else {
        setLeads([]);
      }
    } catch (e) {
      console.error("Local leads retrieval error", e);
    }
  };

  const saveInquiries = (updatedLeads: Inquiry[]) => {
    setLeads(updatedLeads);
    try {
      localStorage.setItem('swarsadhna_inquiries', JSON.stringify(updatedLeads));
      // Dispatch storage event to keep other contexts updated
      window.dispatchEvent(new Event('storage'));
    } catch (e) {
      console.error("Storage write error", e);
    }
  };

  // Auth Handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);

    const targetEmail = "siddharthtrived7777@gmail.com";
    const targetPassword = "1234";

    if (emailInput.trim() === targetEmail && passwordInput === targetPassword) {
      setIsAuthenticated(true);
      sessionStorage.setItem('swarsadhna_admin_logged', 'true');
      loadInquiries();
      // Clear credentials inputs
      setEmailInput('');
      setPasswordInput('');
    } else {
      setAuthError("Invalid Administrator credentials. Access Denied.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('swarsadhna_admin_logged');
  };

  // Status management
  const toggleLeadStatus = (id: string) => {
    const updated = leads.map(l => {
      if (l.id === id) {
        const nextStatus: Inquiry['status'] = l.status === 'new' 
          ? 'reviewed' 
          : l.status === 'reviewed' 
            ? 'contacted' 
            : 'new';
        return { ...l, status: nextStatus };
      }
      return l;
    });
    saveInquiries(updated);
  };

  // Delete individual lead
  const deleteLead = (id: string) => {
    const updated = leads.filter(l => l.id !== id);
    saveInquiries(updated);
    if (confirmDeleteId === id) {
      setConfirmDeleteId(null);
    }
  };

  // Clear all database inquiries
  const handleClearAll = () => {
    saveInquiries([]);
    setShowClearConfirm(false);
  };

  // Filter & Search computation
  const filteredLeads = leads.filter(lead => {
    const matchesSearch = 
      lead.fullName.toLowerCase().includes(searchTerm.toLowerCase()) || 
      lead.phone.includes(searchTerm) || 
      lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.additionalInfo.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    const matchesCourse = courseFilter === 'all' || lead.course === courseFilter;
    const matchesMode = modeFilter === 'all' || lead.mode === modeFilter;

    return matchesSearch && matchesStatus && matchesCourse && matchesMode;
  });

  // Calculate metrics
  const totalLeads = leads.length;
  const newLeadsCount = leads.filter(l => l.status === 'new').length;
  const reviewedLeadsCount = leads.filter(l => l.status === 'reviewed').length;
  const contactedLeadsCount = leads.filter(l => l.status === 'contacted').length;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#2C1E15]/75 backdrop-blur-xs"
          />

          {/* Modal Card wrapper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
            className={`relative bg-[#FFFDFB] border border-brand-border rounded-3xl shadow-2xl p-6 md:p-8 overflow-hidden flex flex-col z-10 w-full ${
              isAuthenticated ? 'max-w-6xl max-h-[90vh]' : 'max-w-md'
            }`}
          >
            {/* Close Button X */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 p-2 rounded-full hover:bg-brand-accent/40 text-brand-dark/50 hover:text-brand-primary transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left aligned Header Indicator */}
            <div className="mb-6 space-y-1 pr-6">
              <div className="inline-flex items-center gap-1.5 bg-brand-accent/40 border border-brand-border/60 px-3 py-1 rounded-full text-[9px] font-mono tracking-wider text-brand-primary font-bold uppercase">
                <Lock className="w-3 h-3 text-brand-primary" />
                <span>Coordinator Access</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-dark">Coordinator Access Gate</h3>
            </div>

            {/* Auth Gate Screen */}
            {!isAuthenticated ? (
              <div className="space-y-6">
                {authError && (
                  <div className="bg-rose-50 border border-rose-200 rounded-xl p-3 text-xs text-rose-700 flex items-center gap-2 font-semibold">
                    <ShieldAlert className="w-4 h-4 flex-shrink-0" />
                    <span>{authError}</span>
                  </div>
                )}

                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono tracking-wider font-bold text-brand-dark/60 uppercase block">Administrative Email</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark/40" />
                      <input 
                        type="email" 
                        required
                        placeholder="siddharthtrived7777@gmail.com" 
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        className="w-full bg-brand-light hover:bg-[#FAF5EE] border border-brand-border focus:border-brand-primary rounded-xl pl-11 pr-4 py-3 text-xs text-brand-dark outline-none transition-all font-semibold"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-mono tracking-wider font-bold text-brand-dark/60 uppercase block">Security Password</label>
                    <div className="relative">
                      <Key className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark/40" />
                      <input 
                        type={showPassword ? "text" : "password"} 
                        required
                        placeholder="••••" 
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        className="w-full bg-brand-light hover:bg-[#FAF5EE] border border-brand-border focus:border-brand-primary rounded-xl pl-11 pr-12 py-3 text-xs text-brand-dark outline-none transition-all font-semibold"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-dark/50 hover:text-brand-primary transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full cursor-pointer mt-2 px-5 py-3.5 bg-brand-primary hover:opacity-90 text-white rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-opacity shadow-xs"
                  >
                    <Unlock className="w-3.5 h-3.5" />
                    <span>Sign In</span>
                  </button>
                </form>
              </div>
            ) : (
              // Secure Dashboard View inside the Modal
              <div className="flex-1 overflow-y-auto space-y-6 mt-2 pr-1">
                
                {/* Active Session Strip */}
                <div className="bg-[#FAF5EE] border border-brand-border rounded-xl p-3 flex flex-col sm:flex-row justify-between items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-brand-accent text-brand-primary flex items-center justify-center font-bold text-xs">
                      ST
                    </div>
                    <div className="text-left font-sans">
                      <p className="text-[11px] font-mono text-brand-dark/70 font-semibold">Active Session: siddharthtrived7777@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={loadInquiries}
                      className="px-3 py-1.5 bg-white hover:bg-brand-accent/20 border border-brand-border rounded-full text-[9px] uppercase tracking-wider font-bold text-brand-dark transition-colors inline-flex items-center gap-1"
                    >
                      <RefreshCw className="w-3 h-3" />
                      <span>Sync Logs</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 border border-rose-100 rounded-full text-[9px] uppercase tracking-wider font-bold text-rose-700 transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <LogOut className="w-3 h-3" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>

                {/* Dense Statistics Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-left">
                  {[
                    { label: "Total Received Requests", val: totalLeads, color: "border-brand-border text-brand-dark bg-white" },
                    { label: "Fresh Inquiries", val: newLeadsCount, color: "border-rose-100 text-rose-700 bg-rose-50/10" },
                    { label: "Reviewed & Verified", val: reviewedLeadsCount, color: "border-amber-100 text-amber-700 bg-amber-50/10" },
                    { label: "Contacted & Scheduled", val: contactedLeadsCount, color: "border-emerald-100 text-emerald-700 bg-emerald-50/10" }
                  ].map((stat, i) => (
                    <div key={i} className={`p-4 rounded-xl border ${stat.color} shadow-2xs`}>
                      <p className="text-[8px] uppercase font-mono tracking-wider font-bold opacity-75">{stat.label}</p>
                      <p className="font-serif text-2xl font-bold mt-0.5">{stat.val}</p>
                    </div>
                  ))}
                </div>

                {/* Filters Board */}
                <div className="bg-white border border-brand-border rounded-2xl p-4 shadow-2xs space-y-3">
                  <div className="flex flex-col md:flex-row gap-3">
                    
                    {/* Search query input */}
                    <div className="relative flex-1">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark/40" />
                      <input 
                        type="text"
                        placeholder="Search Name, Phone, Email, notes..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-brand-light border border-brand-border focus:border-brand-primary rounded-xl pl-10 pr-3 py-2 text-xs text-brand-dark outline-none font-semibold"
                      />
                    </div>

                    {/* Selector filters */}
                    <div className="flex flex-wrap items-center gap-2">
                      <select
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="bg-brand-light border border-brand-border text-brand-dark font-mono text-[9px] uppercase tracking-wider font-bold rounded-lg p-2 outline-none focus:border-brand-primary"
                      >
                        <option value="all">STATUS: ALL</option>
                        <option value="new">STATUS: NEW</option>
                        <option value="reviewed">STATUS: REVIEWED</option>
                        <option value="contacted">STATUS: CONTACTED</option>
                      </select>

                      <select
                        value={modeFilter}
                        onChange={(e) => setModeFilter(e.target.value)}
                        className="bg-brand-light border border-brand-border text-brand-dark font-mono text-[9px] uppercase tracking-wider font-bold rounded-lg p-2 outline-none focus:border-brand-primary"
                      >
                        <option value="all">MODE: ALL</option>
                        <option value="online">MODE: ONLINE</option>
                        <option value="offline">MODE: OFFLINE</option>
                        <option value="any">MODE: ANY</option>
                      </select>

                      <select
                        value={courseFilter}
                        onChange={(e) => setCourseFilter(e.target.value)}
                        className="bg-brand-light border border-brand-border text-brand-dark font-mono text-[9px] uppercase tracking-wider font-bold rounded-lg p-2 outline-none focus:border-brand-primary"
                      >
                        <option value="all">COURSE: ALL TYPES</option>
                        <option value="Vocal Music">Vocal Music</option>
                        <option value="Classical Music">Classical Music</option>
                        <option value="Harmonium">Harmonium</option>
                        <option value="Keyboard">Keyboard</option>
                        <option value="Bhajans & Light Music">Bhajans &amp; Light Music</option>
                        <option value="Online Music Classes">Online Music Classes</option>
                        <option value="General Inquiry">General Inquiry</option>
                      </select>

                      {leads.length > 0 && (
                        showClearConfirm ? (
                          <div className="flex items-center gap-1.5 bg-rose-50 border border-rose-200 rounded-lg p-1">
                            <span className="text-[9px] font-mono text-rose-700 font-bold uppercase px-1">Wipe All?</span>
                            <button
                              type="button"
                              onClick={handleClearAll}
                              className="px-2 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded text-[8px] uppercase tracking-wider font-bold cursor-pointer transition-colors"
                            >
                              Yes, Clear
                            </button>
                            <button
                              type="button"
                              onClick={() => setShowClearConfirm(false)}
                              className="px-2 py-1 bg-zinc-200 hover:bg-zinc-300 text-zinc-700 rounded text-[8px] uppercase tracking-wider font-bold cursor-pointer transition-colors"
                            >
                              No
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setShowClearConfirm(true)}
                            className="p-2 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 rounded-lg text-[9px] uppercase tracking-wider font-bold font-mono flex items-center gap-1 cursor-pointer transition-colors"
                          >
                            <Trash2 className="w-3 h-3" />
                            <span>Reset DB</span>
                          </button>
                        )
                      )}
                    </div>

                  </div>

                  <div className="flex justify-between items-center text-[9px] font-mono text-brand-dark/50">
                    <span>Displaying {filteredLeads.length} of {leads.length} entries</span>
                    {(searchTerm || statusFilter !== 'all' || courseFilter !== 'all' || modeFilter !== 'all') && (
                      <button
                        type="button"
                        onClick={() => {
                          setSearchTerm('');
                          setStatusFilter('all');
                          setCourseFilter('all');
                          setModeFilter('all');
                        }}
                        className="text-brand-primary hover:underline font-bold"
                      >
                        Reset filters ×
                      </button>
                    )}
                  </div>
                </div>

                {/* Inquiries List layout */}
                <div className="bg-white border border-brand-border rounded-2xl overflow-hidden shadow-2xs">
                  {filteredLeads.length === 0 ? (
                    <div className="text-center py-12 space-y-2">
                      <div className="w-9 h-9 rounded-full bg-brand-accent/20 text-brand-dark/40 flex items-center justify-center mx-auto">
                        <Sparkles className="w-4.5 h-4.5" />
                      </div>
                      <p className="text-xs font-bold text-brand-dark">No inquiries found matching criteria</p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs text-brand-dark font-sans whitespace-nowrap">
                        <thead className="bg-[#FAF5EE] text-brand-primary uppercase font-mono text-[9px] border-b border-brand-border">
                          <tr>
                            <th className="p-4">Candidate Identification &amp; Contact</th>
                            <th className="p-4">Applied Syllabus Route</th>
                            <th className="p-4">Delivery Mode</th>
                            <th className="p-4">Chronology At</th>
                            <th className="p-4">Coordinator Status</th>
                            <th className="p-4 text-right">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-brand-border">
                          {filteredLeads.map((lead) => {
                            const whatsappSupportMsg = `Hi ${lead.fullName}, this is Swar Sadhna Music Board. We received your enrollment request regarding the ${lead.course} class in ${lead.mode} mode. When are you available to join an introductory session?`;
                            const emailSubject = `Swar Sadhna Music Classes Admissions Intake - ${lead.fullName}`;
                            const emailBody = `Respected ${lead.fullName},\n\nThank you for choosing Swar Sadhna. We have reviewed your query.\n\nSyllabus Interest: ${lead.course}\nPreferred Learning Mode: ${lead.mode}\nCandidate Info: ${lead.additionalInfo}\n\nOur administrator will give you a phone review shortly. Feel free to reply directly here.\n\nWarm Regards,\nSwar Sadhna Musical Team, Surendranagar`;

                            return (
                              <tr key={lead.id} className="hover:bg-brand-accent/15 transition-colors">
                                
                                <td className="p-4 max-w-xs space-y-1">
                                  <p className="font-bold text-sm text-brand-dark tracking-tight">{lead.fullName}</p>
                                  <div className="space-y-0.5 font-mono text-[9px] text-brand-dark/70 font-semibold">
                                    <p className="flex items-center gap-1">
                                      <Phone className="w-3 h-3 text-brand-primary" />
                                      <span>+91 {lead.phone}</span>
                                    </p>
                                    <p className="flex items-center gap-1">
                                      <Mail className="w-3 h-3 text-brand-primary" />
                                      <span className="truncate">{lead.email}</span>
                                    </p>
                                  </div>
                                  {lead.additionalInfo && lead.additionalInfo !== 'None' && (
                                    <p className="mt-1.5 text-[9px] text-zinc-600 bg-brand-accent/30 border border-brand-border/40 p-1.5 rounded-lg whitespace-normal leading-relaxed italic max-w-[200px] font-semibold">
                                      " {lead.additionalInfo} "
                                    </p>
                                  )}
                                </td>

                                <td className="p-4">
                                  <span className="font-serif font-bold text-xs text-brand-primary bg-brand-accent/40 border border-brand-border/70 px-2 rounded-full">
                                    {lead.course}
                                  </span>
                                </td>

                                <td className="p-4">
                                  <span className={`px-2 py-0.5 text-[8px] uppercase font-mono font-bold rounded-full border ${
                                    lead.mode === 'online' 
                                      ? 'bg-sky-50 text-sky-800 border-sky-200' 
                                      : lead.mode === 'offline' 
                                        ? 'bg-amber-50 text-amber-800 border-amber-200' 
                                        : 'bg-stone-50 text-stone-700 border-stone-200'
                                  }`}>
                                    {lead.mode}
                                  </span>
                                </td>

                                <td className="p-4">
                                  <div className="flex items-center gap-1 font-mono text-[9px] text-brand-dark/50">
                                    <Clock className="w-3 h-3 text-brand-primary" />
                                    <span>{lead.timestamp}</span>
                                  </div>
                                </td>

                                <td className="p-4">
                                  <button
                                    type="button"
                                    onClick={() => toggleLeadStatus(lead.id)}
                                    className={`px-2 py-1 text-[8px] font-bold tracking-wider font-mono uppercase rounded-full transition-all select-none hover:opacity-85 border cursor-pointer ${
                                      lead.status === 'new'
                                        ? 'bg-rose-50 text-rose-700 border-rose-200'
                                        : lead.status === 'reviewed'
                                          ? 'bg-amber-50 text-amber-800 border-amber-200'
                                          : 'bg-emerald-50 text-emerald-800 border-emerald-200'
                                    }`}
                                  >
                                    {lead.status} ↺
                                  </button>
                                </td>

                                <td className="p-4 text-right space-x-1">
                                  <a
                                    href={`tel:${lead.phone}`}
                                    className="inline-flex items-center justify-center p-1.5 bg-brand-light hover:bg-[#FAF5EE] border border-brand-border rounded-full text-brand-primary transition-colors"
                                    title="Call candidate"
                                  >
                                    <Phone className="w-3 h-3" />
                                  </a>

                                  <a
                                    href={`https://wa.me/91${lead.phone}?text=${encodeURIComponent(whatsappSupportMsg)}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center justify-center p-1.5 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-full text-emerald-700 transition-colors"
                                    title="WhatsApp prefill"
                                  >
                                    <MessageSquare className="w-3.5 h-3.5" />
                                  </a>

                                  {lead.email && lead.email !== 'No Email Added' && (
                                    <a
                                      href={`mailto:${lead.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
                                      className="inline-flex items-center justify-center p-1.5 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-full text-sky-700 transition-colors"
                                      title="Draft email proposal"
                                    >
                                      <Mail className="w-3 h-3" />
                                    </a>
                                  )}

                                  {confirmDeleteId === lead.id ? (
                                    <div className="inline-flex items-center gap-1 bg-rose-50 border border-rose-100 rounded-lg p-0.5">
                                      <button
                                        type="button"
                                        onClick={() => deleteLead(lead.id)}
                                        className="px-1.5 py-1 bg-rose-600 text-white text-[8px] uppercase tracking-wider font-bold rounded-md cursor-pointer hover:bg-rose-700 transition-colors"
                                      >
                                        Delete
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() => setConfirmDeleteId(null)}
                                        className="px-1.5 py-1 bg-zinc-200 hover:bg-zinc-300 text-zinc-700 text-[8px] uppercase tracking-wider font-bold rounded-md cursor-pointer transition-colors"
                                      >
                                        No
                                      </button>
                                    </div>
                                  ) : (
                                    <button
                                      type="button"
                                      onClick={() => setConfirmDeleteId(lead.id)}
                                      className="p-1.5 text-rose-700 hover:bg-rose-50 rounded-full transition-colors inline-flex items-center justify-center cursor-pointer"
                                      title="Erase log"
                                    >
                                      <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                  )}
                                </td>

                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
