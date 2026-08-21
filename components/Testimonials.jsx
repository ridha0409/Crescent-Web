import React, { useState } from "react";

/* ================= Data ================= */
const testimonials = [
  {
    quote:
      '"The online MBA program helped me grow professionally while continuing my job."',
    name: "Aravind R",
    role: "MBA",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    quote:
      '"Flexible schedule and great faculty support made all the difference for me."',
    name: "Sneha K",
    role: "MBA Finance",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    quote:
      '"The practical case studies gave me real confidence in the workplace."',
    name: "Rahul M",
    role: "MBA Marketing",
    avatar: "https://i.pravatar.cc/100?img=51",
  },
];

const achievements = [
  {
    label: "Research Accreditation",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1000&q=80",
  },
  {
    label: "Top Ranked Institute 2025",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1000&q=80",
  },
  {
    label: "Global Partnership Award",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1000&q=80",
  },
  {
    label: "Best Campus Infrastructure",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1000&q=80",
  },
  {
    label: "Alumni Excellence Award",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1000&q=80",
  },
  {
    label: "Industry Collaboration",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&q=80",
  },
];

/* ================= CSS (columns now share one fixed structure) ================= */
const styles = `
  .saa-wrapper *{box-sizing:border-box;}
  .saa-wrapper{
    --navy:#141a4d;
    --orange:#f5a623;
    --bg:#eef1f9;
    --card:#ffffff;
    --text:#141a4d;
    --muted:#5c6178;
    font-family: 'Poppins','Segoe UI',Arial,sans-serif;
    background:var(--bg);
    padding:60px 6vw;
  }
  .saa-grid{
    display:grid;
    grid-template-columns:1fr 1fr;
    align-items:stretch;
    gap:60px;
    max-width:1500px;
    margin:0 auto;
  }
  @media(max-width:900px){
    .saa-grid{grid-template-columns:1fr;}
  }

  /* Every column shares this exact structure so both sides render at
     identical heights no matter how much text/image content they hold */
  .saa-column{
    display:flex;
    flex-direction:column;
    height:100%;
  }
  .saa-col-title{
    font-size:2.4rem;
    font-weight:700;
    color:var(--navy);
    margin:0 0 14px 0;
    min-height:3.2rem;
    display:flex;
    align-items:center;
  }
  .saa-underline{
    width:70px;
    height:4px;
    background:var(--orange);
    border-radius:2px;
    margin-bottom:40px;
  }

  /* Fixed, shared carousel height — both columns' cards fill this exactly */
  .saa-carousel{
    position:relative;
    width:100%;
    height:430px;
    flex-shrink:0;
  }
  .saa-card{
    position:relative;
    background:var(--card);
    border-radius:22px;
    box-shadow:0 10px 30px rgba(20,26,77,0.08);
    height:100%;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding:40px;
    text-align:center;
    overflow:hidden;
  }
  .saa-nav-btn{
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    width:44px;
    height:44px;
    border-radius:50%;
    background:#fff;
    border:none;
    box-shadow:0 4px 12px rgba(0,0,0,0.12);
    display:flex;
    align-items:center;
    justify-content:center;
    cursor:pointer;
    z-index:5;
    color:var(--navy);
    font-size:20px;
    transition:transform .15s ease, background .15s ease;
  }
  .saa-nav-btn:hover{ background:var(--navy); color:#fff; transform:translateY(-50%) scale(1.06); }
  .saa-nav-left{ left:-10px; }
  .saa-nav-right{ right:-10px; }

  /* Dots row pinned to a fixed height too, so the bottom edges of both
     columns land on the same line even if one has more/fewer dots */
  .saa-dots{
    display:flex;
    align-items:center;
    gap:8px;
    height:28px;
    margin-top:20px;
    justify-content:flex-start;
  }
  .saa-dot{
    width:8px;
    height:8px;
    border-radius:50%;
    background:#c9cde3;
    cursor:pointer;
    transition:all .2s ease;
    border:none;
    padding:0;
    flex-shrink:0;
  }
  .saa-dot.active{
    width:28px;
    border-radius:5px;
    background:var(--navy);
  }
  .saa-stars{
    color:var(--orange);
    font-size:1.3rem;
    letter-spacing:4px;
    margin-bottom:18px;
  }
  .saa-quote{
    font-size:1.35rem;
    font-weight:500;
    color:var(--text);
    line-height:1.5;
    max-width:480px;
    margin:0 0 26px 0;
    display:-webkit-box;
    -webkit-line-clamp:4;
    -webkit-box-orient:vertical;
    overflow:hidden;
  }
  .saa-avatar{
    width:60px;
    height:60px;
    border-radius:50%;
    object-fit:cover;
    margin-bottom:12px;
    border:2px solid #eee;
    flex-shrink:0;
  }
  .saa-name{
    font-weight:700;
    color:var(--navy);
    font-size:1.05rem;
  }
  .saa-role{
    color:var(--orange);
    font-weight:600;
    font-size:.9rem;
    margin-top:2px;
  }
  .saa-achieve-card{
    padding:0;
    overflow:hidden;
  }
  .saa-achieve-img{
    width:100%;
    height:100%;
    object-fit:cover;
    display:block;
  }
  .saa-achieve-label{
    position:absolute;
    left:24px;
    bottom:22px;
    color:#fff;
    font-weight:700;
    font-size:1.4rem;
    text-shadow:0 2px 8px rgba(0,0,0,0.5);
    z-index:2;
  }
  .saa-achieve-overlay{
    position:absolute;
    inset:0;
    background:linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0) 45%);
    z-index:1;
  }
`;

