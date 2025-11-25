const navLinks = [
   {
      id: 1,
      name: "Projects",
      type: "finder",
   },
   {
      id: 2,
      name: "Contact",
      type: "contact",
   },
   {
      id: 3,
      name: "Resume",
      type: "resume",
   },
];

const navIcons = [
   {
      id: 1,
      img: "/icons/wifi.svg",
   },
   {
      id: 2,
      img: "/icons/search.svg",
   },
   {
      id: 3,
      img: "/icons/user.svg",
   },
   {
      id: 4,
      img: "/icons/mode.svg",
   },
];

const dockApps = [
   {
      id: "finder",
      name: "Portfolio", // was "Finder"
      icon: "finder.png",
      canOpen: true,
   },
   {
      id: "safari",
      name: "Articles", // was "Safari"
      icon: "safari.png",
      canOpen: true,
   },
   {
      id: "photos",
      name: "Gallery", // was "Photos"
      icon: "photos.png",
      canOpen: true,
   },
   {
      id: "contact",
      name: "Contact", // or "Get in touch"
      icon: "contact.png",
      canOpen: true,
   },
   {
      id: "terminal",
      name: "Skills", // was "Terminal"
      icon: "terminal.png",
      canOpen: true,
   },
   {
      id: "trash",
      name: "Archive", // was "Trash"
      icon: "trash.png",
      canOpen: false,
   },
];

const blogPosts = [
   {
      id: 1,
      date: "Sep 2, 2025",
      title:
         "TypeScript Explained: What It Is, Why It Matters, and How to Master It",
      image: "/images/blog1.png",
      link: "https://jsmastery.com/blog/typescript-explained-what-it-is-why-it-matters-and-how-to-master-it",
   },
   {
      id: 2,
      date: "Aug 28, 2025",
      title: "The Ultimate Guide to Mastering Three.js for 3D Development",
      image: "/images/blog2.png",
      link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
   },
   {
      id: 3,
      date: "Aug 15, 2025",
      title: "The Ultimate Guide to Mastering GSAP Animations",
      image: "/images/blog3.png",
      link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-gsap-animations",
   },
];

const techStack = [
   {
      category: "Frontend",
      items: ["React.js", "Next.js", "TypeScript", "Zustand", "Redux.js"],
   },
   {
      category: "Styling",
      items: ["Tailwind CSS", "CSS", "shadcn/ui"],
   },
   {
      category: "Backend",
      items: ["Node.js", "Express"],
   },
   {
      category: "Database",
      items: ["MongoDB"],
   },
   {
      category: "Dev Tools",
      items: ["Git", "GitHub", "Docker"],
   },
];

const socials = [
   {
      id: 1,
      text: "Github",
      icon: "/icons/github.svg",
      bg: "#f4656b",
      link: "https://github.com/ahsanbhutta01",
   },
   {
      id: 2,
      text: "Twitter/X",
      icon: "/icons/twitter.svg",
      bg: "#ff866b",
      link: "https://x.com/ahsangulzar009?t=lp1n1SHherHwipGgs2dIkw&s=09",
   },
   {
      id: 3,
      text: "LinkedIn",
      icon: "/icons/linkedin.svg",
      bg: "#05b6f6",
      link: "https://www.linkedin.com/in/ahsan-gulzar-565418243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
   },
];

const photosLinks = [
   {
      id: 1,
      icon: "/icons/gicon1.svg",
      title: "Library",
   },
   {
      id: 2,
      icon: "/icons/gicon2.svg",
      title: "Memories",
   },
   {
      id: 3,
      icon: "/icons/file.svg",
      title: "Places",
   },
   {
      id: 4,
      icon: "/icons/gicon4.svg",
      title: "People",
   },
   {
      id: 5,
      icon: "/icons/gicon5.svg",
      title: "Favorites",
   },
];

const gallery = [
   {
      id: 1,
      img: "/images/ahsan_2.jpeg",
   },
   {
      id: 2,
      img: "/images/ahsan_4.jpeg ",
   },
   {
      id: 3,
      img: "/images/ahsan_3.jpeg",
   },
   {
      id: 4,
      img: "/images/ahsan_5.jpeg ",
   },
   {
      id: 5,
      img: "/images/ahsan.jpg",
   },
];

export {
   navLinks,
   navIcons,
   dockApps,
   blogPosts,
   techStack,
   socials,
   photosLinks,
   gallery,
};

