import landingAlertz from '../assets/landing-alertz.webp'
import landingVr from '../assets/landing-vr.webp'
import landingGuild from '../assets/landing-guild.webp'
import landingKodetech from '../assets/landing-kodetech.webp'


let data = [
    {
        name: 'Alertz',
        image: `${landingAlertz}`,
        details: 'A Crime Alert Application.',
        year: '2022',
        link: '/alertz'
    },
    {
        name: 'Mixed Reality',
        image: `${landingVr}`,
        details: 'Mixed Reality Interaction.',
        year: '2022',
        link: '/mr'
    },
    {
        name: 'Guild',
        image: `${landingGuild}`,
        details: 'A Web3 Community Platform.',
        year: '2022',
        link: '/guild'
    },
    {
        name: 'KodeTech',
        image: `${landingKodetech}`,
        details: 'An E-Commerce Website.',
        year: '2022',
        link: "/kodetech"
    }
]

export default data