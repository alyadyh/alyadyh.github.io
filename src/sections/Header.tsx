"use client";
import { useEffect, useState } from "react";

const sections = ["home", "about", "projects", "contact"];

export default function Header() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.id === "projects-sentinel") {
              setActive("projects");
            } else {
              setActive(entry.target.id);
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const sentinel = document.getElementById("projects-sentinel");
    if (sentinel) observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {sections.map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`nav-item px-4 py-2 rounded-full transition ${
              active === section
                ? "bg-white text-gray-900"
                : "text-white hover:bg-white/20"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>
    </div>
  );
}
