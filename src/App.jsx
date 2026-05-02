import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { scholarships, locations } from './scholarshipData';
import './App.css';

// --- FAQ Data ---
const faqData = [
  { 
    question: "What is Scholar Finder?", 
    answer: "Scholar Finder is a safe, legitimate, and web-based platform designed to provide students with reliable, accessible, and well-organized information about scholarships, grants, and other financial assistance programs." 
  },
  { 
    question: "Is this website free to use?", 
    answer: "Yes. Scholar Finder is completely free for all students. Our goal is to promote equal access to education without any financial burden." 
  },
  { 
    question: "What specific features are available on the site?", 
    answer: (
      <>
        <p style={{marginTop: 0}}>You can use the following features:</p>
        <ul style={{marginBottom: 0}}>
          <li style={{marginBottom: '5px'}}><strong>Scholarship Listing:</strong> View all available opportunities.</li>
          <li style={{marginBottom: '5px'}}><strong>College Search & Place Selection:</strong> Find options specific to your school or area.</li>
          <li style={{marginBottom: '5px'}}><strong>Deadline Calendar:</strong> Keep track of important dates.</li>
          <li style={{marginBottom: 0}}><strong>Scholarship Notifications:</strong> Get alerts so you never miss an application window.</li>
        </ul>
      </>
    )
  },
  { 
    question: "What problem does scholar finder aim to solve?", 
    answer: "Scholar finder aims to solve the difficulty students face in finding legitimate, accessible, and updated scholarship opportunities online. Many existing platforms provide outdated or inaccurate information, which leads to wasted time, missed opportunities, and increased financial burden. The website addresses this by offering a reliable and organized source of scholarship information." 
  },
  { 
    question: "How does scholar finder ensure that scholarship information is accurate and reliable?", 
    answer: "Scholar finder ensures accuracy and reliability by collecting scholarship data from trusted sources such as government agencies, schools, NGOs, and private institutions. All information is verified and regularly updated, and each listing includes complete details like qualifications, requirements, deadlines, benefits, and application procedures to maintain transparency and correctness." 
  }
];

