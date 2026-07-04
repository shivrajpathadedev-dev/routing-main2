import { Injectable } from '@angular/core';
import { Iuser } from '../models/user';
import { IFairs } from '../models/fairs';
import { Observable, of } from 'rxjs';
import { Iproduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class FairsService {
fairsArr: Array<IFairs> = [
  {
    fairId: '84b91d7ecc2df30020b2f101',
    fairName: 'Global Education Expo - Toronto',
    startDate: 1704067200,
    endDate: 1704240000,
    timezoneId: 'Eastern Standard Time',
    location: {
      addressOne: 'Metro Toronto Convention Centre',
      addressTwo: '255 Front Street West',
      city: 'Toronto',
      state: 'Ontario',
      country: 'Canada',
      zip: 'M5V 2W6'
    },
    numberOfUsersRegistered: 145,
    numberOfSchoolsRegistered: 72,
    isCandidateRegistered: true,
    bannerUrl: 'https://images.unsplash.com/photo-1517935706615-2717063c2225',
    showRegisteredUsersToCandidate: true,
    showRegisteredUsersToSchools: true,
    showRegisteredSchoolsToCandidate: true,
    showRegisteredSchoolsToSchools: false,
    fairStatus: 'published',
    fairStartTime: '9:00 AM',
    fairEndTime: '5:00 PM',
    type: 'InPerson',
    candidateDescription:
      '<p>Meet Canadian and international schools hiring experienced educators.</p>',
    schoolDescription:
      '<p>Connect with qualified teaching professionals from across the globe.</p>'
  },

  {
    fairId: '84b91d7ecc2df30020b2f102',
    fairName: 'Berlin International Career Fair',
    startDate: 1706745600,
    endDate: 1706918400,
    timezoneId: 'Central European Standard Time',
    location: {
      addressOne: 'Berlin Congress Center',
      addressTwo: 'Alexanderstraße 11',
      city: 'Berlin',
      state: 'Berlin',
      country: 'Germany',
      zip: '10178'
    },
    numberOfUsersRegistered: 98,
    numberOfSchoolsRegistered: 51,
    isCandidateRegistered: false,
    bannerUrl: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b',
    showRegisteredUsersToCandidate: false,
    showRegisteredUsersToSchools: true,
    showRegisteredSchoolsToCandidate: true,
    showRegisteredSchoolsToSchools: true,
    fairStatus: 'published',
    fairStartTime: '10:00 AM',
    fairEndTime: '4:30 PM',
    type: 'InPerson',
    candidateDescription:
      '<p>Explore career opportunities with leading European international schools.</p>',
    schoolDescription:
      '<p>Recruit highly qualified teachers and administrators.</p>'
  },

  {
    fairId: '84b91d7ecc2df30020b2f103',
    fairName: 'Asia Virtual Recruitment Fair',
    startDate: 1709424000,
    endDate: 1709424000,
    timezoneId: 'Singapore Standard Time',
    location: null,
    numberOfUsersRegistered: 210,
    numberOfSchoolsRegistered: 88,
    isCandidateRegistered: true,
    bannerUrl: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d',
    showRegisteredUsersToCandidate: true,
    showRegisteredUsersToSchools: false,
    showRegisteredSchoolsToCandidate: true,
    showRegisteredSchoolsToSchools: false,
    fairStatus: 'published',
    fairStartTime: '11:00 AM',
    fairEndTime: '3:00 PM',
    type: 'Virtual',
    candidateDescription:
      '<p>Attend Asia’s largest online recruitment event from anywhere.</p>',
    schoolDescription:
      '<p>Interview talented educators using our virtual hiring platform.</p>'
  },

  {
    fairId: '84b91d7ecc2df30020b2f104',
    fairName: 'Paris Education Fair',
    startDate: 1712016000,
    endDate: 1712188800,
    timezoneId: 'Central European Standard Time',
    location: {
      addressOne: 'Palais des Congrès',
      addressTwo: '2 Place de la Porte Maillot',
      city: 'Paris',
      state: 'Île-de-France',
      country: 'France',
      zip: '75017'
    },
    numberOfUsersRegistered: 84,
    numberOfSchoolsRegistered: 39,
    isCandidateRegistered: false,
    bannerUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34',
    showRegisteredUsersToCandidate: false,
    showRegisteredUsersToSchools: true,
    showRegisteredSchoolsToCandidate: true,
    showRegisteredSchoolsToSchools: true,
    fairStatus: 'draft',
    fairStartTime: '8:30 AM',
    fairEndTime: '4:00 PM',
    type: 'InPerson',
    candidateDescription:
      '<p>Meet top schools from France and neighboring countries.</p>',
    schoolDescription:
      '<p>Hire passionate educators for international teaching positions.</p>'
  },

  {
    fairId: '84b91d7ecc2df30020b2f105',
    fairName: 'Tokyo Online Teacher Fair',
    startDate: 1714608000,
    endDate: 1714608000,
    timezoneId: 'Tokyo Standard Time',
    location: null,
    numberOfUsersRegistered: 182,
    numberOfSchoolsRegistered: 63,
    isCandidateRegistered: true,
    bannerUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
    showRegisteredUsersToCandidate: true,
    showRegisteredUsersToSchools: true,
    showRegisteredSchoolsToCandidate: false,
    showRegisteredSchoolsToSchools: false,
    fairStatus: 'published',
    fairStartTime: '9:30 AM',
    fairEndTime: '2:30 PM',
    type: 'Virtual',
    candidateDescription:
      '<p>Join Japan’s premier virtual recruitment event for teachers.</p>',
    schoolDescription:
      '<p>Connect with experienced educators through live online interviews.</p>'
  },

  {
    fairId: '84b91d7ecc2df30020b2f106',
    fairName: 'Cape Town International Fair',
    startDate: 1717286400,
    endDate: 1717459200,
    timezoneId: 'South Africa Standard Time',
    location: {
      addressOne: 'Cape Town International Convention Centre',
      addressTwo: '1 Lower Long Street',
      city: 'Cape Town',
      state: 'Western Cape',
      country: 'South Africa',
      zip: '8001'
    },
    numberOfUsersRegistered: 112,
    numberOfSchoolsRegistered: 55,
    isCandidateRegistered: false,
    bannerUrl: 'https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8b',
    showRegisteredUsersToCandidate: true,
    showRegisteredUsersToSchools: false,
    showRegisteredSchoolsToCandidate: true,
    showRegisteredSchoolsToSchools: true,
    fairStatus: 'published',
    fairStartTime: '8:00 AM',
    fairEndTime: '5:00 PM',
    type: 'InPerson',
    candidateDescription:
      '<p>Discover teaching opportunities in Africa and beyond.</p>',
    schoolDescription:
      '<p>Meet talented educators from diverse international backgrounds.</p>'
  }
];
  constructor() { }

 fetchFairsArr(): Observable<IFairs[]> {
    return of(this.fairsArr)
  }

  fetchFairsId(id:string):Observable<IFairs>{
    let fairs=this.fairsArr.find(t=>t.fairId===id)!;
    return of(fairs)
  }
}