const WORK_LOCATION = {
   id: 1,
   type: "work",
   name: "Work",
   icon: "/icons/work.svg",
   kind: "folder",
   children: [
      // ▶ Project 1
      {
         id: 5,
         name: "E-commerce Website",
         icon: "/images/folder.png",
         kind: "folder",
         position: "top-10 left-5", // icon position inside Finder
         windowPosition: "top-[7vh] left-50", // optional: Finder window position
         children: [
            {
               id: 1,
               name: "B. E-commerce.txt",
               icon: "/images/txt.png",
               kind: "file",
               fileType: "txt",
               position: "top-5 left-10",
               description: [
                  ` 🚀<strong style="font-weight: bold; font-size: 1.2rem;">A fully Functional E‑Commerce Website built with the MERN Stack! </strong></br></br/>

                           <strong style="font-weight: bold; font-size: 1.2rem;">———Key Highlights & Features——— </strong></br>
               ✅ Frontend: React + Tailwind CSS for a responsive, mobile‑first UI.</br>
               ✅ State Management: Redux Toolkit with Thunk for smooth async data flow.</br>
               ✅ Backend/API: Node.js + Express powering RESTful endpoints.</br>
               ✅ Database: MongoDB via Mongoose for flexible product & user schemas.</br>
               ✅ Authentication: JWT‑based login & role‑based authorization with cookies.</br>
               ✅ Image Uploads: Integrated Cloudinary API for secure, on‑the‑fly image hosting.</br>
               ✅ Payments: PayPal payment gateway for seamless checkout experiences.</br>
               ✅ Deployment: Frontend and Backend hosted on Vercel.</br></br>

                           <strong style="font-weight: bold; font-size: 1.2rem;">————What I Learned?————</strong></br>
               ✔️ Structuring scalable Redux slices and async thunks.</br>
               ✔️ Designing secure auth flows with JWT and protected routes.</br>
               ✔️ Handling file uploads and environment variables.</br>
               ✔️ Integrating third‑party services (Cloudinary, PayPal).</br>
               ✔️ CI/CD basics for rapid deployment with Vercel </br>`
               ],
            },
            {
               id: 2,
               name: "B. E-commerce.com",
               icon: "/images/safari.png",
               kind: "file",
               fileType: "url",
               href: "https://b-ecommerce-xu3h.vercel.app/",
               position: "top-10 right-20",
            },
            {
               id: 4,
               name: "B. E-commerce.png",
               icon: "/images/image.png",
               kind: "file",
               fileType: "img",
               position: "top-52 right-80",
               imageUrl: "/images/project-1.png",
            },
         ],
      },

      // ▶ Project 2
      {
         id: 6,
         name: "B-Docs (Real-time Collaborative Document)",
         icon: "/images/folder.png",
         kind: "folder",
         position: "top-52 right-80",
         windowPosition: "top-[18vh] left-0 -right-150",
         children: [
            {
               id: 1,
               name: "B-Docs.txt",
               icon: "/images/txt.png",
               kind: "file",
               fileType: "txt",
               position: "top-5 right-10",
               description: [
                  `  <strong style="font-weight: bold; font-size: 1.2rem;">
                        —Real-time Google Docs clone (from scratch)—
                     </strong></br>
            I built a collaborative document editor that feels like Google Docs — but custom.Fast demo, real-time cursors, comments, templates, exports, and full auth & organization (a team/workspace) support </br></br>

                     <strong style="font-weight: bold; font-size: 1.2rem;">——What it does (highlights)——</strong></br>
            ✍️ Rich editor — TipTap with custom extensions (lists, tables, exports).</br>
            🤝 Real-time collaboration — concurrent editing, presence & cursor tracking.</br>
            💬 Comments & threads — mentions, threaded replies, and notifications.</br>
            📦 Productivity features — templates, copy/paste formatting, undo/redo, exports (PDF/HTML/TXT/JSON).</br>
            🖼️ Media — image uploads and inline embeds.</br>
            🔒 Teams & auth — org workspaces, invites, and Clerk authentication.</br>
            -Built to ship — Next.js 15, Tailwind + shadcn UI, deploys on Vercel.</br></br>

                     <strong style="font-weight: bold; font-size: 1.2rem;">——Tech stack——</strong></br>
            TipTap · Liveblocks · Convex · Clerk · Next.js 15 · TailwindCSS · Vercel</br></br>

         <strong style="font-weight: bold; font-size: 1.2rem;">——Why I built it?——</strong></br>
            -To learn how real-time syncing and conflict resolution work in production.</br>
            -To combine a modern editor (TipTap) with reliable realtime (Liveblocks) and persistence (Convex).</br>
            -To ship a complete UX — comments, exports, templates, and organization-level auth.</br>
                  `,
               ],
            },
            {
               id: 2,
               name: "B-Docs.com",
               icon: "/images/safari.png",
               kind: "file",
               fileType: "url",
               href: "https://b-docx.vercel.app/",
               position: "top-20 left-20",
            },
            {
               id: 4,
               name: "D-Docs.png",
               icon: "/images/image.png",
               kind: "file",
               fileType: "img",
               position: "top-52 left-80",
               imageUrl: "/images/project-2.png",
            }
         ],
      },

      // ▶ Project 3
      {
         id: 7,
         name: "Companies Review System",
         icon: "/images/folder.png",
         kind: "folder",
         position: "top-10 left-80",
         windowPosition: "top-[33vh] left-20",
         children: [
            {
               id: 1,
               name: "Companies Review System.txt",
               icon: "/images/txt.png",
               kind: "file",
               fileType: "txt",
               position: "top-5 left-10",
               description: [
                  `<strong style="font-weight: bold; font-size: 1.2rem;">💼 Company Reviews System | Full-Stack MERN + Next.js 15 Project</strong></br>

                     I developed a fully functional Company Reviews Platform using the MERN stack with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui — a modern web app where users can post, view, and rate company reviews in real-time.</br></br>

                              <strong style="font-weight: bold; font-size: 1.2rem;">⚙️ Tech Highlights:</strong>
                                 </br>
                     -Next.js 15 + TypeScript for a fast, dynamic, and SEO-friendly frontend.</br>
                     -Node.js, Express & MongoDB (Mongoose) for a secure and scalable backend.</br>
                     -RESTful APIs for smooth data communication.</br>
                     -Modern UI built with Tailwind CSS & shadcn/ui components.</br>
                     -Fully responsive design with clean routing and state management.</br>
                     -Deployed full-stack app ready for production.</br></br>

                              💡<strong style="font-weight: bold; font-size: 1.2rem;">What This Project Showcases:</strong></br>
                     A perfect example of my expertise in Next.js, Express.js, MongoDB, Node.js, and TypeScript — combining performance, design, and functionality into one professional web solution.</br>`,
               ],
            },
            {
               id: 2,
               name: "Company_Reviews_System.com",
               icon: "/images/safari.png",
               kind: "file",
               fileType: "url",
               href: "https://companies-review-system.vercel.app/",
               position: "top-10 right-20",
            },
            {
               id: 4,
               name: "Company_Reviews_System.png",
               icon: "/images/image.png",
               kind: "file",
               fileType: "img",
               position: "top-52 right-80",
               imageUrl: "/images/project-3.png",
            }
         ],
      },
   ],
};

