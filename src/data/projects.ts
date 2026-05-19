import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "ema",
    title: "Enterprise Market Analytics (EMA)",
    description: "Developed a full-stack stock analytics platform with an automated ETL pipeline (yfinance) and SQL warehouse. Built interactive dashboards for risk metrics (Sharpe Ratio) and future price forecasting using Monte Carlo simulations.",
    image: "/images/projects/ema/dash1.png",
    images: [
      "/images/projects/ema/dash1.png",
      "/images/projects/ema/dash2.png",
      "/images/projects/ema/dash3.png",
    ],
    technologies: ["Python", "SQL", "Streamlit", "yfinance", "Pandas", "Plotly"],
    github: "https://github.com/IPEACE04",
  },
  {
    id: "wastebid",
    title: "WasteBid (B2B Auction & Escrow Marketplace)",
    description: "Built a B2B auction platform for industrial waste with a secure escrow and digital wallet system. Implemented real-time bidding logic and automated transaction handling via PostgreSQL functions and Supabase.",
    image: "/images/projects/wastebid/home.png",
    images: [
      "/images/projects/wastebid/home.png",
      "/images/projects/wastebid/Login.png",
      "/images/projects/wastebid/dashboard.png",
      "/images/projects/wastebid/market.png",
      "/images/projects/wastebid/myorder.png",
      "/images/projects/wastebid/myprofile.png",
      "/images/projects/wastebid/mywallet.png",
      "/images/projects/wastebid/sell1.png",
      "/images/projects/wastebid/sell2.png",
    ],
    technologies: ["Next.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL"],
    github: "https://github.com/IPEACE04",
  },
  {
    id: "facelock",
    title: "FaceLock.AI (Facial Recognition Authentication)",
    description: "Engineered a biometric authentication system integrating a FastAPI-based AI service with a Next.js frontend. Features a real-time security dashboard for monitoring login logs and organizational access statistics.",
    image: "/images/projects/facelock/dashboard-AI-Face-Lock.png",
    images: [
      "/images/projects/facelock/dashboard-AI-Face-Lock.png",
      "/images/projects/facelock/Log-In-AI-Face-Lock.png",
      "/images/projects/facelock/Sign-In-AI-Face-Lock.png",
      "/images/projects/facelock/Facescanforsignin-AI-Face-Lock.png",
    ],
    technologies: ["Next.js", "FastAPI", "Python", "TensorFlow/Keras", "Tailwind CSS"],
    github: "https://github.com/IPEACE04",
  },
  {
    id: "nvda",
    title: "NVIDIA (NVDA) Stock Performance Analysis",
    description: "Conducted a deep-dive analysis of NVIDIA's historical data using Python. Performed data cleaning, volatility assessment, and trend analysis with technical indicators to deliver actionable investment insights.",
    image: "/images/projects/nvda/1.png",
    images: [
      "/images/projects/nvda/1.png",
      "/images/projects/nvda/2.png",
      "/images/projects/nvda/3.png",
      "/images/projects/nvda/DB.png",
      "/images/projects/nvda/CSV_EXCEL.png",
    ],
    technologies: ["Python", "Jupyter Notebook", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/IPEACE04",
  }
];
