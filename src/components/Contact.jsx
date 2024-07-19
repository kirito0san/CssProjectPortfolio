import React from "react";

function Contact() {
  return (
    <section className="p-6 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact</h2>
        <div className="text-center">
          <p className="mb-2">
            Email:{" "}
            <a href="mailto:jodat.ahmedsyed@gmail.com" className="text-blue-500 hover:underline">
              jodat.ahmedsyed@gmail.com
            </a>
          </p>
          <p className="mb-2">
            Phone:{" "}
            <a href="tel:+201119089816" className="text-blue-500 hover:underline">
              01119089816
            </a>
          </p>
          <p className="mb-2">
            GitHub:{" "}
            <a
              href="https://github.com/kirito0san"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              github.com/kirito0san
            </a>
          </p>
          <p className="mb-2">
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/ahmed-fathy-05114a257/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              linkedin.com/in/ahmed-fathy-05114a257
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
