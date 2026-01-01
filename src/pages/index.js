import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Home">
      <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>MyPage</h1>

        <p>
          This site is a personal technical knowledge base.
        </p>

        <p>
          The purpose of this site is to organize and preserve information
          for long-term reference.
        </p>

        <p>
          Articles and notes will be added gradually.
        </p>
      </main>
    </Layout>
  );
}
