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
                authors: '',
                cover: 'assets/images/oil1.gif',
                date: '25 February 2022',
                title: 'The first product of WAVERITY: Seismic Image Quality Enhancement (S.I.Q.E.)',
                link: ''
            },
            {
                id: 2,
                authors: '',
                cover: 'assets/images/oil1.gif',
                date: '25 February 2022',
                title: 'The first product of WAVERITY: Seismic Image Quality Enhancement (S.I.Q.E.)',
                link: ''
            },
            {
                id: 3,
                authors: '',
                cover: 'assets/images/oil1.gif',
                date: '25 February 2022',
                title: 'The first product of WAVERITY: Seismic Image Quality Enhancement (S.I.Q.E.)',
                link: ''
            },
            {
                id: 4,
                authors: '',
                cover: 'assets/images/oil1.gif',
                date: '25 February 2022',
                title: 'The first product of WAVERITY: Seismic Image Quality Enhancement (S.I.Q.E.)',
                link: ''
            },
            {
                id: 5,
                authors: '',
                cover: 'assets/images/oil1.gif',
                date: '25 February 2022',
                title: 'The first product of WAVERITY: Seismic Image Quality Enhancement (S.I.Q.E.)',
                link: ''
            }
        ];

        let careers = [
            {
                id: 1,
                title: 'The first product of WAVERITY: Seismic Image Quality Enhancement (S.I.Q.E.)',
                location: '',
                cover: 'assets/images/oil1.gif',
                description: '25 February 2022',
                link: ''
            },
            {
                id: 2,
                title: 'The first product of WAVERITY: Seismic Image Quality Enhancement (S.I.Q.E.)',
                location: '',
                cover: 'assets/images/oil1.gif',
                description: '25 February 2022',
                link: ''
            },
            {
                id: 3,
                title: 'The first product of WAVERITY: Seismic Image Quality Enhancement (S.I.Q.E.)',
                location: '',
                cover: 'assets/images/oil1.gif',
                description: '25 February 2022',
                link: ''
            },
            {
                id: 4,
                title: 'The first product of WAVERITY: Seismic Image Quality Enhancement (S.I.Q.E.)',
                location: '',
                cover: 'assets/images/oil1.gif',
                description: '25 February 2022',
                link: ''
            },
            {
                id: 5,
                title: 'The first product of WAVERITY: Seismic Image Quality Enhancement (S.I.Q.E.)',
                location: '',
                cover: 'assets/images/oil1.gif',
                description: '25 February 2022',
                link: ''
            }
        ];

        return { projects, publications, careers };
    }
}