import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { formatDate } from '@angular/common';

export class EmployeeService{
    private listEmployees: Employee[] = [
        {
            id: 1,
            name: 'Kotesh',
            gender: 'Male',
            contactPreference: 'Email',
            email: 'koteswararao.maraka@gmail.com',
            phonenumber:9916970052,
            dateOfBirth: new Date (formatDate('26/10/1979', 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530')); 
            department: 'IT',
            isActive: true,
            photoPath: 'assets/images/Kotesh.jpg',
        }, 
        {
              id: 2,
              name: 'Kalyani',
              gender: 'Female',
              contactPreference: 'Email',
              email: 'koteswararao.maraka@gmail.com',
              phonenumber:9916970052,
              dateOfBirth: new Date ('30/03/1985'),
              department: 'HR',
              isActive: true,
              photoPath: 'assets/images/Kalyani.jpg',
        },
        {
              id: 3,
              name: 'Nikhil',
              gender: 'Male',
              contactPreference: 'Email',
              email: 'nikhilsaivardhan.maraka@gmail.com',
              phonenumber:9916970052,
              dateOfBirth: new Date ('23/01/2017'),
              department: 'IT',
              isActive: true,
              photoPath: 'assets/images/Nikhil.JPG',
        },
    ];

    getEmployees(): Employee[] {
        return this.listEmployees;
    }

    save(employee: Employee){
        this.listEmployees.push(employee);
    }
}