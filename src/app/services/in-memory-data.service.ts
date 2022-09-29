import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let projects = [
            {
                id: 0,
                author: 'eiLink',
                cover: 'https://waterfountain.no/wp-content/uploads/2019/11/placeholder.png',
                date: '25 June 2022',
                title: 'Numerical simulations of surface water flows.',
                description: 'Our innovative water management project helps ensure good yields, nutrient balance, and water protection and prevent water scarcity. The project aimed to contribute to higher level goals of sustaining natural resources, improving service delivery, increasing economic productivity and deal the water-related challenges posed by various factors. The project focused on the analysis of soil and climatic features of the Hajigabul-Padarchol farm area, the development of an initial simulation model of surface flows and floods in the mountainous area. Rainfall intensity has been analyzed based on climatic data of the last 40 years',
                industry: 'Oil',
                service: 'Image Recognition',
                link: 'Oil'
            },
            {
                id: 1,
                author: 'eiLink',
                cover: 'https://waterfountain.no/wp-content/uploads/2019/11/placeholder.png',
                date: '25 June 2022',
                title: 'Estimation of water salinity distribution for ShahDeniz field.',
                description: 'Formation of water salinity is important for understanding the hydrodynamic system in a sedimentary basin, including areas of hydraulic communication and isolation and has implications for the prediction of formation pressure, characterizing hydrocarbon migration pathways, and estimating the risk of a trap being flushed. Unknown mechanism of formation water salinity distribution in Shahdeniz creates challenges from several aspects, as it impacts log resistivity readings, which results in erroneous saturation estimations. Among existing methods of predicting salinity, the most effective is a direct measurement of water resistivity or brine chemistry analysis. The pitfall of these methods is that they require core extraction from a well. Our product able to predict formation water salinity using the available well data, as well as to understand the mechanism of salinity distribution, impacting factors, like rock mineralogy, impact of Ultra-Disperced particles (UDP), capillary pressure, dynamic disequilibrium, etc.',
                industry: 'Oil',
                service: 'Image Recognition',
                link: 'Oil'
            },
            {
                id: 2,
                author: 'eiLink',
                cover: 'https://waterfountain.no/wp-content/uploads/2019/11/placeholder.png',
                date: '25 June 2022',
                title: 'Prediction of Drilling risks (wellbore instability, losses, stuck pipes) using numerical techniques.',
                description: 'Several types of challenges take place during drilling that include wellbore instability, stuck pipe, fluid losses, etc. Reasons associated with these problems are understood at some degree on a qualitative level, however it is unclear in which conditions the combination of different drilling and rock parameters results in a drilling issue.  Additionally, no tool exists that can predict the risks prior to drilling. The goal of the project was to create such a tool that can analyze all drilling parameters (ROP, RPM, PRESSPIPE, etc.) in combination with rock properties (V-shale, DEN) and PPFG data ( pore pressure, fracture pressure) and give a prediction of probability of risk occurrence.',
                industry: 'Oil',
                service: 'Image Recognition',
                link: 'Oil'
            },
            {
                id: 3,
                author: 'eiLink',
                cover: 'https://waterfountain.no/wp-content/uploads/2019/11/placeholder.png',
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
                id: 0,
                authors: 'Izat Shahsenov, Gurban Orujov',
                date: '22 August 2018',
                title: 'Modeling of the cementation factor and hydraulic permeability using Mercury Injection Capillary Pressure (MICP) measurements.',
                link: 'https://www.sciencedirect.com/science/article/abs/pii/S0920410518306910'
            },
            {
                id: 1,
                authors: 'Izat Shahsenov, Ilgar Baghishov, Parviz Allahverdiyev, Ehtiram Azizov',
                date: '1 March 2021',
                title: 'Wax precipitation modelling using Perturbed Chain Statistical Associating Fluid Theory (PC-SAFT).',
                link: 'https://www.sciencedirect.com/science/article/abs/pii/S037838122030460X?via%3Dihub#!'
            },
            {
                id: 2,
                authors: 'Izat Shahsenov, Ruslan Malikov, Peter Cook, Sara Grant, Nariman Ismayilov, Kamran Abbasov',
                date: '17 December 2021',
                title: 'Prediction of Gamma Ray data from pre-stack seismic reflection partial angle stacks using Continuous Wavelet Transform and convolutional neural network approach.',
                link: 'https://www.sciencedirect.com/science/article/abs/pii/S0926985121002718'
            },
            {
                id: 3,
                authors: 'Shahriyar Alkhasli, Gasham Zeynalov, Aydin Shahtakhtinskiy',
                date: '7 January 2022',
                title: 'Quantifying occurrence of deformation bands in sandstone as a function of structural and petrophysical factors and their impact on reservoir quality: an example from outcrop analog of Productive Series (Pliocene), South Caspian Basin.',
                link: 'https://link.springer.com/article/10.1007/s13202-021-01448-z'
            }
        ];

        let careers = [
            {
                id: 0,
                name: 'Computational Geophysicist',
                location: 'Baku, Azerbaijan',
                link: 'https://forms.clickup.com/31136212/f/xp6em-2063/CHWZG24AES9N9RKYY2'
            },
            {
                id: 1,
                name: 'Applied Geophysicist',
                location: 'Baku, Azerbaijan',
                link: 'https://forms.clickup.com/31136212/f/xp6em-2043/Q76I6XXGNLR85331PB'
            },
            {
                id: 2,
                name: 'Geophysicist (Interpreter)',
                location: 'Baku, Azerbaijan',
                link: 'https://forms.clickup.com/31136212/f/xp6em-2103/2ZSD4244VIBM9LPBZK'
            },
            {
                id: 3,
                name: 'Signal Processing Engineer',
                location: 'Baku, Azerbaijan',
                link: 'https://forms.clickup.com/31136212/f/xp6em-2083/6SPI1CAZ1OXL2MMW4J'
            },
            {
                id: 4,
                name: 'Advanced Data Science',
                location: 'Baku, Azerbaijan',
                link: 'https://forms.clickup.com/31136212/f/xp6em-2023/FPZ380T896T54I8HRR'
            },
            {
                id: 5,
                name: 'Applied Geologist',
                location: 'Baku, Azerbaijan',
                link: 'https://forms.clickup.com/31136212/f/xp6em-1983/7SXHYOXA3LNHX0UC2D'
            },
            {
                id: 6,
                name: 'Well Planner',
                location: 'Baku, Azerbaijan',
                link: 'https://forms.clickup.com/31136212/f/xp6em-2003/OP7Y138ZTQFFEVIB51'
            }
        ];

        let team = [
            {
                id: 0,
                name: 'Shahriyar Alkhasli',
                position: 'Director',
                info: 'Shahriyar graduated from the University of Tulsa in the United States with an MS in Petroleum Engineering. He is presently pursuing his PhD in Petroleum Engineering at Khazar University. With extensive work and research experience in various petroleum engineering fields, he applies his technical and programming skills in leading eiLink projects. His research primarily focuses on Computational Fluid Dynamics—LBM, Deep Learning, stochastic optimization for assisted history matching, and modeling and dynamic simulation of sub-seismic features.',
                cover: 'assets/images/team/shahriyar.jpg'
            },
            {
                id: 1,
                name: 'Rustam Rustamov',
                position: 'Senior Advisor',
                info: 'He received his PhD from the Ioffe Physical-Technical Institute of the Russian Academy of Sciences in St. Petersburg, Russia. The areas of expertise for Rustam Rustamov are remote sensing, GIS, and space instrumentation. He has a wealth of expertise leading and managing in both public and private engineering and scientific institutions.',
                cover: 'assets/images/team/rustam.jpg'
            },
            {
                id: 2,
                name: 'Izat Shahsenov',
                position: 'Lead Researcher',
                info: 'Izat graduated with an MS degree from the Moscow Institute of Physics and Technology (MIPT), Department of Physical and Quantum Electronics. With a strong background in applied physics and math, Izat leads eiLInk research projects with applications of Mathematical Modeling, Machine Learning, Deep Learning, and Computer Vision.',
                cover: 'assets/images/team/izat.jpg'
            },
            {
                id: 3,
                name: 'Vafa Dadashova',
                position: 'Researcher',
                info: 'She joined eiLink as a researcher after earning a master’s degree in Petroleum Engineering from Imperial College London. At eiLink, Vafa works on solving geological and engineering problems. Her area of study is the distribution of shale minerals and the compaction process. In addition, it incorporates solving petroleum engineering problems by modelling reservoir flow using commercial software as well as coding.',
                cover: 'assets/images/team/vafa.jpg'
            },
            {
                id: 4,
                name: 'Turan Eminbeyli',
                position: 'Researcher',
                info: 'Turan graduated from Azerbaijan State Oil Academy with bachelor’s degree in Petroleum Geology. Prior to joining eiLink he spent 10 years as a geologist for international oil companies. He is responsible for delivering industry-demanding research products in the areas of Oil & Gas Exploration, Appraisal and Production.',
                cover: 'assets/images/team/turan.jpeg'
            },
            {
                id: 5,
                name: 'Ruslan Malikov',
                position: 'Junior Researcher',
                info: 'Ruslan graduated with a bachelor’s degree in Geophysical Engineering from French-Azerbaijan University. He started his journey with eiLink while being a student as a research assistant. After a lot of hard work, dedication, and time of growth, he became a junior researcher at eiLink. His research areas include Seismic Inversion and Processing, Signal Processing, Data Analysis, Software Development, and the application of Machine Learning.',
                cover: 'assets/images/team/ruslan.jpg'
            },
            {
                id: 6,
                name: 'Ramil Mamishov',
                position: 'Junior Researcher',
                info: 'Ramil holds a BS degree in Engineering from both Baku Higher Oil School and Heriot-Watt University.',
                cover: 'assets/images/team/ramil.jpg'
            },
            {
                id: 7,
                name: 'Gunel Rzayeva',
                position: 'Junior Researcher',
                info: 'After completing her master’s degree in oil and gas engineering from the University of Aberdeen, Gunel started to work at Baku Engineering University. While working as a lecturer at the university, she joined eiLink as a researcher. Her solid mathematical problem-solving techniques and engineering training help her work on eiLink projects.',
                cover: 'assets/images/team/gunel.jpg'
            },
            {
                id: 8,
                name: 'Elmir Abilov',
                position: 'Junior Researcher',
                info: 'Elmir graduated with a Master of Science degree in Energy Resources and Petroleum Engineering from King Abdullah University of Science and Technology of Saudi Arabia and with a Bachelor’s degree in Petroleum Engineering from Baku Higher Oil School and Heriot-Watt University. At eiLink, his focus is developing solutions in Oil&Gas Production.',
                cover: 'assets/images/team/elmir.jpg'
            },
            {
                id: 9,
                name: 'Tatyana Yeleskina',
                position: 'Junior Researcher',
                info: 'Tatyana has a BS degree in Physics from Moscow State University Baku Branch. While being a student, she joined eiLink team as a research assistant. Particularly here, her research area is concentrated on the development of physical models for different industrial inversion problems, signal processing, data science, and statistics.',
                cover: 'assets/images/team/tatyana.jpg'
            },
            {
                id: 10,
                name: 'Fidan Karimova',
                position: 'Research Assistant',
                info: 'Fidan graduated with a bachelor’s degree in Computer Science from French-Azerbaijani University. She started her professional experience as a research assistant at eiLink while she was still a student. Her research areas focus mainly on Data Analysis, Remote Sensing, and Machine Learning.',
                cover: 'assets/images/team/fidan.jpg'
            },
            {
                id: 11,
                name: 'Orkhan Mammadov',
                position: 'Researcher',
                info: 'Orkhan joined the eiLink team while doing his Ph.D. at the China University of Petroleum (Beijing) with a major in Geological Reservoir Development. His M.Eng. research at CUPB covered 3D reservoir modelling and characterization of an unconventional reservoir. He has worked in a variety of geoscience-related fields, but his primary focus at eiLink is on solving industrial problems with Python, Data Analysis, and Machine Learning. ',
                cover: 'assets/images/team/orkhan.jpg'
            }
        ]

        return { projects, publications, careers, team };
    }
}