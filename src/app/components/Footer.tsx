export default function Footer() {
  return (
    <footer className="bg-[#0F172A] py-6">
      {/* Social Links Section */}
      <div className="flex justify-center items-center space-x-6 mb-4">
        <a
          href="https://www.linkedin.com/in/prateeksavanur/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-300 hover:text-blue-500 transition duration-300"
          aria-label="LinkedIn"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 19h-3v-10h3v10zm-1.5-11.286c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.25 11.286h-3v-5.25c0-1.381-.563-2.25-1.812-2.25-1.244 0-1.938.894-1.938 2.25v5.25h-3v-10h3v1.5c.594-1.125 1.656-1.75 3.094-1.75 2.031 0 3.656 1.375 3.656 4.312v5.938z" />
          </svg>
        </a>

        <a
          href="https://twitter.com/prateek_savanur"
          target="_blank"
          rel="noreferrer"
          className="text-gray-300 hover:text-sky-400 transition duration-300"
          aria-label="Twitter"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M24 4.557c-.883.392-1.83.656-2.828.775 1.017-.611 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.956-2.178-1.555-3.594-1.555-2.719 0-4.923 2.204-4.923 4.923 0 .386.043.762.127 1.124-4.094-.205-7.725-2.168-10.157-5.144-.424.729-.666 1.577-.666 2.481 0 1.71.87 3.213 2.19 4.096-.807-.026-1.566-.247-2.228-.616v.062c0 2.386 1.697 4.374 3.946 4.826-.414.112-.849.172-1.296.172-.318 0-.626-.031-.927-.089.626 1.956 2.444 3.379 4.6 3.419-1.685 1.32-3.809 2.106-6.115 2.106-.398 0-.79-.023-1.175-.069 2.179 1.396 4.768 2.211 7.557 2.211 9.054 0 14.009-7.504 14.009-14.009 0-.213-.004-.425-.014-.637.961-.694 1.797-1.562 2.457-2.549z" />
          </svg>
        </a>

        <a
          href="https://github.com/PrateekSavanur"
          target="_blank"
          rel="noreferrer"
          className="text-gray-300 hover:text-gray-500 transition duration-300"
          aria-label="GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.335-5.467-5.93 0-1.31.465-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.005-.404 1.02.005 2.048.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.232 1.911 1.232 3.221 0 4.606-2.807 5.625-5.479 5.921.43.372.814 1.102.814 2.222 0 1.606-.015 2.896-.015 3.287 0 .32.216.694.825.576 4.765-1.584 8.2-6.081 8.2-11.385 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>

        <a
          href="https://prateeksavanur.medium.com/"
          target="_blank"
          rel="noreferrer"
          className="text-gray-300 hover:text-green-400 transition duration-300"
          aria-label="Medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6"
          >
            <path d="M0 4v16h24v-16h-24zm2 2h2.605l5.395 6.402 5.398-6.402h2.602l-7.601 8.598 7.601 8.598h-2.602l-5.398-6.402-5.395 6.402h-2.605l7.604-8.598-7.604-8.598z" />
          </svg>
        </a>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 w-11/12 mx-auto mb-4"></div>

      {/* Copyright Section */}
      <p className="text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Prateek Savanur. All rights reserved.
      </p>
    </footer>
  );
}
