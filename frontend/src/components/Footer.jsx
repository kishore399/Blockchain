import React from "react";

export default function Footer() {
  return (
      <footer className="w-full py-8 text-center text-zinc-500 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <p>© {new Date().getFullYear()} Blockchain Library Tracker. All rights reserved.</p>
        </div>
      </footer>
  );
}
