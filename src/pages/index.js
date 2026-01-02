import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="Home">
      <main style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
        <h1>Thoughts & Notes</h1>

        <p>
          このサイトは、個人の思考や技術的なメモを整理し、
          将来参照できる形で残しておくための場所です。
        </p>

        <p>
          体系的な解説や完成した記事ではなく、
          試行錯誤の過程や途中経過も含めて記録します。
        </p>

        <p>
          内容は随時更新・修正されます。
        </p>
      </main>
    </Layout>
  );
}
