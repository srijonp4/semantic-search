import Link from 'next/link';
import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { ModeToggle } from './ModeToggle';
const Others = () => {
  return (
    <div className="pt-3 pb-0 shadow-none">
      <footer className=" min-w-screen isolate overflow-hidden  flex items-center justify-center gap-12">
        <Link target="_blank" href="https://twitter.com/srijonp4">
          <div className="h-6 w-6 shadow-none">
            <FaXTwitter />
          </div>
        </Link>
        <Link target="_blank" href="https://github.com/srijonp4/vector-search">
          <div className="h-6 w-6 shadow-none">
            <FaGithub />
          </div>
        </Link>
        <Link target="_blank" href="https://linkedin.com/in/srijonp4">
          <div className="h-6 w-6 shadow-none">
            <FaLinkedinIn />
          </div>
        </Link>
        <ModeToggle />
      </footer>
    </div>
  );
};

export default Others;
