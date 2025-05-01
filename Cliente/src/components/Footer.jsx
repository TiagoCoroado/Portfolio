import React from "react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <aside>
          <svg
            width="80"
            height="80"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>TC Logo</title>
            <rect width="100" height="100" fill="none" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="central"
              fontFamily="Helvetica, Arial, sans-serif"
              fontSize="48"
              fill="white"
              letterSpacing="4"
            >
              TC
            </text>
          </svg>

          <p>Copyright © {new Date().getFullYear()} Tiago Coroado</p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.linkedin.com/in/tiago-coroado-bbb05b307"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 1 20 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LinkedIn</title>
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.25h4V24h-4V8.25zm7.5 0h3.84v2.13h.06c.53-1 1.84-2.13 3.8-2.13 4.07 0 4.82 2.68 4.82 6.17V24h-4V14.19c0-2.33-.04-5.32-3.24-5.32-3.24 0-3.73 2.53-3.73 5.15V24h-4V8.25z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/tiagocoroado/#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Instagram</title>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.24 2.428.403a4.92 4.92 0 011.675 1.095 4.92 4.92 0 011.095 1.675c.163.458.347 1.258.403 2.428.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.24 1.97-.403 2.428a4.918 4.918 0 01-1.095 1.675 4.92 4.92 0 01-1.675 1.095c-.458.163-1.258.347-2.428.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.24-2.428-.403a4.918 4.918 0 01-1.675-1.095 4.92 4.92 0 01-1.095-1.675c-.163-.458-.347-1.258-.403-2.428-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.17.24-1.97.403-2.428a4.92 4.92 0 011.095-1.675A4.918 4.918 0 014.722 2.636c.458-.163 1.258-.347 2.428-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.74 0 8.332.014 7.052.072 5.775.13 4.677.326 3.738.665a7.091 7.091 0 00-2.568 1.678A7.09 7.09 0 00.665 4.91c-.339.939-.535 2.037-.593 3.314C.014 8.668 0 9.076 0 12s.014 3.332.072 4.612c.058 1.277.254 2.375.593 3.314a7.09 7.09 0 001.678 2.568 7.09 7.09 0 002.568 1.678c.939.339 2.037.535 3.314.593C8.668 23.986 9.076 24 12 24s3.332-.014 4.612-.072c1.277-.058 2.375-.254 3.314-.593a7.09 7.09 0 002.568-1.678 7.09 7.09 0 001.678-2.568c.339-.939.535-2.037.593-3.314.058-1.28.072-1.688.072-4.612s-.014-3.332-.072-4.612c-.058-1.277-.254-2.375-.593-3.314a7.09 7.09 0 00-1.678-2.568 7.09 7.09 0 00-2.568-1.678c-.939-.339-2.037-.535-3.314-.593C15.332.014 14.924 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
              </svg>
            </a>
            <a
              href="mailto:tiago_coroado@icloud.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Email</title>
                <path d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4zm2 0v.511l8 6.222 8-6.222V4H4zm16 2.489l-7.384 5.745a1 1 0 0 1-1.232 0L4 6.489V20h16V6.489z" />
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
}
