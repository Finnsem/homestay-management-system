import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomestayService {
  
  addHomestay(homestayData: any): Observable<any> {
    // Make a POST request to add a homestay
    return this.http.post<any>('http://localhost:8080/homestay/add', homestayData);
  }
  addowner(ownerData: any): Observable<any> {
    // Make a POST request to add a homestay
    return this.http.post<any>('http://localhost:8080/owner/add', ownerData);
  }
  addBooking(bookingData: any): Observable<any> {
    // Make a POST request to add a homestay
    return this.http.post<any>('http://localhost:8080/booking/add', bookingData);
  }
  constructor(private http: HttpClient) { }

  getHomestays(): Observable<any[]> {
    // Update the URL to fetch data from http://localhost:8080/homestay
    return this.http.get<any[]>('http://localhost:8080/homestay');
  }

  getbooking(): Observable<any[]> {
    // Update the URL to fetch data from http://localhost:8080/homestay
    return this.http.get<any[]>('http://localhost:8080/booking');
  }
  getHomestay(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/homestay/${id}`);
  }
  getOwner(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/owner/${id}`);
  }
  getBooking(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/booking/${id}`);
  }
  getowner(): Observable<any[]> {
    // Update the URL to fetch data from http://localhost:8080/homestay
    return this.http.get<any[]>('http://localhost:8080/owner');
  }

  deleteHomestay(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/homestays/del/${id}`);
  }

  deletebooking(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/booking/del/${id}`);
  }
  deleteowner(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/owner/del/${id}`);
  }
  updateHomestay(id: number, homestayData: any): Observable<any> {
    // Make a PUT request to update a homestay
    return this.http.put<any>(`http://localhost:8080/homestay/update/${id}`, homestayData);
  }
  updateowner(id: number, ownerData: any): Observable<any> {
    // Make a PUT request to update a homestay
    return this.http.put<any>(`http://localhost:8080/owner/update/${id}`, ownerData);
  }
  updatebooking(id: number, bookingData: any): Observable<any> {
    // Make a PUT request to update a homestay
    return this.http.put<any>(`http://localhost:8080/booking/update/${id}`, bookingData);
  }
}
