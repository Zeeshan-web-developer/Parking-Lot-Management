import React from "react";
function Footer() {
  return (
    <footer className="bg-gray-900 fixed bottom-0 left-0 w-full">
      <div className="max-w-2xl mx-auto text-white py-4 flex justify-center">
        <p className="mt-2">
          &copy; Designed by{" "}
          <a
            href="https://www.linkedin.com/in/zeeshan-ahmad-dar/"
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zeeshan Ahmad Dar
          </a>{" "}
          2024
        </p>
      </div>
    </footer>
  );
}

export default Footer;
