import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'NISA Note', description: 'NISA・投資信託の情報' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ja"><body style={{margin:0,fontFamily:'sans-serif'}}>{children}</body></html>
}