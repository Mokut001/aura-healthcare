
import './globals.css';
import { MeshProvider } from '@meshsdk/react';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><title>AuraHealth | Decentralized Insurance</title></head>
      <body><MeshProvider>{children}</MeshProvider></body>
    </html>
  );
}