/* ================= Component ================= */
export default function StudentsAndAchievements() {
  const [testiIndex, setTestiIndex] = useState(0);
  const [achieveIndex, setAchieveIndex] = useState(0);

  const changeTesti = (dir) =>
    setTestiIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  const changeAchieve = (dir) =>
    setAchieveIndex((i) => (i + dir + achievements.length) % achievements.length);

  const t = testimonials[testiIndex];
  const a = achievements[achieveIndex];

  return (
    <div className="saa-wrapper">
      <style>{styles}</style>

      <div className="saa-grid">
        {/* LEFT: What Our Students Say */}
        <div className="saa-column">
          <h2 className="saa-col-title">What Our Students Say</h2>
          <div className="saa-underline"></div>

          <div className="saa-carousel">
            <button
              className="saa-nav-btn saa-nav-left"
              onClick={() => changeTesti(-1)}
              aria-label="Previous testimonial"
            >
              &#8249;
            </button>
            <button
              className="saa-nav-btn saa-nav-right"
              onClick={() => changeTesti(1)}
              aria-label="Next testimonial"
            >
              &#8250;
            </button>

            <div className="saa-card">
              <div className="saa-stars">★★★★★</div>
              <p className="saa-quote">{t.quote}</p>
              <img className="saa-avatar" src={t.avatar} alt={t.name} />
              <div className="saa-name">{t.name}</div>
              <div className="saa-role">{t.role}</div>
            </div>
          </div>

          <div className="saa-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`saa-dot ${i === testiIndex ? "active" : ""}`}
                onClick={() => setTestiIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT: Our Achievements */}
        <div className="saa-column">
          <h2 className="saa-col-title">Our Achievements</h2>
          <div className="saa-underline"></div>

          <div className="saa-carousel">
            <button
              className="saa-nav-btn saa-nav-left"
              onClick={() => changeAchieve(-1)}
              aria-label="Previous achievement"
            >
              &#8249;
            </button>
            <button
              className="saa-nav-btn saa-nav-right"
              onClick={() => changeAchieve(1)}
              aria-label="Next achievement"
            >
              &#8250;
            </button>

            <div className="saa-card saa-achieve-card">
              <div className="saa-achieve-overlay"></div>
              <img className="saa-achieve-img" src={a.img} alt={a.label} />
              <div className="saa-achieve-label">{a.label}</div>
            </div>
          </div>

          <div className="saa-dots">
            {achievements.map((_, i) => (
              <button
                key={i}
                className={`saa-dot ${i === achieveIndex ? "active" : ""}`}
                onClick={() => setAchieveIndex(i)}
                aria-label={`Go to achievement ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}