// app/layout.js
import './globals.css';

export const metadata = {
  title: 'Next Blogger',
  description: 'A simple blogging app built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
