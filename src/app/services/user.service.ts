import { Injectable } from '@angular/core';
import { Iresuser, Iuser } from '../models/user';
import { Observable, of } from 'rxjs';
import { Iproduct, IresProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class UserService {
UsersDetails: Array<Iuser> = [
  {
    userName: 'Aarav Mehta',
    userId: 'EMP101',
    userRole: 'Frontend Developer',
    profileDescription: '4 years of experience in Angular, TypeScript, and responsive web development.',
    profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    skills: ['Angular', 'TypeScript', 'RxJS', 'Bootstrap'],
    experienceYears: '3 to 5 years',
    isActive: true,
    address: {
      current: {
        city: 'Pune',
        state: 'Maharashtra',
        country: 'India',
        zipcode: '411001'
      },
      permanent: {
        city: 'Nashik',
        state: 'Maharashtra',
        country: 'India',
        zipcode: '422001'
      }
    },
    isAddSame: false
  },
  {
    userName: 'Ananya Kulkarni',
    userId: 'EMP102',
    userRole: 'UI/UX Developer',
    profileDescription: 'Passionate UI developer with expertise in Angular Material and SCSS.',
    profileImage: 'https://randomuser.me/api/portraits/women/44.jpg',
    skills: ['Angular', 'SCSS', 'HTML', 'CSS'],
    experienceYears: '2 to 4 years',
    isActive: true,
    address: {
      current: {
        city: 'Mumbai',
        state: 'Maharashtra',
        country: 'India',
        zipcode: '400001'
      },
      permanent: {
        city: 'Ratnagiri',
        state: 'Maharashtra',
        country: 'India',
        zipcode: '415612'
      }
    },
    isAddSame: true
  },
  {
    userName: 'Vivaan Sharma',
    userId: 'EMP103',
    userRole: 'Angular Developer',
    profileDescription: 'Experienced in Angular applications, REST APIs, and performance optimization.',
    profileImage: 'https://randomuser.me/api/portraits/men/65.jpg',
    skills: ['Angular', 'REST API', 'JavaScript', 'Git'],
    experienceYears: '5 to 7 years',
    isActive: false,
    address: {
      current: {
        city: 'Bengaluru',
        state: 'Karnataka',
        country: 'India',
        zipcode: '560001'
      },
      permanent: {
        city: 'Mysuru',
        state: 'Karnataka',
        country: 'India',
        zipcode: '570001'
      }
    },
    isAddSame: false
  },
  {
    userName: 'Ishita Verma',
    userId: 'EMP104',
    userRole: 'Team Lead',
    profileDescription: 'Leading Angular development teams with strong knowledge of RxJS and NgRx.',
    profileImage: 'https://randomuser.me/api/portraits/women/68.jpg',
    skills: ['Angular', 'RxJS', 'NgRx', 'Leadership'],
    experienceYears: '7 to 10 years',
    isActive: true,
    address: {
      current: {
        city: 'Hyderabad',
        state: 'Telangana',
        country: 'India',
        zipcode: '500001'
      },
      permanent: {
        city: 'Warangal',
        state: 'Telangana',
        country: 'India',
        zipcode: '506002'
      }
    },
    isAddSame: true
  },
  {
    userName: 'Rohan Nair',
    userId: 'EMP105',
    userRole: 'Full Stack Developer',
    profileDescription: 'Full Stack Developer with expertise in Angular, Node.js, and MongoDB.',
    profileImage: 'https://randomuser.me/api/portraits/men/48.jpg',
    skills: ['Angular', 'Node.js', 'MongoDB', 'Express'],
    experienceYears: '4 to 6 years',
    isActive: false,
    address: {
      current: {
        city: 'Chennai',
        state: 'Tamil Nadu',
        country: 'India',
        zipcode: '600001'
      },
      permanent: {
        city: 'Kochi',
        state: 'Kerala',
        country: 'India',
        zipcode: '682001'
      }
    },
    isAddSame: false
  },
  {
    userName: 'Kavya Reddy',
    userId: 'EMP106',
    userRole: 'Project Manager',
    profileDescription: 'Project Manager with experience in Agile methodology and software delivery.',
    profileImage: 'https://randomuser.me/api/portraits/women/90.jpg',
    skills: ['Agile', 'Scrum', 'Angular', 'Project Management'],
    experienceYears: '10+ years',
    isActive: true,
    address: {
      current: {
        city: 'Noida',
        state: 'Uttar Pradesh',
        country: 'India',
        zipcode: '201301'
      },
      permanent: {
        city: 'Lucknow',
        state: 'Uttar Pradesh',
        country: 'India',
        zipcode: '226001'
      }
    },
    isAddSame: true
  }
];
  constructor() { }

  fetchusersdata():Observable<Iuser[]>{
    return of (this.UsersDetails)
  }

  fetchuserId(id:string):Observable<Iuser>{
    let user=this.UsersDetails.find(t=>t.userId===id)!
    return of(user)
  }

  createuser(user:Iuser):Observable<Iresuser<Iuser>>{
    this.UsersDetails.push(user)
    return of({
      msg:`The user is added Successfully!`,
      data:user
    })
  }

  removeuser(users:string):Observable<IresProduct<Iuser>>{
    let get_index=this.UsersDetails.findIndex(t=>t.userId===users)
    let user=this.UsersDetails.splice(get_index,1)
    return of({
      msg:`The user ${user[0].userName} is removed successfully!!`,
      data:user[0]
    })
  }

  updateuser(users:Iuser):Observable<Iresuser<Iuser>>{
    let get_index=this.UsersDetails.findIndex(t=>t.userId===users.userId)
    this.UsersDetails[get_index]=users
    return of({
      msg:`The user ${users.userName} is updated successfully!!`,
      data:users
    })
  }
}
