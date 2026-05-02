// src/scholarshipData.js

export const locations = [
    "All of Nueva Ecija", "Cabanatuan", "Cabiao", "Carranglan", "Gapan", 
    "General Tinio", "Peñaranda", "San Antonio", "San Isidro", "San Leonardo", "Sto. Domingo"
  ];
  
  export const scholarships = [
    {
      id: 1,
      title: "NEUST Scholarship and Financial Assistance Office",
      provider: "NEUST",
      locations: ["All of Nueva Ecija"],
      type: "College",
      amount: "Varies",
      deadline: "2026-05-15",
      link: "https://www.facebook.com/share/1SYkEZCuNc/",
      description: "The social media platform of NEUST provides and share information about upcoming scholarships that could help students financially. To check for more informations: You may click the link below, it will direct you on the official page. These are the scholarships that NEUST is working with:",
      // NEW: Replaced qualifications and requirements with this list
      partnerScholarships: [
        "BDB Law Foundation Scholarship Program",
        "Tulong Dunong Program",
        "Tertiary Education Subsidy",
        "Education for Development",
        "SM Scholarship",
        "Ayala Foundation Scholarship",
        "Aboitiz College Scholarship Program",
        "GBF College Scholarship Program",
        "Megaworld Foundation Scholarship",
        "DOST-SEI Undergraduate Scholarship",
        "OWWA Scholarship Program",
        "CHED Merit Scholarship Program"
      ]
    },
    {
      id: 2,
      title: "CCSP Scholarship",
      provider: "City Government of Cabanatuan",
      locations: ["Cabanatuan"],
      type: "College",
      amount: "Varies",
      deadline: "2026-04-25",
      link: "https://www.facebook.com/share/p/1Hr9dXBjpL/",
      description: "The official scholarship/educational assistance program of the City Government of Cabanatuan, facilitated by Jay Vergara and Myca Vergara. It supports deserving students studying in CHED-accredited colleges and universities in Cabanatuan City.",
      qualifications: [
        "Must be a resident of Cabanatuan City",
        "College Students",
        "Low-Income Family"
      ],
      requirements: [
        "Grades / Certificate of Grades (previous sem or SY)",
        "Registration Form / COR / Proof of Enrollment with ENROLLED",
        "Certificate of Good Moral Character",
        "Barangay Clearance",
        "Barangay Indigency of Parents (both parents in one certificate)",
        "Endorsement Letter from Barangay Leader",
        "Birth Certificate (Local or PSA)"
      ]
    },
    {
      id: 3,
      title: "EMENG Scholarship",
      provider: "EMENG",
      locations: ["San Isidro", "Peñaranda", "General Tinio", "San Antonio", "San Leonardo", "Cabiao", "Gapan"],
      type: "College",
      amount: "Varies",
      deadline: "2026-04-27",
      link: "https://www.facebook.com/share/p/1HxjTz8pgg/",
      description: "Educational assistance within specific area that aims to help students struggling financially.",
      qualifications: [
        "Must be residing in the eligible municipalities",
        "1st Year-4th Year College Students",
        "Any course/program"
      ],
      requirements: [
        "National ID",
        "School ID",
        "Certificate of Registration"
      ]
    },
    {
      id: 4,
      title: "NEECO II Carranglan Scholarship",
      provider: "NEECO II",
      locations: ["Carranglan"],
      type: "College Freshmen",
      amount: "Varies",
      deadline: "2026-04-28",
      link: "https://www.facebook.com/share/1Dz2DKiG37/",
      description: "Offers scholarship for deserving students. It's a grant that can help students who's financially struggling until they graduate.",
      qualifications: [
        "Child of a bona fide MCO coop with no stable source of income",
        "Incoming college freshmen",
        "No grade lower than 85% in any subject and a gwa at least 85%",
        "Passed the entrance exam of any university or college in Nueva Ecija",
        "No relation to any NEECO II - Area 1 Board employee"
      ],
      requirements: [
        "Certificate of Good Standing & Non-Violation of RA 7832 from NEECO II - Area 1",
        "Information Data Sheet with 2x2 ID picture",
        "Copy of PSA-Issued Birth Certificate",
        "Certified True Copy of Form 137 or Certificate of Grades for the last school year",
        "Certified True Copy of Good Moral Character",
        "Barangay Clearance",
        "Certificate of Indigency",
        "Course Syllabus/ Prospectus"
      ]
    },
    {
      id: 5,
      title: "ELJMC Scholarship",
      provider: "ELJMC",
      locations: ["All of Nueva Ecija"],
      type: "SHS Grad / College",
      amount: "Discounts",
      deadline: "2026-04-28",
      link: "https://www.facebook.com/share/1NpjjKaC7u/",
      description: "This offers institutional scholarship and discounts.",
      qualifications: [
        "Bona fide Novo Ecijano",
        "Senior High School graduate or graduating student with a general weighted average of 85% and no grade lower than 80 in any subject."
      ],
      requirements: [
        "Fill out our online pre-application form",
        "Download and print the CAST Application Form",
        "Photocopy of PSA Birth Certificate",
        "Photocopy of Grade 12 SHS Report Card",
        "Barangay Certificate of Indigence",
        "Certificate of Good Moral Character",
        "2pcs 2x2 ID picture (white background with name tag)"
      ]
    },
    {
      id: 6,
      title: "PESO Scholarship",
      provider: "Municipality of Sto. Domingo",
      locations: ["Sto. Domingo"],
      type: "College",
      amount: "Varies",
      deadline: "2026-04-29",
      link: "https://www.facebook.com/share/1Ckkf2rbZY/",
      description: "The Municipality of Sto. Domingo provides financial assistance to deserving college students who are bona fide residents of the town. The program aims to help Sto. Domingo youth finish tertiary education despite financial constraints.",
      qualifications: [
        "Filipino Citizen",
        "GWA at least 85%"
      ],
      requirements: [
        "Grades average must be 88 and above",
        "Combined gross family income of ₱120,000 or Less",
        "SDSYDP Form",
        "Certificate of Residency",
        "Certificate of Registration",
        "Certified true copy of SHS Report Card",
        "Certificate of Good Moral Character from previous school",
        "Copy of latest Tax Exemption Certificate",
        "1x1 Picture"
      ]
    },
    {
      id: 7,
      title: "CHED Merit Scholarship Program (CMSP)",
      provider: "CHED",
      locations: ["All of Nueva Ecija"],
      type: "College Freshmen",
      amount: "Varies",
      deadline: "2026-04-30",
      link: "https://ched.gov.ph/scholarships",
      description: "The CHED Scholarship Program is for the qualified and deserving students entering first year of Tertiary Education whose General Weighted Average (GWA) is at least 96% or its equivalent (for Full Merit Program) and 93%-95% or its equivalent (for Half Merit Program).",
      qualifications: [
        "A Filipino Senior High School graduate with a minimum General Weighted Average (GWA) of 93% or its equivalent",
        "From a family with a combined annual gross income of parents or legal guardian not exceeding ₱500,000"
      ],
      requirements: [
        "Accomplished Online Application Form",
        "Copy of Birth certificate issued by NSO or PSA",
        "Certified true copy of Form 138 (Learner’s Progress Report or SF9)",
        "Financial Proof: Latest Income Tax Return (ITR), Certificate of Tax Exemption/Non-Filer, or Social Case Study Report",
        "Notarized Certificate of Guardianship",
        "Other requirement (PWD ID, Solo Parent ID, etc.) if applicable"
      ]
    },
    {
      id: 8,
      title: "DOST S&T Undergraduate Scholarship",
      provider: "DOST",
      locations: ["All of Nueva Ecija"],
      type: "College",
      amount: "Varies",
      deadline: "2026-05-01",
      link: "https://www.dost.gov.ph",
      description: "The S&T Undergraduate Scholarships Program aims to stimulate and entice talented Filipino youths to pursue lifetime productive careers in science and technology and ensure a steady, adequate supply of qualified S&T human resources which can steer the country towards national progress.",
      qualifications: [
        "Be in the top senior high school students in STEM strand or among the top 5% of non-STEM strand",
        "Have good moral character and health",
        "No prior post-secondary units earned (college or vocational)",
        "Applicants who took or qualified for a previous DOST Scholarship but did not avail are still eligible",
        "Pass the DOST S&T exam"
      ],
      requirements: [
        "Personal Information (Form A) & Household Information Questionnaire (Form B)",
        "Certificate of Good Moral Character (Form C) & Good Health (Form D)",
        "Principal's Certification (Form E1 or E2) & Certificate of Residency (Form F)",
        "Parent's Certification (Form G) & Applicant’s Certification (Form H)",
        "Signed Declaration by applicant and the Parent/Legal Guardian (Form I)",
        "Recent (1”x1”) picture & Photocopy of Birth Certificate",
        "Parent/s recent Income Tax Return / W2 / Employment Contract / BIR Cert. of Exemption / Brgy. Cert. of Indigency"
      ]
    },
    {
      id: 9,
      title: "GSIS Educational Subsidy Program",
      provider: "GSIS",
      locations: ["All of Nueva Ecija"],
      type: "College",
      amount: "Varies",
      deadline: "2026-05-02",
      link: "https://www.gsis.gov.ph/ginhawa-for-all/gsp/",
      description: "GESP is open to all active GSIS members who are permanent in employment status; occupying positions with salary grade 24 or below; and updated in their premium payments. The students must be the members’ children or dependents taking up a four or five-year course.",
      qualifications: [
        "Must be a child of a member, including the child/dependent of solo parent-member or a childless member",
        "An incoming college freshman-dependent who is accepted in or taking up any 4- or 5-year course at schools identified by CHED"
      ],
      requirements: [
        "Duly accomplished GSIS Scholarship Application Form",
        "Certificate of Employment",
        "Certification from the school that the nominated scholar is accepted as incoming college freshman",
        "Dependent’s Birth Certificate",
        "GSIS Print out of Business Partner (BP) Number"
      ]
    },
    {
      id: 10,
      title: "UniFast Tertiary Education Subsidy (TES)",
      provider: "UniFast",
      locations: ["All of Nueva Ecija"],
      type: "College",
      amount: "Partial Cost",
      deadline: "2026-05-02",
      link: "https://unifast.gov.ph/tes.html",
      description: "It is a grant-in-aid program that provides financial assistance to support at least the partial cost of tertiary education, inclusive of education-related expenses. It prioritizes students belonging in lower income households.",
      qualifications: [
        "TES grantee and Beneficiaries of ESGPPA",
        "Students included in the Listahanan 2.0 of the DSWD National Household Targeting Office",
        "Students not included in the Listahanan 2.0 but were ranked based on the estimated per capita household income with documents as proof."
      ],
      requirements: [
        "Certificate of Registration of Enrollment",
        "Assessment of Fees",
        "Photocopy of PWD ID (if applicable)"
      ]
    },
    {
      id: 11,
      title: "Ayala Foundation Scholarship",
      provider: "Ayala Foundation",
      locations: ["All of Nueva Ecija"],
      type: "College (Female)",
      amount: "₱40,000 / year",
      deadline: "2026-05-03",
      link: "https://ayalafoundation.org/programs/",
      description: "This private scholarship program supports deserving female students in public colleges and universities. It provides ₱40,000 per year and is renewable as long as the scholar maintains good academic standing.",
      qualifications: [
        "A female Filipino student",
        "Enrolled and studying in a public university or college",
        "With a General Weighted Average (GWA) of at least 85% and no failing grades",
        "Not a recipient of any other scholarship",
        "Able to demonstrate financial need"
      ],
      requirements: [
        "Proof of Grades: Latest Report Card or Transcript of Records (TOR)",
        "Certificate of Registration (COR): Proof of enrollment for the current semester",
        "Proof of Income: Latest ITR of parents, BIR Tax Exemption Certificate, or a Certificate of Indigency",
        "Good Moral Certificate: Issued by your school’s guidance office",
        "ID Photos: Recent 2×2 photo with a white background"
      ]
    },
    {
      id: 12,
      title: "SM Foundation Scholarship",
      provider: "SM Foundation",
      locations: ["All of Nueva Ecija"],
      type: "College",
      amount: "Full Tuition + Allowance",
      deadline: "2026-05-04",
      link: "https://www.sm-foundation.org",
      description: "A college scholarship includes full tuition for its partner schools, a monthly allowance, and part-time job opportunities during school breaks.",
      qualifications: [
        "A Grade 12 graduate from either public or private schools",
        "A private school applicant holding a Department of Education (DepEd) voucher",
        "A private school applicant who completed Grade 10 in a public high school",
        "A Filipino student with a GWA of at least 92% (or its equivalent) for Grade 12 – 1st semester",
        "From a family with a total annual household income of at most ₱250,000",
        "Enrolled in a course in accounting, information technology, engineering, or education"
      ],
      requirements: [
        "Latest Income Tax Return of parent/s or guardian; or Certificate of Non-Filing Income; or Certificate of Indigency",
        "Latest Grade 12 Report Card",
        "Birth Certificate",
        "Two (2) Copies of recent 2x2 ID pictures",
        "Sketch of residence to the nearest SM Mall"
      ]
    },
    {
      id: 13,
      title: "Megaworld Foundation Scholarship",
      provider: "Megaworld Foundation",
      locations: ["All of Nueva Ecija"],
      type: "College",
      amount: "Full Tuition + Allowance",
      deadline: "2026-05-05",
      link: "https://www.megaworldfoundation.com/scholarship_program",
      description: "Megaworld Foundation’s scholarship covers full tuition and a monthly allowance via a Megaworld Foundation-issued ATM card. They also offer opportunities for volunteer work and careers after graduation within Megaworld and its affiliates.",
      qualifications: [
        "An incoming college freshman with at least 85% average in senior high and passed the entrance exam/admission",
        "An incoming sophomore or junior with a GPA of at least 85% and full-load enrollment",
        "From a family with a combined annual income of at most ₱400,000"
      ],
      requirements: [
        "Income Tax Return (ITR) not exceeding Php 400,000.00 combined gross annual income or BIR Tax Exemption Certificate",
        "Birth certificate",
        "Endorsement letter from the College or University (if available)",
        "Utility bills such as rent, electricity, water, telephone, internet, etc.",
        "2 pcs. - 2X2 I.D. pictures and 2 pcs. - 1X1 I.D. pictures",
        "Photograph of applicant with family/guardian"
      ]
    },
    {
      id: 14,
      title: "Iskolar ng LANDBANK",
      provider: "Landbank",
      locations: ["All of Nueva Ecija"],
      type: "College",
      amount: "Tuition + Allowance",
      deadline: "2026-05-06",
      link: "https://www.landbank.com/about-landbank/iskolar-ng-landbank",
      description: "Iskolar ng LANDBANK program aims to help children and grandchildren of farmers and fishermen in the country’s 60 poorest provinces. The scholarship includes tuition and allowance.",
      qualifications: [
        "A child/grandchild of an agrarian reform beneficiary or small farmer/fisher",
        "Recommended by a LANDBANK client cooperative/association",
        "A top-performing graduating high school student endorsed by your principal",
        "Not receiving other scholarships",
        "From a family with a total annual income of at most ₱300,000"
      ],
      requirements: [
        "Copy of grades with school seal",
        "Letter of recommendation from school principal",
        "500 word essay (course to be taken and How does Landbank help in nation building)",
        "PSA/NSO-certified Birth Certificate",
        "Certification from the Municipal Agriculture Office",
        "Proof of Income",
        "Certificate of Good Moral Character and Barangay Clearance",
        "Two (2) 2x2 ID pictures"
      ]
    },
    {
      id: 15,
      title: "Nitori Scholarship",
      provider: "Nitori Philippines",
      locations: ["All of Nueva Ecija"],
      type: "College (2nd-4th Year)",
      amount: "Varies",
      deadline: "2026-05-07",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfiuFA2uCeb7ykzfLyWFHBcXP9y_jww13pXK6b4sx23GjyLqw/viewform",
      description: "The NITORI Philippines Scholarship provides financial assistance to eligible students, helping them pursue their academic goals. It supports students by reducing financial barriers, allowing them to focus on their studies and achieve success.",
      qualifications: [
        "Must be an incoming 2nd-year, 3rd-year, or 4th-year student for Academic Year 2025-2026",
        "Must maintain a GPA of 2.00 or higher and not have a grade lower than 2.25 in any major subject",
        "Must follow the regular course load in the curriculum with no failing/dropped grades",
        "Must come from a family with a total yearly income of no more than ₱400,000.00",
        "Must not be a working student, shiftee, or irregular student",
        "Must have good moral character and not receiving any other scholarship"
      ],
      requirements: [
        "Personal Data Sheet or Application Form",
        "Copy of Grades",
        "Current Registration Card",
        "Resume",
        "Parents’ or Guardian’s ITR or Certificate of Indigency from Barangay"
      ]
    },
    {
      id: 16,
      title: "Panasonic Scholarship",
      provider: "Panasonic Holdings Corporation",
      locations: ["All of Nueva Ecija"],
      type: "College",
      amount: "Varies",
      deadline: "2026-05-08",
      link: "https://www.panasonic.com/ph/corporate/sustainability.html",
      description: "Panasonic Holdings Corporation was set up to help society and make people’s lives better. Their slogan shows they want to keep making people happy even as things change.",
      qualifications: [
        "Must be a Filipino citizen",
        "Must be a full-time student enrolled in a state college or university",
        "Must be a college student",
        "Must be graduating within the next two years"
      ],
      requirements: [
        "2x2 photo",
        "Updated Curriculum Vitae",
        "Certified True Copy of Grades",
        "Transcript of Records",
        "Recommendation Letter from the Dean",
        "Photocopy School ID"
      ]
    },
    {
      id: 17,
      title: "CLFI Scholarship",
      provider: "Cebuana Lhuillier Foundation",
      locations: ["All of Nueva Ecija"],
      type: "College",
      amount: "Varies",
      deadline: "2026-05-09",
      link: "https://www.cebuanafoundation.org/education.php",
      description: "The foundation believes in empowering people through education and prioritizes inclusivity in its programs.",
      qualifications: [
        "Must be a Filipino citizen",
        "The applicant or relatives must be a Cebuana Lhuillier client with an active Microsavings account",
        "Should be enrolled or about to enroll in a public college or university taking approved degree programs (Accountancy, Business, HRM, Engineering, Architecture, Psychology, Social Work)",
        "Must have a total family income not exceeding ₱350,000 per year",
        "GWA of at least 85%"
      ],
      requirements: [
        "Proof of being a Cebuana Lhuillier client",
        "Proof of total family income (Recent Company Payslip)",
        "A copy of the latest grades showing a GWA of at least 85%",
        "A Certificate of Good Moral Character",
        "A Certificate of Enrollment or Registration Form",
        "A copy of the University or College grading system"
      ]
    },
    {
      id: 18,
      title: "Security Bank Foundation Scholarship",
      provider: "Security Bank Foundation",
      locations: ["All of Nueva Ecija"],
      type: "College",
      amount: "Varies",
      deadline: "2026-05-10",
      link: "https://www.securitybank.com/foundation/sbfi-scholars-for-better-communities/",
      description: "Aims to provide educational assistance to underprivileged but deserving students. SBFI strives to ensure a better quality of education for the Filipino youth.",
      qualifications: [
        "Applicants must have a minimum tenure of 2 years from permanency status",
        "Applicants should possess a good employment record with no disciplinary issues",
        "A performance appraisal rating of at least average is required",
        "Applicants must have a minimum GWA of 83%",
        "There should be no other family member currently benefiting from the scholarship",
        "Applicants must not have any other existing scholarship"
      ],
      requirements: [
        "Scholarship application form",
        "Latest Grade 12 Report Card",
        "Proof of Financial Status",
        "Proof of Admission",
        "Birth Certificate",
        "Portrait of Photo of applicant"
      ]
    },
    {
      id: 19,
      title: "Grab Scholar Scholarship",
      provider: "Grab",
      locations: ["All of Nueva Ecija"],
      type: "College Freshmen",
      amount: "Full Tuition + Allowance",
      deadline: "2026-05-11",
      link: "https://www.grab.com/ph/community/grab-for-good-grabscholar/",
      description: "The Grabscholar College Scholarship gives full support, free tuition, monthly allowance, and learning opportunities. It’s for Filipino students entering college who have good grades and want to take courses in STEM (not medical), Business, or Sustainability.",
      qualifications: [
        "Filipino citizenship",
        "Incoming first-year college student for Academic Year 2025–2026",
        "Enrolled or planning to enroll in any recognized university or college in the Philippines",
        "Must have obtained a General Average of 90% or above in Grade 12",
        "Must not have received any disciplinary sanctions during senior high school",
        "Must not be a recipient of any other scholarship or educational assistance"
      ],
      requirements: [
        "Birth Certificate",
        "Grade 12 Report Card",
        "Acceptance Letter from College/University",
        "Certificate of Good Moral Standing (from Senior High School)"
      ]
    },
    {
      id: 20,
      title: "Bagong Pilipinas Scholarship",
      provider: "Government-Funded",
      locations: ["All of Nueva Ecija"],
      type: "College Freshmen",
      amount: "Varies",
      deadline: "2026-05-12",
      link: "https://governmentph.com/bpmsp/",
      description: "The BPMSP is a government-funded program that supports excellent students who want to take college courses in priority fields that the Philippines badly needs.",
      qualifications: [
        "Must be a Filipino citizen",
        "Must be an Incoming freshman enrolling in a CHED-recognized HEI offering a BPMSP priority program",
        "Must be a Senior High School graduate with High Honors or Highest Honors (GWA of 95% or higher)",
        "TESDA National Certificate (NC) holders may apply if they meet the Honors requirement and have no college units",
        "Must belong to a low- to middle-income household",
        "Must have good moral character and not receiving another national government scholarship"
      ],
      requirements: [
        "Accomplished BPMSP Application Form",
        "Copy of Birth Certificate issued by NSO or PSA",
        "Certificate of Ranking or Honors from Senior High School",
        "TESDA National Certificate (NC) and certificate of medals if applicable",
        "Honorable Dismissal from Senior High School",
        "Proof of household income, as required by CHED"
      ]
    },
    {
      id: 21,
      title: "Charity First Foundation Scholarship",
      provider: "Charity First Foundation",
      locations: ["All of Nueva Ecija"],
      type: "College",
      amount: "Varies",
      deadline: "2026-05-13",
      link: "https://www.charityfirst.ph/",
      description: "The Charity First Foundation Scholarship is one of the flagship programs offered by the organization. It aims to provide financial assistance and support to deserving students who demonstrate academic potential and financial need.",
      qualifications: [
        "Enrolled/will enroll in partner universities",
        "Not a recipient of any scholarship programs",
        "Must have a GWA at least 85%"
      ],
      requirements: [
        "2x2 ID Picture",
        "Latest School Registration Form",
        "Autobiography",
        "Latest Copy of Utility Bills",
        "Printed Family and House Picture",
        "PSA Birth Certificate",
        "School and Government ID's",
        "Certificate of Indigency"
      ]
    },
    {
      id: 22,
      title: "Jenra Foundation Scholarship",
      provider: "JENRA Foundation Inc.",
      locations: ["All of Nueva Ecija"],
      type: "College",
      amount: "Varies",
      deadline: "2026-05-12",
      link: "https://www.facebook.com/share/p/1NuZc7kM9N/",
      description: "The JENRA Foundation Inc. offers scholarships through its scholarship program to support passionate and deserving students in funding their college education.",
      qualifications: [
        "Grade 12 graduates from public and private schools in the areas covered.",
        "With General Weighted Average grade of at least 88% or its equivalent to Grade 12 (final term).",
        "With a total household income of at most ₱180,000 per year"
      ],
      requirements: [
        "Parent's/Guardian's Proof of Income",
        "Resumé or Bio Data",
        "Latest grade 12 report card",
        "Birth Certificate",
        "2x2 ID picture",
        "500 word essay",
        "Sketch of Home"
      ]
    }
  ];
