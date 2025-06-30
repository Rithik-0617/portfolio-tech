import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* SEO Meta Tags */}
        <meta name="description" content="Portfolio of Rithik V E, Robotics & Automation Engineer. AI, IoT, Full-stack, and more." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Rithik V E | Robotics & Automation Engineer" />
        <meta property="og:description" content="Portfolio of Rithik V E, Robotics & Automation Engineer. AI, IoT, Full-stack, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.tech" />
        <meta property="og:image" content="https://yourdomain.tech/og-image.png" />
        <link rel="canonical" href="https://yourdomain.tech" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
