import { Inter, Lusitana, Playpen_Sans, Noto_Serif } from 'next/font/google'

export const inter = Inter({ subsets: ['latin'] })
export const lusitana = Lusitana({ subsets: ['latin'], weight: ['400', '700'] })
export const playpen_sans = Playpen_Sans({
  subsets: ['latin'],
  weight: ['400', '700', '100', '200', '300', '500', '600', '800'],
})
export const noto_serif = Noto_Serif({
  subsets: [
    'cyrillic',
    'cyrillic-ext',
    'greek',
    'greek-ext',
    'latin',
    'latin-ext',
    'vietnamese',
  ],
  weight: ['400', '700', '100', '200', '300', '500', '600', '800', '900'],
})
