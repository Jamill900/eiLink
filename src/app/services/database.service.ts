import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/project';
import { Publication } from '../interfaces/publication';
import { Career } from '../interfaces/career';

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    constructor(private http: HttpClient) { }

    private projectsUrl = 'api/projects';
    private publicationsUrl = 'api/publications';
    private careersUrl = 'api/careers';

    getProjects(): Observable<Project[]> {
        return this.http.get<Project[]>(this.projectsUrl);
    }

    getProjectById(id: number): Observable<Project> {
        const url = `${this.projectsUrl}/${id}`;
        return this.http.get<Project>(url)
    }

    getPublications(): Observable<Publication[]> {
        return this.http.get<Publication[]>(this.publicationsUrl);
    }

    getPublicationById(id: number): Observable<Publication> {
        const url = `${this.publicationsUrl}/${id}`;
        return this.http.get<Publication>(url);
    }

    getCareers(): Observable<Career[]> {
        return this.http.get<Career[]>(this.careersUrl);
    }
}
