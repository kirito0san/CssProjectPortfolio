import React, { useEffect, useState } from "react";
import projectsData from "./Myrepo.json";

function Gallery() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);
  return (
    <section className="p-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects &&
            projects.map((project, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 object-center bg-center"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 p-4">
                  <h3 className="text-white text-2xl font-bold mb-2">{project.name}</h3>
                  <p className="text-white text-xl mb-2">{project["skill used in"].join(" , ")}</p>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-300 underline"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
