import landingAlertz from '../assets/landing-alertz.webp'
import landingVr from '../assets/landing-vr.webp'
import landingGuild from '../assets/landing-guild.webp'
import landingKodetech from '../assets/landing-kodetech.webp'
let projectData = [
    {
        image: `${landingAlertz}`,
        title: `Hundred Units of two bedroom Houses`,
        location: `Calabar, Cross-Rivers State`,
        client: `World Nations Development Programme Initiative (WNDP)`,
        text: `100 units of houses for World 
        Nations Development Programme Initiative (WNDP)`,
        link: "project-link/?title=WNDP",
        tag: "BUILDING",
    },
    {
        image: `${landingAlertz}`,
        title: "Motorized boreholes",
        client: "Osun State Government",
        location: "Osun State, Nigeria",
        text: `Construction of motorized boreholes
        for the Osun State Government, Contract No
        OS/RUWESA/AFDB/WOIS/2018`,
        link: "project-link/?title=OSWC",
        tag: "WATER",
    },

    {
        image: `${landingVr}`,
        text: `Construction of 12km Ipole/Irado/
        Obatele road in Akure North Local Government Area
        &mdash; Ondo State FADAMA coordination office`,
        title: "Twelve Kilometers road",
        client: "FADAMA",
        location: "Akure, Ondo State",
        link: "project-link/?title=OAU",
        tag: "CIVIL",

    },
    {
        image: `${landingVr}`,
        text: `Construction of offices for the department of mathematics and statistics,
        Federal Polytechnic Idah, Kogi State`,
        title: "Departmental offices",
        location: "Idah, Kogi State",
        client: "Federal Polytechnic, Idah",
        link: "project-link2",
        tag: "BUILDING"
    },
    {
        image: `${landingVr}`,
        text: `Obafemi Awolowo University, Ile-Ife. Renovation of Chemistry laboratories 1,2 and 3
        and moremi residential hall`,
        title: "Renovation at OAU",
        client: "Obafemi Awolowo University, OAU",
        location: "Ile-Ife, Osun State",
        link: "project-link2",
        tag: "BUILDING"
    }
    ,
    {
        image: `${landingVr}`,
        text: `Federal Polytechnic, Ile-Oluji Health center construction`,
        link: "project-link2",
        title: "Medical Center Construction",
        location: "Ile-Oluji, Ondo State",
        client: "Federal Polytechnic, Ile-Oluji",
        tag: "BUILDING"
    }
    ,
    {
        image: `${landingVr}`,
        text: `Renovation of institute of food security, Environmental Resources and
        research (IFSERAR) building, Federal University of Agriculture, Abeokuta`,
        link: "project-link2",
        title: "IFSERAR building",
        client: "Federal University of Agriculture, Abeokuta",
        location: "Abeokuta, Ogun-State",
        tag: "BUILDING"
    }
    ,
    {
        image: `${landingVr}`,
        text: `Federal University of Technology Akure.(FUTA) Main Jibowu Female Hostel and 
        porter's lodge renovation`,
        title: "main jibowu hostel and porter's lodge",
        client: "Federal university of technology, Akure",
        location: "Akure, Ondo-State",
        link: "project-link2",
        tag: "BUILDING"
    }
    ,
    {
        image: `${landingVr}`,
        text: `Construction of solar powered Boreholes
        in Owo LGA, Ondo &mdash; State. Federal Ministry 
        of Water Resources`,
        link: "project-link2",
        title: "Solar powered boreholes",
        client: "Federal Ministry of Water Resources",
        location: "Ondo state",
        tag: "WATER"
    }
    ,
    {
        image: `${landingVr}`,
        text: `Construction of Boreholes
        at CRIN Headquaters and Substations &mdash; 
        Cocoa Research Institute of Nigeria`,
        link: "project-link2",
        title: "Boreholes construction",
        client: "Cocoa Research Institute of Nigeria",
        location: "Ibadan Oyo-State",
        tag: "BUILDING"
    }
    ,
    {
        image: `${landingVr}`,
        text: `The GIS Mapping of all selected sites
        of all selected sites in Ondo &mdash; State
        OD/NEWMAP/CS/CQS/2019/11 Ondo &mdash; State
        Nigeria Erosion and Watershed Management project
        (World Bank Assisted)`,
        title: "GIS MApping",
        client: "Nigeria Erosion and Watershed Management",
        location: "Ondo State",
        link: "project-link2",
        tag: "WATER"
    }
    ,
    {
        image: `${landingVr}`,
        text: `Construction of handball and volleyball court with pavilon.
        Adekunle Ajasin University, Akungba &mdash; Akoko `,
        link: "project-link2",
        title: "Handball and volley ball courts",
        client: "Adekunle Ajasin University, Akungba Akoko",
        location: "Akungba-Akoko, Ondoo state",
        tag: "BUILDING"
    }
    ,
    {
        image: `${landingVr}`,
        text: `Construction of Head Branch of the Be &mdash; Happie Hotel
        at Ajipowo Community, Akure, Ondo &mash; State`,
        link: "",
        title: "Be-Happie Hotel",
        client: "Be-Happie Hotels, Nigeria",
        location: "Akure, Ondo State",
        tag: "BUILDING"
    }
    ,
    {
        image: `${landingVr}`,
        text: `General maintenance/Repairs of ADO-EKITI-ILUMOBA
        -IMESI ONDO STATE border road in Ekiti State &mdash;
        Federal Road Maintenace Agency, (FERMA)`,
        link: "project-link2",
        title: "Maintanace and Repair of Federal Road",
        client: "FERMA",
        location: "Ekiti State",
        tag: "CIVIL"
    }
    ,
    {
        image: `${landingVr}`,
        text: `Construction and Rehabilitation of Box culvert 
        along Aramoko-Ileona junction, Ado-Ekiti-itawure Road in
        Ekiti State. Federal Road Maintenace Agency, (FERMA)`,
        link: "project-link2",
        title: "Construction of Federal Road",
        client: "FERMA",
        location: "Ado-Ekiti, Ekiti State",
        tag: "CIVIL"
    }
    ,
    {
        image: `${landingVr}`,
        text: `Construction of Box Culverts in Four locations in
        Ondo State`,
        link: "project-link2",
        title: "Box culverts",
        client: "Ondo State",
        location: "Ondo State",
        tag: "CIVIL"
    }
    ,
    {
        image: `${landingVr}`,
        text: `Construction of 8km Upeme Elesisi Farm Road, Abakosi
        OWO LGA-Ondo state (FADAMA Coordination)`,
        link: "project-link2",
        title: "Road Construction",
        client: "FADAMA",
        location: "Owo, Ondo State",
        tag: "CIVIL"
    }
]


projectData.forEach((object, index) => {
    object.position = index
    object.link = `project-link/?title=${index}`
})

export default projectData