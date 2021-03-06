export interface IConsultant {
  __v: number;
  _id: string;
  bloodGroup: string;
  bmdcNumber: string;
  consultationFee: number;
  degrees: string[];
  eligibility: string;
  email: string;
  followUpFee: number;
  isVerifiedDoctor: string;
  location: string;
  name: string;
  password: string;
  phoneNumber: string;
  profilePic: string;
  role: string[];
  speciality: string[];
  totalExperienceYears: number;
}
//

export const availableConsultants: IConsultant[] = [
  {
    __v: 0,
    _id: '6125f640d133c40016e41003',
    bloodGroup: 'O+',
    bmdcNumber: '98752',
    consultationFee: 1500,
    degrees: ['MBBS'],
    eligibility: 'Not Eligible',
    email: 'doctor1@email.com',
    followUpFee: 1300,
    isVerifiedDoctor: 'Verified',
    location: 'Dhaka',
    name: 'Shihab Shohaul',
    password: '$2b$12$vlOIAO4ysPnZTl4PtYpx5.vw1hjhakopbwvhZPFW0gBYkEUhXnNHy',
    phoneNumber: '1234567890',
    profilePic:
      'https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg?size=626&ext=jpg',
    role: ['donor', 'doctor'],
    speciality: ['Cardiac'],
    totalExperienceYears: 9,
  },
  {
    __v: 0,
    _id: '61260b10d415bd0016db8126',
    bloodGroup: 'A+',
    bmdcNumber: '54321',
    consultationFee: 800,
    degrees: ['MBBS'],
    eligibility: 'Not Eligible',
    email: 'doctor2@email.com',
    followUpFee: 600,
    isVerifiedDoctor: 'Verified',
    location: 'Faridpur',
    name: 'Swfit Taylor',
    password: '$2b$12$KAQ2PtAyjTw.E00vHGfJXeM6.mO4VGQ3vcQfoWUJFDlcxoozPNSC2',
    phoneNumber: '1234567890',
    profilePic:
      'https://media.istockphoto.com/photos/portrait-of-confident-young-medical-doctor-on-blue-background-picture-id1161336374?k=20&m=1161336374&s=612x612&w=0&h=ER2Gs06udn4kBPUy8SwLQR2su0GsRWe0kRHZvDbcQCc=',
    role: ['donor', 'doctor'],
    speciality: ['Heart', 'Cardiologist'],
    totalExperienceYears: 6,
  },
  {
    __v: 0,
    _id: '612751e41268b800166bbf34',
    bloodGroup: 'A+',
    bmdcNumber: '12345',
    consultationFee: 1500,
    degrees: ['MBBS'],
    eligibility: 'eligible',
    email: 'doc3@saveme.com',
    followUpFee: 1000,
    isVerifiedDoctor: 'Verified',
    location: 'Dhaka',
    name: 'Mr. Infinity',
    password: '$2b$12$Kp8jNmhhA1.2ARRpxn6zJ.R10dbPL0enyPSSzh5NRm/u7AH7cv9Da',
    phoneNumber: '123',
    profilePic:
      'https://media.istockphoto.com/photos/portrait-of-a-male-doctor-picture-id1342708859?b=1&k=20&m=1342708859&s=170667a&w=0&h=Q_F0jKkxXNlRb5wkDbeEaIrr6pQp8aDDdzRjvN6XmQU=',
    role: ['donor', 'doctor'],
    speciality: ['Cardiac'],
    totalExperienceYears: 12,
  },
  {
    __v: 0,
    _id: '6127c0f697e42600169321c8',
    bloodGroup: 'O+',
    bmdcNumber: '2365545',
    consultationFee: 1000,
    degrees: ['FCPS', 'MBBS'],
    eligibility: 'Eligible',
    email: 'shahin_bolda@gmail.com',
    followUpFee: 800,
    isVerifiedDoctor: 'Verified',
    location: 'Dhaka',
    name: 'Mr. Shahin',
    password: '$2b$12$NhVE0.bpi6KBYUVOK6Ip1..VhiERiv0d3oTlIZUyGW0jTse4i.1HW',
    phoneNumber: '+8801234567890',
    profilePic:
      'https://img.freepik.com/free-photo/beautiful-doctor-pointing-fingers_1258-16474.jpg?size=626&ext=jpg&ga=GA1.1.2112874067.1642032000',
    role: ['donor', 'doctor'],
    speciality: ['Cardiac', 'Heart'],
    totalExperienceYears: 5,
  },
];

// export const availableConsultants = (): IConsultant[] => {
//   return [
//     {
//       id: 1,
//       name: 'harry',
//       isOnline: true,
//       profilePic: '',
//       bio: '',
//       special: ['eye'],
//       consultationFee: 200,
//       followUpFee: 100,
//       degrees: ['MBBS', 'FCPS'],
//       rating: 5,
//       conversations: '',
//       communication: [],
//     },
//     {
//       id: 2,
//       name: 'harry',
//       isOnline: true,
//       profilePic: '',
//       bio: '',
//       special: ['eye'],
//       consultationFee: 200,
//       followUpFee: 100,
//       degrees: ['MBBS', 'FCPS'],
//       rating: 5,
//       conversations: '',
//       communication: [],
//     },
//     {
//       id: 3,
//       name: 'harry',
//       isOnline: true,
//       profilePic: '',
//       bio: '',
//       special: ['eye'],
//       consultationFee: 200,
//       followUpFee: 100,
//       degrees: ['MBBS', 'FCPS'],
//       rating: 5,
//       conversations: '',
//       communication: [],
//     },
//     {
//       id: 4,
//       name: 'harry',
//       isOnline: true,
//       profilePic: '',
//       bio: '',
//       special: ['eye'],
//       consultationFee: 200,
//       followUpFee: 100,
//       degrees: ['MBBS', 'FCPS'],
//       rating: 5,
//       conversations: '',
//       communication: [],
//     },
//   ];
// };
