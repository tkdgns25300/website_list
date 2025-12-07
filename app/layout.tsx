import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Website List - 인기 웹사이트 탐색',
  description: '카테고리별 인기 웹사이트를 탐색하세요',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}

