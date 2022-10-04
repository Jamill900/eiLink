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
                cover: 'assets/images/projects/project4.png',
                header: 'assets/images/projects/project4header.png',
                date: '3 November 2017',
                title: 'Shale compaction modeling study in the South Caspian basin',
                description: 'The South Caspian Basin (SCB) is a young basin with a sedimentary rock column up to 25 km thick. High sedimentation rates, combined with other factors, resulted in abnormally high pore pressures, particularly in shales, over the last 5 million years. Understanding the nature and distribution of overpressure is a critical issue in exploration and reservoir engineering concepts, as well as drilling and completion operations. This project investigates the relationship between the effective stress and porosity in the shales of the Productive Series and how it is affected by the shale volume. Two disequilibrium compaction models, one proposed by Aplin et.al. (1995), and the second by Schneider et. al.  (1994) were tested in the SCB for the first time.',
                industry: 'Geology & Geophysics',
                service: '',
                link: 'Geology & Geophysics',
                image: 'assets/images/projects/project4image.jpg',
                photo: ''
            },
            {
                id: 1,
                author: 'eiLink',
                cover: 'assets/images/projects/project5.png',
                header: 'assets/images/projects/project5.png',
                date: '1 September 2019',
                title: 'Estimation of sweep efficiency: Analogous rocks of Yasamal valley to north flank DWG',
                description: 'Estimation of the recovery factor from structurally deformed areas is a challenging process due to the high number of unknown parameters. These features are of subseismic scale, which are usually observed in sandstones and tend to deteriorate rock properties.\n\n The goal is to build a 3D simulation model of the Yasamal sandstone layer with the distribution of deformation bands and evaluate their impact on fluid flow, recovery factor, and percentage of poorly swept grid cells. This approach is recognized as valid since the rocks of Yasamal Valley’s outcrops are accepted as analogous to the formations of offshore fields in the South Caspian Basin. Patterns of deformation bands are met at the East Limb of Yasamal structure, which was the main target area during the study.\n\n Quantifying the impact of deformed rocks is very significant in estimating overall sweep efficiency as well as interpreting dynamic parameter behaviour.',
                industry: 'Reservoir Modelling',
                service: '',
                link: 'Reservoir Modelling',
                image: 'assets/images/projects/project5image.jpg',
                photo: 'assets/images/projects/project5photo.jpg'
            },
            {
                id: 2,
                author: 'eiLink',
                cover: 'assets/images/projects/project3.png',
                header: 'assets/images/projects/project3header.png',
                date: '10 April 2022',
                title: 'Water supply for irrigation in Padarchol area: assessment of rainwater and groundwater potential',
                description: 'The framework of the project was to solve the problem of irrigation in the Hajigabul irrigation area by evaluating subsurface freshwater reserves potential and the use of runoff water from surface flooding events.\n\n The projects’ objectives were the analysis of the soil and climate characteristics in terms of agriculture and surface water resources, using Geographical Information Systems and climate and precipitation intensity data of the last 40 years of the Hajigabul-Padarchol agricultural area, and the preliminary analysis of surface flows and flood events formed in the mountainous area. It consists of research work on the preparation of a 3D simulation model, the preliminary analysis of groundwater and the study of irrigation potential. The groundwater potential of the area was investigated considering the geological background of the surrounding area and logging data from several exploration wells available near the target area.\n\n Significant water reserves have been found in depths below 300 meters. The water due to the geological setting is considered saline and unconfined, so the new well drilling, water extraction using pumps and desalination costs have been estimated. The chemical content of the runoff water coming from the nearby mud volcano is considered unsafe to use for irrigation purposes, and it is proposed to redirect the channels coming from that area, which will increase the productivity of the actual irrigation lands. A 3D topographical model, as well as a flooding event simulation, have been created by the BSU researchers. The amount of average rain precipitation has been estimated and forecasted with detailed probability statistics. With water collected from flooding, 150 hectares of arable land can be provided with irrigation water. In order to collect rainwater, 5–6 ponds with a useful volume of 120–180 thousand cubic meters each should be created. A system of catchment canals with a total length of 80 km should be established to direct rainwater to the ponds. Considering the geometry of the land, the flood water management map has been created.',
                industry: 'Computational Fluid Dynamics',
                service: '',
                link: 'Computational Fluid Dynamics',
                image: 'assets/images/projects/project3image.png',
                photo: 'assets/images/projects/project3photo.png'
            },
            {
                id: 3,
                author: 'eiLink',
                cover: 'assets/images/projects/project7.jpg',
                header: 'assets/images/projects/project7header.png',
                date: '28 June 2021',
                title: 'Pre-Stack Seismic inversion based on Continuous Wavelet Transform Processing and Deep Neural Network',
                description: 'The main purpose of this study was to develop a methodology to generate a 3D volume of Gamma Ray data for Azeri and Chirag with a resolution approaching the real GR tool readings. To optimize the proposed approach, sensitivity analyses were performed on the Convolutional Neural Network (CNN) architecture (configuration) and on the parameters of the Continuous Wavelet Transform (CWT) operation applied to seismic reflectivity traces. Before final implementation, the quality of the GR predictions was verified at all wells by using the k-fold cross validation principle on the whole database. The novelty of the proposed method was using the pre-stack seismic data in the context of regression within functional CNN, accounting for the specific parametrization.\n\n The proposed methodology used 132 deviated wells from the Azeri and Chirag parts of the Azeri – Chirag – Gunashli field in the South Caspian Basin as training data. Blind tests show promising Gamma Ray predictions.\n\n The predicted GR cube could be used to determine the optimal well placement and more accurate reservoir modeling.',
                industry: 'Geology & Geophysics',
                service: '',
                link: 'Geology & Geophysics',
                image: 'assets/images/projects/project7image.jpg',
                photo: ''
            },
            {
                id: 4,
                author: 'eiLink',
                cover: 'assets/images/projects/project.jpg',
                header: 'assets/images/projects/projectheader.png',
                date: '1 August 2021',
                title: 'Estimation of water salinity distribution for ShahDeniz field',
                description: 'Formation of water salinity is important for understanding the hydrodynamic system in a sedimentary basin, including areas of hydraulic communication and isolation, and has implications for the prediction of formation pressure, characterization of hydrocarbon migration pathways, and estimating the risk of a trap being flushed. An unknown mechanism of formation water salinity distribution in Shahdeniz creates challenges from several aspects, as it impacts log resistivity readings, which results in erroneous saturation estimations. Among existing methods of predicting salinity, the most effective is a direct measurement of water resistivity or brine chemistry analysis. The pitfall of these methods is that they require core extraction from a well. Our product is able to predict formation water salinity using the available well data, as well as to understand the mechanism of salinity distribution and impacting factors like rock mineralogy, impact of ultra-dispersed particles (UDP), capillary pressure, dynamic disequilibrium, etc.',
                industry: 'Data Science',
                service: 'Image Recognition',
                link: 'Data Science',
                image: '',
                photo: ''
            },
            {
                id: 5,
                author: 'eiLink',
                cover: 'assets/images/projects/project1.png',
                header: 'assets/images/projects/project1header.png',
                date: '1 March 2022',
                title: 'Prediction of Drilling risks (wellbore instability, losses, stuck pipes) using numerical techniques',
                description: 'Several types of challenges take place during drilling that include wellbore instability, stuck pipe, fluid losses, etc. Reasons associated with these problems are understood to some degree on a qualitative level, but it is unclear in which conditions the combination of different drilling and rock parameters results in a drilling issue. Additionally, no tool exists that can predict the risks prior to drilling. The goal of the project was to create a tool that can analyze all drilling parameters (ROP, RPM, PRESSPIPE, etc.) in combination with rock properties (V-shale, DEN) and PPFG data ( pore pressure, fracture pressure) and give a prediction of the probability of risk occurrence.',
                industry: '',
                service: '',
                link: '',
                image: '',
                photo: ''
            },
            {
                id: 6,
                author: 'eiLink',
                cover: 'assets/images/projects/project6.jpg',
                header: 'assets/images/projects/project6header.png',
                date: '3 October 2022',
                title: 'Yasamal Outcrop Study',
                description: 'It is common during field development that certain areas of the structure, while containing appreciable oil and gas reserves, are complicated and negatively affected by certain geological features. Sometimes, vital information regarding reservoir properties and characterization is difficult or impossible to obtain from these regions for various reasons, which may include:\n\n 1. The scale of these geological features is below conventional well log resolution, requiring complex core acquisition or other expensive petrophysical techniques.\n 2. Drilling these geological regions is too expensive for the uncertainty associated with the reservoir properties degradation caused by these geological features.\n 3. The spatial distribution of such geological features is too complex to understand and design an economically viable field development plan.\n\n In the scenarios mentioned above, outcrop analog studies may help significantly enhance the subsurface understanding and help build a successful field development strategy. They can serve as a starting point toward characterization of reservoirs without spending much money on expensive data acquisition and surveillance.\n\n In the Deep Water Gunashli (DWG) oil field, the complex, steeply dipping northern limb of the structure has historically been underdeveloped due to the presence of severe reservoir properties degradation associated with deformation bands. Recently, an appraisal campaign has been launched to understand the reservoir potential in this area. The vital part of this campaign was the Yasamal Analogue Outcrop Study done by the eiLink Team.\n\n The objective of the outcrop study during the first phase of the project was to acquire abundant geological information, including:\n\n 1. Dip angle/dip azimuth measurements along and across the stratigraphy using a field compass.\n 2. Distribution and number of deformation bands per unit area.\n 3. Gamma Ray log across the stratigraphy using a portable Gamma Ray tool.\n 4. Permeability measurements from deformed and undeformed rocks using portable permeameters.\n 5. Collection of numerous core plugs was acquired for further XRD analysis using a portable core acquisition tool.\n\n Then, during the second phase of the project, the focus was to QC the acquired data and use it to come up with an essential geological analysis. The main objective was to observe what controls the presence and distribution of deformation bands in the outcrops. Finally, a similar analysis was made using subsurface data acquired from wells drilled in similar geological settings within the DWG structure with the aim to compare observations between outcrop and subsurface data.\n\n To achieve the above-mentioned objectives, the acquisition of data was done, ensuring the most representative data was acquired. For instance, only steeply dipping regions of the outcrop were chosen as study locations, where data was mainly acquired along stratigraphy to mimic the subsurface setting. Prior to acquiring the data, the outcrop was cleaned from dust and other undesirable material to ensure accuracy. The tools were calibrated such that no errors were made due to tools reading inadequate information.\n\n The impact of this project was that vital geological insights and conclusions were drawn and used for the future reservoir characterization of the steeply dipping North Limb of the DWG structure. For instance, it was observed that there is a cut-off value of the Vshale derived from the GR log, indicating the presence of deformation bands as a function of shale content. Also, there is a good relationship between dip angle (which can be viewed as a proxy for how much deformation rocks have been exposed to) and the distribution of deformation bands per unit area. Finally, it was observed that broadly, the conclusions drawn in the outcrop environment honor the subsurface data from wells drilled in this part of the DWG area.',
                industry: 'Geology & Geophysics',
                service: '',
                link: 'Geology & Geophysics',
                image: 'assets/images/projects/project4image.jpg',
                photo: ''
            },
            {
                id: 7,
                author: 'eiLink',
                cover: 'assets/images/projects/project2.png',
                header: 'assets/images/projects/project2header.png',
                date: '3 October 2022',
                title: 'Annuli monitoring',
                description: 'Sustained casing pressure (SCP), defined as excessive casing pressure that constantly rebuilds after bleed-down, is undesirable and sometimes potentially dangerous for producing wells. It is a complicated phenomenon which cannot be described only with annulus pressure build-ups without integrated analysis of other parameters.\n\n We developed a tool to improve monitoring of annulus pressures and detection of build-ups with minimum input by engineers. The tool allows engineers to easily separate build-up events caused by downhole pressure and temperature effects and to pay more attention to specific problematic ones. In order to determine the relationship between different parameters, Pearson’s correlation coefficient has been used.\n\n In addition, the tool also demonstrates the relationship between downhole pressure of Cutting Re-Injection wells and B and C annuli of oil producing wells.\n\nOur tool minimizes the work done by engineers by giving information about potential build-ups for different time periods and increases success for well integrity with improved monitoring and detection. It reduces analysis time and makes it possible to track and analyze around 200 well annulus pressure measurements simultaneously.',
                industry: 'Drilling & Well Integrity',
                service: 'Image Recognition',
                link: 'Drilling & Well Integrity',
                image: 'assets/images/projects/project2image.png',
                photo: ''
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
                name: 'Computational Geophysicist | WAVERITY',
                location: 'Baku, Azerbaijan',
                link: 'https://forms.clickup.com/31136212/f/xp6em-2063/CHWZG24AES9N9RKYY2'
            },
            {
                id: 1,
                name: 'Applied Geophysicist | WAVERITY',
                location: 'Baku, Azerbaijan',
                link: 'https://forms.clickup.com/31136212/f/xp6em-2043/Q76I6XXGNLR85331PB'
            },
            {
                id: 2,
                name: 'Geophysicist (Interpreter) | WAVERITY',
                location: 'Baku, Azerbaijan',
                link: 'https://forms.clickup.com/31136212/f/xp6em-2103/2ZSD4244VIBM9LPBZK'
            },
            {
                id: 3,
                name: 'Signal Processing Engineer | WAVERITY',
                location: 'Baku, Azerbaijan',
                link: 'https://forms.clickup.com/31136212/f/xp6em-2083/6SPI1CAZ1OXL2MMW4J'
            },
            {
                id: 4,
                name: 'Advanced Data Science | WAVERITY',
                location: 'Baku, Azerbaijan',
                link: 'https://forms.clickup.com/31136212/f/xp6em-2023/FPZ380T896T54I8HRR'
            },
            {
                id: 5,
                name: 'Applied Geologist | WAVERITY',
                location: 'Baku, Azerbaijan',
                link: 'https://forms.clickup.com/31136212/f/xp6em-1983/7SXHYOXA3LNHX0UC2D'
            },
            {
                id: 6,
                name: 'Well Planner | WAVERITY',
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