// --- 1. THEME TOGGLE (Crash-Proof) ---
const html = document.documentElement;
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

document.addEventListener('click', (e) => {
    const themeBtn = e.target.closest('#theme-btn');
    if (themeBtn) {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }
});

// --- 2. DATA STORE ---
const projectData = {
    'tumor-wgan': {
        title: "Tumor Image Augmentation And Classification",
        body: `
            <div class="expanded-split">
                
                <div class="split-text">
                    <h3>01. The Research Question</h3>
                    <p>"Could a Generative Adversarial Network (GAN) bridge the gap in quality and variety of medical images to yield superior classification results?"</p>
                    <p style="margin-top: 1rem;">Gathering large amounts of patient data, especially MRI images, is notoriously difficult. The goal of this project was to propose an optimized baseline model and a new image augmentation technique that could serve as a generalizable "Gold Standard" in the medical field.</p>
                    <br>
                    
                    <h3>02. Methodology & Key Observations</h3>
                    <p>Engineered a Wasserstein GAN (WGAN) to synthesize high-fidelity medical images. I found that while the methodology used to augment these images is critical, no single dataset or model is perfect; utilizing SOTA techniques in hyper-parameter tuning is essential.</p>
                    <ul style="margin-top: 1rem; margin-left: 1.5rem; color: var(--secondary-text); font-size: 0.95rem;">
                        <li style="margin-bottom: 0.5rem;">GANs demonstrate an exemplary ability to curate and generate a wide variety of images.</li>
                        <li>The WGAN implementation provides the capability to curate an unlimited number of new image types (as demonstrated in Figure 3 of the poster).</li>
                    </ul>
                    <br>

                    <h3>03. Results</h3>
                    <div class="tech-stack-box">
                        1. Baseline model w/ original augmentation: 27% <br>
                        2. Baseline model w/ WGAN augmentation: 65% <br>
                        3. Optimized model w/ WGAN augmentation: 75% <br>
                        4. Peak Optimized model w/ original augmentation: 80%
                    </div>

                    <h3>04. Project Presentation</h3>
                    <p>A comprehensive presentation detailing the architecture and findings of this project.</p>
                    <a href="https://www.linkedin.com/feed/update/urn:li:activity:7406845262700142593/" target="_blank" class="action-btn">
                        WATCH PRESENTATION VIDEO
                    </a>

                </div>

                <div class="split-visual" style="width: 100%;">
                    <img src="wgan-poster.png" alt="Research Poster" style="width: 100%; max-width: 850px; height: auto; display: block; margin: 0 auto; border: 1px solid var(--border-color); border-radius: 4px; box-shadow: 0 10px 40px rgba(0,0,0,0.6);">
                </div>

            </div>
        `
    },
    'psychology-engine': {
        title: "Candidate Psychology Classification",
        body: `
            <div class="expanded-split">
                
                <div class="split-text">
                    <h3>01. The Objective</h3>
                    <p>The primary goal of this project was to automate and enhance the candidate screening process. It achieves this by providing two core outputs: recommending a personality type for a candidate and suggesting highly suitable job profiles based on that personality.</p>
                    <br>
                    
                    <h3>02. Methodology & Architecture</h3>
                   <p>The data procurement utilized the "16 Personalities" dataset from Kaggle, which guesses personality based on questionnaire answers. I architected an end-to-end workflow where a user interacts with a Google Form, which feeds data into a Google Sheet alongside their resume. This data is then processed by a machine learning model integrated with the OpenAI API.</p>
                    <br>

                    <h3>03. Deployment & Results</h3>
                   <p>The backend was engineered using the Flask framework. The final application was deployed via GitHub to Render, resulting in a live webpage that generates AI-powered career recommendations. For example, a candidate classified as an ESTJ would automatically be recommended roles that align with their traits, such as Project Manager or Operations Manager.</p>

                    <div class="tech-stack-box">
                        1. Languages: Python <br>
                        2. Frameworks: Flask<br>
                        3. APIs: OpenAI API, Google Cloud Vision API<br>
                        4. Infrastructure: Render, GitHub, Google Cloud
                    </div>

                    <a href="https://www.kaggle.com/datasets/die9origephit/mbti-personality-type-test-complete-dataset" target="_blank" class="action-btn">
                        ORIGINAL DATASET
                    </a>
                </div>

                <div class="split-visual" style="width: 100%;">
                    <img src="flowchart_psychology.png" alt="Project Architecture Workflow" style="width: 100%; max-width: 850px; height: auto; display: block; margin: 0 auto; border: 1px solid var(--border-color); border-radius: 4px; box-shadow: 0 10px 40px rgba(0,0,0,0.6);">
                </div>

            </div>
        `
    },
    'hinglish-bot': {
        title: "Hinglish Chatbot Using BERT",
        body: `
            <div class="expanded-split">
                <div class="split-text">
                    <h3>01. The Objective</h3>
                    <p>To engineer a context-aware conversational agent capable of understanding localized language nuances by fine-tuning a BERT model on a large-scale Code-Mixed (Hinglish) corpus.</p>
                    <br>
                    
                    <h3>02. Methodology & Architecture</h3>
                    <p>Processed unstructured text data using Pandas and custom tokenizers to optimize training pipelines. Designed a custom Encoder-Decoder architecture to effectively handle bilingual input sequences and complex language mixing.</p>
                    <br>

                    <h3>03. Results</h3>
                    <p>The model successfully parsed and understood Code-Mixed sentences, achieving an 80% accuracy rate in intent recognition tasks, enabling a more natural and localized AI communication experience.</p>

                    <div class="tech-stack-box" style="margin-top: 2rem;">
                        1. Core Architecture: BERT (Encoder-Decoder) <br>
                        2. Accuracy: 80% <br>
                        3. Languages & Frameworks: Python, PyTorch, Transformers, Pandas <br>
                        4. Domain: Natural Language Processing (NLP)
                    </div>

                    <a href="https://github.com/shubhsudan/NLP_PROJECT" target="_blank" class="action-btn">
                        VIEW GITHUB REPOSITORY
                    </a>
                </div>

                <div class="split-visual" style="width: 100%;">
                    <div style="background: #111; border-radius: 8px; border: 1px solid var(--border-color); width: 100%; max-width: 850px; margin: 0 auto; font-family: monospace; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.6);">
                        
                        <div style="background: #222; padding: 12px 16px; display: flex; align-items: center; border-bottom: 1px solid var(--border-color);">
                            <div style="width: 12px; height: 12px; background: #ff5f56; border-radius: 50%; margin-right: 8px;"></div>
                            <div style="width: 12px; height: 12px; background: #ffbd2e; border-radius: 50%; margin-right: 8px;"></div>
                            <div style="width: 12px; height: 12px; background: #27c93f; border-radius: 50%; margin-right: 16px;"></div>
                            <span style="color: #888; font-size: 0.75rem; letter-spacing: 1px;">hinglish_inference.py</span>
                        </div>
                        
                        <div style="padding: 2rem; color: #e6e6e6; line-height: 1.8; font-size: 0.95rem; text-align: left;">
                            <span style="color: #666;">$</span> loading fine-tuned BERT weights...<br>
                            <span style="color: #27c93f;">[OK] model initialized successfully.</span><br><br>
                            
                            <span style="color: #666;">$</span> await user_input()<br>
                            <span style="color: #ffcc00;">User:</span> "bhai, password reset ka kya process hai?"<br>
                            <span style="color: #00ccff;">Bot:</span> "Brother, what is the process to reset the password?"<br>
                            <span style="color: #27c93f; font-size: 0.8rem;">>> Intent Identified: Support_Password_Reset (Conf: 0.94)</span><br><br>

                            <span style="color: #666;">$</span> await user_input()<br>
                            <span style="color: #ffcc00;">User:</span> "flight delay ho gayi, refund kab aayega?"<br>
                            <span style="color: #00ccff;">Bot:</span> "The flight got delayed, when will the refund arrive?"<br>
                            <span style="color: #27c93f; font-size: 0.8rem;">>> Intent Identified: Support_Refund_Status (Conf: 0.89)</span><br><br>

                            <span style="color: #ffcc00; animation: blink 1s step-end infinite;">█</span>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    'lstm-research': {
        title: "LSTM Acoustic Modeling Presentation",
        body: `
            <div class="expanded-split" style="height: 100%;">
                <div class="split-text">
                    <h3>01. Overview</h3>
                    <p>A comprehensive presentation on "Long Short-Term Memory Recurrent Neural Network Architectures for Large Scale Acoustic Modeling."</p>
                    <br>
                    <a href="https://www.isca-archive.org/interspeech_2014/sak14_interspeech.pdf" target="_blank" class="action-btn">
                        [ READ ORIGINAL PAPER ↗ ]
                    </a>
                </div>
                <div class="split-visual" style="display: flex; align-items: center; justify-content: center; height: 100%; min-height: 60vh;">
                    <iframe src="https://www.youtube.com/embed/h32geU4qa38" style="width: 100%; aspect-ratio: 16/9; border: 1px solid var(--border-color); box-shadow: 0 10px 30px rgba(0,0,0,0.5);" allowfullscreen></iframe>
                </div>
            </div>
        `
    },
    'blissiq': {
        title: "BlissIQ Application",
        body: `
            <div class="expanded-split">
                <div class="split-text">
                    <h3>01. The Objective</h3>
                    <p>The main goal of this project was to develop a conversational English app for underprivileged children,
                     enabling them to converse fluently. Bliss IQ is a learning management software created to provide quality 
                     education to students who can't afford one. 
                     It was a dream of our founder to bridge the gap of education so that everyone could get a chance for a better life.</p>
                    <br>
                    
                    <h3>02. Prototyping & Course Curation</h3>
                    <p>We were tasked with curating a comprehensive course structure by researching various online courses to understand effective teaching strategies. 
                    Me and my team made courses, app designs over Figma.
                    The course content was finalized according to the State board education format, ranging from class 1 to class 10, ensuring a highly structured learning path.</p>
                    <br>

                    <h3>03. Community Validation</h3>
                    <p>To ensure the app's effectiveness, we took our work directly to the end-users. 
                    we gave presentations about the app to schools in Pune and Lonavala. 
                    We presented our designs and course content to teachers for critical feedback. 
                    This experience of selflessness and giving back to the society has been one of the best experiences of my life.</p>

                    <div class="tech-stack-box" style="margin-top: 2rem;">
                        1. Role: Product Team Member, Ideator <br>
                        2. UI/UX Design: Figma <br>
                        3. Curriculum Framework: State Board Education (From Pre-primary to Class 10) <br>
                        4. Core Focus: EdTech & Social Impact
                    </div>
                </div>
                <div class="split-visual" style="width: 100%;">
                    <img src="blissiq.png" alt="BlissIQ Dashboard Interface" style="width: 100%; max-width: 850px; height: auto; display: block; margin: 0 auto; border: 1px solid var(--border-color); border-radius: 4px; box-shadow: 0 10px 40px rgba(0,0,0,0.6);">
                </div>
                
                <a href="https://blissiq.in" target="_blank" class="action-btn">
                        BLISS IQ LMS WEBSITE
                </a>
            </div>
        `
    }
}

// --- 3. SAFE INITIALIZATION ---
let activeClone = null;
let activeOriginal = null;
let overlay = null;

// This ensures the JS waits for the <body> to exist before building the overlay
document.addEventListener('DOMContentLoaded', () => {
    overlay = document.createElement('div');
    overlay.className = 'overlay-backdrop';
    document.body.appendChild(overlay);

    if (typeof Lenis !== 'undefined') {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true,
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        window.lenis = lenis;
    }
});

// --- 4. FLIP ANIMATION & DYNAMIC COLORS ---
window.expandProject = function(id) {
    const data = projectData[id];
    if (!data || !overlay) return;

    const cards = document.querySelectorAll('.project-card');
    let originalCard = null;
    cards.forEach(card => {
        if(card.getAttribute('onclick') && card.getAttribute('onclick').includes(id)) {
            originalCard = card;
        }
    });
    
    if(!originalCard) return;
    activeOriginal = originalCard;

    document.body.style.overflow = 'hidden';

    const rect = originalCard.getBoundingClientRect();
    const clone = originalCard.cloneNode(true);
    clone.removeAttribute('onclick'); 
    clone.classList.add('is-cloned');
    
    // THE FIX: Inject the correct color into the expanded window
    let dynamicColor = 'var(--accent)'; 
    if (originalCard.querySelector('.gradient-a')) dynamicColor = '#ff00cc';
    else if (originalCard.querySelector('.gradient-b')) dynamicColor = '#00ffcc';
    else if (originalCard.querySelector('.gradient-c')) dynamicColor = '#ff6600';
    else if (originalCard.querySelector('.gradient-d')) dynamicColor = '#00ccff';
    
    clone.style.setProperty('--card-accent', dynamicColor);

    clone.setAttribute('data-lenis-prevent', 'true');
    clone.style.top = rect.top + 'px';
    clone.style.left = rect.left + 'px';
    clone.style.width = rect.width + 'px';
    clone.style.height = rect.height + 'px';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'expanded-content';
    contentDiv.innerHTML = data.body;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerText = "CLOSE";
    closeBtn.className = 'close-btn-float';
    closeBtn.onclick = closeProject;

    clone.appendChild(closeBtn);
    clone.appendChild(contentDiv);

    document.body.appendChild(clone);
    originalCard.classList.add('is-invisible');
    overlay.classList.add('active');

    requestAnimationFrame(() => {
        clone.classList.add('is-expanded');
        activeClone = clone;
    });
};

window.closeProject = function(e) {
    if(e) e.stopPropagation();
    if (!activeClone || !activeOriginal || !overlay) return;

    activeClone.classList.remove('is-expanded');
    overlay.classList.remove('active');

    const rect = activeOriginal.getBoundingClientRect();
    activeClone.style.top = rect.top + 'px';
    activeClone.style.left = rect.left + 'px';
    activeClone.style.width = rect.width + 'px';
    activeClone.style.height = rect.height + 'px';

    setTimeout(() => {
        if(activeClone) activeClone.remove();
        if(activeOriginal && activeOriginal !== document.body) {
            activeOriginal.classList.remove('is-invisible');
        }
        
        document.body.style.overflow = '';
        
        activeClone = null;
        activeOriginal = null;
    }, 500); 
};

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProject();
});

// --- 5. INTERACTIVE RESUME TRIGGER ---
window.openInteractiveResume = function() {
    if (!overlay) return;

    document.body.style.overflow = 'hidden';

    const clone = document.createElement('div');
    clone.className = 'project-card is-cloned';
    
    // Force the popup to act like a full-screen window instantly
    clone.style.top = '0px';
    clone.style.left = '0px';
    clone.style.width = '100vw';
    clone.style.height = '100vh';
    clone.style.transition = 'none'; // Instant pop, no flying animation needed here
    
    // Default color for the resume elements
    clone.style.setProperty('--card-accent', 'var(--accent)');
    clone.setAttribute('data-lenis-prevent', 'true');

    // Create the content wrapper and inject the hidden HTML
    const contentDiv = document.createElement('div');
    contentDiv.className = 'expanded-content';
    contentDiv.innerHTML = document.getElementById('resume-content-source').innerHTML;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerText = "CLOSE";
    closeBtn.className = 'close-btn-float';
    closeBtn.onclick = closeProject;

    clone.appendChild(closeBtn);
    clone.appendChild(contentDiv);

    document.body.appendChild(clone);
    overlay.classList.add('active');

    // Set activeOriginal to document.body so the close function knows it's a special case
    activeOriginal = document.body; 

    // Slight delay to allow CSS to register the new elements before expanding
    requestAnimationFrame(() => {
        clone.classList.add('is-expanded');
        activeClone = clone;
    });
};