function App() {
  const [currentView, setCurrentView] = useState('home'); 
  const [selectedScholarshipId, setSelectedScholarshipId] = useState(null);

  // --- PERSISTENT AUTHENTICATION STATE ---
  const [usersDb, setUsersDb] = useState(() => {
    const savedUsers = localStorage.getItem('usersDb');
    return savedUsers ? JSON.parse(savedUsers) : [{ email: 'student@test.com', password: 'password123' }];
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');
  const [currentUser, setCurrentUser] = useState(() => localStorage.getItem('currentUser') || '');

  useEffect(() => {
    localStorage.setItem('usersDb', JSON.stringify(usersDb));
    localStorage.setItem('isLoggedIn', isLoggedIn);
    localStorage.setItem('currentUser', currentUser);
  }, [usersDb, isLoggedIn, currentUser]);

  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [confirmPasswordInput, setConfirmPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  // --- USER-SPECIFIC DATA STATE ---
  
  // 1. Initialize Saved Scholarships based on exactly who is logged in
  const [savedScholarships, setSavedScholarships] = useState(() => {
    const userKey = localStorage.getItem('currentUser') || 'guest';
    const saved = localStorage.getItem(`savedScholarships_${userKey}`);
    return saved ? JSON.parse(saved) : [];
  });

  // 2. Initialize Notifications based on exactly who is logged in
  const [notifications, setNotifications] = useState(() => {
    const userKey = localStorage.getItem('currentUser') || 'guest';
    const savedNotifs = localStorage.getItem(`notifications_${userKey}`);
    return savedNotifs ? JSON.parse(savedNotifs) : [
      { id: 1, message: "Welcome to Scholar Finder!", date: "Just now", read: false }
    ];
  });

  // Save changes automatically to the SPECIFIC user's local storage key
  useEffect(() => {
    const userKey = currentUser || 'guest';
    localStorage.setItem(`savedScholarships_${userKey}`, JSON.stringify(savedScholarships));
  }, [savedScholarships, currentUser]);

  useEffect(() => {
    const userKey = currentUser || 'guest';
    localStorage.setItem(`notifications_${userKey}`, JSON.stringify(notifications));
  }, [notifications, currentUser]);

  // --- SEARCH & FAQ STATE ---
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All of Nueva Ecija');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  // --- NAVIGATION LOGIC ---
  const navigateTo = (view) => {
    setCurrentView(view);
    setAuthError(''); 
    setEmailInput(''); setPasswordInput(''); setConfirmPasswordInput('');
    window.scrollTo(0, 0);
  };

  const handleViewDetails = (id) => {
    setSelectedScholarshipId(id);
    navigateTo('details');
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // --- SAVE & NOTIFICATION LOGIC ---
  const handleToggleSave = (id, title) => {
    if (!isLoggedIn) {
      setAuthError("Please log in or create an account to save scholarships.");
      navigateTo('login');
      return;
    }

    if (savedScholarships.includes(id)) {
      setSavedScholarships(savedScholarships.filter(savedId => savedId !== id));
    } else {
      setSavedScholarships([...savedScholarships, id]);
      const newNotif = {
        id: Date.now(),
        message: `Successfully added "${title}" to your saved scholarships!`,
        date: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        read: false
      };
      setNotifications([newNotif, ...notifications]);
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;
  const markAsRead = (id) => setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
  const markAllAsRead = () => setNotifications(notifications.map(n => ({ ...n, read: true })));

  // --- UPDATED AUTHENTICATION LOGIC (Swaps data on login/logout) ---
  const handleRegister = (e) => {
    e.preventDefault();
    if (passwordInput !== confirmPasswordInput) { setAuthError("Passwords do not match!"); return; }
    if (usersDb.find(u => u.email === emailInput)) { setAuthError("An account with this email already exists."); return; }
    
    setUsersDb([...usersDb, { email: emailInput, password: passwordInput }]);
    setIsLoggedIn(true);
    setCurrentUser(emailInput);
    
    // Give the new user a clean slate
    setSavedScholarships([]);
    setNotifications([{ id: 1, message: "Welcome to Scholar Finder!", date: "Just now", read: false }]);

    navigateTo('home');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = usersDb.find(u => u.email === emailInput && u.password === passwordInput);
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user.email);
      
      // Instantly load this specific user's saved data
      const saved = localStorage.getItem(`savedScholarships_${user.email}`);
      setSavedScholarships(saved ? JSON.parse(saved) : []);
      
      const savedNotifs = localStorage.getItem(`notifications_${user.email}`);
      setNotifications(savedNotifs ? JSON.parse(savedNotifs) : [{ id: 1, message: "Welcome to Scholar Finder!", date: "Just now", read: false }]);

      navigateTo('home');
    } else {
      setAuthError("Invalid email or password.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser('');
    setIsNotifOpen(false);
    
    // Instantly load the guest data
    const saved = localStorage.getItem(`savedScholarships_guest`);
    setSavedScholarships(saved ? JSON.parse(saved) : []);
    
    const savedNotifs = localStorage.getItem(`notifications_guest`);
    setNotifications(savedNotifs ? JSON.parse(savedNotifs) : [{ id: 1, message: "Welcome to Scholar Finder!", date: "Just now", read: false }]);

    navigateTo('home');
  };

  // --- FILTERING LOGIC ---
  const filteredScholarships = scholarships.filter((scholarship) => {
    const matchesSearch = scholarship.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          scholarship.provider.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = selectedLocation === 'All of Nueva Ecija' || 
                            scholarship.locations.includes(selectedLocation) ||
                            scholarship.locations.includes('All of Nueva Ecija');
    return matchesSearch && matchesLocation;
  });

  const deadlinesOnSelectedDate = scholarships.filter((scholarship) => {
    if (!scholarship.deadline) return false;
    const dbDate = new Date(scholarship.deadline);
    return dbDate.toDateString() === selectedDate.toDateString();
  });

  const selectedScholarshipData = scholarships.find(s => s.id === selectedScholarshipId);
  const savedScholarshipsData = scholarships.filter(s => savedScholarships.includes(s.id));

  return (
    <div className="app-container">
      {/* --- NAVIGATION BAR --- */}
      <nav className="navbar">
        <div className="nav-brand" onClick={() => navigateTo('home')} style={{cursor: 'pointer'}}>
          <span className="logo-icon">🎓</span>
          <span className="logo-text">Scholar Finder</span>
        </div>
        
        <div className="nav-links">
          <button className="nav-link-btn" onClick={() => navigateTo('home')}>Home</button>
          <button className="nav-link-btn" onClick={() => navigateTo('faq')}>FAQ</button>
          
          {isLoggedIn ? (
            <>
              <button className="nav-link-btn" onClick={() => navigateTo('my-scholarships')}>My Scholarships</button>
              
              <div className="notification-wrapper">
                <button className="bell-btn" onClick={() => setIsNotifOpen(!isNotifOpen)}>
                  🔔{unreadCount > 0 && <span className="badge-count">{unreadCount}</span>}
                </button>
                {isNotifOpen && (
                  <div className="notification-dropdown">
                    <div className="dropdown-header">
                      <h3>Alerts</h3>
                      {unreadCount > 0 && <button onClick={markAllAsRead} className="mark-read-btn">Mark all read</button>}
                    </div>
                    <ul className="notif-list">
                      {notifications.map((notif) => (
                        <li key={notif.id} className={`notif-item ${notif.read ? 'read' : 'unread'}`} onClick={() => markAsRead(notif.id)}>
                          <p>{notif.message}</p>
                          <small>{notif.date}</small>
                          {!notif.read && <span className="unread-dot"></span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <span className="user-greeting">Hi, {currentUser.split('@')[0]}</span>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <button className="nav-link-btn" onClick={() => navigateTo('login')}>Login</button>
              <button className="create-acc-btn" onClick={() => navigateTo('register')}>Create Account</button>
            </>
          )}
        </div>
      </nav>

      {/* --- PAGE: LOGIN --- */}
      {currentView === 'login' && (
        <div className="auth-page">
          <div className="auth-card">
            <h2>Welcome Back</h2>
            <p>Log in to save scholarships and set reminders.</p>
            {authError && <div className="error-box">{authError}</div>}
            <form onSubmit={handleLogin}>
              <div className="form-group"><label>Email</label><input type="email" required value={emailInput} onChange={(e) => setEmailInput(e.target.value)} /></div>
              <div className="form-group"><label>Password</label><input type="password" required value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} /></div>
              <button type="submit" className="auth-submit-btn">Log In</button>
            </form>
            <p className="auth-switch">Don't have an account? <span onClick={() => navigateTo('register')}>Sign up here</span></p>
          </div>
        </div>
      )}

      {/* --- PAGE: REGISTER --- */}
      {currentView === 'register' && (
        <div className="auth-page">
          <div className="auth-card">
            <h2>Create an Account</h2>
            <p>Join to track your deadlines and applications.</p>
            {authError && <div className="error-box">{authError}</div>}
            <form onSubmit={handleRegister}>
              <div className="form-group"><label>Email</label><input type="email" required value={emailInput} onChange={(e) => setEmailInput(e.target.value)} /></div>
              <div className="form-group"><label>Password</label><input type="password" required value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} /></div>
              <div className="form-group"><label>Confirm Password</label><input type="password" required value={confirmPasswordInput} onChange={(e) => setConfirmPasswordInput(e.target.value)} /></div>
              <button type="submit" className="auth-submit-btn">Create Account</button>
            </form>
            <p className="auth-switch">Already have an account? <span onClick={() => navigateTo('login')}>Log in here</span></p>
          </div>
        </div>
      )}

      {/* --- PAGE: HOME DASHBOARD --- */}
      {currentView === 'home' && (
        <>
          <section className="hero">
            <div className="hero-content">
              <h1>Find Money for College in Nueva Ecija</h1>
              <p>A Safe and Legitimate Scholarship Information Website</p>
              <div className="hero-search-box">
                <input type="text" placeholder="Search by scholarship name or provider..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button className="hero-btn">Search</button>
              </div>
            </div>
          </section>

          <div className="content-wrapper">
            <aside className="sidebar">
              <div className="sidebar-widget">
                <h3>📍 Filter by Location</h3>
                <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)} className="location-select">
                  {locations.map((loc, index) => <option key={index} value={loc}>{loc}</option>)}
                </select>
              </div>
              <div className="sidebar-widget">
                <h3>📅 Deadline Calendar</h3>
                <div className="calendar-wrapper">
                  <Calendar onChange={setSelectedDate} value={selectedDate} />
                </div>
                <div className="deadline-alerts">
                  <h4>Due on {selectedDate.toLocaleDateString()}:</h4>
                  {deadlinesOnSelectedDate.length > 0 ? (
                    <ul className="due-list">
                      {deadlinesOnSelectedDate.map(scholarship => <li key={scholarship.id}>{scholarship.title}</li>)}
                    </ul>
                  ) : <p className="no-due">No deadlines on this date.</p>}
                </div>
              </div>
            </aside>

            <main className="results-area">
              <div className="results-header">
                <h2>Matching Scholarships ({filteredScholarships.length})</h2>
              </div>
              <div className="scholarship-grid">
                {filteredScholarships.length > 0 ? (
                  filteredScholarships.map((scholarship) => (
                    <div key={scholarship.id} className="scholarship-card">
                      <div className="card-main">
                        <h2 className="card-title">{scholarship.title}</h2>
                        <p className="card-provider">{scholarship.provider}</p>
                        <div className="card-tags">
                          <span className="tag tag-location">{scholarship.locations.join(', ')}</span>
                          <span className="tag tag-type">{scholarship.type}</span>
                        </div>
                        <div className="card-details">
                          <p><strong>Amount:</strong> {scholarship.amount}</p>
                          <p className="deadline-text"><strong>Deadline:</strong> {scholarship.deadline ? scholarship.deadline : "TBA"}</p>
                        </div>
                      </div>
                      <div className="card-action">
                        <button onClick={() => handleViewDetails(scholarship.id)} className="apply-btn">View Details</button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="no-results"><h3>No exact matches found.</h3><p>Try clearing your search.</p></div>
                )}
              </div>
            </main>
          </div>
        </>
      )}

      {/* --- PAGE: MY SCHOLARSHIPS DASHBOARD --- */}
      {currentView === 'my-scholarships' && (
        <div className="content-wrapper" style={{ flexDirection: 'column', maxWidth: '900px', margin: '40px auto' }}>
          <div className="results-header" style={{ marginBottom: '20px' }}>
            <h2 style={{ fontSize: '28px', color: '#1b3b85' }}>My Saved Scholarships ({savedScholarships.length})</h2>
            <p style={{ color: '#555' }}>Manage and track the scholarships you are interested in applying for.</p>
          </div>
          <div className="scholarship-grid">
            {savedScholarshipsData.length > 0 ? (
              savedScholarshipsData.map((scholarship) => (
                <div key={scholarship.id} className="scholarship-card">
                  <div className="card-main">
                    <h2 className="card-title">{scholarship.title}</h2>
                    <p className="card-provider">{scholarship.provider}</p>
                    <div className="card-tags">
                      <span className="tag tag-location">{scholarship.locations.join(', ')}</span>
                      <span className="tag tag-type">{scholarship.type}</span>
                    </div>
                  </div>
                  <div className="card-action" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <button onClick={() => handleViewDetails(scholarship.id)} className="apply-btn">View Details</button>
                    <button onClick={() => handleToggleSave(scholarship.id, scholarship.title)} className="save-btn active" style={{ padding: '10px', fontSize: '12px' }}>Remove</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="auth-card" style={{ maxWidth: '100%', padding: '60px', marginTop: '20px' }}>
                <h3 style={{ fontSize: '22px', color: '#333' }}>You haven't saved any scholarships yet.</h3>
                <button onClick={() => navigateTo('home')} className="apply-btn" style={{marginTop: '20px'}}>Browse Scholarships</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* --- PAGE: SCHOLARSHIP DETAILS --- */}
      {currentView === 'details' && selectedScholarshipData && (
        <div className="details-page-wrapper">
          <div className="details-container">
            <button className="back-btn" onClick={() => navigateTo('home')}>← Back to Results</button>
            <div className="details-header-card">
              <h1>{selectedScholarshipData.title}</h1>
              <p className="details-provider-large">Provided by: <strong>{selectedScholarshipData.provider}</strong></p>
              <div className="details-quick-info">
                <span>📍 {selectedScholarshipData.locations.join(', ')}</span>
                <span>🎓 {selectedScholarshipData.type}</span>
                <span>💰 {selectedScholarshipData.amount}</span>
                <span className="details-deadline">📅 Due: {selectedScholarshipData.deadline || "TBA"}</span>
              </div>
            </div>
            
            <div className="details-body-card">
              <div className="details-section">
                <h3>Description</h3>
                <p>{selectedScholarshipData.description || "No description provided."}</p>
              </div>

              {/* ONLY shows if the scholarship has partnerScholarships (like NEUST) */}
              {selectedScholarshipData.partnerScholarships && (
                <div className="details-section">
                  <h3>Scholarships</h3>
                  <ul>
                    {selectedScholarshipData.partnerScholarships.map((schol, index) => (
                      <li key={index}>{schol}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* ONLY shows if the scholarship has qualifications */}
              {selectedScholarshipData.qualifications && (
                <div className="details-section">
                  <h3>Qualifications</h3>
                  <ul>
                    {selectedScholarshipData.qualifications.map((qual, index) => (
                      <li key={index}>{qual}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* ONLY shows if the scholarship has requirements */}
              {selectedScholarshipData.requirements && (
                <div className="details-section">
                  <h3>Requirements to Apply</h3>
                  <ul>
                    {selectedScholarshipData.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="details-footer">
              <a href={selectedScholarshipData.link} target="_blank" rel="noreferrer" className="official-link-btn">Go to Official Application Page</a>
              <button className={`save-btn ${savedScholarships.includes(selectedScholarshipData.id) ? 'active' : ''}`} onClick={() => handleToggleSave(selectedScholarshipData.id, selectedScholarshipData.title)}>
                {savedScholarships.includes(selectedScholarshipData.id) ? '★ Saved to My Scholarships' : '☆ Add to My Scholarships'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- PAGE: FAQ PAGE --- */}
      {currentView === 'faq' && (
        <div className="faq-page">
          <div className="faq-container">
            <h1 className="faq-title">Frequently Asked Questions</h1>
            <div className="faq-list">
              {faqData.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${openFaqIndex === index ? 'open' : ''}`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="faq-question">
                    {faq.question}
                    <span className="faq-icon">{openFaqIndex === index ? '−' : '+'}</span>
                  </div>
                  <div className="faq-answer">
                    <div style={{paddingBottom: '20px'}}>{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;