const ABOUT_LOCATION = {
   id: 2,
   type: "about",
   name: "About me",
   icon: "/icons/info.svg",
   kind: "folder",
   children: [
      {
         id: 1,
         name: "me.png",
         icon: "/images/image.png",
         kind: "file",
         fileType: "img",
         position: "top-10 left-5",
         imageUrl: "/images/ahsan_2.jpeg",
      },
      {
         id: 2,
         name: "casual-me.png",
         icon: "/images/image.png",
         kind: "file",
         fileType: "img",
         position: "top-28 right-72",
         imageUrl: "/images/ahsan_2.jpeg",
      },
      {
         id: 3,
         name: "conference-me.png",
         icon: "/images/image.png",
         kind: "file",
         fileType: "img",
         position: "top-52 left-80",
         imageUrl: "/images/ahsan_2.jpeg",
      },
      {
         id: 4,
         name: "about-me.txt",
         icon: "/images/txt.png",
         kind: "file",
         fileType: "txt",
         position: "top-60 left-5",
         subtitle: "Meet the Developer Behind the Code",
         image: "/images/ahsan_2.jpeg",
         description: [
            "Hey! I’m Ahsan Gulzar👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
            "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
            "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
            "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
         ],
      },
   ],
};

const RESUME_LOCATION = {
   id: 3,
   type: "resume",
   name: "Resume",
   icon: "/icons/file.svg",
   kind: "folder",
   children: [
      {
         id: 1,
         name: "Resume.pdf",
         icon: "/images/pdf.png",
         kind: "file",
         fileType: "pdf",
         // you can add `href` if you want to open a hosted resume
         // href: "/your/resume/path.pdf",
      },
   ],
};

const TRASH_LOCATION = {
   id: 4,
   type: "trash",
   name: "Trash",
   icon: "/icons/trash.svg",
   kind: "folder",
   children: [
      {
         id: 1,
         name: "trash1.png",
         icon: "/images/image.png",
         kind: "file",
         fileType: "img",
         position: "top-10 left-10",
         imageUrl: "/images/trash-1.png",
      },
      {
         id: 2,
         name: "trash2.png",
         icon: "/images/image.png",
         kind: "file",
         fileType: "img",
         position: "top-40 left-80",
         imageUrl: "/images/trash-2.png",
      },
   ],
};

export const locations = {
   work: WORK_LOCATION,
   about: ABOUT_LOCATION,
   resume: RESUME_LOCATION,
   trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
   finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
   contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
   resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
   safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
   photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
   terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
   txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
   imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };