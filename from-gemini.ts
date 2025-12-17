import React, { useState } from 'react';
import { 
  ChevronRight, 
  BookOpen, 
  Rocket, 
  Users, 
  Zap, 
  ArrowRight, 
  ExternalLink,
  MessageCircle,
  PlayCircle,
  FileText,
  Sparkles
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('associates');

  const publishedCourses = [
    {
      title: "RHOSP 17.1 to 18 Migration",
      desc: "Learn the core transition steps for OpenStack environments.",
      link: "https://redhatquickcourses.github.io/rhosp17.1-to-18/rhosp17.1-to-18/1/lab_environment/index.html"
    },
    {
      title: "Ansible Automation Platform 2.4",
      desc: "Subject matter expertise on the latest automation controller features.",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-12">
      {/* Red Hat Branded Header */}
      <header className="bg-[#EE0000] text-white py-8 px-6 text-center shadow-lg">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Are you "the person in the red hat?"
          </h1>
          <p className="text-red-100 italic text-lg opacity-90">
            "Marc Ewing shared his knowledge and started a revolution. Today, you can do the same."
          </p>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 -mt-6">
        {/* Rapid Course Builder Intro */}
        <section className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-red-50 p-2 rounded-lg text-[#EE0000]">
              <Zap size={24} fill="currentColor" />
            </div>
            <h2 className="text-xl font-bold">Rapid Course Builder (RCB)</h2>
          </div>
          <p className="text-slate-600 mb-6 leading-relaxed">
            The RCB is your AI drafting assistant. It handles the "heavy lifting"—building structure and drafting content—so you can focus on technical accuracy and real-world insights.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href="https://red.ht/open-training-request" 
              className="flex items-center justify-center gap-2 bg-[#EE0000] hover:bg-[#CC0000] text-white font-bold py-4 px-6 rounded-xl transition-all shadow-md active:scale-95"
            >
              <FileText size={20} />
              Submit Intake Form
            </a>
            <button className="flex items-center justify-center gap-2 bg-slate-900 hover:bg-black text-white font-bold py-4 px-6 rounded-xl transition-all shadow-md active:scale-95">
              <Rocket size={20} />
              Jump into RCB
            </button>
          </div>
        </section>

        {/* Audience Toggle */}
        <div className="flex p-1 bg-slate-200 rounded-xl mb-6">
          <button 
            onClick={() => setActiveTab('associates')}
            className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all ${activeTab === 'associates' ? 'bg-white shadow-sm text-[#EE0000]' : 'text-slate-600'}`}
          >
            For Associates
          </button>
          <button 
            onClick={() => setActiveTab('partners')}
            className={`flex-1 py-3 px-4 rounded-lg font-bold transition-all ${activeTab === 'partners' ? 'bg-white shadow-sm text-[#EE0000]' : 'text-slate-600'}`}
          >
            For Partners
          </button>
        </div>

        {/* Dynamic Content Based on Tab */}
        {activeTab === 'associates' ? (
          <section className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Sparkles size={20} className="text-yellow-500" />
                The 2-Minute "Recipe"
              </h3>
              <div className="space-y-4">
                {[
                  { step: 1, title: "Choose Topic", desc: "Select your training topic and type (blog or lab)." },
                  { step: 2, title: "Login & Paste", desc: "Login to RCB and drop in your core technical topics." },
                  { step: 3, title: "Drafting Magic", desc: "Get a created GitHub repo with initial content in < 2 mins." },
                  { step: 4, title: "Add Spice", desc: "Generate AI audio, videos, and images to polish it up." }
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-sm">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{item.title}</h4>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <section className="bg-slate-900 text-white rounded-2xl p-8 shadow-md relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Partner with a Red Hatter</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Have a vision for a course but need a technical collaborator? Connect with our Product & Technical Learning (PTL) team to co-develop high-impact training.
              </p>
              <button className="w-full bg-[#EE0000] hover:bg-[#CC0000] text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all active:scale-95">
                <MessageCircle size={20} />
                Connect to Collaborate
              </button>
              <p className="text-xs text-slate-400 mt-4 text-center italic">
                Get guidance on content strategy, technical review, and global publishing.
              </p>
            </div>
            {/* Abstract Background Detail */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-red-600/10 rounded-full blur-3xl"></div>
          </section>
        )}

        {/* Published Courses Gallery */}
        <section className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <BookOpen size={22} className="text-[#EE0000]" />
              Published Courses
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {publishedCourses.map((course, idx) => (
              <a 
                key={idx} 
                href={course.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-white p-5 rounded-xl border border-slate-200 hover:border-red-300 hover:shadow-md transition-all block"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-slate-900 group-hover:text-[#EE0000] transition-colors">{course.title}</h4>
                    <p className="text-sm text-slate-500 mt-1">{course.desc}</p>
                  </div>
                  <ExternalLink size={16} className="text-slate-400 group-hover:text-[#EE0000]" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Helpful Resources Footer */}
        <section className="mt-12 pt-8 border-t border-slate-200">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Quick Links</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 transition-colors">
              <PlayCircle size={18} className="text-red-500" />
              <span className="text-sm font-medium">Quick Start Guide</span>
            </a>
            <a 
              href="https://source.redhat.com/departments/products_and_global_engineering/whats_new_from_products_and_portfolio/open_training_program" 
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <Users size={18} className="text-red-500" />
              <span className="text-sm font-medium">Open Training Source Page</span>
            </a>
          </div>
        </section>

        <footer className="mt-16 text-center text-slate-400 text-xs">
          <p>© 2026 Red Hat Open Training Initiative</p>
          <p className="mt-2 font-mono">Build. Share. Revolutionize.</p>
        </footer>
      </main>
    </div>
  );
};

export default App;