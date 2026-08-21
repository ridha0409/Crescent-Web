// CDOE Team data — faculty profiles (converted from the official Faculty Profile PDFs),
// technical team and non-teaching staff.
//
// Each faculty entry drives two things:
//   1. the card shown on /about/cdoe-team
//   2. the full profile page shown on /about/cdoe-team/:slug
//
// `sections` is a generic list so every profile can carry whatever the PDF had.
// Supported section shapes:
//   { title, type: 'list',  items: [string] }
//   { title, type: 'text',  body: [string] }
//   { title, type: 'table', columns: [string], rows: [[string]] }
//   { title, type: 'groups', groups: [{ heading, items: [string] }] }

// Faculty portraits, extracted from the official Faculty Profile documents and
// stored locally so the site does not depend on any external host.
import photoThowseaf from '../assets/faculty/dr-s-thowseaf.jpg'
import photoAgalya from '../assets/faculty/dr-v-agalya.jpg'
import photoJeslin from '../assets/faculty/dr-e-jeslin-renjith.jpg'
import photoMaheswari from '../assets/faculty/dr-p-maheswari.jpg'
import photoManjula from '../assets/faculty/mrs-s-manjula.jpg'

export const faculty = [
  /* ------------------------------------------------------------------ */
  /* MBA                                                                 */
  /* ------------------------------------------------------------------ */
  {
    slug: 'dr-s-thowseaf',
    photo: photoThowseaf,
    programme: 'MBA',
    name: 'Dr. S. Thowseaf',
    designation: 'Assistant Professor',
    role: 'Assistant Director, CDOE',
    employment: 'Regular',
    qualification: 'B.Tech., M.B.A., Ph.D., (S.E.T. Qualified)',
    email: 'thowseaf@crescent.education',
    stats: [
      ['32', 'Publications'],
      ['18', 'Conference Papers'],
      ['13', 'Seminars Attended'],
      ['04', 'Programmes Conducted'],
    ],
    profileLink: {
      label: 'Published articles on Academia.edu',
      url: 'https://alagappauniversity.academia.edu/ThowseafAhamed',
    },
    education: [
      ['Ph.D.', 'Management', '2019', 'Alagappa University'],
      ['M.B.A.', 'H.R. and Finance', '2015', 'Anna University'],
      [
        'B.Tech.',
        'Electronics and Communication Engineering',
        '2013',
        'B. S. Abdur Rahman Crescent Institute of Science and Technology',
      ],
    ],
    experience: [
      [
        'H.O.D & Assistant Professor',
        'Quaide Milleth College for Men',
        'Jan 2019 – Jul 2022',
        '3.6 years',
      ],
      [
        'N.S.S. Programme Officer',
        'Quaide Milleth College for Men',
        'Jul 2019 – Jul 2022',
        '3 years',
      ],
    ],
    courses: [
      'Statistics for Decision Making',
      'Business Communication',
      'Business Analytics',
      'Resource Management Technique',
      'Management Information System',
      'Supply Chain Management',
    ],
    research: [
      'International Business Management',
      'Export-Import',
      'Marketing',
      'Human Resource',
      'Finance',
    ],
    sections: [
      {
        title: 'Publications',
        type: 'table',
        columns: ['S.No', 'Title of the Article', 'Journal / Publisher', 'ISSN / ISBN, Month & Year', 'Scope', 'I.F.'],
        rows: [
          ['1', 'Zero Defect Software Development & Exporting', 'IJRCMEAS, Vol. 1, Special Issue, Pg. 293-296', 'ISSN 2454-6593, Jan 2016', 'National', '–'],
          ['2', 'Better Export for Better India', 'Bonfring Pub., Vol. 1, Pg. 81-87', 'ISBN 978-93-85477-53-9, Jan 2016', 'National', '–'],
          ['3', 'Factors Influencing Export – A Conceptual Review', 'IJM, Vol. 7, Issue 2, Pg. 150-158', 'ISSN 0976-6502, Feb 2016', 'International', '8.19'],
          ['4', 'An Overview of Payment Method and Arranging Export Finance', 'SIJM, Vol. 3, Special Issue, Pg. 104-107', 'ISSN 2321-4343, Feb 2016', 'International', '–'],
          ['5', 'A Study on Export Entrepreneurs and Collective Opinion for Successful Export Marketing', 'Shanlax Pub., Vol. 3, Pg. 300-307', 'ISBN 978-81-929458-4-2, Mar 2016', 'National', '–'],
          ['6', 'Marine Insurance – Legal Aspect in India', 'Mayas Publication, Pg. 147-153', 'ISBN 987-81-929581-7-0, Mar 2016', 'National', '–'],
          ['7', 'A Study on GST Implementation and Its Impact on Indian Industrial Sectors and Export', 'IJMRSS, Vol. 3, Issue 2, Pg. 27-30', 'ISSN 2394-6407, Apr 2016', 'International', '–'],
          ['8', 'An Inclusive Review on Entrepreneurial Triggers in Context to India', 'AIM, Vol. 3, Pg. 23-29', 'ISBN 978-81-9259-745-4, Aug 2016', 'National', '–'],
          ['9', 'A Conceptual Model for Social Media Knowledge Sharing', 'Souvenir Pub., Pg. 6', 'Aug 2016', 'International', '–'],
          ['10', 'Agricultural and Processed Food Products Export Contribution to Indian GDP and Future Trends', 'GJRA, Vol. 5, Issue 9, Pg. 26-28', 'ISSN 2277-8160, Sep 2016', 'International', '3.62'],
          ['11', 'An Analysis on Indian FOREX for Examining Investment and Trade', 'IJARMSS, Vol. 5, Issue 9, Pg. 47-54', 'ISSN 2278-6236, Sep 2016', 'International', '6.28'],
          ['12', "India's Agricultural Products Export Prospects in selected Middle East Countries", 'IJIKC, Vol. 2, Issue 11, Pg. 26-30', 'ISSN 2454-2415, Nov 2016', 'International', '–'],
          ['13', 'Integrated Farming a Way Forward For Better Environment and Economy', 'JIARM, Vol. 4, Issue 10, Pg. 33-39', 'ISSN 2320-5083, Nov 2016', 'International', '3.11'],
          ['14', 'Causes for Decentralization and Its upshot and Poverty in India', 'JBM&SSR, Vol. 5, Issue 11, Pg. 328-335', 'ISSN 2319-5614, Nov 2016', 'International', '–'],
          ['15', 'Export Performance of Special Economic Zones in India and its Economic Contribution', 'IJIRMS, Vol. 1, Issue 10, Pg. 24-28', 'ISSN 2455-7188, Nov 2016', 'International', '4.10'],
          ['16', 'An Investigative Study on Stock Performance of Selected Companies in Food and Beverage Sector Listed Under BSE', 'ZIJBEMR, Vol. 7, Pg. 59-70', 'ISSN 2249-8826, Apr 2017', 'International', '4.13'],
          ['17', 'Does Tamil Nadu have Untapped Potential with Respect to Processed Fruit Production', 'IJCMS, Vol. 8, Special Issue, Pg. 1-9', 'ISSN 2249-0310, July 2017', 'National', '2.6'],
          ['18', 'Impact of Glass Ceiling on Women Employees in Hospitals', 'JASC, Vol. 2229-4686, Issue 4, Pg. 11-18', 'ISSN 2231-4172, Oct 2017', 'International', '3.19'],
          ['19', 'Elucidating Challenges Faced by the Differently Abled Women During Education In India', 'Dream Makers Publishing House', 'ISBN 978-81-935866-0-0, Jan 2018', 'National', '–'],
          ['20', 'Elucidating Water Supply, Demand and Contamination in Tamil Nadu', 'SIJM, Vol. 5, Special Issue, Pg. 209-216', 'ISSN 2321-4643, Mar 2018', 'International', '2.08'],
          ['21', 'Impact of demonetization and G.S.T. on stock price of automobile sector', 'ZENITH International Journal of Multidisciplinary Research, Vol. 8 (11), Pg. 35-44', 'ISSN 2231-5780, Nov 2018', 'International', '6.479'],
          ['22', 'Expounding The Impact Of AI On IOT And Explicating A Conceptualized Framework', 'Global Journal of Research and Analysis, Vol. 8, Issue 4, Pg. 1-2', 'ISSN 2277-8160, Apr 2019', 'International', '–'],
          ['23', 'Challenges Faced by Students of PULC Twinning Programme', 'International Journal for Research in Engineering Application & Management, Special Issue ICIIPM-2019, Pg. 112-114', 'ISSN 2454-9150, May 2019', 'International', '6.466'],
          ['24', 'Aftermath Effect Of GST On Consumer Purchasing Power', 'Restaurant Business, Vol. 118, Issue 5, Pg. 122-131', 'ISSN 0097-8043, May 2019', 'International', '5.3'],
          ['25', 'Reconnoitering the Impact of Economic Variables on Fruit Pulp Export from Tamil Nadu', 'International Journal of Recent Technology and Engineering (IJRTE), Vol. 8, Issue 4S5, Pg. 58-65', 'ISSN 2277-3878, Dec 2019', 'International', '6.04'],
          ['26', "What is wanted? Lockdown or Vaccination and treatment: Investigating the impact of COVID-19 on India's Population", 'The International Journal of Analytical and Experimental Modal Analysis, Vol. 8, Issue 7, Pg. 1570-1581', 'ISSN 0886-9367, Jul 2020 (UGC Approved)', 'International', '6.3'],
          ['27', 'Estimating The Efficiency Of Machine Learning In Forecasting Harvesting Time Of Rice', 'International Journal of Modern Agriculture, Vol. 10, Issue 2, Pg. 1930-1937', 'ISSN 2305-7246, July 2021', 'International', '–'],
          ['28', 'An Investigative Study: Is IoT An Intellectual Idea For Industries Of 21st Centuries', 'IT in Industry, Vol. 9, No. 2, Pg. 1494-1505', 'ISSN (Print) 2204-0595 / (Online) 2203-1731, July 2021', 'International', '–'],
          ['29', 'Integrated solution for optimal generation operation efficiency through dynamic economic dispatch on Software Technological Park of India', 'Materials Today: Proceedings, Pg. 1-4', 'DOI 10.1016/j.matpr.2021.05.019', 'International', '–'],
          ['30', "An Exploratory Study On Cumulative Performance Index Of Inflation At Rural And Urban Areas Of India And Its Influence On India's Inflation", 'Turkish Journal of Physiotherapy and Rehabilitation, Vol. 32, Issue 3, Pg. 15147-15151', 'ISSN 2651-4451 / e-ISSN 2651-446X', 'International', '–'],
          ['31', "COVID-19 Pandemic's Effect On India's GDP – An Investigative Study With Industrial Sector Performance", 'Turkish Journal of Physiotherapy and Rehabilitation, Vol. 32, Issue 3, Pg. 15128-15135', 'ISSN 2651-4451 / e-ISSN 2651-446X', 'International', '–'],
          ['32', 'An Empirical Analysis on Different Modes of Learning System', 'Research and Reflections on Education, Vol. 21, Issue 1A, Pg. 126-149', 'ISSN 0974-648x (UGC Care Approved)', 'National', '–'],
        ],
      },
      {
        title: 'Papers Presented in National & International Conferences',
        type: 'table',
        columns: ['S.No', 'Title of the Article', 'Name of the Programme', 'Organizer', 'Date', 'Scope'],
        rows: [
          ['1', 'Present Trends In Green Accounting Management System And Its Impact On Current And Future Scenario', 'International Conference on Advance Management Challenges in Knowledge Era', 'Jamal Institute of Management', '8th & 9th Jan 2015', 'International'],
          ['2', 'Better Export for Better India', 'Indian Strategies in Functional Mgt.', 'JP College of Arts & Science', '20th Jan 2016', 'National'],
          ['3', 'Zero Defect Software Development – A Roadmap to Success', 'Emerging Trends in Global Accounting and Finance', 'Kristu Jayanti College', '7th & 8th Jan 2016', 'International'],
          ['4', 'Going Green in Export Production of Agricultural Allied Products', 'Foundation of Human Excellence', 'Loyola College', '3rd-5th Feb 2016', 'International'],
          ['5', 'An Overview of Payment Method and Arranging Export Finance', 'Recent Trends in Management Research', 'Alagappa University', '19th Feb 2016', 'National'],
          ['6', 'Factors Influencing Export – A Conceptual Overview', 'Advanced Management Challenges in Knowledge Era', 'Jamal Institute of Management', '26th & 27th Feb 2016', 'International'],
          ['7', 'A Conceptual Model for Social Media Knowledge Sharing', 'Recent Trends in Business and Management', 'J.J. College of Arts and Science', '5th & 6th Aug 2016', 'International'],
          ['8', 'An Inclusive Review on Entrepreneurial Triggers in Context to India', 'Entrepreneurial Resurgence and Innovations', 'Alagappa University', '19th Aug 2016', 'National'],
          ['9', 'Aftermath Effect of GST on Consumer Purchasing Power', 'Impact of Goods And Services Tax on Indian Industries', 'Dr. M. Guru-Samy Management Research Foundation Trust', '24th Sep 2016', 'International'],
          ['10', 'An Investigative Study on Stock Performance of Selected Companies in Food & Beverage Sector Listed Under BSE', 'Intelligence and Innovation in Business Management', 'Ananda College', '1st Mar 2016', 'National'],
          ['11', 'Revisiting strategies for SHG in Indian Context', 'Payment Banks and Small Finance Banks – New Vistas for Innovative Banking', 'Alagappa University – Department of Bank Management', '16th Dec 2017', 'National'],
          ['12', 'Finance And Banking', 'Impact of Demonetization and GST on Stock Price of Automobile Sector', 'Alagappa University – Department of Commerce', '1st Feb 2018', 'International'],
          ['13', 'Sustainable Green Business', 'Elucidating Water Supply, Demand and Contamination in Tamil Nadu', 'Alagappa University – Alagappa Institute of Management', '26th & 27th Mar 2018', 'National'],
          ['14', 'Reconnoitering the Impact of Economic Variables on Fruit Pulp Export from Tamil Nadu', 'Emerging trends in intelligent Information technologies / applied mathematics and business management', 'The Quaide Milleth College – Dept. of Comp. Sci., Business Admin. and Math.', '7th & 8th Jan 2019', 'International'],
          ['15', 'Impact of Digital Marketing on Indian Industries', 'Facets of Digital Marketing', 'Alagappa University – Alagappa Institute of Management', '21st & 22nd Feb 2019', 'National'],
          ['16', 'Aftermath effect of GST on Consumer Purchasing Power', 'Depth and Expanse of Online marketing Mettle', 'Alagappa University – Alagappa Institute of Management', '1st & 2nd Aug 2019', 'National'],
          ['17', 'An Empirical Analysis on Different Modes of Learning System', 'E-Total (Emerging Trends in Online Teaching, Assessment and Learning)', 'Tamil Nadu Open University', '24th & 25th February 2023', 'International'],
          ['18', 'Impact of Utilizing A.I. on Business', 'Management, Accounting, Banking, Economics and business research for Sustainable development', 'B. S. Abdur Rahman Crescent Institute of Science and Technology', '1st & 2nd March 2023', 'International'],
        ],
      },
      {
        title: 'Seminar / Symposium Attended',
        type: 'table',
        columns: ['S.No', 'Name of the Programme', 'Organizer', 'Scope', 'Date'],
        rows: [
          ['1', 'CRESCIENCE', 'B.S. Abdur Rahman University', 'State', '19th Oct 2010'],
          ['2', 'Safety and Security of Women and Girls in Public Spaces: Planning & Designing Mechanism', 'Alagappa University', 'National', '4th–5th Dec 2015'],
          ['3', 'Technology Trends in Indian Banking Sector', 'Alagappa University', 'National', '25th Feb 2016'],
          ['4', 'The Dynamics of Data Analysis & Research Publications', 'Alpha Arts & Science College', 'National', '3rd Mar 2016'],
          ['5', 'Online Marketing of Services in the Globalization Era', 'Sourashtra College', 'National', '15th Mar 2016'],
          ['6', 'Emerging Trends in Indian Insurance Sector', 'Alagappa University', 'National', '23rd Mar 2016'],
          ['7', 'Empowering Teachers to Prepare Professionals of Tomorrow', 'Alagappa University', 'National', '21st Aug 2016'],
          ['8', 'Emerging Trends in Social Science Research', 'Alagappa University', 'International', '1st Sep 2016'],
          ['9', 'Components and Methods of Qualitative Research', 'Alagappa University', 'National', '21st & 22nd Sep 2016'],
          ['10', 'Challenging Business Intelligence and Innovation Management', 'Alagappa University', 'National', '26th Sep 2016'],
          ['11', 'Customer Service Trends in Global Logistics', 'Alagappa University', 'International', '19th Jan 2018'],
          ['12', 'A Road Map To Excellence In Higher Education', 'The Quaide Milleth College For Men', 'National', '9th Jan 2020'],
          ['13', 'Entrepreneurship & Marketing', 'The Quaide Milleth College For Men', 'National', '18th February 2020'],
        ],
      },
      {
        title: 'Orientation / Training Programmes Attended',
        type: 'list',
        items: [
          'Marketing Strategies For Business Excellence — Alagappa University, 8th – 9th Feb 2017 (Orientation Programme)',
          'Achieving Publication Index Scores — Alagappa University, 10th Jan 2018 (Training Programme)',
        ],
      },
      {
        title: 'Workshops Attended',
        type: 'table',
        columns: ['S.No', 'Topic', 'Date', 'Conducted by'],
        rows: [
          ['1', 'Data Analysis & Interpretation Using SPSS and AMOS', '29th Sep – 1st Oct 2016', 'Madurai Kamaraj University'],
          ['2', 'Novelty for Sustainable and Green Business Management', '14th – 15th Dec 2017', 'Alagappa University'],
          ['3', 'Analysis & Interpretation Using SPSS and AMOS', '13th – 14th Feb 2020', 'MEASI Institute of Management'],
          ['4', 'Data Analysis using AMOS, PLS-SEM and E-Views', '19th – 20th Dec 2022', 'Alagappa Institute of Management'],
          ['5', 'Data Analysis & Interpretation Using SPSS and SMART PLS4', '28th Feb – 4th Mar 2023', 'S.I.V.E.T. College'],
          ['6', 'Five Day Workshop on Recent Advances in Numerical and Statistical Methods', '6th – 10th Mar 2023', 'Dept. of Mathematics, Anna University'],
        ],
      },
      {
        title: 'Programmes Conducted',
        type: 'table',
        columns: ['S.No', 'Programme Name', 'Date', 'Position', 'Place Conducted'],
        rows: [
          ['1', '3-Days National Level Workshop on SPSS, AMOS and EViews', '1st – 3rd Sep 2018', 'Organizing Secretary', 'Faculty of Management, Alagappa University'],
          ['2', '2nd International Conference On Emerging Trends In Intelligent Information Technologies & Applied Mathematics', '7th & 8th Jan 2020', 'Organizing Secretary', 'The Quaide Milleth College For Men'],
          ['3', '1-Day National Conference on A Road Map To Excellence In Higher Education', '9th Jan 2020', 'Executive Committee', 'The Quaide Milleth College For Men'],
          ['4', '5 Days Basic Level SPSS Certification Programme', '27th – 31st Mar 2023', 'Resource Person', 'B. S. Abdur Rahman Crescent Institute of Science and Technology'],
        ],
      },
      {
        title: 'Additional Responsibilities',
        type: 'list',
        items: ['Assistant Director — appointed 26th December 2022'],
      },
      {
        title: 'Achievements',
        type: 'list',
        items: [
          'International level Young Scientist Award — 6th July 2020, awarded by VGood Professional Association, VGood Technologies Pvt. Ltd., Coimbatore.',
        ],
      },
    ],
  },

  {
    slug: 'dr-v-agalya',
    photo: photoAgalya,
    programme: 'MBA',
    name: 'Dr. V. Agalya',
    designation: 'Assistant Professor',
    employment: 'Regular',
    qualification: 'B.A, M.A, M.Phil, MBA, Ph.D',
    email: 'agalyav@crescent.education',
    stats: [
      ['20+', 'Years of Experience'],
      ['15', 'Publications'],
      ['10', 'Conference Papers'],
      ['11', 'FDPs Attended'],
    ],
    education: [
      ['Ph.D', 'Business Administration', 'Jan 2020', 'Manonmaniam Sundaranar University, Tirunelveli'],
      ['MBA', 'Business Administration', '2012', 'Anna University, Chennai'],
      ['M.Phil', 'Economics', '2009', 'Vinayaga Mission University, Salem'],
      ['MA', 'Economics', '2008', 'University of Madras, Chennai'],
      ['BA', 'Economics', '2002', 'University of Madras, Chennai'],
    ],
    experience: [
      ['Assistant Professor', 'SRM Institute of Science and Technology, College of Science and Humanities, Department of Business Administration, Vadapalani, Chennai', 'August 2022 – Jan 2023', '06 months'],
      ['Assistant Professor & Head', 'Dr. M.G.R Educational and Research Institute, Department of Economics, Madurvayoul, Chennai', 'Feb 2021 – July 2022', '1 year 6 months'],
      ['Coordinator – ESPAC (Energy, Sponsored Project and Consultancy), Academic Research Office', 'B.S. Abdur Rahman Crescent Institute of Science and Technology, Vandalur, Chennai', 'July 2019 – Feb 2021', '1 year 8 months'],
      ['Assistant Professor', 'Karpaga Vinayaga College of Engineering & Technology, Mathuranthagam, Chennai', 'July 2016 – April 2019', '2 years 10 months'],
      ['Assistant Professor', 'GKM College of Engineering & Technology, Chennai', 'Sept 2012 – Dec 2015', '3 years 3 months'],
      ['HR – Admin Executive', 'GKM College of Engineering & Technology, Chennai', 'March 2006 – Dec 2015', '11 years 9 months'],
      ['Admin Assistant', 'SSD Oil Mils Ltd (Supreme Edible Oil), Chennai', 'Aug 2003 – Nov 2004', '1 year 3 months'],
    ],
    courses: [
      'Principles of Management',
      'Sales and Distribution Marketing',
      'International Marketing',
      'Services Marketing',
      'Business Analytics',
      'HRM',
      'Organisational Behaviour',
      'Logistics & Supply Chain Management',
      'Strategic Management',
      'Project Management',
      'Material Management',
      'Managing Disruptive Technologies',
    ],
    research: ['SERVQUAL Model', 'Gap Analysis', 'Business Analytics', 'HRIS'],
    sections: [
      {
        title: 'Publications',
        type: 'groups',
        groups: [
          {
            heading: 'Scopus Indexed Journals (5 Nos)',
            items: [
              '“Analytical Study On Parents Attitude Towards The Education Of Girl Children With Special Reference To Villupuram District, Tamilnadu”, The Seybold Report, Volume 17, Issue 10, 2022, Page No 133-148, DOI 10.5281/zenodo.7155359.',
              '“The Effect of Digital India Program With Reference to Chennai City – An Critical Analysis”, The Seybold Report, Volume 17, Issue 8, 2022, Page No 1363-1379, DOI 10.5281/zenodo.7009806.',
              '“Business Continuity and Decision Making after the Covid 19 – an Overview”, Annals of R.S.C.B., ISSN 1583-6258, Vol. 25, Issue 6, 2021, Pages 10966–10978.',
              '“Examining Occupational Hazards of Employees in Leather Manufacturing Industry”, Annals of R.S.C.B., ISSN 1583-6258, Vol. 25, Issue 4, 2021, Pages 18593-18602.',
              '“Performance of Indian Mutual Funds, Risk and Returns during Covid-19 – An Overview”, Turkish Online Journal of Qualitative Inquiry (TOJQI), Volume 12, Issue 7.',
            ],
          },
          {
            heading: 'Book Chapter Edited (1 No)',
            items: [
              'E-BOOK — IMPACT OF COVID-19 ON THE BUSINESS SECTOR, “Analyzing the effectiveness on employees’ retention in leather industries at Chennai, Tamil Nadu, India”, published by Non-Olympic Times, ISBN 978-81-949524-1-1, Edition 1, 2020. Records in the Noble World Records (NWR), Record No. NWR/2043/2021.',
            ],
          },
          {
            heading: 'UGC Listed Journals (3 Nos)',
            items: [
              '“A Study on Quality of Work-Life of Employees in Leather Goods Manufacturing Industries at Chennai”, PARISHODH JOURNAL, UGC-Care List – Group I, Vol. IX, Issue III, March 2020, Page No. 6214–6224, ISSN 23476648.',
              '“Recent Trends in Development of Workplace Policies and Procedure in Leather Goods Manufacturing Companies Chennai”, International Journal of Management Studies (IJMS), Vol. V, Issue 4(1), October 2018, ISSN (Print) 2249-0302, ISSN (Online) 2231-2528, Impact factor (IBI) 2.26.',
              '“A Study on Employees Safety and Health Hazards Measures of Leather Goods Manufacturing Companies”, SUMEDHA Journal of Management, 2016, Vol. 5, No. 2, PP. 63–73, ISSN (Print) 2277-6753, Index Copernicus value 5.20, Impact factor 0.787, ISRA journal factor 2.318.',
            ],
          },
          {
            heading: 'International and National Journals (Peer Reviewed) (6 Nos)',
            items: [
              '“A Study on Employees Welfare and Social Security Benefits in Leather Goods Manufacturing Companies at Chennai”, PEZZOTTAITE JOURNALS, International Journal of Entrepreneurship and Business Environment Perspectives, Volume 5, Number 3 (July–September 2016), Online ISSN 2279-0926, Impact Factor 6.782.',
              '“A Study on Employees Job Satisfaction in Leather Goods Manufacturing Companies”, Archers & Elevators – International Journal of Multidisciplinary Research (AEIJMR), Vol. 4, Issue 4, April 2016, PP 1-12, ISSN 2348-6724.',
              '“A Study on Job Stress and Its Impact on Job Performance in Leather Goods Manufacturing Companies”, International Journal of Exclusive Global Research (IJEGR), Vol. 1, Issue 2, February 2016, PP 1-11.',
              '“A Study on Effective Business Ethics and Role Behaviour of Businessmen in Ambur Town-Vellore District”, International Journal of Exclusive and Management Research, Volume 4, Issue 2, February–March 2014, ISSN 22498672, Impact Factor 1.0807.',
              '“The Intensity of Stress Among the Silk Weavers at Kachipuram District”, Asian Academic Research Journal of Social Sciences and Humanities, Page 105-116, Volume 1, Issue 11, May 2013, Online ISSN 2278-859X, Impact Factor ICV 5.05 / ISRA 2.015 / GIF 0.50.',
              '“The Effectiveness of Performance Appraisal on ITES Industry and its Outcome”, International Journal Research in Commerce, IT and Management, Volume 2 (2012), Issue 10 (October), ISSN 2231-5756.',
            ],
          },
        ],
      },
      {
        title: 'Papers Presented in International Conferences',
        type: 'list',
        items: [
          '6th International Conference on Management, Accounting, Banking, Economics and Business Research For Sustainable Development, organized by B.S. Abdur Rahman Crescent Institute of Science and Technology, Chennai, 01 March 2023 — “Impact Of Utilizing Artificial Intelligence on Business – An Investigative Study”.',
          'BIZAD 2022, 8th International conference on “Technology Agility and Transformed Management Practices during Pandemic”, organized by the College of Management, SRM Institute of Science and Technology, Kattankulathur, 16th March 2022 — “Analyze the Effectiveness of Digital India Programme with Reference to Chennai City”.',
          'International Conference on Innovations and Challenges in Global Business (ICICGB 2020), The New College (Autonomous), Chennai — “A Study on Quality of Work-Life of Employees in Leather Goods Manufacturing Industries at Chennai”.',
          'First International Conference on Indian Context, Nature, Science, Information Media, General Management, Humanities and Technology (INSIGHT’20), S.A. College of Arts and Science, Chennai — “Analyzing the Effectiveness on Employees Retention in Leather Industries at Chennai, Tamil Nadu, India”.',
          'Third International Conference on Interdisciplinary Global Applied Research (ICIGAR-2020), Fortune Park, Vellore — “Examining Occupational Hazards of Employees in Leather Manufacturing Industry”.',
          '7th International Conference in Futuristic Trends in Master of Business Administration (ICFETM2K18) — “A Study on Employees Work Life Balance in Leather Goods Manufacturing Industries At Chennai City”.',
          'International Conference on Recent Trends in Science, Engineering & Management (ICRTSEM-2017) — “A Study on Indian Leather Industries – Growth and Prospects”.',
          'Participated in the International Conference on Advance Research and Innovation in Engineering, Science, Technology and Management – 2015.',
        ],
      },
      {
        title: 'Papers Presented in National Conferences',
        type: 'list',
        items: [
          'National Conference on Business in the New Millennium: The Ever-Changing Landscape – 2018 — “Recent Trends in Development of Work Policies and Procedures in Leather Goods Manufacturing Industries”.',
          'National Conference on Emerging Trends in Management – 2016 — “A Study on Employees Welfare Measures and Social Security Benefits in Leather Goods Manufacturing Companies at Chennai”.',
        ],
      },
      {
        title: 'Workshop / Webinar / Quiz Attended',
        type: 'list',
        items: [
          'One-day workshop on “Empowering Research” organized by New Prince Shri Bhavani College of Engineering and Technology, 16th August 2019.',
          'E-Quiz programme of National Sports Day 2020 on 28/8/2020, Department of Physical Education, B.S. Abdur Rahman Crescent Institute of Science and Technology, Chennai.',
          'Live Webinar on “Cyber Forensics and the Current Challenges”, 13.06.2020, organized by the Department of Information Technology, School of Computer, Information and Mathematical Sciences.',
          'Webinar on “Soft Skills Needed to Face the After Pandemic Scenario”, Department of Mechanical Engineering, T.J.S Engineering College, 12.06.2020.',
          'State level online “Tamil” talent test, May 2020, conducted by Department of Tamil, B.S. Abdur Rahman Crescent Institute of Science and Technology, Chennai.',
        ],
      },
      {
        title: 'Major FDP Attended',
        type: 'list',
        items: [
          'Two Days Faculty Orientation Programme on Salient attributes for Professional Development, SRM Institute of Science and Technology, Chennai.',
          'Two Days FDP/Workshop on How Teachers Can Make a Difference Through Outcome Based Education, Teaching Learning Center (TLC), IIT Madras, Chennai.',
          'Six Days FDP on Recent Trends of Research in Commerce and Business Studies, SRM Institute of Science and Technology, Chennai.',
          'Five Days National Level e-Workshop on “Innovation Techniques in SPSS and Data Analysis”, Sathyabama Institute of Science and Technology, Chennai.',
          'Five days online Faculty Development Programme on “Mentoring Teaching & Pedagogy in Technical Education”, Faculty of E&T and Academic Staff College, Dr. M.G.R. Educational and Research Institute, 29th November – 3rd December 2021.',
          'FDP on “Learning Statistics and Data Interpretation Using SPSS” (SERIE-1), Saveetha Engineering College, Chennai.',
          'FDP on “Research Methodology Shiksha – 5 SERIES”, Dr. M.G.R E&RI, Chennai.',
          'FDP on “Innovation & Entrepreneurship” 30 hours, Dr. M.G.R E&RI in association with IEEE.',
          'FDP on “Institute level Programme Mentor for Entrepreneurship Development” by TN EDII conducted by Anna University (Level 2).',
          'FDP on “Institute level Programme Mentor for Entrepreneurship Development” by TN EDII conducted by Anna University (Level 1).',
          'FDP on Stress Management conducted by ICT India and KVCET.',
        ],
      },
      {
        title: 'Additional Responsibilities',
        type: 'list',
        items: [
          'Head of the Department, Department of Economics (2021–2022)',
          'Research Coordinator, ESPAC (2019–2021)',
          'Department level NAAC Coordinator (2016–2018, 2021)',
          'Department level ISO Coordinator (2012–15)',
        ],
      },
      {
        title: 'Achievements',
        type: 'list',
        items: [
          'NPTEL – Successfully completed and Elite ranked in 8 weeks course in Marketing Management I.',
          'NPTEL – Successfully completed 12 weeks course in Financial Accounting.',
          'Training of Trainers (TOT) on Social Accountability Tools and Techniques for Good Governance, NIRD & PJ, Government of India, Hyderabad.',
          'Institute level Programme Mentor for Entrepreneurship Development Cell by TN EDII conducted by Anna University.',
          'Research manuscript peer-reviewer for two Asian Journals — Asian Research Journal of Arts & Social Sciences and Asian Journal of Medicine and Health (Indexing: Ebsco, Proquest, Index Copernicus, Google Scholar).',
          'Won Best Performer award for excellence in administration work in the year 2007–2008.',
          'Won cash rewards for producing 100% results in university examination.',
        ],
      },
      {
        title: 'Projects Developed',
        type: 'list',
        items: [
          '“An Empirical Study on Employees Problems and Prospects in Leather Industries with Special Reference to Chennai City” — Ph.D Thesis.',
          'A Study on Employees Performance Appraisal with Special Reference to Teaching Professional in GKM College of Engineering and Technology.',
          'A Study on Employee Attrition with Special Reference to New Joinees in IP Rings Ltd (India Pistons Limited).',
          'A Study on Women Self Help Group at Thiruvallur District.',
        ],
      },
      {
        title: 'Guest Lectures / FDP Delivered',
        type: 'list',
        items: [
          'Invited as speaker and chief guest for Faculty Development Programme on “NAAC Accreditation for Academic Excellence” organized by M.M.E.S Women’s Arts and Science College, Melvisharam, Vellore, 17th December 2022.',
          'Invited as speaker and chief guest for webinar on “Controlling Cost Fluctuations in a quick service Restaurant – Economic Aspect to be adopted”, organized by HMCT, Dr. M.G.R. E&RI, Chennai, 4th October 2021.',
        ],
      },
      {
        title: 'Guest Lecture / Webinar / Seminar / Outreach Activities Organized',
        type: 'list',
        items: [
          'Webinar – “Research Methodology” by Dr. K. Malathi, Assistant Professor, Department of Economics, University of Madras, Chennai.',
          'Guest Lecture – “Insurance Market” by Mr. R.M. Muthukaruppan, Internal Auditor, Royal Sundaram General Insurance Co. Ltd.',
          'Webinar – “Eradicating Hunger & Malnutrition for Sustainable Development in India – The Time to Ponder” by Dr. M.S. Lekha, Senior Faculty, Department of Economics & Vice Principal (Aided Stream), SDNP Vaishnav College for Women, Chrompet, Chennai.',
          '“Deekshrambh – New Students Induction Programme, 2021” by Mrs. P. Blessey Carmichael, Career Counselor and Mentor, Rising Star Outreach of India, Chennai.',
          'Online workshop cum Training of Trainers (TOT) on Social Accountability Tools and Techniques for Good Governance by Dr. K. Prabhakar, Course Director, Centre for Good Governance and Policy Analysis, NIRD & PR, Government of India, Hyderabad.',
          'Conducted departmental level ONLINE Alumni Interaction with UG level 2nd and 3rd year students.',
          'Workshop on “Soft Skill Development – From Interview to Job Placement” by Mr. M.S. Sriram, Soft Skills Enabler certified by NABET and SQA (Scottish Qualifications Authority, UK), U’reka-BE Ur BEST, Chennai.',
          'Webinar – “Improving The Human Development Index In India” by Dr. K. Malathi, Assistant Professor, University of Madras, Chepauk Campus, Chennai.',
          'Webinar – “Social Accountability Tools & Techniques for Good Governance” by Dr. K. Prabhakar, Assistant Professor, NIRD & PR, MoRD, GOI, Hyderabad.',
          'Webinar – “Caste and Gender in Development Economics” by Dr. S. Anandhi, Professor, Madras Institute of Development Studies (MIDS), Chennai.',
          'Webinar – “Investment Avenues & Risk Control Mechanism” (Mutual Funds, Stocks & Bonds) by Dr. R.S. Mani, Senior Professor (Rtd), VIT Business School, VIT University, Vellore.',
          'Webinar – “Location, Location, Location: Implications for Welfare Inequality In India” by Dr. D. Sowmya Dhanaraj, Assistant Professor, Madras School of Economics (MSE), Chennai.',
          'Webinar – “How to Prepare a Research Project Report” by Dr. H. Premraj, Professor, School of Management Studies, VELS Institute of Science Technology and Advanced Studies, Pallavaram, Chennai.',
          'Seminar on “Equity Investment with Risk Control Mechanism through Derivatives Management” by Dr. R.S. Mani, Senior Professor (Rtd), VIT Business School, VIT University, Vellore.',
          'Guest Lecture on “Mutual Funds – Emerging Trends & Fund” by Dr. P. Raju Iyer, Vice President, The Institute of Cost Accountants of India (ICAI).',
          'Guest Lecture on “Design Thinking – A Strategy for Innovative Product Design” by Dr. B. Nataraj, Professor, Thiagarajar School of Management, Madurai.',
          'Outreach activity on “Entrepreneurship Development and Training” awareness camp and rally conducted at Marimalainagar along with MBA students.',
          'Outreach activity “To Avoid Plastic Bags and Packing” awareness camp and rally conducted at Guduvanchery along with MBA students.',
        ],
      },
      {
        title: 'Conferences Executed',
        type: 'list',
        items: [
          'Entrepreneurship Training Program (3 Days) for MBA Students – Arranged chief guest Director, M/s. Ravannan Masala.',
          'Department level symposium conducted (MAN MEET-2017) – Arranged chief guest Mrs. M. Jayalakshmi, Professor and Tamil orator, SIVET College, Chennai.',
          'Department level coordinator for International Conference on Recent Trends in Science, Engineering and Management (ICRTSEM-2017).',
        ],
      },
      {
        title: 'Examination Duties',
        type: 'list',
        items: [
          'Served as a Squared and Anna University Representative (AUR) for University End Semester Examinations.',
          'Served as an External and Internal Examiner for University End Semester Examinations.',
          'Served as an External Examiner for Data Analysis and Business Modeling Lab (Soft-skill) for MBA Students.',
          'Served as an External Examiner in the Project Viva voce for the final year MBA Students.',
          'Served as an External Valuator of the End Semester Examination.',
        ],
      },
      {
        title: 'Curriculum Development',
        type: 'list',
        items: [
          'Head and Board of Study member in Department of Economics (UG & PG) during 2021 to 2022 at Dr. M.G.R Educational and Research Institute, Department of Economics, Madurvayoul, Chennai.',
          'Prepared syllabus for B.A and M.A degree programme for Economics during 2021-2022 at Dr. M.G.R Educational and Research Institute, Department of Economics, Madurvayoul, Chennai.',
        ],
      },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* MCA                                                                 */
  /* ------------------------------------------------------------------ */
  {
    slug: 'dr-e-jeslin-renjith',
    photo: photoJeslin,
    programme: 'MCA',
    name: 'Dr. E. Jeslin Renjith',
    designation: 'Assistant Professor',
    role: 'Programme Coordinator, Online MCA',
    employment: 'Regular',
    qualification: 'MCA., M.Phil., Ph.D., SET',
    email: 'jeslin.renjith@gmail.com',
    stats: [
      ['20+', 'Years of Experience'],
      ['24', 'Publications'],
      ['03', 'Books Published'],
      ['02', 'Patents'],
    ],
    summary:
      'Over twenty years of teaching, mentoring and academic experience in Computer Science and Computer Applications. Currently Programme Coordinator for the Online MCA programme, with published research across machine learning, biomedical signal analysis, cloud security and generative AI in education.',
    education: [
      ['SET', 'Computer Science', 'February 2016', 'Mother Teresa Women’s University (Conducting Body)'],
      ['Ph.D.', 'Computer Science', 'Awarded', 'Bharathiar University, Coimbatore'],
      ['M.Phil.', 'Computer Science', '2005–2006', 'Madurai Kamaraj University, Tamil Nadu'],
      ['MCA', 'Computer Applications', '2000–2003', 'Kamaraj College, Tuticorin, Tamil Nadu'],
      ['B.Sc.', 'Physics', '1997–2000', 'Lakshmipuram College, Nagercoil, Tamil Nadu'],
      ['HSC', 'Maths–Biology', '1996–1997', 'L.M.S. Girls Higher Secondary School, Nagercoil'],
      ['SSLC', 'General', '1994–1995', 'L.M.S. Girls Higher Secondary School, Nagercoil'],
    ],
    experience: [
      ['Assistant Professor', 'B.S. Abdur Rahman Crescent Institute of Science and Technology', '2022 – Present', '4+ years'],
      ['Assistant Professor', 'Mohamed Sathak College', '2016 – 2022', '6 years'],
      ['Assistant Professor', 'Madras Christian College', '2010 – 2016', '6 years'],
      ['Lecturer', 'Vel Tech', '2008 – 2009', '1 year'],
      ['Lecturer', 'Women’s Christian College', '2005 – 2008', '3 years'],
    ],
    courses: [
      'Python Programming',
      'Big Data',
      'Data Science',
      'Object-Oriented Software Engineering',
      'Cyber Security',
      'Computer Organization',
      'Machine Learning',
      'E-Commerce',
    ],
    research: [
      'Machine Learning',
      'Deep Learning',
      'Data Science & Predictive Analytics',
      'Cloud Security',
      'Biomedical Signal Analysis (Obstructive Sleep Apnea)',
      'Generative AI in Education',
    ],
    sections: [
      {
        title: 'Technical Skills',
        type: 'table',
        columns: ['Category', 'Skills / Technologies'],
        rows: [
          ['Programming Languages', 'C, C++, Java, Python, R'],
          ['Data Science & Analytics', 'Machine Learning, Deep Learning, Tableau, Power BI, SPSS'],
          ['Database Management Systems', 'MySQL, Oracle, SQL Server, Microsoft Access'],
          ['Web Technologies', 'HTML, JavaScript, ASP'],
          ['Operating Systems', 'Windows, Linux, UNIX'],
        ],
      },
      {
        title: 'Scopus Journal Publications',
        type: 'table',
        columns: ['Year', 'Research Article', 'Journal', 'Indexing / Impact'],
        rows: [
          ['2025', 'Tree-Based Ensemble Regression Models for Emission Prediction of a Winter Green Oil–Hydrogen Dual-Fuel Engine with Zeolite After-Treatment', 'Renewable Energy, Vol. 257, Article 124726', 'Scopus Q1, Impact Factor 9.1'],
          ['2026', 'Predictive Analytics for Hydrogen–Honge Oil Dual Fuel Engine Using Machine Learning', 'International Journal of Hydrogen Energy', 'Scopus Q1, Impact Factor 8.3'],
          ['2026', 'Enhancing critical thinking skills through generative AI models: mechanisms and educational impacts', 'International Journal of Reasoning-based Intelligent Systems', 'Scopus'],
          ['2025', 'Extrapolation Against Categorisation for Neural Network-Based System Equalisation in a Narrowband Electric Grid', 'International Journal of Critical Infrastructures (acceptance received)', 'Scopus'],
        ],
      },
      {
        title: 'IEEE Conference Publications',
        type: 'table',
        columns: ['Year', 'Research Article', 'Publication', 'DOI'],
        rows: [
          ['2025', 'IoT Security-Enabled Attendance Tracking Unit for Remote Workforce Management', 'Proceedings of the 10th International Conference on Science, Technology, Engineering and Mathematics (ICONSTEM 2025), IEEE (Scopus)', '10.1109/ICONSTEM65670.2025.11374784'],
          ['2026', 'A Robust Machine Learning framework for plant disease emission forecasting using deep learning techniques', '7th International Conference on Computational Vision and Bio Inspired Computing (ICCVBIC 2026)', 'Yet to publish'],
        ],
      },
      {
        title: 'Other Journal Publications',
        type: 'table',
        columns: ['Year', 'Research Article', 'Journal'],
        rows: [
          ['2025', 'OSA Classification Using a Snore Sound Dataset', 'International Journal of Scientific Research in Engineering and Management (IJSREM)'],
          ['2024', 'Revolutionizing Cloud Security: Innovative Approaches for Safeguarding Data Integrity', 'FMDB Transactions on Sustainable Computer Letters, Vol. 2, No. 2, 2024'],
          ['2018', 'Ensemble Feature Selection (EFS) and Ensemble Convolutional Neural Network with Vote Classification (ECNN-VC) Approach for Detection of Snore Sounds in Obstructive Sleep Apnea Diagnosis', 'International Journal of Computer Science and Information Security (IJCSIS), Vol. 16, No. 5'],
          ['2018', 'ESIVC for Snore Sound Detection', 'Journal of Advanced Research in Dynamical and Control Systems (JARDCS), Vol. 10, No. 4 (Scopus)'],
          ['2018', 'Heterogeneous Ensemble Classifier with Vote (HECV)', 'International Journal of Recent Technology and Engineering (IJRTE)'],
          ['2018', 'Review of Detection and Classification for Snore Sound', 'Research Journal of Pharmacy and Biological Sciences (RJPBCS)'],
        ],
      },
      {
        title: 'Conferences',
        type: 'table',
        columns: ['Year', 'Paper Title', 'Conference', 'Venue / Organizer'],
        rows: [
          ['2026', 'Artificial Intelligence-Based Ensemble Learning Models for Electric Vehicle Battery Performance and Range Prediction', 'International Conference on Advanced Multidisciplinary Research and Innovation (ICAMRI–2026)', 'University of Edenberg, Lusaka, Zambia'],
          ['2026', 'A Robust Machine Learning framework for plant disease emission forecasting using deep learning techniques', '7th International IEEE Conference on Computational Vision and Bio Inspired Computing (ICCVBIC 2026)', 'Nepal Open University, Nepal'],
          ['2025', 'AI-Driven Approaches for Detecting Obstructive Sleep Apnea: A Comprehensive Review', 'International Conference on Technology-Enhanced Teaching and Learning (ICTETL 2025)', 'In collaboration with Global College Malta, 23–24 October 2025'],
          ['2025', 'Improving Critical Thinking Abilities via Generative AI Models', 'International Conference on Convergence of Computing, Mathematics and Microbiology (SAASC–CCMMCO-25)', 'St. Anne’s Arts & Science College, Madhavaram, 20 September 2025'],
          ['2025', 'The Role of AI in Enhancing Network Security', 'International Conference on NextGen Intelligence: The Role of AI in Evolving Computer Science Paradigms', 'Alpha Arts and Science College, Chennai'],
          ['2024', 'Voice Analysis for the Identification of Severe Obstructive Sleep Apnea (OSA)', 'CSIR-Sponsored International Conference (ICTDT 2024)', 'CTTE College for Women, Chennai'],
          ['2024', 'An Efficient Approach to Data Security in Cloud Computing', 'International Conference on Computing, Communication, Data Science and Security (ICCCDS 2024)', 'PERI Arts and Science College, Chennai'],
          ['2023', 'Machine Learning Model to Predict Heart Problems', 'International Conference on Advanced Research in Science and Technology (ICARST 2023)', 'Mohamed Sathak College of Arts and Science, Chennai'],
          ['2022', 'Improved Firefly Algorithm (IFA)-Based Gene Selection and Deep Flexible Neural Forest for Classification of Cancer Subtypes Based on Gene Expression Data', 'International Conference on Advances in Data Science and Computing (ICADSC 2022)', 'SRM Institute of Science and Technology, Kattankulathur'],
          ['2022', 'Detection of Snore Sounds in Obstructive Sleep Apnea Diagnosis Using Ensemble Feature Selection and Ensemble Convolutional Neural Network with Vote Classification Approach', 'International Conference', 'Vels Institute of Science, Technology & Advanced Studies, Chennai'],
          ['2017', 'Ensemble Swarm Intelligent Based Classification (ESIC) Approach for Automatic Detection of Snore Sounds with Acoustic Multi-Feature Analysis', 'IEEE-Sponsored International Conference (ICLTSET 2017)', 'Karpagam Institute of Technology, Coimbatore'],
          ['2007', 'Data Mining in E-Commerce', 'UGC-Sponsored National Conference', 'Gobi Arts and Science College, Gobichettipalayam'],
        ],
      },
      {
        title: 'Book Chapters',
        type: 'table',
        columns: ['Year', 'Book Chapter Title', 'Book Title', 'ISBN'],
        rows: [
          ['2026', 'Machine Learning Models for Solving Urban Challenges: A Review', 'Advances in Machine Learning: Algorithms, Applications, and Emerging Trends, Volume 6S1', 'e-ISBN 978-93-7020-938-1'],
          ['2026', 'Data Storage and Management in Hybrid Systems', 'Academic Synergy: A Multidisciplinary Research Outlook', '978-81-999601-7-6'],
          ['2025', 'Real-World Applications and Case Studies of Generative AI in Academic Institutions', 'The Strategic Role of Multidisciplinary Academic Research and Practice', '978-81-991789-2-2'],
          ['2025', 'An Effective Method for Ensuring Data Privacy and Security in Digital Education Using Cloud Computing', 'Education 4.0: Leveraging Technology for Future-Ready Learning', '978-81-19567-09-6'],
          ['2024', 'Online Teaching Methods — Research Perspective', 'Enhanced Teaching and Learning Pedagogy – A Research Perspective', '978-93-341-4459-8'],
        ],
      },
      {
        title: 'Books Published',
        type: 'table',
        columns: ['Year', 'Book Title', 'ISBN', 'Type'],
        rows: [
          ['2026', 'Introduction to AI and ML', '978-81-685119-1-0', 'Academic Book'],
          ['2025', 'Learn Python Generative AI', '978-81-980400-8-4', 'Academic Book'],
          ['2022', 'Computer Organization', '978-93-91303-30-3', 'Textbook'],
        ],
      },
      {
        title: 'Patents',
        type: 'table',
        columns: ['Year', 'Title', 'Status', 'Application / Design No.'],
        rows: [
          ['2025', 'Real-Time Classroom System with Augmented Reality for Interactive Learning', 'Published Patent', 'Application No. 202511062153'],
          ['2024', 'Icon Design for Virtual Assistant Software', 'Granted Design Patent', 'Design No. 6352546 (Registered 12 March 2024; Granted 21 March 2024)'],
        ],
      },
      {
        title: 'FDPs, Workshops & Training',
        type: 'table',
        columns: ['Year', 'Programme', 'Organized By'],
        rows: [
          ['2025', 'Faculty Development Programme on Blockchain and Its Applications', 'NPTEL–AICTE (January–April 2025)'],
          ['2025', 'Moodle Test for Teachers — successfully completed', 'Spoken Tutorial Project, IIT Bombay, organized by B.S. Abdur Rahman Crescent Institute of Science and Technology (17 March 2025)'],
          ['2021', 'Workshop on Machine Learning Using Python', 'Workshop'],
          ['2020', 'Faculty Development Programme on Artificial Intelligence and Cyber Security', 'FDP'],
          ['2017', 'Workshop on Android for Mobile Applications', 'Workshop'],
          ['Various', 'Several FDPs, Workshops, Webinars and Online Training Programmes in emerging technologies', 'Various Institutions'],
        ],
      },
      {
        title: 'Certifications',
        type: 'table',
        columns: ['Year', 'Certification Programme', 'Platform / Organized By'],
        rows: [
          ['2024', 'Certification Programme on Data Analysis Using SPSS', 'Centre for Distance and Online Education, B.S. Abdur Rahman Crescent Institute of Science and Technology'],
          ['2025', 'Certification Programme on Data Analysis Using Python', 'Centre for Distance and Online Education, B.S. Abdur Rahman Crescent Institute of Science and Technology'],
          ['2025', 'Blockchain and Its Applications', 'SWAYAM–NPTEL'],
          ['2024', 'Big Data Computing', 'SWAYAM–NPTEL'],
          ['2025', 'Cyber Security and Privacy', 'SWAYAM–NPTEL'],
          ['2026', 'Fundamentals of Object-Oriented Programming', 'SWAYAM–NPTEL'],
          ['2023', 'E-Commerce', 'SWAYAM–NPTEL'],
        ],
      },
      {
        title: 'Resource Person, Reviewer & Session Chair',
        type: 'table',
        columns: ['Year', 'Programme / Journal', 'Role'],
        rows: [
          ['2025', 'Certificate Programme on Data Analytics Using Python', 'Resource Person'],
          ['2024', 'Faculty Development Programme on Mastering E-Content Development', 'Resource Person'],
          ['2025', 'International Conference on Technology-Enhanced Teaching and Learning (ICTETL 2025), in collaboration with Global College Malta', 'Conference Reviewer & Session Chair'],
          ['2025', 'Journal of Advances in Mathematics and Computer Science', 'Journal Reviewer'],
          ['2025', 'International Journal of Scientific Development and Research (IJSDR)', 'Journal Reviewer'],
          ['2026', 'Click 2026 – IEEE Conference, Hindustan University', 'Reviewer'],
        ],
      },
      {
        title: 'External Academic Responsibilities',
        type: 'table',
        columns: ['Year', 'Responsibility', 'Institution'],
        rows: [
          ['2025', 'Subject Expert – Board of Studies (B.Sc. Computer Science)', 'Madras Christian College, Chennai'],
          ['2025', 'Question Paper Setter – B.Sc. Computer Science End-Semester Examination', 'Madras Christian College, Chennai'],
          ['2025', 'Valuation Examiner – Computer Science End-Semester Examination', 'Madras Christian College, Chennai'],
          ['2025', 'External Practical Examiner – End-Semester Examination', 'Madras Christian College, Chennai'],
          ['2025', 'Valuation Examiner – Computer Science End-Semester Examination', 'SRM Institute of Science and Technology, Chennai'],
          ['2025', 'Project External Examiner – Computer Science End-Semester Examination', 'SRM Institute of Science and Technology, Chennai'],
          ['2025', 'Doctoral Committee (DC) Member for Ph.D. Scholars', 'Bharath Institute of Higher Education and Research'],
        ],
      },
      {
        title: 'Refresher Course',
        type: 'list',
        items: [
          'Refresher Course in Advanced Science & Technology for a Sustainable Future (Interdisciplinary) under the Malaviya Mission Teacher Training Programme (MM-TTP), UGC, 18–31 July 2025 — Malaviya Mission Teacher Training Centre, Indira Gandhi National Tribal University, Amarkantak, Madhya Pradesh. Grade: A+.',
        ],
      },
      {
        title: 'Additional Responsibilities',
        type: 'list',
        items: [
          'Programme Coordinator for the Online MCA Programme.',
          'Developed and delivered video lectures for Python, Big Data, Data Science, Object-Oriented Software Engineering and Cyber Security courses.',
          'Developed Self-Learning Materials (SLMs) for Python, Big Data, Data Science and Cyber Security.',
          'Created instructional content for the Certificate Programme in Data Analytics using Python.',
          'Served as an NSS Programme Officer, promoting student development and community engagement.',
          'Participated in Library Book Auditing and academic resource management activities.',
          'Delivered invited sessions as a Resource Person for Faculty Development Programmes and Certificate Programmes.',
          'Served as an External Board of Examiners Member for Madras Christian College, Chennai.',
        ],
      },
      {
        title: 'Achievements & Memberships',
        type: 'list',
        items: [
          'Best Paper Award — “Machine Learning Model to Predict Heart Problems”, International Conference on Advanced Research in Science and Technology (ICARST 2023), Mohamed Sathak College of Arts and Science, Chennai.',
          'Member, Computer Society of India (CSI) — Membership ID 7021240015.',
          'Co-curricular and community engagement: Drama, Elocution and Public Speaking; active participation in sports and games; Literacy Movement and National Service Scheme (NSS) activities.',
        ],
      },
    ],
  },

  {
    slug: 'dr-p-maheswari',
    photo: photoMaheswari,
    programme: 'MCA',
    name: 'Dr. P. Maheswari',
    designation: 'Assistant Professor',
    employment: 'Regular',
    qualification: 'MCA., M.Phil., SET, Ph.D',
    email: 'maheswari@crescent.education',
    stats: [
      ['15+', 'Years of Experience'],
      ['06', 'Publications'],
      ['06', 'Conference Papers'],
      ['02', 'Book Chapters'],
    ],
    education: [
      ['B.Sc', 'Statistics', '2002', 'Madras University'],
      ['MCA', 'Computer Application', '2005', 'Anna University'],
      ['M.Phil', 'Computer Science', '2013', 'B.S Abdur Rahman University'],
      ['SET', 'Computer Science', '2016', 'Mother Teresa University'],
      ['Ph.D', 'Computer Science', '2020', 'B.S Abdur Rahman Crescent Institute of Science and Technology'],
    ],
    experience: [
      ['Assistant Professor', 'B.S Abdur Rahman Crescent Institute of Science and Technology', '23rd March 2022 – till date', '03 years 9 months'],
      ['Assistant Professor', 'C S I Ewart Women’s Christian College', '24th August 2012 – 21st March 2022', '9 years 7 months'],
      ['Lecturer', 'Prof. Dhanapalan College for Women', '7th February 2011 – 30th June 2011', '5 months'],
      ['Lecturer', 'S.D.N.B Vaishnav College for Women', '20th May 2005 – 1st June 2006', '01 year'],
    ],
    courses: [
      'Programming in Java',
      'Cloud Computing',
      'Full Stack Development',
      'Machine Learning',
      'Software Project Management',
      'Design and Analysis of Algorithms',
      'Management Information System',
      'Data Structure and Algorithms',
      'Web Technologies',
      'Programming in C and C++',
      'Computer Application in Business Organization',
      'Internet of Things',
      'Python Programming',
    ],
    research: [
      'Data Mining',
      'Machine Learning',
      'Data Science',
      'Predictive Analysis',
      'NLP',
      'Artificial Intelligence',
      'Deep Learning',
    ],
    sections: [
      {
        title: 'Publications',
        type: 'groups',
        groups: [
          {
            heading: 'Web of Science / Scopus Indexed Journals',
            items: [
              'Maheswari Petchiappan and Jaya Aravindhen, “Comparative Study of Machine Learning Algorithms towards Predictive Analytics”, Recent Advances in Computer Science and Communications, Volume 16, Issue 6, 2023, 69-79, published 17th October 2022, DOI 10.2174/2666255816666220623160821, Article ID e230622206361 (Scopus).',
              'Maheswari P and Jaya A, “Analyzing Tweets for Predicting The Sentiments Of Investors In The Stock Markets”, China Petroleum Processing and Petrochemical Technology, Catalyst Research Volume 23, Issue 2, July 2023, Pp. 58-72 (Web of Science).',
            ],
          },
          {
            heading: 'Book Chapters',
            items: [
              '“Machine Learning Approach For Cloud Data Analytics In IOT” — chapter titled “Prediction of Stock Market Using Machine Learning – Based Data Analytics”, 13th July 2021, ISBN 9781119785804, Wiley Group. DOI 10.1002/9781119785873.ch14.',
              '“A Handbook on Intelligent HealthCare Analytics: Knowledge Engineering with Big Data” — Chapter 6 titled “Business Intelligence and Analytics from Big Data”, 6th May 2022, published by Scrivener Publishing, Wiley Group. DOI 10.1002/9781119792550.ch6.',
            ],
          },
          {
            heading: 'Book',
            items: [
              '“Python Coding Instructor for Beginners” — Jayalakshmi V, Maheswari P and Sriram N, Notion Press, ISBN 9781639407330.',
            ],
          },
          {
            heading: 'International Journal',
            items: [
              'Maheswari and A. Jaya, “An Integrated Approach towards Prediction of Stock Values for Short Term”, IFRSA’s International Journal Of Computing, Vol. 2, Issue 3, July 2012, 645-651.',
            ],
          },
        ],
      },
      {
        title: 'International Conferences',
        type: 'list',
        items: [
          'Maheswari P, A. Jaya, “Prediction of Stock Values in Health Care Sectors”, in the proceedings of 45th INDIAN SOCIAL SCIENCE CONGRESS (ISSC), organized by ISSA and B.S. Abdur Rahman Crescent Institute of Science and Technology, 28th March – 4th April 2022.',
          'P Maheswari and A. Jaya, “Organising and retrieving of scientific articles using ontology”, in the proceedings of the 21st International Conference on Computer Science and Information Technology (ICCIT 2016); published in International Journal of Current Engineering and Scientific Research (IJCESR), ISSN (print) 2993-0697, Volume 3, Issue 8, 2016.',
          'P. Maheswari and Dr. A. Jaya, “Sentiment Based Approach towards Prediction of Stock Values For Long and Short Term”, in the proceedings of International Conference On Computational Intelligence And Communication (ICCIC 2012), pp 17-21, July 2012.',
        ],
      },
      {
        title: 'National Conferences',
        type: 'list',
        items: [
          '“Intrusion Detection to Secure Networks Using Machine Learning and Data Mining – Review”, in the Proceedings of National Conference on RTCSM, April 2019.',
          '“Organizing And Collecting the Research Articles Using Web Mining Techniques and Mind Mapping”, in the proceedings of National Conference on Recent Trends in Web Technologies, October 2013; published in the International Journal of Research in Advance Technology in Engineering (IJRATE), special issue for October 2013, Volume 1.',
          'P. Maheswari and A. Jaya, “An Integrated Approach towards Prediction of Stock Values For Long and Short Term”, in the proceedings of 3rd National Conference on Futuristic and Advanced Computing Technologies, March 2012.',
        ],
      },
      {
        title: 'Major FDP / Workshop / Seminar Attended',
        type: 'list',
        items: [
          'Intellectual Property Rights',
          'Prospective Areas of Research in Computer Science',
          '360° of Teaching Excellence: Reinventing Teaching for Gen Next',
          'Cloud based Machine Learning algorithms for Data Mining',
          'Women’s Rights are Human Rights',
          'Quality Assurance in Academic and Sponsored Research',
          'Google Applications and Android Programming',
          'Statistical Analysis using SPSS Package',
          'International workshop in Advances in Data and Web Mining',
          'Application of MATLAB and LABVIEW for Biomedical Applications',
          'Faculty Development Programme on “Securities Market”',
          'Faculty Development Programme on “Predictive Modelling using R”',
          'Seminar on “Role of AI and IOT for Health Care”',
        ],
      },
      {
        title: 'International Conferences and Seminars Organized',
        type: 'list',
        items: [
          'Two-day International conference on “Pathways to success in a Global Market place”, 18th and 19th July 2019.',
          'Seminar on “Big Data Analytics”, 7th February 2020.',
          'Seminar on “Recent Trends in Information Technology”, 2nd March 2016.',
        ],
      },
      {
        title: 'Certification Courses',
        type: 'list',
        items: [
          'Quality Assurance through NAAC Accreditation Process — Swayam NITTTR, July–Sep 2021.',
          'NPTEL – “Python for Data Science”, Aug–Sep 2019.',
        ],
      },
      {
        title: 'Additional Responsibilities',
        type: 'list',
        items: [
          'NPTEL Local Chapter from 2021 to 2022.',
          'Liaison Officer 2018 to 2022.',
          'Nodal Officer for Online Certificate Course 2021 to 2022.',
          'Nodal Officer for conducting University Theory Examinations, 2020-21.',
          'Assistant to the Chief Superintendent for conducting examinations, University of Madras (Regular) and the Institute of Distance Education.',
          'External and Internal examiner for conducting University Practical examinations, 2012–2022.',
          'Managed union, cultural, IQAC and academic activities — department magazines, timetable, examination schedule, guiding student projects, recommending books and journals for the library, organizing guest lectures, seminars and workshops.',
          'Handled confidential examination work and correspondence from the Regional Joint Director, University of Madras.',
          'Assisted with scholarships and AISHE, 2012–2014.',
          'Involved in stock audit.',
          'Member of Internal Complaints Committee, 2013–2022.',
        ],
      },
    ],
  },

  {
    slug: 'mrs-s-manjula',
    photo: photoManjula,
    programme: 'MCA',
    name: 'Mrs. S. Manjula',
    designation: 'Assistant Professor',
    employment: 'Regular',
    qualification: 'MCA., SET., Ph.D (Pursuing)',
    email: 'Manjula.s@crescent.education',
    stats: [
      ['08+', 'Years of Experience'],
      ['03', 'Conference Papers'],
      ['11', 'Webinars Attended'],
      ['02', 'FDPs Attended'],
    ],
    education: [
      ['MCA', 'Computer Applications', '2006', 'IGNOU'],
      ['B.Sc', 'Computer Science', '2003', 'Periyar University'],
    ],
    experience: [
      ['Assistant Professor', 'B S A Crescent Institute of Science and Technology', 'Jun 06 2022 – till now', '10 months'],
      ['Assistant Professor', 'St. Annes Arts and Science College for Women, Madavaram, Chennai', 'Jan 2019 – Sep 2020', '1 year 9 months'],
      ['Assistant Professor', 'Sri Kanyaka Parameswari Arts and Science College for Women, Chennai', 'Jun 2017 – Nov 2018', '1 year 6 months'],
      ['Assistant Professor', 'RB. Gothi Jain College for Women, Redhills, Chennai', 'Dec 2013 – Mar 2016', '2 years 6 months'],
      ['Assistant Professor', 'Shri Shankarlal Sundarbai Shasun Jain College for Women, Chennai', 'Sep 2011 – Apr 2012', '8 months'],
      ['Assistant Professor', 'Marudhar Kesari Jain College for Women, Vaniyambadi', 'Jun 2010 – Apr 2011', '11 months'],
    ],
    courses: [
      'Software Engineering',
      'Operating Systems',
      'Client and Server Computing',
      'Data Communication and Networking',
      'Programming in C++ using Data Structures',
      'Fundamentals of Digital Computers',
      'Database Management System',
      'Practicals handled: C, C++, VB, Java, PC Software Lab',
    ],
    research: ['Social Media Network', 'Data Mining', 'Educational Platform', 'Deep Learning'],
    sections: [
      {
        title: 'Publications & Professional Contributions',
        type: 'list',
        items: [
          'Online course certificate from Udemy on “The basics of Scrum, Agile and Project Delivery”.',
          'Developed a blog to update student knowledge — “Study portals for B.Sc and BCA students” — listing websites and portals for students to grow in their career (http://studyportalbca.blogspot.com/2019/07/bsc-andbca-students.html).',
          'Participated in the National Workshop on “Social Network Analysis” conducted by Women’s Christian College, Chennai.',
          'National level seminar on “Best Practices in Higher Education with reference to Rural Areas” conducted by IQAC, Marudhar Kesari Jain College for Women, affiliated to Tiruvalluvar University, accredited by NAAC, Vaniyambadi.',
          'National conference on “Recent Trends in Information Technology” — presented a paper titled “Mobile Computing”, published in the book with ISBN 978-9380530-82-6, organized by Vidhya Sagar Women’s College, Chengalpattu.',
          'National conference on Innovative Computing (NCIT) — presented a paper titled “Generation of Wireless Communication”, published in the book with ISBN 978-93-81195-31-4, organized by Rathankanwar Bhawarlal Gothi Jain College for Women, Redhills, Chennai.',
        ],
      },
      {
        title: 'International / National Conference',
        type: 'list',
        items: [
          'International conference on “Emerging trends in online teaching, assessment and learning” (eTotal), 24 & 25 Feb 2023 — presented a paper titled “Accessing E-Learning Tool Udemy: To Make Your Passion Into A Passive Income”, published in the book Research and Reflections on Education (A Quarterly Journal), Reg. No. TNENG/2003/10220, ISSN 0974-648(P).',
        ],
      },
      {
        title: 'Webinars Attended',
        type: 'table',
        columns: ['S.No', 'Name of the Webinar', 'Organized by', 'Date'],
        rows: [
          ['1', 'Leading in a VUCA World: Opening Key Note Sessions', 'ICT Academy', 'Apr 20th 2020'],
          ['2', 'Leading in a VUCA World: Expert Sessions', 'ICT Academy', 'Apr 21st 2020'],
          ['3', 'Leading in a VUCA World: Expert Sessions', 'ICT Academy', 'Apr 22nd 2020'],
          ['4', 'Leading in a VUCA World: Expert Sessions', 'ICT Academy', 'Apr 23rd 2020'],
          ['5', 'Leading in a VUCA World: Expert Sessions', 'ICT Academy', 'Apr 24th 2020'],
          ['6', '“How to get published in scientific journal: From Research to publication”', 'Sri Sairam Institute of Technology', 'Apr 27th 2020'],
          ['7', 'The Future of Education, Employment and Entrepreneurship: Opening Key Note Sessions', 'ICT Academy', 'May 5th 2020'],
          ['8', 'The Future of Education, Employment and Entrepreneurship: Expert Sessions', 'ICT Academy', 'May 6th 2020'],
          ['9', 'The Future of Education, Employment and Entrepreneurship: Expert Sessions', 'ICT Academy', 'May 7th 2020'],
          ['10', 'The Future of Education, Employment and Entrepreneurship: Expert Sessions', 'ICT Academy', 'May 8th 2020'],
          ['11', 'Live webinar on “Artificial Intelligence and its applications”', 'Hindustan College of Arts and Science', 'May 21st 2020'],
        ],
      },
      {
        title: 'Quiz Programmes Attended',
        type: 'table',
        columns: ['S.No', 'Quiz', 'Organized by', 'Date'],
        rows: [
          ['1', 'Awareness Quiz for COVID 19', 'Panimalar Medical College', 'Apr 17th 2020'],
          ['2', 'Online Mock test on “Research Aptitude”', 'Kaamadhenu Arts and Science College', 'May 17th 2020'],
          ['3', 'National level Technical Quiz — Cerebroquiz 20', 'DKM College', 'May 19th 2020'],
          ['4', 'Awareness Quiz for COVID 19', 'Ramakrishna College of Arts and Science', 'May 19th 2020'],
          ['5', 'Awareness Quiz for COVID 19', 'Sri Muthukumaran Arts and Science College', 'May 19th 2020'],
          ['6', 'National level online quiz on Machine Learning', 'Thiruthangal Nadar College', 'May 23rd 2020'],
        ],
      },
      {
        title: 'Faculty Development Programmes Attended',
        type: 'table',
        columns: ['S.No', 'Name of the FDP', 'Organized by', 'Date'],
        rows: [
          ['1', 'International Faculty Development Programme', 'AIMIT', 'Apr 24th 2020'],
          ['2', 'Online Faculty Development Programme on Computational Intelligence', 'PSG College of Arts and Science', '12.5.2020 to 16.5.2020'],
        ],
      },
      {
        title: 'Additional Responsibilities',
        type: 'list',
        items: ['Department course file in-charge', 'Academic Audit'],
      },
      {
        title: 'Achievements',
        type: 'list',
        items: [
          'Received the Best Paper award for the oral presentation of the paper “Accessing E-Learning Tool Udemy: To Make Your Passion Into A Passive Income” at the international conference on “Emerging Trends in Online Teaching, Assessment and Learning” (eTotal), 24 & 25 Feb 2023.',
          'Various online certificates in C, C++, Computer Technology Basics, HTML, Mobile Technology Basics, MS Excel 2007, Oracle 9i SQL and Programming.',
        ],
      },
    ],
  },
]

export const technicalTeam = [
  { name: 'Mrs. P. Paul Merline', designation: 'Technical Manager (LMS & Data Management)' },
  { name: 'Mr. A. Mohamed Meerasa Mujahith', designation: 'Technical Assistant (LMS)' },
  { name: 'Mr. K. Rooban', designation: 'Technical Assistant (Audio - Video Editing)' },
  { name: 'Mrs. R. Latha', designation: 'Technical Assistant (Audio - Video Editing)' },
  { name: 'Mr. D. Vignesh', designation: 'Technical Assistant (Audio - Video Editing)' },
  { name: 'Mr. R. Deepak', designation: 'Technical Assistant (Audio - Video Editing)' },
]

// Non-teaching photos are currently served from the institute's own site.
// Run download-photos.ps1 to pull them into src/assets/nonteaching/, then these
// become local imports like the faculty portraits above.
const NT_IMG = 'https://online.crescent-institute.edu.in/img/nonteaching/'

export const nonTeaching = [
  {
    name: 'Mrs. A. Usha Rani',
    designation: 'Assistant',
    photo: `${NT_IMG}usha4%20copy.jpg`,
  },
  {
    name: 'Mr. Ujjal Sikdar',
    designation: 'Admission Counsellor',
    photo: `${NT_IMG}ujjal.jpeg`,
  },
  {
    name: 'Mr. N. Kumaresan',
    designation: 'Attender Gr II',
    photo: `${NT_IMG}kumaresan.jpg`,
  },
  {
    name: 'Mr. N. Vijayakumar',
    designation: 'Attender Gr III',
    photo: `${NT_IMG}vijay.jpg`,
  },
]

export const getFacultyBySlug = (slug) => faculty.find((f) => f.slug === slug)

export const facultyByProgramme = faculty.reduce((acc, f) => {
  ;(acc[f.programme] ||= []).push(f)
  return acc
}, {})
