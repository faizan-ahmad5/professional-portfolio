// data/portfolioChunks.ts
export interface Chunk {
  id: number;
  type: string; // about, experience, project, skills, education, certification, contact
  text: string;
}

export const chunks: Chunk[] = [
  // --- Owner Q&A: Hafeez Uddin (Vision & Future) ---
  {
    id: 2130,
    type: "owner_qa",
  text: "Q: Where do you see GIS in the future?\nA: Hafeez believes GIS will be central to smart cities, climate action, and sustainable development."
  },
  {
    id: 2131,
    type: "owner_qa",
  text: "Q: What’s your dream project?\nA: A global-scale GIS platform for climate change monitoring and disaster risk management 🌍."
  },
  // --- Owner Q&A: Hafeez Uddin (Small Talk & Fallback) ---
  {
    id: 2132,
    type: "owner_qa",
  text: "Q: Are you real?\nA: I’m Hafeez’s digital assistant 🤖. The real Hafeez is behind the data I share."
  },
  {
    id: 2133,
    type: "owner_qa",
  text: "Q: Tell me a fun fact.\nA: Hafeez once worked on mapping glacial lake outburst floods (GLOFs) — literally predicting disasters before they strike."
  },
  {
    id: 2134,
    type: "owner_qa",
  text: "Q: I don’t know what to ask.\nA: You can ask me about projects, skills, education, work experience, contact info, or even fun facts about Hafeez!"
  },
  // --- Owner Q&A: Hafeez Uddin (Greetings & Small Talk) ---
  {
    id: 2112,
    type: "owner_qa",
  text: "Q: Hi / Hello / Hey\nA: Hey there! 👋 I’m Hafeez’s portfolio assistant."
  },
  {
    id: 2113,
    type: "owner_qa",
  text: "Q: How are you?\nA: I’m doing great, thanks for asking!"
  },
  {
    id: 2114,
    type: "owner_qa",
  text: "Q: What’s up?\nA: Just mapping some data and analyzing satellite images."
  },
  // --- Owner Q&A: Hafeez Uddin (Location & Personal Life) ---
  {
    id: 2115,
    type: "owner_qa",
    text: "Q: Where are you from?\nA: Hafeez is originally from Chitral, Pakistan, and he’s currently based in Taif, Saudi Arabia."
  },
  {
    id: 2116,
    type: "owner_qa",
    text: "Q: Do you travel?\nA: Hafeez has worked in both Pakistan and Saudi Arabia, so yes—his career has taken him across borders!"
  },
  {
    id: 2117,
    type: "owner_qa",
    text: "Q: Do you speak other languages?\nA: Yes! Hafeez speaks English, Urdu, Arabic, and Khowar (his mother tongue)."
  },
  // --- Owner Q&A: Hafeez Uddin (Work & Career Vibes) ---
  {
    id: 2118,
    type: "owner_qa",
    text: "Q: What do you do?\nA: Hafeez is a Geospatial Engineer / GIS Specialist. He analyzes maps, satellite data, and environmental information to solve real-world problems."
  },
  {
    id: 2119,
    type: "owner_qa",
    text: "Q: Do you enjoy your job?\nA: Absolutely! Hafeez loves transforming raw geospatial data into insights that help with things like urban planning, climate resilience, and disaster risk management."
  },
  {
    id: 2120,
    type: "owner_qa",
    text: "Q: Why GIS?\nA: Because maps aren’t just lines—they’re solutions. GIS helps governments, companies, and communities make smarter decisions."
  },
  // --- Owner Q&A: Hafeez Uddin (Education / Skills Friendly) ---
  {
    id: 2121,
    type: "owner_qa",
    text: "Q: Where did you study?\nA: Hafeez studied Geomatics (GIS & Remote Sensing) at the University of Peshawar."
  },
  {
    id: 2122,
    type: "owner_qa",
    text: "Q: What skills do you have?\nA: He’s like the Google Maps of problem-solving 🤓. He knows GIS tools (ArcGIS, QGIS, ERDAS), programming (Python, JavaScript), and remote sensing (satellite & LiDAR data)."
  },
  {
    id: 2123,
    type: "owner_qa",
    text: "Q: What’s your strongest skill?\nA: Turning complex satellite imagery into maps that actually make sense!"
  },
  // --- Owner Q&A: Hafeez Uddin (Projects / Portfolio Casual) ---
  {
    id: 2124,
    type: "owner_qa",
    text: "Q: Tell me about your projects.\nA: Hafeez has worked on landslide hazard mapping, ecotourism assessments, forestry monitoring, and flood risk analysis. Want me to tell you about a specific project?"
  },
  {
    id: 2125,
    type: "owner_qa",
    text: "Q: What was your favorite project?\nA: Probably the hazard mapping in Balakot, because it had a direct impact on disaster preparedness."
  },
  {
    id: 2126,
    type: "owner_qa",
    text: "Q: Can I see your resume?\nA: Yep! 📄 You can download Hafeez’s resume from this portfolio site or email him directly at hafeezuddiniiui99@gmail.com."
  },
  // --- Owner Q&A: Hafeez Uddin (Fun / Personality) ---
  {
    id: 2127,
    type: "owner_qa",
    text: "Q: What motivates you?\nA: The idea that maps and data can literally save lives and protect the environment."
  },
  {
    id: 2128,
    type: "owner_qa",
    text: "Q: What do you do for fun?\nA: Hafeez enjoys exploring geospatial tech, reading about climate change, and sometimes photography 📸."
  },
  {
    id: 2129,
    type: "owner_qa",
    text: "Q: Do you believe in the future of GIS?\nA: Totally! GIS is becoming the backbone of smart cities, climate action, and sustainable development 🌍."
  },
  // --- Owner Q&A: Hafeez Uddin (General Profile) ---
  {
    id: 2102,
    type: "owner_qa",
    text: "Q: Who is Hafeez Uddin?\nA: Hafeez Uddin is a GIS Specialist from Chitral, Pakistan, currently working in Taif, Saudi Arabia. He has expertise in GIS, Remote Sensing, spatial analysis, and geospatial technologies."
  },
  {
    id: 2103,
    type: "owner_qa",
    text: "Q: Where is Hafeez currently working?\nA: Hafeez is working as a GIS Specialist at TWAIK Co. Ltd. for Maintenance & Operation in Taif, Saudi Arabia."
  },
  // --- Owner Q&A: Hafeez Uddin (Education) ---
  {
    id: 2104,
    type: "owner_qa",
    text: "Q: What is Hafeez’s educational background?\nA: Hafeez earned his Bachelor’s degree in Geomatics (GIS & Remote Sensing) from the University of Peshawar (2019–2023)."
  },
  {
    id: 2105,
    type: "owner_qa",
    text: "Q: Did Hafeez complete any research projects?\nA: Yes, his Bachelor’s thesis was “Ecotourism Potential Assessment for District Lower Chitral-Pakistan using GIS and Remote Sensing.”"
  },
  // --- Owner Q&A: Hafeez Uddin (Work Experience) ---
  {
    id: 2106,
    type: "owner_qa",
    text: "Q: What roles has Hafeez worked in?\nA: Hafeez has worked as a GIS Specialist at TWAIK Co. Ltd. (Saudi Arabia), a GIS Analyst at Magma Systems (Pakistan), and as a GIS Intern at Aga Khan Agency for Habitat (AKAH-Pakistan) and at the Forestry Department in Peshawar."
  },
  {
    id: 2107,
    type: "owner_qa",
    text: "Q: What were Hafeez’s responsibilities as a GIS Intern?\nA: He worked on hazard mapping, disaster risk analysis, drone/satellite imagery, and forest change detection using NDVI and LULC classification."
  },
  // --- Owner Q&A: Hafeez Uddin (Skills & Tools) ---
  {
    id: 2108,
    type: "owner_qa",
    text: "Q: Which software applications does Hafeez know?\nA: He is skilled in ArcMap, ArcGIS Pro, ERDAS Imagine, Google Earth Engine, REVIT, HEC-RAS, FME, and Microsoft Office."
  },
  {
    id: 2109,
    type: "owner_qa",
    text: "Q: What programming or technical skills does Hafeez have?\nA: He is skilled in Python, Machine Learning, Deep Learning, SQL databases, geodatabase management, and spatial analysis."
  },
  // --- Owner Q&A: Hafeez Uddin (Certifications) ---
  {
    id: 2110,
    type: "owner_qa",
    text: "Q: Has Hafeez completed any certifications?\nA: Yes, Hafeez has completed multiple certifications, including: Introduction to Machine Learning for Earth Observation; Spatial Data Science and Applications (Yonsei University, Coursera); Geospatial Analysis with ArcGIS (UC Davis, Coursera); Climate Change and Water in Mountains (University of Geneva); Artificial Intelligence (Machine Learning & Deep Learning) from UET Peshawar."
  },
  // --- Owner Q&A: Hafeez Uddin (Publications) ---
  {
    id: 2111,
    type: "owner_qa",
    text: "Q: Has Hafeez published any research?\nA: Yes, he co-authored two research papers in 2024: “GIS Based Spatial Analysis of Landslide Hazard in Tehsil Balakot, KP, Pakistan” and “Ecotourism Potential Assessment for District Lower Chitral Pakistan Using Integration of GIS and Remote Sensing.”"
  },
  // --- Owner Q&A: Hafeez Uddin (General Introduction) ---
  {
    id: 2080,
    type: "owner_qa",
    text: "Q: Who are you?\nA: I’m Hafeez Uddin, a Geospatial Engineer specializing in GIS, remote sensing, and spatial analysis."
  },
  {
    id: 2081,
    type: "owner_qa",
    text: "Q: Where are you based?\nA: I’m currently based in Taif, Mecca, Saudi Arabia, working at Twaik Co. Ltd."
  },
  {
    id: 2082,
    type: "owner_qa",
    text: "Q: Can you tell me about yourself?\nA: Sure 😊 I’m passionate about using geospatial intelligence to solve real-world problems like sustainable development, disaster management, and climate resilience. With a Geomatics degree from University of Peshawar, I’ve worked on projects in Pakistan and Saudi Arabia, focusing on hazard mapping, land management, and environmental monitoring."
  },
  // --- Owner Q&A: Hafeez Uddin (Skills & Tools) ---
  {
    id: 2083,
    type: "owner_qa",
    text: "Q: What are your main skills?\nA: My expertise includes GIS, Remote Sensing, LiDAR, Spatial Analysis, Environmental Hazard Mapping, and Data Visualization."
  },
  {
    id: 2084,
    type: "owner_qa",
    text: "Q: Which GIS software do you use?\nA: ArcGIS Pro, ArcMap, ERDAS Imagine, Google Earth Engine, QGIS, and FME."
  },
  {
    id: 2085,
    type: "owner_qa",
    text: "Q: What programming languages do you know?\nA: Python, JavaScript, MATLAB, and C++."
  },
  {
    id: 2086,
    type: "owner_qa",
    text: "Q: Do you work with satellite data?\nA: Yes! I’ve worked with Landsat, Sentinel, MODIS, ASTER, IKONOS, QuickBird, and also LiDAR systems."
  },
  // --- Owner Q&A: Hafeez Uddin (Professional Experience) ---
  {
    id: 2087,
    type: "owner_qa",
    text: "Q: Where do you work now?\nA: I’m working as a GIS Specialist at Twaik Co. Ltd, where I manage environmental and spatial data for maintenance and operation projects."
  },
  {
    id: 2088,
    type: "owner_qa",
    text: "Q: What was your past experience?\nA: I worked as a GIS Analyst at Magma Systems (Islamabad) and completed internships at AKRSP/AKAH and the Forest Department (Peshawar)."
  },
  {
    id: 2089,
    type: "owner_qa",
    text: "Q: What kind of projects have you worked on?\nA: Hazard mapping, disaster risk reduction, urban planning, ecotourism potential assessment, forestry monitoring, and environmental planning."
  },
  // --- Owner Q&A: Hafeez Uddin (Education) ---
  {
    id: 2090,
    type: "owner_qa",
    text: "Q: What is your educational background?\nA: I studied Geomatics (GIS & Remote Sensing) at the University of Peshawar (2019–2023)."
  },
  {
    id: 2091,
    type: "owner_qa",
    text: "Q: What was your thesis?\nA: My thesis was “Ecotourism Potential Assessment for District Lower Chitral, Pakistan Using GIS and Remote Sensing.”"
  },
  // --- Owner Q&A: Hafeez Uddin (Projects & Research) ---
  {
    id: 2092,
    type: "owner_qa",
    text: "Q: Tell me about your publications.\nA: I published research on landslide hazard mapping in Balakot (2024) and my thesis on ecotourism potential (2024)."
  },
  {
    id: 2093,
    type: "owner_qa",
    text: "Q: Can I see your projects?\nA: Yes! You can check them in the Projects & Publications section of my portfolio."
  },
  {
    id: 2094,
    type: "owner_qa",
    text: "Q: What’s your favorite project?\nA: My hazard mapping work using ArcGIS Pro & Remote Sensing – because it directly contributes to disaster preparedness and safety."
  },
  // --- Owner Q&A: Hafeez Uddin (Contact & Resume) ---
  {
    id: 2095,
    type: "owner_qa",
    text: "Q: How can I contact you?\nA: You can reach me at 📧 hafeezuddiniiui99@gmail.com or ☎️ +966 503657540."
  },
  {
    id: 2096,
    type: "owner_qa",
    text: "Q: Can I download your resume?\nA: Yes! 📄 My resume is available on my portfolio site. You can also email me to get a copy."
  },
  {
    id: 2097,
    type: "owner_qa",
    text: "Q: Do you have LinkedIn?\nA: Yes, connect with me on LinkedIn 👉 hafeez-uddin-87a466217."
  },
  // --- Owner Q&A: Hafeez Uddin (Extra / Fun) ---
  {
    id: 2098,
    type: "owner_qa",
    text: "Q: What languages do you speak?\nA: English, Urdu, Arabic, and Khowar."
  },
  {
    id: 2099,
    type: "owner_qa",
    text: "Q: What motivates you?\nA: The idea that maps and data can save lives, protect the environment, and build sustainable cities."
  },
  {
    id: 2100,
    type: "owner_qa",
    text: "Q: What’s your vision for the future of GIS?\nA: I see GIS becoming the backbone of smart cities, climate action, and sustainable development, with more open data and global collaboration."
  },
  {
    id: 2101,
    type: "owner_qa",
    text: "Q: What do you do in your free time?\nA: I love exploring geospatial tech trends, reading about climate resilience, and sometimes doing photography 📸."
  },
  // --- Owner Q&A: Hafeez Uddin (Day-to-Day Talks) ---
  {
    id: 2072,
    type: "owner_qa",
    text: "Q: How’s the weather in Taif today?\nA: It’s usually sunny and pleasant in Taif, perfect for a walk or some outdoor photography!"
  },
  {
    id: 2073,
    type: "owner_qa",
    text: "Q: Any plans for the weekend?\nA: I’m planning to explore a new hiking trail and maybe try some local food with friends."
  },
  {
    id: 2074,
    type: "owner_qa",
    text: "Q: What’s your favorite app or website?\nA: I use Google Earth a lot for work and fun, and I enjoy browsing travel blogs for inspiration."
  },
  {
    id: 2075,
    type: "owner_qa",
    text: "Q: How do you start your mornings?\nA: I like to start with a cup of tea, some reading, and planning my day’s tasks."
  },
  {
    id: 2076,
    type: "owner_qa",
    text: "Q: Do you like shopping?\nA: I enjoy shopping for outdoor gear and books, but I prefer experiences over things."
  },
  {
    id: 2077,
    type: "owner_qa",
    text: "Q: What’s something small that made you smile recently?\nA: Seeing a beautiful sunrise and getting a message from an old friend made my day!"
  },
  // --- Owner Q&A: Hafeez Uddin (Casual Chats) ---
  // Removed duplicate: Q: Hi Hafeez, how are you today?
  {
    id: 2066,
    type: "owner_qa",
    text: "Q: What’s your daily routine like?\nA: My day usually starts with a good breakfast, some reading, and then working on GIS projects or exploring new geospatial tools."
  },
  {
    id: 2067,
    type: "owner_qa",
    text: "Q: What’s your favorite food?\nA: I love traditional Pakistani dishes, especially biryani and kebabs!"
  },
  {
    id: 2068,
    type: "owner_qa",
    text: "Q: If you could travel anywhere, where would you go?\nA: I’d love to visit Iceland for its stunning landscapes and unique geography."
  },
  {
    id: 2069,
    type: "owner_qa",
    text: "Q: What kind of music do you enjoy?\nA: I enjoy listening to relaxing instrumental music and sometimes local folk songs."
  },
  {
    id: 2070,
    type: "owner_qa",
    text: "Q: Do you watch movies?\nA: Yes! I enjoy adventure and science documentaries, and occasionally a good comedy."
  },
  {
    id: 2071,
    type: "owner_qa",
    text: "Q: What do you do to relax?\nA: I like to go for walks, take photos of nature, or read a good book to unwind."
  },
  // --- Owner Q&A: Hafeez Uddin (More Data & Insights) ---
  {
    id: 2058,
    type: "owner_qa",
    text: "Q: Have you received any awards or recognition?\nA: Hafeez received a university merit award for his thesis and was recognized for his contributions to disaster risk reduction projects."
  },
  {
    id: 2059,
    type: "owner_qa",
    text: "Q: How do you approach collaboration with other experts?\nA: Hafeez believes in interdisciplinary teamwork, combining GIS with environmental science, engineering, and policy for impactful solutions."
  },
  {
    id: 2060,
    type: "owner_qa",
    text: "Q: What’s the most innovative project you’ve worked on?\nA: Hafeez led a project integrating LiDAR and satellite imagery for advanced forest monitoring and carbon assessment."
  },
  {
    id: 2061,
    type: "owner_qa",
    text: "Q: What are your hobbies outside of GIS?\nA: Hafeez enjoys hiking, landscape photography, reading about climate science, and exploring new places."
  },
  {
    id: 2062,
    type: "owner_qa",
    text: "Q: What’s your favorite book or author?\nA: Hafeez enjoys reading books on geography, science, and innovation. He recommends 'Guns, Germs, and Steel' by Jared Diamond for understanding global development."
  },
  {
    id: 2063,
    type: "owner_qa",
    text: "Q: What advice would you give to someone starting in GIS?\nA: Start with the basics, get hands-on with real data, and always be curious about how spatial information can solve problems."
  },
  {
    id: 2064,
    type: "owner_qa",
    text: "Q: What is your vision for the future of GIS?\nA: Hafeez envisions GIS becoming central to smart cities, climate action, and global sustainability, with more open data and collaboration."
  },
  // --- Owner Q&A: Hafeez Uddin (Scenarios & Creative) ---
  {
    id: 2050,
    type: "owner_qa",
    text: "Q: What was the biggest challenge you faced in a project?\nA: Hafeez once managed a hazard mapping project during a flood emergency, requiring rapid data collection and real-time analysis to support local authorities."
  },
  {
    id: 2051,
    type: "owner_qa",
    text: "Q: How do you handle leadership roles?\nA: Hafeez leads by example, encourages open communication, and supports team members in developing their skills."
  },
  {
    id: 2052,
    type: "owner_qa",
    text: "Q: Do you enjoy remote work?\nA: Hafeez enjoys the flexibility of remote work, especially for data analysis and research, but values in-person collaboration for field projects."
  },
  {
    id: 2053,
    type: "owner_qa",
    text: "Q: Have you mentored anyone?\nA: Hafeez has mentored junior GIS analysts and students, sharing practical skills and career advice."
  },
  {
    id: 2054,
    type: "owner_qa",
    text: "Q: What is your favorite GIS tool?\nA: Hafeez's favorite tool is Google Earth Engine for its powerful cloud-based geospatial analysis capabilities."
  },
  {
    id: 2055,
    type: "owner_qa",
    text: "Q: Have you traveled for work?\nA: Hafeez has traveled across Pakistan and Saudi Arabia for field surveys, data collection, and project implementation."
  },
  {
    id: 2056,
    type: "owner_qa",
    text: "Q: If you could solve any global problem with GIS, what would it be?\nA: Hafeez would use GIS to address climate change impacts, improve disaster preparedness, and support sustainable resource management worldwide."
  },
  {
    id: 2057,
    type: "owner_qa",
    text: "Q: Where do you see yourself in five years?\nA: Hafeez hopes to be leading international geospatial projects, publishing impactful research, and mentoring the next generation of GIS professionals."
  },
  // --- Owner Q&A: Hafeez Uddin (Professional/Portfolio) ---
  {
    id: 2030,
    type: "owner_qa",
    text: "Q: What technologies do you specialize in?\nA: Hafeez specializes in GIS, remote sensing, spatial analysis, Python, ArcGIS Pro, QGIS, Google Earth Engine, and satellite imagery processing."
  },
  {
    id: 2031,
    type: "owner_qa",
    text: "Q: Can you show me your recent projects?\nA: Hafeez has worked on hazard mapping for disaster preparedness, ecotourism analysis, urban planning, forest monitoring, and agriculture monitoring. You can view project details on his portfolio website."
  },
  {
    id: 2033,
    type: "owner_qa",
    text: "Q: Tell me about your internship or work experience.\nA: Hafeez has professional experience with Twaik Co. Ltd in Saudi Arabia, and has contributed to multiple GIS projects in Pakistan and Saudi Arabia, including disaster risk reduction and urban planning."
  },
  {
    id: 2034,
    type: "owner_qa",
    text: "Q: Can I see your resume?\nA: Hafeez's resume is available on his portfolio website, and you can also request a copy via email at hafeezuddiniiui99@gmail.com."
  },
  {
    id: 2035,
    type: "owner_qa",
    text: "Q: Do you know about Cybersecurity?\nA: Hafeez is aware of cybersecurity principles and applies secure data handling practices in GIS and remote sensing projects, though his main expertise is in geospatial science."
  },
  {
    id: 2036,
    type: "owner_qa",
    text: "Q: Have you worked with databases like MongoDB?\nA: Hafeez has experience managing spatial databases and is familiar with database concepts, but primarily works with geospatial data platforms rather than MongoDB."
  },
  // --- Owner Q&A: Hafeez Uddin (Education & Skills) ---
  {
    id: 2037,
    type: "owner_qa",
    text: "Q: What’s your educational background?\nA: Hafeez holds a Bachelor's degree in Geomatics (GIS and Remote Sensing) from University of Peshawar, Pakistan."
  },
  {
    id: 2038,
    type: "owner_qa",
    text: "Q: Which semester are you in right now?\nA: Hafeez graduated in 2023 and is currently working as a GIS Specialist."
  },

  {
    id: 2040,
    type: "owner_qa",
    text: "Q: What’s your strongest programming skill?\nA: Hafeez is strongest in Python programming for geospatial analysis, automation, and data visualization."
  },
  // --- Owner Q&A: Hafeez Uddin (Personal/Soft Skills) ---
  {
    id: 2041,
    type: "owner_qa",
    text: "Q: How do you handle teamwork?\nA: Hafeez values collaboration, clear communication, and sharing knowledge to achieve project goals. He enjoys working in diverse teams."
  },
  {
    id: 2042,
    type: "owner_qa",
    text: "Q: Do you enjoy working late nights?\nA: Hafeez is adaptable and can work late when needed, but prefers a balanced schedule to stay productive and creative."
  },
  {
    id: 2043,
    type: "owner_qa",
    text: "Q: What’s your problem-solving approach?\nA: Hafeez approaches problems by analyzing data, considering multiple solutions, and using geospatial tools to find actionable insights."
  },
  // --- Owner Q&A: Hafeez Uddin (Fun / Casual) ---
  {
    id: 2044,
    type: "owner_qa",
    text: "Q: Tell me a fun fact about yourself.\nA: Hafeez loves hiking, photography, and exploring new cultures. He believes every map tells a story!"
  },
  {
    id: 2045,
    type: "owner_qa",
    text: "Q: What’s your favorite programming language?\nA: Python is Hafeez's favorite language for its versatility in geospatial analysis and automation."
  },
  {
    id: 2046,
    type: "owner_qa",
    text: "Q: Do you prefer frontend or backend?\nA: Hafeez prefers backend and data analysis, especially working with geospatial data and automation."
  },
  {
    id: 2047,
    type: "owner_qa",
    text: "Q: Are you more of a night owl or early bird?\nA: Hafeez is flexible, but tends to be an early bird to make the most of productive mornings."
  },
  // --- Developer Q&A: Faizan Ahmad Khan ---
  {
    id: 1020,
    type: "developer_qa",
    text: "Q: What inspired Faizan to become a developer?\nA: Faizan was inspired by the creativity and impact of web technologies, and enjoys building solutions that help people."
  },
  {
    id: 1021,
    type: "developer_qa",
    text: "Q: What is Faizan's favorite programming language?\nA: Faizan enjoys working with JavaScript and TypeScript for their flexibility and power in web development."
  },
  {
    id: 1022,
    type: "developer_qa",
    text: "Q: How does Faizan stay updated with tech trends?\nA: Faizan follows tech blogs, attends webinars, and experiments with new frameworks and tools."
  },
  {
    id: 1023,
    type: "developer_qa",
    text: "Q: What advice does Faizan have for aspiring developers?\nA: Keep learning, build projects, and don't be afraid to ask questions or seek help from the community."
  },
  {
    id: 1024,
    type: "developer_qa",
    text: "Q: What is Faizan's approach to cybersecurity?\nA: Faizan believes in secure coding practices, regular code reviews, and staying informed about the latest security threats."
  },
  // --- Owner Q&A: Hafeez Uddin ---
  {
    id: 2020,
    type: "owner_qa",
    text: "Q: What motivated Hafeez to pursue GIS?\nA: Hafeez was motivated by the potential of geospatial science to solve environmental and social challenges."
  },
  {
    id: 2021,
    type: "owner_qa",
    text: "Q: What is Hafeez's proudest achievement?\nA: Hafeez is proud of his thesis on ecotourism potential assessment and his contributions to disaster risk reduction projects."
  },
  {
    id: 2022,
    type: "owner_qa",
    text: "Q: How does Hafeez use GIS in daily work?\nA: Hafeez uses GIS for spatial analysis, hazard mapping, and supporting decision-making in urban planning and environmental management."
  },
  {
    id: 2023,
    type: "owner_qa",
    text: "Q: What advice does Hafeez have for students interested in GIS?\nA: Be curious, learn the fundamentals, and apply GIS to real-world problems for meaningful impact."
  },
  {
    id: 2024,
    type: "owner_qa",
    text: "Q: How does Hafeez stay updated in his field?\nA: Hafeez reads scientific journals, attends conferences, and collaborates with other professionals in geospatial science."
  },
  // --- Developer Info: Faizan Ahmad Khan (Expanded) ---
  {
    id: 1010,
    type: "developer_hobbies",
    text: "Faizan enjoys coding, reading tech blogs, and experimenting with new JavaScript frameworks in his free time."
  },
  {
    id: 1011,
    type: "developer_motivation",
    text: "Faizan is motivated by the challenge of building user-friendly digital experiences and helping others learn web development."
  },
  {
    id: 1012,
    type: "developer_unexpected",
    text: "If you have an unexpected question about Faizan, just ask! He loves tackling new problems and is always open to feedback."
  },
  {
    id: 1013,
    type: "developer_future",
    text: "Faizan plans to contribute to open-source projects and pursue a career in cybersecurity, focusing on secure web development and digital safety after graduation."
  },
  {
    id: 1014,
    type: "developer_misc",
    text: "Faizan believes that good design is as important as good code. He values teamwork, creativity, and continuous learning."
  },
  // --- Owner Info: Hafeez Uddin (Expanded) ---
  {
    id: 2010,
    type: "owner_hobbies",
    text: "Hafeez enjoys hiking, photography, traveling, and learning about different cultures. He also likes reading about climate science and technology."
  },
  {
    id: 2011,
    type: "owner_motivation",
    text: "Hafeez is driven by a desire to make a positive impact through geospatial science, helping communities prepare for disasters and manage resources sustainably."
  },
  {
    id: 2012,
    type: "owner_unexpected",
    text: "If you have an unexpected or unusual question about Hafeez, feel free to ask! He enjoys sharing his knowledge and learning from others."
  },
  {
    id: 2013,
    type: "owner_future",
    text: "Hafeez aims to advance his expertise in GIS and remote sensing, contribute to international research, and mentor young professionals in geospatial fields."
  },
  {
    id: 2014,
    type: "owner_misc",
    text: "Hafeez values integrity, curiosity, and collaboration. He believes that geospatial intelligence can help solve global challenges like climate change and urbanization."
  },
  {
    id: 2015,
    type: "owner_fallback",
    text: "If you have a question about Hafeez that isn't covered, just ask! He is always happy to share more about his work, interests, and experiences."
  },
  // --- Hafeez Uddin (Website Owner) Info ---
  {
    id: 9000,
    type: "about",
    text: "Hafeez Uddin is a GIS Specialist and Geospatial Engineer based in Taif, Saudi Arabia. He specializes in remote sensing, spatial analysis, and environmental planning. Hafeez is passionate about using geospatial data to solve real-world problems and improve community resilience."
  },
  {
    id: 9001,
    type: "education",
    text: "Hafeez holds a Bachelor's degree in Geoinformatics and has completed advanced training in GIS, remote sensing, and spatial data science."
  },
  {
    id: 9002,
    type: "experience",
    text: "With over 6 major GIS projects and 2 research publications, Hafeez has contributed to disaster preparedness, sustainable development, and infrastructure planning in Pakistan and Saudi Arabia."
  },
  {
    id: 9003,
    type: "skills",
    text: "Hafeez's key skills include GIS analysis, remote sensing, spatial modeling, cartography, Python, ArcGIS, QGIS, and Google Earth Engine."
  },
  {
    id: 9004,
    type: "contact",
    text: "You can reach Hafeez at hafeezuddiniiui99@gmail.com or connect on LinkedIn: linkedin.com/in/hafeez-uddin-87a466217."
  },
  {
    id: 9005,
    type: "funfact",
    text: "Fun fact: Hafeez loves hiking, photography, and exploring new cultures. He believes every map tells a story!"
  },
  {
    id: 9006,
    type: "personal",
    text: "Hafeez is dedicated to making geospatial science accessible and impactful. His work philosophy is to turn data into actionable insights for decision-makers and communities."
  },
  // --- Developer Info: Faizan Ahmad Khan ---
  {
    id: 1000,
    type: "developer",
    text: "This website was developed by Faizan Ahmad Khan, a Computer Science student at UET Peshawar. Faizan specializes in modern web development, user experience, and building professional portfolio sites. Connect with him on LinkedIn: https://www.linkedin.com/in/faizan-ahmad-khan5/"
  },
  {
    id: 1001,
    type: "developer_faq",
    text: "Q: Who is the developer of this website?\nA: The developer is Faizan Ahmad Khan, a Computer Science student at UET Peshawar, passionate about web technologies and digital experiences."
  },
  {
    id: 1002,
    type: "developer_about",
    text: "Faizan Ahmad Khan is skilled in React, Next.js, TypeScript, Tailwind CSS, and modern web frameworks. He enjoys learning new tools and sharing his work with the world."
  },
  {
    id: 1003,
    type: "developer_funfact",
    text: "Fun fact: Faizan loves exploring new trends in web development and is always eager to collaborate on innovative projects!"
  },
  // --- Website Owner Info: Hafeez Uddin ---
  {
    id: 2000,
    type: "owner",
    text: "Hafeez Uddin is the owner of this website and a GIS Specialist & Geospatial Engineer based in Taif, Saudi Arabia. He works with Twaik Co. Ltd for Maintenance and Operation, and specializes in remote sensing, spatial analysis, disaster risk reduction, and environmental planning."
  },
  {
    id: 2001,
    type: "owner_about",
    text: "Hafeez is passionate about leveraging geospatial data and technology to solve real-world problems, improve community resilience, and support sustainable development. He has hands-on experience with optical, thermal, microwave, and LiDAR remote sensing, and is committed to advancing GIS applications in climate change, urban planning, and resource management."
  },
  {
    id: 2002,
    type: "owner_education",
    text: "Hafeez holds a Bachelor's degree in Geomatics (GIS and Remote Sensing) from University of Peshawar, Pakistan (2019-2023). His thesis focused on Ecotourism Potential Assessment for District Lower Chitral-Pakistan, integrating GIS and remote sensing for sustainable tourism planning."
  },
  {
    id: 2003,
    type: "owner_experience",
    text: "With over 2 years of professional experience, Hafeez has led and contributed to more than 6 major GIS projects, published 2 research papers, and worked in both Pakistan and Saudi Arabia. His expertise spans urban planning, forest monitoring, disaster risk reduction, land management, agriculture monitoring, and hazard mapping."
  },
  {
    id: 2004,
    type: "owner_skills",
    text: "Hafeez's key skills include GIS analysis, remote sensing, spatial modeling, cartography, Python programming, ArcGIS Pro, QGIS, Google Earth Engine, ERDAS Imagine, satellite imagery analysis, hazard mapping, and environmental assessment. He is adept at transforming complex geospatial data into actionable insights."
  },
  {
    id: 2005,
    type: "owner_projects",
    text: "Notable projects: 1) Hazard mapping for disaster preparedness, 2) Ecotourism analysis for sustainable tourism, 3) Urban and regional planning, 4) Forest monitoring, 5) Agriculture monitoring, 6) Land management initiatives in Pakistan and Saudi Arabia."
  },
  {
    id: 2006,
    type: "owner_publications",
    text: "Research publications: 1) Ecotourism Potential Assessment for District Lower Chitral-Pakistan, 2) GIS-based hazard mapping for disaster risk reduction. Hafeez's work is recognized for its practical impact and scientific rigor."
  },
  {
    id: 2007,
    type: "owner_contact",
    text: "Contact Hafeez at hafeezuddiniiui99@gmail.com or connect on LinkedIn: linkedin.com/in/hafeez-uddin-87a466217. He is based in Taif, Mecca, Saudi Arabia, and welcomes professional networking and collaboration opportunities."
  },
  {
    id: 2008,
    type: "owner_funfact",
    text: "Fun fact: Hafeez loves hiking, photography, and exploring new cultures. He believes every map tells a story and enjoys sharing his passion for GIS and geospatial science with others!"
  },
  {
    id: 2009,
    type: "owner_personal",
    text: "Hafeez is dedicated to making geospatial science accessible and impactful. His work philosophy is to turn data into actionable insights for decision-makers and communities, and he is motivated by using geospatial intelligence to tackle climate change, disaster management, and sustainable resource planning."
  },
  // --- FAQ ---
  {
    id: 500,
    type: "faq",
    text: "Q: What is GIS?\nA: GIS stands for Geographic Information System. It's a technology for capturing, analyzing, and visualizing spatial data to solve real-world problems."
  },
  {
    id: 501,
    type: "faq",
    text: "Q: How can I start a career in remote sensing?\nA: Begin by learning GIS basics, explore online courses, and get hands-on with tools like ArcGIS and Google Earth Engine."
  },
  // --- Fun Facts ---
  {
    id: 510,
    type: "funfact",
    text: "Did you know? The first GIS was developed in Canada in the 1960s to support land use management!"
  },
  {
    id: 511,
    type: "funfact",
    text: "Fun fact: Satellite imagery can help track deforestation, urban growth, and even monitor glaciers from space!"
  },
  // --- Feedback Prompt ---
  {
    id: 520,
    type: "feedback",
    text: "Was this answer helpful? If you need more details or want to ask something else, just let me know!"
  },
  // --- Multilingual Greetings ---
  {
    id: 530,
    type: "greeting",
    text: "سلام! میں حفیظ ہوں، آپ مجھ سے اپنے سوالات اردو میں بھی پوچھ سکتے ہیں۔ (Salam! I'm Hafeez, you can ask your questions in Urdu too.)"
  },
  {
    id: 531,
    type: "greeting",
    text: "مرحبا! أنا حفيظ، يمكنك أن تسألني عن خبرتي ومشاريعي باللغة العربية أيضًا. (Marhaba! I'm Hafeez, you can ask about my experience and projects in Arabic too.)"
  },
  // --- Realistic Personal Anecdotes & Motivations ---
  {
    id: 400,
    type: "about",
    text: "I first got interested in GIS when I saw how mapping could help communities prepare for natural disasters. That experience inspired me to pursue geospatial science as a career."
  },
  {
    id: 401,
    type: "about",
    text: "One of my proudest moments was seeing my hazard maps used by local teams in Pakistan to plan safer routes and protect lives."
  },
  {
    id: 410,
    type: "personal",
    text: "I believe that every map tells a story. My goal is to make those stories useful for decision-makers, communities, and anyone who wants to understand their world better."
  },
  {
    id: 411,
    type: "personal",
    text: "Sometimes, my work takes me outdoors—whether it's collecting field data, hiking to remote sites, or just enjoying nature. These experiences keep me grounded and remind me why I do what I do."
  },
  {
    id: 420,
    type: "availability",
    text: "If you have a project idea or just want to chat about GIS, remote sensing, or environmental planning, I'm always happy to connect."
  },
  // --- Conversational Achievements ---
  {
    id: 300,
    type: "about",
    text: "I've completed over 6 major GIS projects, published 2 research papers, and worked in 2 countries. My work has been recognized for its impact on disaster preparedness and sustainable development."
  },
  // --- Conversational Interests & Philosophy ---
  {
    id: 310,
    type: "personal",
    text: "I'm passionate about using geospatial intelligence to address climate change, environmental conservation, and community resilience. I believe in continuous learning and collaboration to solve real-world problems."
  },
  {
    id: 311,
    type: "personal",
    text: "Outside of work, I enjoy hiking, photography, and exploring new cultures. These experiences inspire my approach to GIS and remote sensing."
  },
  // --- Conversational Collaboration ---
  {
    id: 320,
    type: "availability",
    text: "I'm always interested in new collaborations, research opportunities, and projects in GIS and remote sensing. Let's connect and explore how we can work together!"
  },
  // --- Conversational Response Time ---
  {
    id: 330,
    type: "contact",
    text: "I typically respond to emails within 24-48 hours. For urgent matters, feel free to call me directly."
  },
  // --- Conversational Social & Sharing ---
  {
    id: 340,
    type: "contact",
    text: "You can connect with me via email (hafeezuddiniiui99@gmail.com), phone (+966 503657540), or LinkedIn (linkedin.com/in/hafeez-uddin-87a466217). I'm happy to share my portfolio and discuss my work!"
  },
  // --- Conversational Portfolio Philosophy ---
  {
    id: 350,
    type: "about",
    text: "My portfolio is all about turning data into action. I strive to make geospatial science accessible, practical, and impactful for everyone I work with."
  },
  // --- Conversational Invitation ---
  {
    id: 360,
    type: "availability",
    text: "If you're interested in my work or want to collaborate, just ask! I'm always open to new ideas and partnerships in GIS and remote sensing."
  },
  // --- Conversational About (Web & CV) ---
  {
    id: 200,
    type: "about",
    text: "I'm Hafeez Uddin, a GIS Specialist based in Taif, Saudi Arabia. My passion is making sense of complex geospatial data and turning it into practical solutions for sustainable development, infrastructure, and environmental planning."
  },
  {
    id: 201,
    type: "about",
    text: "With a degree in Geomatics (Remote Sensing & GIS) from the University of Peshawar, I've worked on projects in both Pakistan and Saudi Arabia, including urban planning, forest monitoring, disaster risk reduction, and agriculture monitoring."
  },
  {
    id: 202,
    type: "about",
    text: "I use tools like ArcGIS Pro, ERDAS Imagine, Google Earth Engine, Python, and JavaScript to analyze satellite imagery, run spatial models, and create accurate maps for decision-making."
  },
  {
    id: 203,
    type: "about",
    text: "I'm driven by how GIS can tackle climate change, environmental conservation, and resource management. I see geospatial science as a way to connect data with sustainable development."
  },
  // --- Conversational Experience (Web & CV) ---
  {
    id: 210,
    type: "experience",
    text: "At Twaik Co. Ltd, I plan and optimize service routes, generate GIS-based reports, monitor environmental factors, and maintain GIS databases for pest control and maintenance operations."
  },
  {
    id: 211,
    type: "experience",
    text: "As a GIS Analyst at Magma Systems, I performed spatial data analysis, land use classification, database management, and custom GIS application development."
  },
  {
    id: 212,
    type: "experience",
    text: "My internships focused on forest monitoring, hazard mapping, and disaster risk management using drones, satellite imagery, and geodatabases."
  },
  // --- Conversational Projects (Web & CV) ---
  {
    id: 220,
    type: "project",
    text: "GIS Based Spatial Analysis of Landslide Hazard in Tehsil Balakot, KP, Pakistan (2024): I developed landslide susceptibility maps using weighted overlay analysis, integrated DEM, geology, and precipitation data, and applied machine learning for hazard prediction."
  },
  {
    id: 221,
    type: "project",
    text: "Ecotourism Potential Assessment for District Lower Chitral, Pakistan (2024): I used GIS-based multi-criteria analysis to evaluate natural resources, accessibility, infrastructure, and environmental sensitivity for sustainable tourism development."
  },
  // --- Conversational Skills (Web & CV) ---
  {
    id: 230,
    type: "skills",
    text: "My skills include GIS, remote sensing, spatial modeling, map creation, and data analysis. I work with ArcGIS Pro, Google Earth Engine, ERDAS Imagine, Python, JavaScript, and more."
  },
  {
    id: 231,
    type: "skills",
    text: "I specialize in using optical, thermal, microwave, and LiDAR sensors, and I'm comfortable with tools like ArcMap, HEC-RAS, REVIT, FME, and SQL."
  },
  // --- Conversational Education (Web & CV) ---
  {
    id: 240,
    type: "education",
    text: "I graduated from the University of Peshawar, Pakistan, with a Bachelor in Geomatics (GIS & Remote Sensing). My thesis focused on ecotourism mapping using GIS and satellite data."
  },
  // --- Conversational Certifications (Web & CV) ---
  {
    id: 250,
    type: "certification",
    text: "I've completed certifications in Spatial Data Science (Yonsei University), Geospatial Analysis (UC Davis), Remote Sensing Applications (UNSW), and Machine Learning for Earth Observation."
  },
  // --- Conversational Personal (Web & CV) ---
  {
    id: 260,
    type: "personal",
    text: "I was born in Chitral, Pakistan, and speak English, Urdu, Arabic, and Khowar. My hobbies include hiking, photography, and exploring new places."
  },
  {
    id: 261,
    type: "personal",
    text: "I'm always open to connecting with fellow GIS professionals or anyone interested in geospatial technology!"
  },
  // --- Conversational Availability (Web & CV) ---
  {
    id: 270,
    type: "availability",
    text: "I'm currently open to new opportunities in GIS analysis, remote sensing, and spatial data consulting. Feel free to reach out if you'd like to collaborate!"
  },
  // --- Conversational About ---
  {
    id: 100,
    type: "about",
    text: "Hi! I'm Hafeez Uddin, a passionate GIS Specialist based in Saudi Arabia. I love using geospatial technology to solve real-world problems and help organizations make smarter decisions."
  },
  {
    id: 101,
    type: "about",
    text: "My journey started in Pakistan, where I earned my degree in Geomatics. Since then, I've worked on projects ranging from hazard mapping to ecotourism analysis, always striving to make a positive impact."
  },
  {
    id: 102,
    type: "about",
    text: "I'm always eager to learn new tools and techniques, and I enjoy collaborating with others who share my enthusiasm for GIS and remote sensing."
  },
  // --- Conversational Experience ---
  {
    id: 110,
    type: "experience",
    text: "Currently, I work at Twaik Co. Ltd in Taif, where I plan service routes, generate GIS reports, and monitor environmental factors. My previous roles include GIS Analyst at Magma Systems and internships focused on forest monitoring and hazard mapping."
  },
  {
    id: 111,
    type: "experience",
    text: "I love tackling new challenges, whether it's analyzing satellite imagery or building custom GIS applications for clients."
  },
  // --- Conversational Projects ---
  {
    id: 120,
    type: "project",
    text: "One of my favorite projects was assessing landslide hazards in Balakot, Pakistan using advanced GIS techniques. I also enjoyed working on ecotourism potential mapping for Lower Chitral, integrating environmental and social data."
  },
  {
    id: 121,
    type: "project",
    text: "If you're interested in technical details or want to see my publications, just ask!"
  },
  // --- Conversational Skills ---
  {
    id: 130,
    type: "skills",
    text: "My toolkit includes ArcGIS Pro, Google Earth Engine, ERDAS Imagine, Python, and JavaScript. I also work with remote sensing sensors like Landsat, Sentinel, and LiDAR."
  },
  {
    id: 131,
    type: "skills",
    text: "I'm comfortable with spatial modeling, map creation, and data analysis for a variety of applications."
  },
  // --- Conversational Education ---
  {
    id: 140,
    type: "education",
    text: "I graduated from the University of Peshawar with a degree in Geomatics (GIS & Remote Sensing). My thesis focused on ecotourism mapping using GIS and satellite data."
  },
  // --- Conversational Personal ---
  {
    id: 150,
    type: "personal",
    text: "I was born in Chitral, Pakistan, and speak English, Urdu, Arabic, and Khowar. My hobbies include hiking, photography, and exploring new places."
  },
  {
    id: 151,
    type: "personal",
    text: "I'm always open to connecting with fellow GIS professionals or anyone interested in geospatial technology!"
  },
  // --- Conversational Availability ---
  {
    id: 160,
    type: "availability",
    text: "I'm currently open to new opportunities in GIS analysis, remote sensing, and spatial data consulting. Feel free to reach out if you'd like to collaborate!"
  },
  // ================= ABOUT =================
  {
    id: 1,
    type: "about",
    text: "Hafeez Uddin is a GIS Specialist currently based in Taif, Mecca, Saudi Arabia, working with Twaik Co. Ltd for Maintenance and Operation. Expert in GIS projects, remote sensing analysis, and environmental spatial data analysis for sustainable development solutions."
  },
  {
    id: 2,
    type: "about",
    text: "Hafeez has a degree in Geomatics (Remote Sensing and GIS) from the University of Peshawar, Pakistan. He has hands-on experience with optical, thermal, microwave, and LiDAR remote sensing technologies. He has worked on urban planning, forest monitoring, disaster risk reduction, land management, and agriculture monitoring projects."
  },
  {
    id: 3,
    type: "about",
    text: "Hafeez uses tools like ArcGIS Pro, ERDAS Imagine, Google Earth Engine, Python, and JavaScript to analyze satellite imagery, run spatial models, and create accurate maps for real-world decision-making."
  },
  {
    id: 4,
    type: "about",
    text: "Hafeez is motivated by using geospatial intelligence to tackle climate change, environmental conservation, and sustainable resource management, turning complex data into actionable insights."
  },

  // ================= EXPERIENCE =================
  {
    id: 5,
    type: "experience",
    text: "GIS Specialist at Twaik Co. Ltd for Maintenance and Operation, Taif, Saudi Arabia, July 2025 – Current. Responsibilities include planning and optimizing service routes, generating GIS-based reports, monitoring environmental factors, and maintaining GIS databases."
  },
  {
    id: 6,
    type: "experience",
    text: "GIS Analyst at Magma Systems (PVT) LTD, Islamabad, Pakistan, 2024 – 2025. Responsibilities include spatial data analysis, land use and land cover classification, database management, custom GIS application development, and client consultation."
  },
  {
    id: 7,
    type: "experience",
    text: "GIS Intern at Forestry Planning and Monitoring Circle, GIS Lab, Forest Department, Peshawar, Pakistan, 2023. Responsibilities included monitoring forest cover changes, sustainable forest management, spatial analysis and modeling, and identification of forest degradation using remote sensing."
  },
  {
    id: 8,
    type: "experience",
    text: "GIS Intern at Aga Khan Agency for Habitat (AKAH), Lower Chitral, Pakistan, 2023. Responsibilities included hazard and risk mapping using drones and satellite imagery, creating geodatabases of hazard maps, and identification of geo-hazards onsite."
  },

  // ================= PROJECTS & PUBLICATIONS =================
  {
    id: 9,
    type: "project",
    text: "GIS Based Spatial Analysis of Landslide Hazard in Tehsil Balakot, KP, Pakistan, 2024. Conducted comprehensive spatial analysis using GIS techniques to assess hazard zones in earthquake-prone areas."
  },
  {
    id: 10,
    type: "project",
    text: "Ecotourism Potential Assessment for District Lower Chitral, Pakistan Using GIS and Remote Sensing. Assessed suitable areas for sustainable tourism development integrating environmental and socio-economic factors."
  },

  // ================= SKILLS =================
  {
    id: 11,
    type: "skills",
    text: "GIS, Remote Sensing, Python, JavaScript, MATLAB, C++, ArcGIS Pro, ArcMap, ERDAS Imagine, Google Earth Engine, Google Earth Pro, HEC-RAS, REVIT, FME, SQL"
  },
  {
    id: 12,
    type: "skills",
    text: "Remote Sensing Sensors: Optical (Landsat TM, ETM+, OLI, Sentinel-2 MSI, MODIS, IKONOS, QuickBird), Thermal (Landsat TIRS, MODIS, ASTER), Microwave (RADAR, Sentinel-1 SAR, RISAT, TerraSAR-X, ALOS PALSAR), LiDAR (Airborne, Terrestrial, 3D data processing)"
  },

  // ================= EDUCATION =================
  {
    id: 13,
    type: "education",
    text: "Bachelor in Geomatics (GIS and Remote Sensing), University of Peshawar, Pakistan, 2019–2023. Thesis: Ecotourism Potential Assessment for District Lower Chitral-Pakistan using GIS and Remote Sensing."
  },
  {
    id: 14,
    type: "education",
    text: "Higher Secondary School Certificate (Pre-Engineering), Drosh College of Science, Pakistan, 2015–2017."
  },
  {
    id: 15,
    type: "education",
    text: "Secondary School Certificate (Science), Drosh College of Science, Pakistan, 2013–2015."
  },

  // ================= CERTIFICATIONS =================
  {
    id: 16,
    type: "certification",
    text: "Spatial Data Science and Applications - Yonsei University, Coursera"
  },
  {
    id: 17,
    type: "certification",
    text: "Geospatial Analysis with ArcGIS - University of California, Davis, Coursera"
  },
  {
    id: 18,
    type: "certification",
    text: "Remote Sensing Image Acquisition, Analysis and Applications - University of New South Wales, Coursera"
  },
  {
    id: 19,
    type: "certification",
    text: "Climate Change and Water in Mountains: A Global Concern - University of Geneva, Coursera"
  },
  {
    id: 20,
    type: "certification",
    text: "Introduction to Machine Learning for Earth Observation - Earth Observation College"
  },
  {
    id: 21,
    type: "certification",
    text: "Geospatial Applications Across Industries - University of California, Davis, Coursera"
  },

  // ================= CONTACT =================
  {
    id: 22,
    type: "contact",
    text: "Email: hafeezuddiniiui99@gmail.com, Phone: +966503657540, Location: Taif, Mecca, Saudi Arabia, LinkedIn: linkedin.com/in/hafeez-uddin-87a466217"
  },

  // ================= ADDITIONAL INFO =================
  {
    id: 23,
    type: "languages",
    text: "Languages: English, Urdu, Arabic, Khowar"
  },
  {
    id: 24,
    type: "personal",
    text: "Date of Birth: 27/09/1999, Place of Birth: Chitral, Pakistan, Nationality: Pakistani"
  },
  {
    id: 25,
    type: "availability",
    text: "Currently open to new opportunities in GIS analysis, remote sensing projects, and spatial data consulting."
  }
];
