import React from "react";

function Footer() {
  return (
    <div className=" bg-gray-900 fixed bottom-0 w-full">
      <div className="max-w-2xl mx-auto text-white py-5 w-full flex justify-center ">
        <p className=" mt-8 md:mt-0 ">
          &copy; Designed by{" "}
          <a
            href="https://www.linkedin.com/in/zeeshan-ahmad-dar/"
            className="text-blue-500"
          >
            Zeeshan Ahmad Dar
          </a>{" "}
          2024
        </p>
      </div>
    </div>
  );
}

export default Footer;
