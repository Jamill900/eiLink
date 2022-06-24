import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let projects = [
            {
                id: 1,
                author: 'eiLink',
                cover: 'https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                date: '25 June 2022',
                title: 'Numerical simulations of surface water flows.',
                description: 'Our innovative water management project helps ensure good yields, nutrient balance, and water protection and prevent water scarcity. The project aimed to contribute to higher level goals of sustaining natural resources, improving service delivery, increasing economic productivity and deal the water-related challenges posed by various factors. The project focused on the analysis of soil and climatic features of the Hajigabul-Padarchol farm area, the development of an initial simulation model of surface flows and floods in the mountainous area. Rainfall intensity has been analyzed based on climatic data of the last 40 years',
                industry: 'Oil',
                service: 'Image Recognition',
                link: 'Oil'
            },
            {
                id: 2,
                author: 'eiLink',
                cover: 'https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                date: '25 June 2022',
                title: 'Estimation of water salinity distribution for ShahDeniz field.',
                description: 'Formation of water salinity is important for understanding the hydrodynamic system in a sedimentary basin, including areas of hydraulic communication and isolation and has implications for the prediction of formation pressure, characterizing hydrocarbon migration pathways, and estimating the risk of a trap being flushed. Unknown mechanism of formation water salinity distribution in Shahdeniz creates challenges from several aspects, as it impacts log resistivity readings, which results in erroneous saturation estimations. Among existing methods of predicting salinity, the most effective is a direct measurement of water resistivity or brine chemistry analysis. The pitfall of these methods is that they require core extraction from a well. Our product able to predict formation water salinity using the available well data, as well as to understand the mechanism of salinity distribution, impacting factors, like rock mineralogy, impact of Ultra-Disperced particles (UDP), capillary pressure, dynamic disequilibrium, etc.',
                industry: 'Oil',
                service: 'Image Recognition',
                link: 'Oil'
            },
            {
                id: 3,
                author: 'eiLink',
                cover: 'https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                date: '25 June 2022',
                title: 'Prediction of Drilling risks (wellbore instability, losses, stuck pipes) using numerical techniques.',
                description: 'Several types of challenges take place during drilling that include wellbore instability, stuck pipe, fluid losses, etc. Reasons associated with these problems are understood at some degree on a qualitative level, however it is unclear in which conditions the combination of different drilling and rock parameters results in a drilling issue.  Additionally, no tool exists that can predict the risks prior to drilling. The goal of the project was to create such a tool that can analyze all drilling parameters (ROP, RPM, PRESSPIPE, etc.) in combination with rock properties (V-shale, DEN) and PPFG data ( pore pressure, fracture pressure) and give a prediction of probability of risk occurrence.',
                industry: 'Oil',
                service: 'Image Recognition',
                link: 'Oil'
            },
            {
                id: 4,
                author: 'eiLink',
                cover: 'https://images.pexels.com/photos/2529973/pexels-photo-2529973.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                date: '25 June 2022',
                title: 'Wax precipitation modelling using Perturbed Chain Statistical Associating Fluid Theory.',
                description: 'Wax precipitation modeling was performed based on Perturbed Chain Statistical Associating Fluid Theory (PC-SAFT) thermodynamic model to estimate wax precipitation amount in oil and gas wells. The algorithm deploys real-time Distributed Temperature Sensing (DTS) data but also applicable for the wells without DTS since trained neural network model is incorporated for temperature approximation. The algorithm is scalable to other fluid properties and reservoir conditions due to automatic calibration of model parameters provided with available experimental PVT data. Outputs of the product were validated on 80 oil wells of the South Caspian Basin and allowed the operator to increase reliability of production operations.',
                industry: 'Oil',
                service: 'Image Recognition',
                link: 'Oil'
            }
        ];

        let publications = [
            {
                id: 1,
                authors: 'Izat Shahsenov, Gurban Orujov',
                date: '22 August 2018',
                title: 'Modeling of the cementation factor and hydraulic permeability using Mercury Injection Capillary Pressure (MICP) measurements.',
                link: 'https://www.sciencedirect.com/science/article/abs/pii/S0920410518306910'
            },
            {
                id: 2,
                authors: 'Izat Shahsenov, Ilgar Baghishov, Parviz Allahverdiyev, Ehtiram Azizov',
                date: '1 March 2021',
                title: 'Wax precipitation modelling using Perturbed Chain Statistical Associating Fluid Theory (PC-SAFT).',
                link: 'https://www.sciencedirect.com/science/article/abs/pii/S037838122030460X?via%3Dihub#!'
            },
            {
                id: 3,
                authors: 'Izat Shahsenov, Ruslan Malikova, Peter Cook, Sara Grant, Nariman Ismayilov, Kamran Abbasov',
                date: '17 December 2021',
                title: 'Prediction of Gamma Ray data from pre-stack seismic reflection partial angle stacks using Continuous Wavelet Transform and convolutional neural network approach.',
                link: 'https://www.sciencedirect.com/science/article/abs/pii/S0926985121002718'
            },
            {
                id: 4,
                authors: 'Shahriyar Alkhasli, Gasham Zeynalov, Aydin Shahtakhtinskiy',
                date: '7 January 2022',
                title: 'Quantifying occurrence of deformation bands in sandstone as a function of structural and petrophysical factors and their impact on reservoir quality: an example from outcrop analog of Productive Series (Pliocene), South Caspian Basin.',
                link: 'https://link.springer.com/article/10.1007/s13202-021-01448-z'
            }
        ];

        let careers = [
            {
                id: 1,
                name: 'Computational Geophysicist',
                location: 'Baku, Azerbaijan',
                link: 'https://forms.gle/U54VbCv1ubuCv2DS6'
            },
            {
                id: 2,
                name: 'Applied Geophysicist',
                location: 'Baku, Azerbaijan',
                link: 'https://forms.gle/U54VbCv1ubuCv2DS6'
            },
            {
                id: 3,
                name: 'Geophysicist (Interpreter)',
                location: 'Baku, Azerbaijan',
                link: 'https://forms.gle/U54VbCv1ubuCv2DS6'
            },
            {
                id: 4,
                name: 'Signal Processing Engineer',
                location: 'Baku, Azerbaijan',
                link: 'https://forms.gle/U54VbCv1ubuCv2DS6'
            },
            {
                id: 5,
                name: 'Advanced Data Science',
                location: 'Baku, Azerbaijan',
                link: 'https://forms.gle/U54VbCv1ubuCv2DS6'
            },
            {
                id: 6,
                name: 'Applied Geologist',
                location: 'Baku, Azerbaijan',
                link: 'https://forms.gle/U54VbCv1ubuCv2DS6'
            },
            {
                id: 7,
                name: 'Well Planner',
                location: 'Baku, Azerbaijan',
                link: 'https://forms.gle/U54VbCv1ubuCv2DS6'
            }
        ];

        let team = [
            {
                id: 1,
                name: 'Shahriyar Alkhasli',
                position: 'Director',
                info: 'Shahriyar has a MS degree in Petroleum Engineering from University of Tulsa, USA. Currently he is doing his PhD in Petroleum Engineering at Khazar University. With extensive work and research experience in various petroleum engineering fields, he applies his technical and programming skills in leading eiLink projects. Particularly his research is concentrated in: Modeling of sub-seismic features and dynamic simulation; Stochastic optimization for assisted history matching Computational Fluid Dynamics – LBM; Deep Learning.',
                cover: 'assets/images/team/shahriyar.jpg'
            },
            {
                id: 2,
                name: 'Rustam Rustamov',
                position: 'Senior Advisor',
                info: 'He graduated with a PhD from the Ioffe Physical-Technical Institute of the Russian Academy of Sciences in St Petersburg, Russia. Rustam Rustamov primarily specialises in space instrumentation and remote sensing and GIS technology. He has extensive directing and managing experience in in various public, private engineering and scientific organizations At eiLink he works as managing director of the centre , supporting the work of the centre and contributing invaluably with his insight and experience. His areas of expertise : Management, Remote Sensing , Geographic Information Systems, Satellite.',
                cover: 'assets/images/team/rustam.jpg'
            },
            {
                id: 3,
                name: 'Izat Shahsenov',
                position: 'Lead Researcher',
                info: 'Izat graduated with MS degree Moscow Institute of Physics and Technology (MIPT), Department of Physical and Quantum Electronics. With strong background in applied physics and math, Izat leads eiLInk research projects with application of Mathematical Modeling, Machine Learning, Deep Learning and Computer Vision.',
                cover: 'assets/images/team/izat.jpeg'
            },
            {
                id: 4,
                name: 'Vafa Dadashova',
                position: 'Researcher',
                info: 'After graduating with master’s degree in Petroleum Engineering from Imperial College London she joined eiLInk as a researcher. At eiLink she focuses on solving geological and engineering problems. Her research area focuses on understanding shale mineralogy distribution and the process of compaction. In addition, it incorporates solving petroleum engineering problems by modelling reservoir flow using commercial software as well as coding.',
                cover: 'assets/images/team/vafa.jpg'
            },
            {
                id: 5,
                name: 'Turan Eminbeyli',
                position: 'Researcher',
                info: 'Turan graduated from Azerbaijan State Oil Academy with bachelor degree in Petroleum Geology. Prior to joining eiLink he spent 10 years as a geologist in international oil companies. He is responsible for delivering industry demanding research products in the areas of Oil & Gas Exploration, Appraisal and Production.',
                cover: 'assets/images/team/turan.jpeg'
            },
            {
                id: 6,
                name: 'Ruslan Malikov',
                position: 'Junior Researcher',
                info: 'Ruslan graduated with a bachelor’s degree in Geophysical Engineering from French-Azerbaijan University. He started his journey with eiLink while being a student as a research assistant. After a lot of hard work, dedication, and time of growth, he became a junior researcher at eiLink. His research areas include Seismic Inversion and Processing, Signal Processing, Data Analysis, Software Development, and application of Machine Learning.',
                cover: 'assets/images/team/ruslan.jpg'
            },
            {
                id: 7,
                name: 'Ramil Mamishov',
                position: 'Junior Researcher',
                info: 'Ramil holds a BS degree in Engineering from both Baku Higher Oil School and Heriot&Watt University.',
                cover: 'assets/images/team/ramil.jpg'
            },
            {
                id: 8,
                name: 'Gunel Rzayeva',
                position: 'Junior Researcher',
                info: 'After completing her master degree in oil and gas engineering from University of Aberdeen, Gunel started to work at Baku Engineering University. While being as a lecturer at university, she joined eiLink as a researcher. Her strong mathematical solving strategies and engineering background help her to do eiLink projects.',
                cover: 'assets/images/team/gunel.jpg'
            },
            {
                id: 9,
                name: 'Elmir Abilov',
                position: 'Junior Researcher',
                info: 'Elmir graduated with a Master of Science degree in Energy Resources and Petroleum Engineering from King Abdullah University of Science and Technology of Saudi Arabia and with a Bachelor’s degree in Petroleum Engineering from Baku Higher Oil School and Heriot-Watt University. At eiLink, his focus will be developing solutions in the Oil&Gas Production.',
                cover: 'assets/images/team/elmir.jpg'
            },
            {
                id: 10,
                name: 'Tatyana Yeleskina',
                position: 'Junior Researcher',
                info: 'Tatyana has a BS degree in Physics from Moscow State University Baku Branch. While being a student, she joined to eiLink team as a research assistant. Particularly here research is concentrated in: development of physical models for different industrial inversion problems, signal processing, data science and statistics.',
                cover: 'assets/images/team/tatyana.jpg'
            },
            {
                id: 11,
                name: 'Fidan Karimova',
                position: 'Research Assistant',
                info: 'Fidan graduated with a bachelor’s degree in Computer Science from French-Azerbaijani University. She started her professional experience as a research assistant at eiLink while she was still a student. Her research areas focus mainly on Data Analysis, Remote Sensing and Machine Learning.',
                cover: 'assets/images/team/fidan.jpg'
            },
            {
                id: 12,
                name: 'Javidan Abdullayev',
                position: 'Research Assistant',
                info: 'Javidan earned a BS degree a specialization in Computer Science from Khazar University. As a research assistant at eiLink he is focusing on Data Analytics, Software Development, application of Machine Learning, Deep Learning and Computer Vision. He is currently studying for a Master`s Degree in Data Science and Artificial Intelligence at the French-Azerbaijan University.',
                cover: 'assets/images/team/javidan.jpeg'
            }
        ]

        return { projects, publications, careers, team };
    }
}