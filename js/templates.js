/**
 * Resume Template Rendering Engine
 * Contains HTML structures for all 6 resume templates
 */

const ResumeTemplates = {
    'modern-tech': (data) => {
        const p = data.personalInfo || {};
        return `
            <div class="flex flex-col @lg:grid @lg:grid-cols-12 h-full min-h-[1100px]">
                <!-- Sidebar Column -->
                <div class="@lg:col-span-4 bg-slate-900 text-white p-6 @lg:p-8 flex flex-col gap-6 @lg:gap-8">
                    <div class="flex flex-col items-center text-center gap-4">
                        <div class="w-20 h-20 @lg:w-24 @lg:h-24 rounded-full border-2 border-indigo-500/30 overflow-hidden bg-slate-800 flex items-center justify-center">
                            <span class="material-symbols-outlined text-3xl @lg:text-4xl text-slate-600">person</span>
                        </div>
                        <div class="flex flex-col">
                            <h1 class="text-lg @lg:text-xl font-bold text-white">${p.fullName || 'Your Name'}</h1>
                            <p class="text-[10px] @lg:text-xs text-indigo-400 tracking-wide uppercase mt-1">${data.experience?.[0]?.title || 'Professional Title'}</p>
                        </div>
                    </div>
                    <div class="flex flex-col gap-6">
                        <div class="flex flex-col gap-3">
                            <h3 class="text-[10px] uppercase tracking-widest text-slate-400 border-b border-slate-800 pb-2 font-bold">Contact</h3>
                            <div class="flex flex-col gap-2">
                                <div class="flex items-center gap-3 text-[11px] text-slate-300">
                                    <span class="material-symbols-outlined text-indigo-400 text-sm">mail</span>
                                    <span class="truncate">${p.email || 'email@example.com'}</span>
                                </div>
                                <div class="flex items-center gap-3 text-[11px] text-slate-300">
                                    <span class="material-symbols-outlined text-indigo-400 text-sm">call</span>
                                    <span>${p.phone || 'Phone'}</span>
                                </div>
                                <div class="flex items-center gap-3 text-[11px] text-slate-300">
                                    <span class="material-symbols-outlined text-indigo-400 text-sm">location_on</span>
                                    <span>${p.location || 'Location'}</span>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-3">
                            <h3 class="text-[10px] uppercase tracking-widest text-slate-400 border-b border-slate-800 pb-2 font-bold">Skills</h3>
                            <div class="flex flex-wrap gap-2">
                                ${data.skills?.map(s => `<span class="px-2 py-0.5 bg-slate-800 text-[9px] rounded uppercase tracking-tighter">${s.name}</span>`).join('') || ''}
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Main Content Column -->
                <div class="@lg:col-span-8 p-6 @lg:p-10 bg-white flex flex-col gap-6 @lg:gap-8">
                    <section class="flex flex-col gap-3">
                        <h2 class="text-xs font-black uppercase tracking-[0.2em] text-indigo-600">Professional Summary</h2>
                        <p class="text-sm leading-relaxed text-slate-600">${p.summary || 'Summary goes here...'}</p>
                    </section>
                    <section class="flex flex-col gap-6">
                        <h2 class="text-xs font-black uppercase tracking-[0.2em] text-indigo-600">Experience</h2>
                        <div class="flex flex-col gap-6">
                            ${data.experience?.map(e => `
                                <div class="flex flex-col gap-1 relative pl-6 border-l border-slate-100">
                                    <div class="absolute -left-[5px] top-1 w-2 h-2 rounded-full bg-indigo-600"></div>
                                    <div class="flex flex-col @md:flex-row justify-between items-start">
                                        <h4 class="text-sm font-bold text-slate-900">${e.title || 'Job Title'}</h4>
                                        <span class="text-[10px] font-bold text-slate-400">${e.startDate || ''} – ${e.endDate || 'Present'}</span>
                                    </div>
                                    <p class="text-[11px] font-bold text-indigo-600">${e.company || 'Company'}</p>
                                    <p class="text-xs text-slate-500 mt-1">${e.description || ''}</p>
                                </div>
                            `).join('') || ''}
                        </div>
                    </section>
                    <section class="flex flex-col gap-4">
                        <h2 class="text-xs font-black uppercase tracking-[0.2em] text-indigo-600">Education</h2>
                        <div class="flex flex-col gap-4">
                            ${data.education?.map(e => `
                                <div>
                                    <p class="text-sm font-bold text-slate-900">${e.degree || 'Degree'}</p>
                                    <div class="flex justify-between items-center">
                                        <p class="text-xs text-indigo-600">${e.school || 'School'}</p>
                                        <span class="text-[10px] text-slate-400">${e.startYear || ''} – ${e.endYear || ''}</span>
                                    </div>
                                </div>
                            `).join('') || ''}
                        </div>
                    </section>
                </div>
            </div>
        `;
    },

    'creative-prof': (data) => {
        const p = data.personalInfo || {};
        return `
            <div class="p-6 @md:p-12 bg-white h-full min-h-[1100px] font-serif">
                <header class="border-b-4 border-amber-400 pb-6 @md:pb-8 mb-8 @md:mb-10 flex flex-col @md:flex-row justify-between items-start @md:items-end gap-4">
                    <div>
                        <h1 class="text-2xl @md:text-5xl font-black text-slate-900 mb-2">${p.fullName || 'Your Name'}</h1>
                        <p class="text-md @md:text-xl text-amber-600 font-medium italic">${data.experience?.[0]?.title || 'Professional Title'}</p>
                    </div>
                    <div class="text-left @md:text-right text-xs @md:text-sm text-slate-500">
                        <p>${p.email || ''}</p>
                        <p>${p.phone || ''}</p>
                        <p>${p.location || ''}</p>
                    </div>
                </header>
                <div class="flex flex-col @lg:grid @lg:grid-cols-12 gap-8 @md:gap-12">
                    <div class="@lg:col-span-8 space-y-8 @md:space-y-10">
                        <section>
                            <h2 class="text-md @md:text-lg font-bold uppercase tracking-widest text-slate-900 mb-4 border-l-4 border-amber-400 pl-4">About Me</h2>
                            <p class="text-sm @md:text-md leading-relaxed text-slate-700 font-sans">${p.summary || ''}</p>
                        </section>
                        <section>
                            <h2 class="text-md @md:text-lg font-bold uppercase tracking-widest text-slate-900 mb-6 border-l-4 border-amber-400 pl-4">Work Experience</h2>
                            <div class="space-y-6 @md:space-y-8">
                                ${data.experience?.map(e => `
                                    <div class="font-sans">
                                        <div class="flex flex-col @md:flex-row justify-between mb-1">
                                            <h4 class="text-md @md:text-lg font-bold text-slate-900">${e.title || ''}</h4>
                                            <span class="text-xs @md:text-sm font-medium text-amber-600">${e.startDate || ''} – ${e.endDate || ''}</span>
                                        </div>
                                        <p class="text-sm @md:text-md font-bold text-slate-500 mb-2">${e.company || ''}</p>
                                        <p class="text-xs @md:text-sm text-slate-600">${e.description || ''}</p>
                                    </div>
                                `).join('') || ''}
                            </div>
                        </section>
                    </div>
                    <div class="@lg:col-span-4 space-y-8 @md:space-y-10">
                        <section>
                            <h2 class="text-md @md:text-lg font-bold uppercase tracking-widest text-slate-900 mb-4 border-l-4 border-amber-400 pl-4">Skills</h2>
                            <div class="flex flex-col gap-3 font-sans">
                                ${data.skills?.map(s => `
                                    <div class="flex justify-between items-center">
                                        <span class="text-xs @md:text-sm font-bold text-slate-700">${s.name}</span>
                                        <div class="w-20 @md:w-24 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                                            <div class="h-full bg-amber-400" style="width: ${s.level === 'Expert' ? '100%' : s.level === 'Intermediate' ? '65%' : '35%'}"></div>
                                        </div>
                                    </div>
                                `).join('') || ''}
                            </div>
                        </section>
                        <section>
                            <h2 class="text-md @md:text-lg font-bold uppercase tracking-widest text-slate-900 mb-4 border-l-4 border-amber-400 pl-4">Education</h2>
                            <div class="space-y-4 @md:space-y-6 font-sans">
                                ${data.education?.map(e => `
                                    <div>
                                        <p class="text-xs @md:text-sm font-bold text-slate-900">${e.degree || ''}</p>
                                        <p class="text-[10px] @md:text-xs text-amber-600">${e.school || ''}</p>
                                        <p class="text-[9px] @md:text-[10px] text-slate-400 uppercase mt-1">${e.startYear || ''} - ${e.endYear || ''}</p>
                                    </div>
                                `).join('') || ''}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        `;
    },

    'exec-finance': (data) => {
        const p = data.personalInfo || {};
        return `
            <div class="p-6 @md:p-16 bg-white h-full min-h-[1100px] border-[4px] @md:border-[12px] border-slate-50 text-left">
                <div class="text-center mb-8 @md:mb-12">
                    <h1 class="text-xl @md:text-4xl font-serif font-bold text-slate-900 uppercase tracking-tighter mb-2">${p.fullName || 'Your Name'}</h1>
                    <div class="flex flex-col @md:flex-row justify-center gap-1 @md:gap-4 text-[10px] @md:text-sm text-slate-500 font-sans">
                        <span>${p.email || ''}</span>
                        <span class="hidden @md:inline">•</span>
                        <span>${p.phone || ''}</span>
                        <span class="hidden @md:inline">•</span>
                        <span>${p.location || ''}</span>
                    </div>
                </div>
                <div class="space-y-8 @md:space-y-10 font-serif">
                    <section>
                        <h2 class="text-xs @md:text-md font-bold uppercase tracking-[0.3em] text-slate-900 border-b-2 border-slate-900 pb-1 mb-4">Executive Summary</h2>
                        <p class="text-sm @md:text-md text-slate-700 leading-relaxed text-justify">${p.summary || ''}</p>
                    </section>
                    <section>
                        <h2 class="text-xs @md:text-md font-bold uppercase tracking-[0.3em] text-slate-900 border-b-2 border-slate-900 pb-1 mb-4">Professional Experience</h2>
                        <div class="space-y-6 @md:space-y-8">
                            ${data.experience?.map(e => `
                                <div>
                                    <div class="flex flex-col @md:flex-row justify-between items-baseline mb-1">
                                        <h4 class="text-md @md:text-lg font-bold text-slate-900">${e.company || ''}</h4>
                                        <span class="text-xs @md:text-sm font-bold text-slate-900">${e.startDate || ''} – ${e.endDate || ''}</span>
                                    </div>
                                    <div class="flex justify-between items-baseline mb-2 italic text-slate-600">
                                        <span class="text-sm @md:text-md">${e.title || ''}</span>
                                        <span class="text-[10px] uppercase tracking-widest hidden @md:inline">${p.location || ''}</span>
                                    </div>
                                    <p class="text-xs @md:text-sm text-slate-700 leading-relaxed @md:pl-4 @md:border-l @md:border-slate-200">${e.description || ''}</p>
                                </div>
                            `).join('') || ''}
                        </div>
                    </section>
                    <div class="flex flex-col @lg:grid @lg:grid-cols-2 gap-8 @md:gap-12">
                        <section>
                            <h2 class="text-xs @md:text-md font-bold uppercase tracking-[0.3em] text-slate-900 border-b-2 border-slate-900 pb-1 mb-4">Core Competencies</h2>
                            <ul class="grid grid-cols-2 gap-x-4 gap-y-2 text-[10px] @md:text-sm text-slate-700 font-sans">
                                ${data.skills?.map(s => `<li class="flex items-center gap-2"><span class="w-1 h-1 @md:w-1.5 @md:h-1.5 bg-slate-900"></span> ${s.name}</li>`).join('') || ''}
                            </ul>
                        </section>
                        <section>
                            <h2 class="text-xs @md:text-md font-bold uppercase tracking-[0.3em] text-slate-900 border-b-2 border-slate-900 pb-1 mb-4">Education</h2>
                            <div class="space-y-3 @md:space-y-4">
                                ${data.education?.map(e => `
                                    <div>
                                        <p class="text-xs @md:text-sm font-bold text-slate-900">${e.school || ''}</p>
                                        <p class="text-[10px] @md:text-xs text-slate-600 italic">${e.degree || ''} (${e.startYear || ''} - ${e.endYear || ''})</p>
                                    </div>
                                `).join('') || ''}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        `;
    },

    'minimal-base': (data) => {
        const p = data.personalInfo || {};
        return `
            <div class="p-8 @md:p-16 bg-white h-full min-h-[1100px] max-w-4xl mx-auto font-sans text-slate-800 text-left">
                <header class="mb-16">
                    <h1 class="text-3xl @md:text-4xl font-light tracking-tight text-slate-900 mb-4 text-left">${p.fullName || 'Your Name'}</h1>
                    <div class="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
                        <a href="mailto:${p.email || ''}">${p.email || ''}</a>
                        <span>${p.phone || ''}</span>
                        <span>${p.location || ''}</span>
                    </div>
                </header>
                <div class="space-y-16">
                    <section class="flex flex-col @lg:grid @lg:grid-cols-12 gap-4 @lg:gap-8">
                        <div class="@lg:col-span-3 text-[10px] uppercase tracking-widest text-slate-300 font-bold pt-1">About</div>
                        <div class="@lg:col-span-9 text-lg font-light leading-relaxed text-slate-600">${p.summary || ''}</div>
                    </section>
                    <section class="flex flex-col @lg:grid @lg:grid-cols-12 gap-4 @lg:gap-8">
                        <div class="@lg:col-span-3 text-[10px] uppercase tracking-widest text-slate-300 font-bold pt-1">Experience</div>
                        <div class="@lg:col-span-9 space-y-12">
                            ${data.experience?.map(e => `
                                <div class="group text-left">
                                    <div class="flex flex-col @md:flex-row justify-between items-baseline mb-2">
                                        <h4 class="text-xl font-medium text-slate-900">${e.title || ''}</h4>
                                        <span class="text-xs text-slate-400">${e.startDate || ''} – ${e.endDate || ''}</span>
                                    </div>
                                    <p class="text-md text-slate-400 mb-4">${e.company || ''}</p>
                                    <p class="text-sm leading-relaxed text-slate-500">${e.description || ''}</p>
                                </div>
                            `).join('') || ''}
                        </div>
                    </section>
                    <section class="flex flex-col @lg:grid @lg:grid-cols-12 gap-4 @lg:gap-8">
                        <div class="@lg:col-span-3 text-[10px] uppercase tracking-widest text-slate-300 font-bold pt-1">Skills</div>
                        <div class="@lg:col-span-9 flex flex-wrap gap-x-8 gap-y-4">
                            ${data.skills?.map(s => `<span class="text-sm font-medium text-slate-600">${s.name}</span>`).join('') || ''}
                        </div>
                    </section>
                </div>
            </div>
        `;
    },

    'impact-builder': (data) => {
        const p = data.personalInfo || {};
        return `
            <div class="bg-slate-50 h-full min-h-[1100px] font-sans">
                <div class="bg-indigo-600 text-white p-8 @md:p-12">
                    <div class="max-w-4xl mx-auto flex flex-col @md:flex-row justify-between items-start @md:items-center gap-6">
                        <div>
                            <h1 class="text-3xl @md:text-5xl font-black tracking-tighter mb-2">${p.fullName || 'Your Name'}</h1>
                            <p class="text-lg @md:text-xl text-indigo-100 font-medium">${data.experience?.[0]?.title || 'Professional Title'}</p>
                        </div>
                        <div class="text-left @md:text-right space-y-1 text-sm text-indigo-100 opacity-80 font-medium">
                            <p>${p.email || ''}</p>
                            <p>${p.phone || ''}</p>
                            <p>${p.location || ''}</p>
                        </div>
                    </div>
                </div>
                <div class="max-w-4xl mx-auto p-8 @md:p-12 flex flex-col @lg:grid @lg:grid-cols-12 gap-12">
                    <div class="@lg:col-span-8 space-y-12 text-left">
                        <section>
                            <h2 class="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                <span class="w-8 h-8 bg-indigo-600 text-white rounded flex items-center justify-center text-sm">01</span>
                                Professional Impact
                            </h2>
                            <p class="text-md text-slate-600 leading-relaxed bg-white p-6 rounded-xl border border-slate-200 shadow-sm">${p.summary || ''}</p>
                        </section>
                        <section>
                            <h2 class="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
                                <span class="w-8 h-8 bg-indigo-600 text-white rounded flex items-center justify-center text-sm">02</span>
                                Career Path
                            </h2>
                            <div class="space-y-10 relative before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-0.5 before:bg-indigo-100">
                                ${data.experience?.map(e => `
                                    <div class="relative pl-10 text-left">
                                        <div class="absolute left-0 top-1.5 w-8 h-8 bg-white border-2 border-indigo-600 rounded-full flex items-center justify-center z-10">
                                            <div class="w-2 h-2 bg-indigo-600 rounded-full"></div>
                                        </div>
                                        <div class="bg-white p-6 rounded-xl border border-slate-200 shadow-sm group hover:border-indigo-300 transition-colors">
                                            <div class="flex flex-col @md:flex-row justify-between items-start mb-2 gap-2">
                                                <h4 class="text-lg font-bold text-slate-900">${e.title || ''}</h4>
                                                <span class="text-[10px] font-black bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full uppercase">${e.startDate || ''} – ${e.endDate || ''}</span>
                                            </div>
                                            <p class="text-sm font-bold text-indigo-600 mb-4">${e.company || ''}</p>
                                            <p class="text-sm text-slate-500 leading-relaxed">${e.description || ''}</p>
                                        </div>
                                    </div>
                                `).join('') || ''}
                            </div>
                        </section>
                    </div>
                    <div class="@lg:col-span-4 space-y-12 text-left">
                        <section>
                            <h2 class="text-xl font-black text-slate-900 mb-6">Expertise</h2>
                            <div class="flex flex-col gap-2">
                                ${data.skills?.map(s => `
                                    <div class="bg-white px-4 py-3 rounded-lg border border-slate-200 flex justify-between items-center shadow-sm">
                                        <span class="text-sm font-bold text-slate-700">${s.name}</span>
                                        <span class="text-[10px] font-black text-indigo-600 uppercase">${s.level || ''}</span>
                                    </div>
                                `).join('') || ''}
                            </div>
                        </section>
                        <section>
                            <h2 class="text-xl font-black text-slate-900 mb-6">Education</h2>
                            <div class="space-y-4">
                                ${data.education?.map(e => `
                                    <div class="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                                        <p class="text-sm font-bold text-slate-900">${e.degree || ''}</p>
                                        <p class="text-xs text-indigo-600 font-medium mt-1">${e.school || ''}</p>
                                        <p class="text-[10px] text-slate-400 mt-2">${e.startYear || ''} - ${e.endYear || ''}</p>
                                    </div>
                                `).join('') || ''}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        `;
    },

    'visual-artist': (data) => {
        const p = data.personalInfo || {};
        return `
            <div class="bg-white h-full min-h-[1100px] flex flex-col @lg:flex-row overflow-hidden">
                <div class="@lg:w-1/3 bg-slate-50 p-8 @md:p-12 flex flex-col gap-12 border-b @lg:border-b-0 @lg:border-r border-slate-100">
                    <div class="relative w-48 @lg:w-full mx-auto @lg:mx-0">
                        <div class="aspect-square bg-slate-200 rounded-2xl overflow-hidden shadow-2xl rotate-3 scale-95 group hover:rotate-0 transition-transform duration-500">
                             <div class="w-full h-full bg-slate-300 flex items-center justify-center">
                                <span class="material-symbols-outlined text-4xl @md:text-6xl text-slate-400">palette</span>
                             </div>
                        </div>
                        <div class="absolute -bottom-4 -right-4 w-16 h-16 @md:w-20 @md:h-20 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-xl -rotate-12">
                            <span class="text-[10px] @md:text-xs font-black uppercase tracking-widest">Artist</span>
                        </div>
                    </div>
                    <div class="space-y-8 text-left">
                        <section>
                            <h3 class="text-xs font-black uppercase tracking-[0.3em] text-indigo-600 mb-4">Contact</h3>
                            <div class="space-y-4 text-sm text-slate-500 font-medium">
                                <p class="flex items-center gap-3 truncate"><span class="w-2 h-2 bg-indigo-600 rounded-full"></span> ${p.email || ''}</p>
                                <p class="flex items-center gap-3"><span class="w-2 h-2 bg-indigo-600 rounded-full"></span> ${p.phone || ''}</p>
                                <p class="flex items-center gap-3"><span class="w-2 h-2 bg-indigo-600 rounded-full"></span> ${p.location || ''}</p>
                            </div>
                        </section>
                        <section>
                            <h3 class="text-xs font-black uppercase tracking-[0.3em] text-indigo-600 mb-4">Skills</h3>
                            <div class="flex flex-wrap gap-2">
                                ${data.skills?.map(s => `<span class="px-3 py-1 bg-white border border-slate-200 text-[10px] font-bold rounded-full text-slate-600 shadow-sm">${s.name}</span>`).join('') || ''}
                            </div>
                        </section>
                    </div>
                </div>
                <div class="@lg:w-2/3 p-8 @md:p-16 flex flex-col gap-16 overflow-y-auto text-left">
                    <header>
                        <h1 class="text-4xl @md:text-7xl font-black text-slate-900 tracking-tighter leading-tight mb-4">${p.fullName || 'Your Name'}</h1>
                        <p class="text-xl @md:text-2xl font-medium text-slate-400 italic">${data.experience?.[0]?.title || 'Creative Visionary'}</p>
                    </header>
                    <section>
                        <h2 class="text-sm font-black uppercase tracking-[0.4em] text-slate-300 mb-6">Perspective</h2>
                        <p class="text-lg @md:text-xl font-medium text-slate-600 leading-relaxed italic border-l-8 border-indigo-600 pl-4 @md:pl-8 font-serif">${p.summary || ''}</p>
                    </section>
                    <section>
                        <h2 class="text-sm font-black uppercase tracking-[0.4em] text-slate-300 mb-10">Exhibitions / History</h2>
                        <div class="space-y-12">
                            ${data.experience?.map(e => `
                                <div class="text-left">
                                    <div class="flex flex-col @md:flex-row justify-between items-start @md:items-end mb-4 gap-2">
                                        <h4 class="text-xl @md:text-2xl font-black text-slate-900">${e.title || ''}</h4>
                                        <span class="text-sm font-bold text-indigo-600">${e.startDate || ''} – ${e.endDate || ''}</span>
                                    </div>
                                    <p class="text-md font-bold text-slate-500 mb-3">${e.company || ''}</p>
                                    <p class="text-sm text-slate-400 leading-relaxed">${e.description || ''}</p>
                                </div>
                            `).join('') || ''}
                        </div>
                    </section>
                </div>
            </div>
        `;
    },

    'classic-retro': (data) => {
        const p = data.personalInfo || {};
        return `
            <div class="p-6 @lg:p-12 bg-white h-full min-h-[1100px] font-serif border-[1px] border-slate-200 text-left">
                <header class="text-center mb-8 @lg:mb-10 border-b-2 border-slate-900 pb-6 @lg:pb-8">
                    <h1 class="text-2xl @lg:text-4xl font-bold uppercase tracking-widest text-slate-900 mb-2">${p.fullName || 'Your Name'}</h1>
                    <div class="flex flex-col @md:flex-row justify-center gap-2 @md:gap-6 text-[10px] @md:text-sm text-slate-600 font-sans italic">
                        <span>${p.email}</span>
                        <span>${p.phone}</span>
                        <span>${p.location}</span>
                    </div>
                </header>
                <div class="flex flex-col @lg:grid @lg:grid-cols-12 gap-8 text-left">
                    <div class="@lg:col-span-8 space-y-8">
                        <section>
                            <h2 class="text-md @lg:text-lg font-bold border-b border-slate-300 pb-1 mb-4 uppercase">Professional Experience</h2>
                            <div class="space-y-6">
                                ${data.experience?.map(e => `
                                    <div>
                                        <div class="flex flex-col @md:flex-row justify-between font-bold text-slate-800">
                                            <span>${e.company}</span>
                                            <span class="text-xs @md:text-sm">${e.startDate} – ${e.endDate}</span>
                                        </div>
                                        <div class="italic text-slate-600 mb-2 text-sm @md:text-md">${e.title}</div>
                                        <p class="text-xs @md:text-sm text-slate-700 leading-relaxed">${e.description}</p>
                                    </div>
                                `).join('') || ''}
                            </div>
                        </section>
                    </div>
                    <div class="@lg:col-span-4 space-y-8">
                        <section>
                            <h2 class="text-md @lg:text-lg font-bold border-b border-slate-300 pb-1 mb-4 uppercase">Education</h2>
                            <div class="space-y-4 text-xs @md:text-sm">
                                ${data.education?.map(e => `
                                    <div>
                                        <p class="font-bold text-slate-800">${e.school}</p>
                                        <p class="italic">${e.degree}</p>
                                        <p class="text-slate-500">${e.startYear} - ${e.endYear}</p>
                                    </div>
                                `).join('') || ''}
                            </div>
                        </section>
                        <section>
                            <h2 class="text-md @lg:text-lg font-bold border-b border-slate-300 pb-1 mb-4 uppercase">Skills</h2>
                            <div class="flex flex-wrap gap-2">
                                ${data.skills?.map(s => `<span class="text-[10px] @md:text-sm border border-slate-200 px-2 py-1 bg-slate-50">${s.name}</span>`).join('') || ''}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        `;
    },

    'bold-sidebar': (data) => {
        const p = data.personalInfo || {};
        return `
            <div class="flex flex-col @lg:grid @lg:grid-cols-12 h-full min-h-[1100px] bg-white text-left">
                <!-- Main Content -->
                <div class="@lg:col-span-8 p-6 @lg:p-12">
                    <h1 class="text-3xl @lg:text-6xl font-black text-slate-900 mb-2 leading-none uppercase">${p.fullName?.split(' ')[0] || 'First'}<br/><span class="text-indigo-600">${p.fullName?.split(' ')[1] || 'Last'}</span></h1>
                    <p class="text-lg @lg:text-xl font-bold text-slate-400 mb-8 @lg:mb-12 uppercase tracking-[0.2em]">${data.experience?.[0]?.title || ''}</p>
                    
                    <section class="mb-8 @lg:mb-12">
                        <h2 class="text-xl @lg:text-2xl font-black text-slate-900 mb-6 border-l-8 border-indigo-600 pl-4 uppercase">Experience</h2>
                        <div class="space-y-6 @lg:space-y-8">
                            ${data.experience?.map(e => `
                                <div>
                                    <div class="flex flex-col @md:flex-row justify-between items-start @md:items-baseline mb-2">
                                        <h3 class="text-lg @lg:text-xl font-bold text-slate-800">${e.title}</h3>
                                        <span class="text-[10px] @lg:text-sm font-black text-indigo-600 uppercase mt-1 @md:mt-0">${e.startDate} - ${e.endDate}</span>
                                    </div>
                                    <p class="font-bold text-slate-400 mb-3 text-sm @lg:text-base">${e.company}</p>
                                    <p class="text-sm @lg:text-base text-slate-600 leading-relaxed">${e.description}</p>
                                </div>
                            `).join('') || ''}
                        </div>
                    </section>
                </div>
                <!-- Sidebar -->
                <div class="@lg:col-span-4 bg-slate-950 text-white p-6 @lg:p-12 flex flex-col gap-8 @lg:gap-12">
                    <section>
                        <h2 class="text-xs @lg:text-sm font-black text-indigo-400 uppercase tracking-widest mb-4 @lg:mb-6">Contact</h2>
                        <div class="space-y-3 @lg:space-y-4 text-[10px] @lg:text-sm">
                            <p class="flex flex-col gap-1"><span class="text-slate-500 font-bold uppercase text-[9px] @lg:text-[10px]">Email</span>${p.email}</p>
                            <p class="flex flex-col gap-1"><span class="text-slate-500 font-bold uppercase text-[9px] @lg:text-[10px]">Phone</span>${p.phone}</p>
                            <p class="flex flex-col gap-1"><span class="text-slate-500 font-bold uppercase text-[9px] @lg:text-[10px]">Location</span>${p.location}</p>
                        </div>
                    </section>
                    <section>
                        <h2 class="text-xs @lg:text-sm font-black text-indigo-400 uppercase tracking-widest mb-4 @lg:mb-6">Skills</h2>
                        <div class="flex flex-col gap-4">
                            ${data.skills?.map(s => `
                                <div class="space-y-2">
                                    <div class="flex justify-between text-[10px] @lg:text-xs font-bold uppercase">
                                        <span>${s.name}</span>
                                        <span class="text-slate-500">${s.level}</span>
                                    </div>
                                    <div class="h-1 bg-slate-800 rounded-full overflow-hidden">
                                        <div class="h-full bg-indigo-500" style="width: ${s.level === 'Expert' ? '100%' : '60%'}"></div>
                                    </div>
                                </div>
                            `).join('') || ''}
                        </div>
                    </section>
                </div>
            </div>
        `;
    },

    'minimal-modern': (data) => {
        const p = data.personalInfo || {};
        return `
            <div class="p-8 @lg:p-16 bg-white h-full min-h-[1100px] font-sans text-slate-800 text-left">
                <div class="max-w-3xl mx-auto">
                    <header class="mb-12 @lg:mb-20">
                        <h1 class="text-3xl @lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">${p.fullName}</h1>
                        <p class="text-lg @lg:text-xl text-emerald-600 font-medium mb-6 @lg:mb-8">${data.experience?.[0]?.title}</p>
                        <div class="flex flex-wrap gap-4 @lg:gap-8 text-[10px] @lg:text-sm text-slate-400">
                            <span>${p.email}</span>
                            <span>${p.phone}</span>
                            <span>${p.location}</span>
                        </div>
                    </header>
                    <div class="space-y-12 @lg:space-y-16 text-left">
                        <section>
                            <h2 class="text-[10px] @lg:text-xs font-black text-emerald-600 uppercase tracking-[0.3em] mb-6 @lg:mb-8">Professional Background</h2>
                            <div class="space-y-8 @lg:space-y-12">
                                ${data.experience?.map(e => `
                                    <div class="flex flex-col @md:flex-row gap-2 @md:gap-12">
                                        <div class="w-32 flex-shrink-0 text-xs @lg:text-sm font-bold text-slate-300 pt-1 uppercase">${e.startDate} — ${e.endDate}</div>
                                        <div>
                                            <h3 class="text-lg @lg:text-xl font-bold text-slate-900 mb-1">${e.title}</h3>
                                            <p class="text-sm @lg:text-md text-emerald-600 font-medium mb-3 @lg:mb-4">${e.company}</p>
                                            <p class="text-xs @lg:text-sm text-slate-500 leading-relaxed">${e.description}</p>
                                        </div>
                                    </div>
                                `).join('') || ''}
                            </div>
                        </section>
                        <section class="grid @lg:grid-cols-2 gap-12 @lg:gap-16 border-t border-slate-100 pt-12 @lg:pt-16">
                            <div>
                                <h2 class="text-[10px] @lg:text-xs font-black text-emerald-600 uppercase tracking-[0.3em] mb-6 @lg:mb-8">Technical Expertise</h2>
                                <div class="flex flex-wrap gap-2 @lg:gap-3">
                                    ${data.skills?.map(s => `<span class="px-3 py-1.5 @lg:px-4 @lg:py-2 bg-slate-50 text-[10px] @lg:text-sm font-bold rounded-lg text-slate-600 border border-slate-100">${s.name}</span>`).join('') || ''}
                                </div>
                            </div>
                            <div>
                                <h2 class="text-[10px] @lg:text-xs font-black text-emerald-600 uppercase tracking-[0.3em] mb-6 @lg:mb-8">Education</h2>
                                <div class="space-y-4 @lg:space-y-6">
                                    ${data.education?.map(e => `
                                        <div>
                                            <p class="text-sm @lg:text-base font-bold text-slate-900">${e.school}</p>
                                            <p class="text-xs @lg:text-sm text-slate-500">${e.degree} • ${e.endYear}</p>
                                        </div>
                                    `).join('') || ''}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        `;
    },

    'startup-vibe': (data) => {
        const p = data.personalInfo || {};
        return `
            <div class="p-6 @lg:p-12 bg-slate-50 h-full min-h-[1100px] font-sans">
                <div class="max-w-4xl mx-auto space-y-6 @lg:space-y-8">
                    <div class="bg-gradient-to-br from-violet-600 to-indigo-700 p-8 @lg:p-12 rounded-2xl @lg:rounded-3xl text-white shadow-xl relative overflow-hidden text-left">
                        <div class="absolute top-0 right-0 w-48 @lg:w-64 h-48 @lg:h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                        <h1 class="text-3xl @lg:text-5xl font-black mb-2 @lg:mb-4 tracking-tighter">${p.fullName}</h1>
                        <p class="text-lg @lg:text-xl text-violet-100 mb-6 @lg:mb-8 font-medium">${data.experience?.[0]?.title}</p>
                        <div class="flex flex-wrap gap-3 @lg:gap-6 text-[10px] @lg:text-sm font-bold">
                            <span class="bg-white/10 px-3 py-1.5 @lg:px-4 @lg:py-2 rounded-lg @lg:rounded-xl backdrop-blur-md">${p.email}</span>
                            <span class="bg-white/10 px-3 py-1.5 @lg:px-4 @lg:py-2 rounded-lg @lg:rounded-xl backdrop-blur-md">${p.phone}</span>
                            <span class="bg-white/10 px-3 py-1.5 @lg:px-4 @lg:py-2 rounded-lg @lg:rounded-xl backdrop-blur-md">${p.location}</span>
                        </div>
                    </div>
                    <div class="grid @lg:grid-cols-12 gap-6 @lg:gap-8">
                        <div class="@lg:col-span-8 space-y-6 @lg:space-y-8 text-left">
                            <section class="bg-white p-6 @lg:p-8 rounded-2xl @lg:rounded-3xl shadow-sm border border-slate-100">
                                <h2 class="text-lg @lg:text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                    <span class="w-8 h-8 @lg:w-10 @lg:h-10 bg-violet-100 text-violet-600 rounded-lg @lg:rounded-2xl flex items-center justify-center"><span class="material-symbols-outlined text-sm @lg:text-base">work</span></span>
                                    Professional Journey
                                </h2>
                                <div class="space-y-8 @lg:space-y-10">
                                    ${data.experience?.map(e => `
                                        <div>
                                            <div class="flex flex-col @md:flex-row justify-between items-start mb-2">
                                                <h3 class="text-lg font-bold text-slate-900">${e.title}</h3>
                                                <span class="text-[10px] font-black text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full uppercase mt-1 @md:mt-0">${e.startDate} - ${e.endDate}</span>
                                            </div>
                                            <p class="font-bold text-slate-400 mb-3 text-sm">${e.company}</p>
                                            <p class="text-xs @lg:text-sm text-slate-600 leading-relaxed">${e.description}</p>
                                        </div>
                                    `).join('') || ''}
                                </div>
                            </section>
                        </div>
                        <div class="@lg:col-span-4 space-y-6 @lg:space-y-8 text-left">
                            <section class="bg-white p-6 @lg:p-8 rounded-2xl @lg:rounded-3xl shadow-sm border border-slate-100">
                                <h2 class="text-lg font-black text-slate-900 mb-4 @lg:mb-6">Stack</h2>
                                <div class="flex flex-wrap gap-2">
                                    ${data.skills?.map(s => `<span class="bg-slate-100 text-slate-600 px-3 py-1.5 rounded-lg text-xs font-bold">${s.name}</span>`).join('') || ''}
                                </div>
                            </section>
                            <section class="bg-white p-6 @lg:p-8 rounded-2xl @lg:rounded-3xl shadow-sm border border-slate-100">
                                <h2 class="text-lg font-black text-slate-900 mb-4 @lg:mb-6">Education</h2>
                                <div class="space-y-4 @lg:space-y-6">
                                    ${data.education?.map(e => `
                                        <div>
                                            <p class="font-bold text-slate-900 text-sm">${e.school}</p>
                                            <p class="text-xs text-slate-500">${e.degree}</p>
                                        </div>
                                    `).join('') || ''}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    'academic-research': (data) => {
        const p = data.personalInfo || {};
        return `
            <div class="p-8 @lg:p-16 bg-white h-full min-h-[1100px] font-serif text-slate-900 text-left">
                <header class="mb-8 @lg:mb-12 border-b border-slate-900 pb-6 @lg:pb-8">
                    <h1 class="text-2xl @lg:text-3xl font-bold mb-4 text-left">${p.fullName}</h1>
                    <div class="grid @md:grid-cols-2 gap-4 text-[10px] @lg:text-sm font-sans">
                        <div>
                            <p>${p.email}</p>
                            <p>${p.phone}</p>
                        </div>
                        <div class="text-left @md:text-right">
                            <p>${p.location}</p>
                            <p>Current Appointment: ${data.experience?.[0]?.company || 'N/A'}</p>
                        </div>
                    </div>
                </header>
                <div class="space-y-8 @lg:space-y-10">
                    <section>
                        <h2 class="text-sm @lg:text-lg font-bold uppercase tracking-widest border-b border-slate-200 mb-6">Academic Appointments</h2>
                        <div class="space-y-6">
                            ${data.experience?.map(e => `
                                <div>
                                    <div class="flex flex-col @md:flex-row justify-between items-baseline mb-1">
                                        <p class="font-bold text-sm @lg:text-base">${e.title}</p>
                                        <span class="text-[10px] @lg:text-sm text-slate-500 uppercase tracking-tighter">${e.startDate} — ${e.endDate}</span>
                                    </div>
                                    <p class="italic text-slate-600 mb-2 text-xs @lg:text-sm">${e.company}</p>
                                    <p class="text-[11px] @lg:text-sm leading-relaxed">${e.description}</p>
                                </div>
                            `).join('') || ''}
                        </div>
                    </section>
                    <section>
                        <h2 class="text-sm @lg:text-lg font-bold uppercase tracking-widest border-b border-slate-200 mb-6">Education</h2>
                        <div class="space-y-4 @lg:space-y-6">
                            ${data.education?.map(e => `
                                <div class="flex justify-between">
                                    <div>
                                        <p class="font-bold text-sm @lg:text-base">${e.school}</p>
                                        <p class="italic text-xs @lg:text-sm">${e.degree}</p>
                                    </div>
                                    <span class="text-[10px] @lg:text-sm font-bold">${e.endYear}</span>
                                </div>
                            `).join('') || ''}
                        </div>
                    </section>
                    <section>
                        <h2 class="text-sm @lg:text-lg font-bold uppercase tracking-widest border-b border-slate-200 mb-6">Expertise & Skills</h2>
                        <div class="flex flex-wrap gap-x-8 gap-y-2 text-[10px] @lg:text-sm">
                            ${data.skills?.map(s => `<span class="border-b border-slate-200 pb-1">${s.name}</span>`).join('') || ''}
                        </div>
                    </section>
                </div>
            </div>
        `;
    },

    'elegant-chic': (data) => {
        const p = data.personalInfo || {};
        return `
            <div class="p-8 @lg:p-16 bg-white h-full min-h-[1100px] font-sans text-slate-800 border-[8px] @lg:border-[20px] border-slate-50 text-left">
                <div class="max-w-2xl mx-auto">
                    <header class="text-center mb-12 @lg:mb-24">
                        <h1 class="text-2xl @lg:text-4xl font-extralight tracking-[0.4em] uppercase text-slate-900 mb-4">${p.fullName}</h1>
                        <div class="h-0.5 w-8 @lg:w-12 bg-amber-400 mx-auto mb-6 @lg:mb-8"></div>
                        <div class="flex flex-col @md:flex-row justify-center items-center gap-2 @md:gap-10 text-[8px] @md:text-[10px] uppercase tracking-[0.2em] text-slate-400">
                            <span>${p.email}</span>
                            <span class="hidden @md:inline">•</span>
                            <span>${p.phone}</span>
                            <span class="hidden @md:inline">•</span>
                            <span>${p.location}</span>
                        </div>
                    </header>
                    <div class="space-y-12 @lg:space-y-20 text-left">
                        <section>
                            <h2 class="text-[10px] @lg:text-[11px] font-bold uppercase tracking-[0.5em] text-amber-600 mb-6 @lg:mb-10 text-center">Experience</h2>
                            <div class="space-y-12 @lg:space-y-16">
                                ${data.experience?.map(e => `
                                    <div class="text-center">
                                        <h3 class="text-lg @lg:text-xl font-light text-slate-900 uppercase tracking-widest mb-2">${e.title}</h3>
                                        <p class="text-[9px] @lg:text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 @lg:mb-6">${e.company} / ${e.startDate} — ${e.endDate}</p>
                                        <p class="text-[11px] @lg:text-sm leading-relaxed text-slate-500 max-w-lg mx-auto">${e.description}</p>
                                    </div>
                                `).join('') || ''}
                            </div>
                        </section>
                        <div class="grid @lg:grid-cols-2 gap-12 @lg:gap-20 border-t border-slate-50 pt-12 @lg:pt-20">
                            <section>
                                <h2 class="text-[10px] @lg:text-[11px] font-bold uppercase tracking-[0.5em] text-amber-600 mb-6 @lg:mb-8 text-left">Capabilities</h2>
                                <div class="flex flex-wrap justify-start gap-x-4 @lg:gap-x-6 gap-y-3 @lg:gap-y-4">
                                    ${data.skills?.map(s => `<span class="text-[9px] @lg:text-xs uppercase tracking-widest text-slate-400">${s.name}</span>`).join('') || ''}
                                </div>
                            </section>
                            <section>
                                <h2 class="text-[10px] @lg:text-[11px] font-bold uppercase tracking-[0.5em] text-amber-600 mb-6 @lg:mb-8 text-left">Education</h2>
                                <div class="space-y-4 @lg:space-y-6">
                                    ${data.education?.map(e => `
                                        <div>
                                            <p class="text-xs @lg:text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">${e.school}</p>
                                            <p class="text-[10px] @lg:text-xs text-slate-400 italic">${e.degree}, ${e.endYear}</p>
                                        </div>
                                    `).join('') || ''}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};

/**
 * Renders a resume template to a container
 * @param {HTMLElement} container - The element to render into
 * @param {object} data - The resume data
 * @param {string} templateId - The ID of the template to use
 */
function renderResumeTemplate(container, data, templateId) {
    if (!container) return;

    const renderer = ResumeTemplates[templateId] || ResumeTemplates['modern-tech'];
    container.innerHTML = renderer(data);
}
